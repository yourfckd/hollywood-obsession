import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Play, ChevronLeft, ChevronRight, Star, Volume2 } from "lucide-react";
import logo from "@/assets/creepy-logo.png";
import hero from "@/assets/hero.jpg";
import ep1 from "@/assets/ep1.jpg";
import ep2 from "@/assets/ep2.jpg";
import ep3 from "@/assets/ep3.jpg";
import ep4 from "@/assets/ep4.jpg";
import ep5 from "@/assets/ep5.jpg";
import ep6 from "@/assets/ep6.jpg";
import cast1 from "@/assets/cast1.jpg";
import cast2 from "@/assets/cast2.jpg";
import cast3 from "@/assets/cast3.jpg";
import cast4 from "@/assets/cast4.jpg";
import finale from "@/assets/finale.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CreepyStalkers: Hollywood — A Streaming Original" },
      { name: "description", content: "8 nerds. 1 city. Unlimited delusion. The mockumentary about Hollywood's most emotionally investigative men. Streaming now." },
      { property: "og:title", content: "CreepyStalkers: Hollywood" },
      { property: "og:description", content: "8 nerds. 1 city. Unlimited delusion. Streaming now." },
      { property: "og:image", content: hero },
      { property: "og:type", content: "video.tv_show" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: hero },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&family=Inter:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

const episodes = [
  { n: 1, title: "Namasté in Her DMs", img: ep1, runtime: "47m", desc: "Trevor crafts a 9-paragraph response to a heart emoji." },
  { n: 2, title: "Hot Yoga, Cold Shoulder", img: ep2, runtime: "52m", desc: "An ill-advised front-row mat changes everything." },
  { n: 3, title: "The Erewhon Incident", img: ep3, runtime: "44m", desc: "Eli stalks a $19 smoothie across three aisles." },
  { n: 4, title: "Operation: Accidental Encounter", img: ep4, runtime: "49m", desc: "Kevin schedules a chance meeting down to the second." },
  { n: 5, title: "Sunset Boulevard Surveillance", img: ep5, runtime: "55m", desc: "A trench coat. A telephoto. A profound misunderstanding." },
  { n: 6, title: "Downward Dog, Upward Delusion", img: ep6, runtime: "51m", desc: "Darren misreads spiritual energy as romantic destiny." },
];

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
  const [scrollIdx, setScrollIdx] = useState(0);

  const scrollEp = (dir: number) => {
    const el = document.getElementById("ep-rail");
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
    setScrollIdx(scrollIdx + dir);
  };

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-background/40 border-b border-border/30">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-10">
          <div className="flex items-center gap-10">
            <img src={logo} alt="CreepyStalkers Hollywood" className="h-9 w-auto md:h-11 brightness-110" />
            <nav className="hidden gap-7 text-sm font-medium text-foreground/80 md:flex">
              <a href="#episodes" className="hover:text-primary transition-colors">Episodes</a>
              <a href="#cast" className="hover:text-primary transition-colors">Cast</a>
              <a href="#reviews" className="hover:text-primary transition-colors">Reviews</a>
              <a href="#trailer" className="hover:text-primary transition-colors">Trailer</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-rec md:flex">
              <span className="rec-dot inline-block h-2 w-2 rounded-full bg-rec" /> Live
            </span>
            <button className="rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:brightness-110">
              Sign In
            </button>
          </div>
        </div>
      </header>

      {/* HERO — rebuilt from scratch */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={hero}
          alt="CreepyStalkers: Hollywood"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col items-start justify-end px-6 pb-20 md:px-12 md:pb-28">
          <h1 className="font-display text-5xl font-black leading-[0.95] text-cream drop-shadow-[0_4px_30px_rgba(0,0,0,0.7)] md:text-7xl lg:text-8xl">
            CreepyStalkers: <span className="italic text-gradient-gold">Hollywood</span>
          </h1>
          <button className="mt-8 flex items-center gap-2.5 rounded-md bg-cream px-8 py-3.5 text-sm font-bold text-background shadow-[var(--shadow-glow)] transition hover:scale-[1.03] hover:brightness-110">
            <Play className="h-5 w-5 fill-background" /> Watch Trailer
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* EPISODES */}
      <section id="episodes" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-6 md:px-12">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">Season One · Now Streaming</p>
              <h2 className="font-display text-4xl font-bold text-cream md:text-6xl">Featured Episodes</h2>
            </div>
            <div className="hidden gap-2 md:flex">
              <button onClick={() => scrollEp(-1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 transition hover:bg-card">
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button onClick={() => scrollEp(1)} className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/50 transition hover:bg-card">
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div
            id="ep-rail"
            className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6"
          >
            {episodes.map((ep) => (
              <article
                key={ep.n}
                className="episode-card group relative w-[78%] flex-shrink-0 snap-start cursor-pointer overflow-hidden rounded-lg bg-card sm:w-[48%] lg:w-[31%]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={ep.img} alt={ep.title} loading="lazy" width={1024} height={640} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
                  <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded border border-rec/50 bg-background/70 px-2 py-1 backdrop-blur">
                    <span className="rec-dot h-1.5 w-1.5 rounded-full bg-rec" />
                    <span className="text-[10px] font-bold tracking-widest text-rec">REC</span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="mb-1 flex items-center gap-2 text-xs font-mono text-primary/80">
                      <span>EP {String(ep.n).padStart(2, "0")}</span>
                      <span>·</span>
                      <span>{ep.runtime}</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold leading-tight text-cream">{ep.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm text-foreground/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {ep.desc}
                    </p>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 shadow-[var(--shadow-glow)]">
                      <Play className="h-7 w-7 fill-background text-background" />
                    </div>
                  </div>
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
            src={finale}
            alt="Hollywood Hills sunset"
            loading="lazy"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover"
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

            <button className="group mt-10 flex items-center gap-3 rounded-md bg-cream px-10 py-4 text-base font-bold text-background shadow-[var(--shadow-glow)] transition hover:scale-[1.04] hover:brightness-110">
              <Play className="h-5 w-5 fill-background" /> Start Watching
            </button>

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
