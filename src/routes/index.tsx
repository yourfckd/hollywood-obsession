import { createFileRoute } from "@tanstack/react-router";
import { Play, Star, Volume2 } from "lucide-react";
import logo from "/assets/creepy-logo.png";
import heroBanner from "@/assets/hero-banner.png";
import heroMobile from "@/assets/hero-mobile.jpg";
import footerDesktop from "@/assets/footer-desktop.jpg";
import cast1 from "/assets/cast1.jpg";
import cast2 from "/assets/cast2.jpg";
import cast3 from "/assets/cast3.jpg";
import cast4 from "/assets/cast4.jpg";
import finale from "/assets/finale.jpg";
import episode1 from "@/assets/episode1.jpg";
import episode2 from "@/assets/episode2.jpg";
import episode3 from "@/assets/episode3.jpg";
import episode4 from "@/assets/episode4.jpg";
import episode5 from "@/assets/episode5.jpg";
import episode6 from "@/assets/episode6.jpg";

const TRAILER_URL = "https://youtube.com/shorts/LkjwoUb0HZc?feature=share";

const episodes = [
  { num: 1, title: "Namasté in Her DMs", tagline: "The first message is always the beginning of something.", img: episode1 },
  { num: 2, title: "Hot Yoga, Cold Shoulder", tagline: "She's not ignoring you. You're just not the one.", img: episode2 },
  { num: 3, title: "The Erewhon Incident", tagline: "A $24 smoothie. A 45-minute wait. A lifetime of overanalyzing.", img: episode3 },
  { num: 4, title: "Operation: Accidental Encounter", tagline: "It's not stalking. It's fate. With a little planning.", img: episode4 },
  { num: 5, title: "Sunset Boulevard Surveillance", tagline: "You can run. But can you hide in LA?", img: episode5 },
  { num: 6, title: "Downward Dog, Upward Delusion", tagline: "The deeper the stretch, the further from reality.", img: episode6 },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CreepyStalkers: Hollywood — A Streaming Original" },
      { name: "description", content: "8 nerds. 1 city. Unlimited delusion. The mockumentary about Hollywood's most emotionally investigative men. Streaming now." },
      { property: "og:title", content: "CreepyStalkers: Hollywood" },
      { property: "og:description", content: "8 nerds. 1 city. Unlimited delusion. Streaming now." },
      { property: "og:image", content: heroBanner },
      { property: "og:type", content: "video.tv_show" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroBanner },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const cast = [
  { name: "Trevor", role: "The Analyst", img: cast1, stat: "Eye Contact Success Rate", val: "0.4%" },
  { name: "Eli", role: "The Biohacker", img: cast2, stat: "Mutual Delusion Index", val: "9.7 / 10" },
  { name: "Darren", role: "The Spiritual One", img: cast3, stat: "Avg. Investigation Duration", val: "147 days" },
  { name: "Kevin", role: "The Tactician", img: cast4, stat: "Emotional Damage Analytics", val: "Catastrophic" },
];

const reviews = [
  { quote: "Painfully realistic.", source: "The New Yorker", score: "98%" },
  { quote: "I've never been more uncomfortable.", source: "Vulture", score: "94%" },
  { quote: "Trevor needs professional help.", source: "Rolling Stone", score: "96%" },
  { quote: "This feels illegal but beautifully shot.", source: "IndieWire", score: "92%" },
  { quote: "The most emotionally devastating comedy series ever made.", source: "Variety", score: "99%" },
];

function Index() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* HERO — full-bleed cinematic banner */}
      <section className="relative w-full overflow-hidden bg-background">
        {/* Desktop hero */}
        <div className="relative hidden w-full sm:block" style={{ aspectRatio: "1536 / 1024" }}>
          <img
            src={heroBanner}
            alt="CreepyStalkers: Hollywood — A Stalkerville Original Docuseries"
            width={1536}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          {/* Soft edge vignette for responsiveness */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40" />

          {/* Invisible functional overlay buttons */}
          <a
            href={TRAILER_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Trailer"
            className="absolute cursor-pointer rounded-md opacity-0 transition-shadow duration-300 hover:opacity-100 hover:shadow-[0_0_40px_8px_oklch(0.6_0.25_25_/_0.55)] focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rec"
            style={{ left: "3.9%", top: "70.9%", width: "15%", height: "6.3%" }}
          >
            <span className="sr-only">Watch Trailer</span>
          </a>
          <button
            type="button"
            aria-label="Meet the Suspects"
            onClick={() => scrollToSection("cast")}
            className="absolute cursor-pointer rounded-md opacity-0 transition-shadow duration-300 hover:opacity-100 hover:shadow-[0_0_30px_4px_oklch(0.96_0.04_85_/_0.45)] hover:ring-2 hover:ring-cream/70 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream"
            style={{ left: "21.2%", top: "70.9%", width: "17.6%", height: "6.3%" }}
          >
            <span className="sr-only">Meet the Suspects</span>
          </button>
        </div>

        {/* Mobile hero */}
        <div className="relative block w-full sm:hidden" style={{ aspectRatio: "847 / 1505" }}>
          <img
            src={heroMobile}
            alt="CreepyStalkers: Hollywood — A Stalkerville Original Docuseries"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <a
            href={TRAILER_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Watch Trailer"
            className="absolute cursor-pointer rounded-md opacity-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rec"
            style={{ left: "3.5%", top: "89.8%", width: "93%", height: "9%" }}
          >
            <span className="sr-only">Watch Trailer</span>
          </a>
        </div>
      </section>

      {/* EPISODES */}
      <section id="episodes" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-rec">The Series</p>
            <h2 className="font-display text-4xl font-bold text-cream md:text-6xl">
              Six episodes. <span className="italic text-gradient-gold">Zero restraint.</span>
            </h2>
            <p className="mt-5 text-foreground/70">
              Every Tuesday at 7:08 AM. She's wearing the same outfit. It means something.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {episodes.map((ep) => (
              <article
                key={ep.num}
                className="relative overflow-hidden rounded-xl border border-border/40 bg-card/40"
              >
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "3 / 2" }}>
                  <img
                    src={ep.img}
                    alt={`Episode ${ep.num}: ${ep.title}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAST */}
      <section id="cast" className="relative py-24 md:py-32">
        <div className="lens-flare left-[10%] top-[20%] h-[300px] w-[300px] opacity-50" />
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">The Suspects</p>
            <h2 className="font-display text-4xl font-bold text-cream md:text-6xl">
              Meet the men <span className="italic">under investigation.</span>
            </h2>
            <p className="mt-5 text-foreground/70">
              Eight subjects. Six months of footage. Zero successful first dates.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cast.map((c) => (
              <article
                key={c.name}
                className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/40 backdrop-blur-md transition duration-500 hover:border-primary/40 hover:-translate-y-2"
                style={{ boxShadow: "0 10px 40px -15px rgba(0,0,0,0.6)" }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    width={768}
                    height={1024}
                    className="h-full w-full object-cover grayscale-[25%] transition duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute right-3 top-3 rounded bg-background/70 px-2 py-1 text-[10px] font-mono uppercase tracking-widest text-primary backdrop-blur">
                    Subject 0{cast.indexOf(c) + 1}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary/80">{c.role}</p>
                  <h3 className="font-display text-3xl font-bold text-cream">{c.name}</h3>
                  <div className="mt-4 border-t border-border/40 pt-3">
                    <p className="text-[10px] uppercase tracking-wider text-foreground/50">{c.stat}</p>
                    <p className="font-mono text-lg font-bold text-primary">{c.val}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-14 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">Critics' Verdict</p>
              <h2 className="font-display text-4xl font-bold text-cream md:text-6xl">
                Universally <span className="italic text-gradient-gold">acclaimed.</span>
              </h2>
            </div>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="font-display text-5xl font-black text-primary">97%</div>
                <p className="text-xs uppercase tracking-widest text-foreground/60">Critics</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <div className="font-display text-5xl font-black text-primary">9.4</div>
                <p className="text-xs uppercase tracking-widest text-foreground/60">Audience</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((r, i) => (
              <figure
                key={i}
                className="group relative overflow-hidden rounded-xl border border-border/50 bg-gradient-to-br from-card/80 to-card/30 p-8 backdrop-blur transition duration-500 hover:border-primary/40 hover:shadow-[var(--shadow-pink-glow)]"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="font-display text-2xl font-bold leading-snug text-cream md:text-3xl">
                  "{r.quote}"
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-border/40 pt-4">
                  <span className="text-sm font-medium text-foreground/70">— {r.source}</span>
                  <span className="rounded bg-primary/15 px-2 py-1 font-mono text-xs font-bold text-primary">{r.score}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="trailer" className="relative overflow-hidden">
        <div className="relative min-h-[90vh] w-full">
          <img
            src={footerDesktop}
            alt="The investigation never stops"
            loading="lazy"
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
          />
          <img
            src={finale}
            alt="Hollywood Hills sunset"
            loading="lazy"
            className="absolute inset-0 block h-full w-full object-cover md:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
          <div className="lens-flare drift left-[20%] top-[30%] h-[500px] w-[500px] opacity-70" />

          <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-[1600px] flex-col items-center justify-center px-6 py-24 text-center md:px-12">
            <img src={logo} alt="CreepyStalkers" className="mb-8 h-16 w-auto md:h-24 drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)]" />
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-primary">A Streaming Original</p>
            <h2 className="font-display text-5xl font-black leading-[0.95] text-cream md:text-7xl lg:text-8xl">
              The investigation <br />
              <span className="italic text-gradient-gold">never stops.</span>
            </h2>
            <p className="mt-7 max-w-xl text-base font-light text-foreground/80 md:text-lg">
              All six episodes streaming now. Watch responsibly.
            </p>

            <a
              href={TRAILER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 hidden items-center gap-3 rounded-md bg-cream px-10 py-4 text-base font-bold text-background shadow-[var(--shadow-glow)] transition hover:scale-[1.04] hover:brightness-110 md:flex"
            >
              <Play className="h-5 w-5 fill-background" /> Start Watching
            </a>

            <div className="mt-12 flex items-center gap-3 rounded-full border border-border/50 bg-background/40 px-5 py-2 backdrop-blur">
              <Volume2 className="h-3.5 w-3.5 text-foreground/60" />
              <span className="text-xs uppercase tracking-widest text-foreground/60">Dolby Atmos · 4K HDR</span>
            </div>
          </div>
        </div>

        {/* Disclaimer footer */}
        <footer className="relative border-t border-border/40 bg-background/80 py-10 backdrop-blur">
          <div className="mx-auto max-w-[1100px] px-6 text-center md:px-12">
            <img src={logo} alt="CreepyStalkers" className="mx-auto mb-5 h-8 w-auto opacity-60" />
            <p className="text-xs italic leading-relaxed text-foreground/50">
              CreepyStalkers: Hollywood is a fictional satirical mockumentary series.
              Any resemblance to actual yoga instructors, biohackers, or men with binoculars is entirely coincidental.
              Please do not investigate yoga instructors.
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-foreground/30">
              © 2026 · A Parody Production · Not Actually Streaming Anywhere
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}
