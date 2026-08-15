"use client";

import { AnimatePresence, motion } from "motion/react";
import { chapters } from "@/data/experience";
import { usePinnedScroll } from "@/hooks/use-pinned-scroll";

function staggerReveal(progress: number, i: number) {
  const start = i * 0.08;
  const t = Math.min(1, Math.max(0, (progress - start) / 0.22));
  return {
    opacity: 0.25 + t * 0.75,
    transform: `translateY(${(1 - t) * 8}px)`,
  };
}

export function ScrollyExperience() {
  const {
    containerRef,
    enhanced,
    activeIndex,
    progress: chapterProgress,
  } = usePinnedScroll(chapters.length);

  if (!enhanced) return <ScrollyStatic />;

  const chapter = chapters[activeIndex];

  return (
    <section
      ref={containerRef}
      aria-label="Career timeline"
      className="relative h-svh w-full overflow-hidden bg-foreground text-background"
    >
      <div className="absolute inset-x-0 top-0 z-30 flex h-1 w-full gap-1 p-1">
        {chapters.map((c, i) => (
          <div
            key={c.id}
            className="h-full flex-1 overflow-hidden rounded-full bg-background/15"
          >
            <div
              className="h-full rounded-full bg-background"
              style={{
                width:
                  i < activeIndex
                    ? "100%"
                    : i === activeIndex
                      ? `${chapterProgress * 100}%`
                      : "0%",
              }}
            />
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(${120 + chapterProgress * 20}% ${90 + chapterProgress * 15}% at ${50 + (chapterProgress - 0.5) * 16}% ${chapterProgress * 10}%, ${chapter.accent}33, transparent 60%), #09090B`,
        }}
      />

      <div className="absolute inset-0 overflow-y-auto px-5 pt-24 pb-16 sm:px-6 md:pt-28">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:gap-16">
          <div
            className="relative flex shrink-0 items-center justify-center"
            style={{
              transform: `translateY(${(chapterProgress - 0.5) * -14}px) rotate(${(chapterProgress - 0.5) * 4}deg)`,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, scale: 1.1, rotate: 6 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex h-28 w-28 items-center justify-center rounded-3xl border border-background/10 sm:h-36 sm:w-36 md:h-72 md:w-72 md:rounded-[2.5rem]"
                style={{
                  background: `linear-gradient(160deg, ${chapter.accent}2b, transparent)`,
                }}
              >
                <chapter.icon
                  className="h-12 w-12 sm:h-16 sm:w-16 md:h-28 md:w-28"
                  style={{ color: chapter.accent }}
                  strokeWidth={1.25}
                />
              </motion.div>
            </AnimatePresence>
            <span className="pointer-events-none absolute -bottom-3 left-1/2 hidden -translate-x-1/2 font-heading text-8xl font-bold text-background/5 sm:block md:text-9xl">
              {chapter.index}
            </span>
          </div>

          <div className="min-h-0 flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <div className="mb-3 flex items-center gap-3 text-xs font-medium tracking-wide text-background/60 sm:text-sm">
                  <span>{chapter.period}</span>
                  <span className="h-1 w-1 rounded-full bg-background/40" />
                  <span>Chapter {chapter.index}</span>
                </div>
                <h2 className="mb-3 text-2xl font-bold sm:text-3xl md:mb-4 md:text-5xl">
                  {chapter.title}
                </h2>
                <p className="mb-3 text-base text-background/80 sm:text-lg md:mb-4 md:text-xl">
                  {chapter.hook}
                </p>
                <p className="mb-5 max-w-xl text-sm leading-relaxed text-background/60 sm:text-base md:mb-8">
                  {chapter.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {chapter.roles.map((r, i) => (
                    <span
                      key={r.company}
                      style={staggerReveal(chapterProgress, i)}
                      className="rounded-full border border-background/15 bg-background/4 px-3 py-1.5 text-xs text-background/80 sm:text-sm"
                    >
                      {r.role} · {r.company}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ScrollyStatic() {
  return (
    <section
      aria-label="Career timeline"
      className="relative w-full snap-y snap-proximity"
    >
      <div className="flex flex-col gap-4 px-4 py-12">
        {chapters.map((chapter) => (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="snap-start rounded-3xl border bg-card p-6"
            style={{ borderColor: `${chapter.accent}40` }}
          >
            <div className="mb-4 flex items-center gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"
                style={{ background: `${chapter.accent}1a` }}
              >
                <chapter.icon
                  className="h-6 w-6"
                  style={{ color: chapter.accent }}
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {chapter.period} · Chapter {chapter.index}
                </p>
                <h3 className="text-xl font-bold text-foreground">
                  {chapter.title}
                </h3>
              </div>
            </div>
            <p className="mb-3 text-base font-medium text-foreground/90">
              {chapter.hook}
            </p>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              {chapter.summary}
            </p>
            <div className="flex flex-wrap gap-2">
              {chapter.roles.map((r) => (
                <span
                  key={r.company}
                  className="rounded-full bg-muted px-3 py-1.5 text-xs text-muted-foreground"
                >
                  {r.role} · {r.company}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
