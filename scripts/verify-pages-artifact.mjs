import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";

const distDir = "dist";
const requiredFiles = ["index.html", "404.html", ".nojekyll"];
const assetFileExtensions = /\.(css|js|mjs|png|jpe?g|webp|gif|svg|ico|avif|woff2?|ttf|otf|mp4|webm|json)$/i;
const allowedRootAssetPrefixes = ["/assets/", "/favicon.ico"];
const cssLikeExtensions = /\.css$/i;
const jsLikeExtensions = /\.(js|mjs)$/i;

const failures = [];

const fail = (message) => failures.push(message);

const isExternalOrInline = (value) =>
  /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(value) && !value.startsWith("//assets");

const normalizeReference = (value) => value.trim().replace(/^['"]|['"]$/g, "").split(/[?#]/)[0];

const distRoot = resolve(distDir);

const validateReference = (fromFile, rawValue, context) => {
  const value = normalizeReference(rawValue);

  if (!value || isExternalOrInline(value)) return;

  if (!assetFileExtensions.test(value)) return;

  if (value.startsWith("/") && !allowedRootAssetPrefixes.some((prefix) => value.startsWith(prefix))) {
    fail(`${fromFile}: ${context} uses unsupported root URL "${rawValue}".`);
    return;
  }

  const target = value.startsWith("/")
    ? resolve(distDir, value.slice(1))
    : resolve(distDir, dirname(fromFile), value);
  if (target !== distRoot && !target.startsWith(`${distRoot}/`)) {
    fail(`${fromFile}: ${context} escapes the build base with "${rawValue}".`);
    return;
  }

  if (!value.startsWith("/") && !target.startsWith(resolve(distDir, "assets") + "/")) {
    fail(`${fromFile}: ${context} resolves outside /assets with "${rawValue}".`);
    return;
  }

  if (!existsSync(target)) {
    fail(`${fromFile}: ${context} references missing asset "${rawValue}".`);
  }
};

const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });

if (!existsSync(distDir) || !statSync(distDir).isDirectory()) {
  fail("dist directory does not exist.");
} else {
  for (const file of requiredFiles) {
    if (!existsSync(join(distDir, file))) fail(`Missing required Pages artifact file: ${file}.`);
  }

  if (existsSync(join(distDir, "client", "index.html"))) {
    fail("Artifact is not flat: found dist/client/index.html after staging.");
  }

  if (existsSync(join(distDir, "index.html")) && existsSync(join(distDir, "404.html"))) {
    const indexHtml = readFileSync(join(distDir, "index.html"), "utf8");
    const notFoundHtml = readFileSync(join(distDir, "404.html"), "utf8");
    if (indexHtml !== notFoundHtml) fail("404.html must be an exact copy of index.html.");
  }

  for (const file of walk(distDir)) {
    const relFile = relative(distDir, file);
    const content = readFileSync(file, "utf8");

    if (/\.html$/i.test(file)) {
      for (const tagMatch of content.matchAll(/<(script|img|source|video|audio|track|iframe|embed|object)\b[^>]*>/gi)) {
        const tag = tagMatch[1].toLowerCase();
        const tagSource = tagMatch[0];
        for (const attrMatch of tagSource.matchAll(/\b(src|poster|data)=(['"])(.*?)\2/gi)) {
          validateReference(relFile, attrMatch[3], `<${tag}> ${attrMatch[1]}`);
        }
        for (const attrMatch of tagSource.matchAll(/\bsrcset=(['"])(.*?)\1/gi)) {
          for (const srcsetPart of attrMatch[2].split(",")) {
            validateReference(relFile, srcsetPart.trim().split(/\s+/)[0], `<${tag}> srcset`);
          }
        }
      }

      for (const linkMatch of content.matchAll(/<link\b[^>]*>/gi)) {
        const tagSource = linkMatch[0];
        const rel = tagSource.match(/\brel=(['"])(.*?)\1/i)?.[2]?.toLowerCase() ?? "";
        const href = tagSource.match(/\bhref=(['"])(.*?)\1/i)?.[2];
        const as = tagSource.match(/\bas=(['"])(.*?)\1/i)?.[2]?.toLowerCase() ?? "";
        if (href && (/stylesheet|icon|manifest|preload|modulepreload/.test(rel) || /script|style|image|font/.test(as))) {
          validateReference(relFile, href, "<link> href");
        }
      }
    }

    if (cssLikeExtensions.test(file) || jsLikeExtensions.test(file)) {
      for (const urlMatch of content.matchAll(/url\(\s*([^)]*?)\s*\)/gi)) {
        validateReference(relFile, urlMatch[1], "CSS url()");
      }

      for (const rootAssetMatch of content.matchAll(/(['"])(\/(?:assets|_build|images|src)\/[^'"]+)\1/gi)) {
        validateReference(relFile, rootAssetMatch[2], "root asset string");
      }

      if (jsLikeExtensions.test(file)) {
        for (const importMatch of content.matchAll(/import\(\s*(['"])(.*?)\1\s*\)/gi)) {
          validateReference(relFile, importMatch[2], "dynamic import");
        }
      }
    }
  }
}

if (failures.length > 0) {
  console.error("GitHub Pages artifact verification failed:\n");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log("GitHub Pages artifact verification passed.");