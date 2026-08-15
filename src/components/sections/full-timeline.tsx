"use client";

import { AnimatePresence, motion } from "motion/react";
import { MapPin } from "lucide-react";
import { chapters, type Role } from "@/data/experience";
import { usePinnedScroll } from "@/hooks/use-pinned-scroll";

function staggerReveal(progress: number, i: number) {
  const start = i * 0.08;
  const t = Math.min(1, Math.max(0, (progress - start) / 0.22));
  return {
    opacity: 0.25 + t * 0.75,
    transform: `translateY(${(1 - t) * 8}px)`,
  };
}

export function FullTimeline() {
  const {
    containerRef,
    enhanced,
    activeIndex,
    progress: chapterProgress,
  } = usePinnedScroll(chapters.length, 130);

  if (!enhanced) return <FullTimelineStatic />;

  const chapter = chapters[activeIndex];

  return (
    <section
      ref={containerRef}
      aria-label="Full work history"
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
       <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:gap-16">
        <div
          className="relative flex shrink-0 items-center justify-center md:sticky md:top-1/2 md:-translate-y-1/2"
        >
         <div
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
              className="flex h-20 w-20 items-center justify-center rounded-3xl border border-background/10 sm:h-24 sm:w-24 md:h-40 md:w-40 md:rounded-[2rem]"
              style={{
                background: `linear-gradient(160deg, ${chapter.accent}2b, transparent)`,
              }}
            >
              <chapter.icon
                className="h-9 w-9 sm:h-11 sm:w-11 md:h-16 md:w-16"
                style={{ color: chapter.accent }}
                strokeWidth={1.25}
              />
            </motion.div>
          </AnimatePresence>
         </div>
          <span className="pointer-events-none absolute -bottom-2 left-1/2 hidden -translate-x-1/2 font-heading text-6xl font-bold text-background/5 sm:block md:text-8xl">
            {chapter.index}
          </span>
        </div>

        <div className="min-h-0 flex-1">
          <AnimatePresence mode="wait">
            <motion.div key={chapter.id}>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="mb-4 flex items-center gap-3 text-xs font-medium tracking-wide text-background/60 sm:text-sm"
              >
                <span>{chapter.period}</span>
                <span className="h-1 w-1 rounded-full bg-background/40" />
                <span>{chapter.title}</span>
              </motion.div>

              <div className="relative space-y-5 border-l border-background/15 pl-5">
                {chapter.roles.map((role, i) => (
                  <RoleRow
                    key={`${role.company}-${role.period}`}
                    role={role}
                    accent={chapter.accent}
                    style={staggerReveal(chapterProgress, i)}
                  />
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

function RoleRow({
  role,
  accent,
  style,
}: {
  role: Role;
  accent: string;
  style: React.CSSProperties;
}) {
  const isBrief = role.bullets.length === 1;

  return (
    <div style={style} className="relative">
      <span
        className="absolute top-1.5 -left-[1.4rem] h-2 w-2 rounded-full"
        style={{ background: accent }}
      />
      <div className="mb-1 flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
        <h3 className="text-sm font-bold sm:text-base md:text-lg">
          {role.role}
        </h3>
        <span className="text-xs text-background/40 sm:text-sm">
          · {role.company}
        </span>
      </div>
      <p className="mb-2 flex items-center gap-1.5 text-xs text-background/50">
        <MapPin className="h-3 w-3 shrink-0" />
        {role.location} · {role.period}
        {role.freelance ? " · Freelance" : ""}
      </p>
      {isBrief ? (
        <p className="mb-2 max-w-xl text-xs leading-relaxed text-background/60 sm:text-sm">
          {role.bullets[0]}
        </p>
      ) : (
        <ul className="mb-2 list-disc space-y-1 pl-4 text-xs leading-relaxed text-background/60 sm:text-sm">
          {role.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      )}
      <div className="flex flex-wrap gap-1.5">
        {role.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-background/10 px-2 py-0.5 text-[0.65rem] text-background/50 sm:text-xs"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function FullTimelineStatic() {
  const roles = chapters.flatMap((chapter) =>
    chapter.roles.map((role) => ({ ...role, chapter }))
  );

  return (
    <section
      aria-label="Full work history"
      className="relative w-full bg-background px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-wide text-muted-foreground uppercase">
            Every role, in detail
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Full Timeline
          </h2>
        </motion.div>

        <div className="relative border-l border-border pl-8">
          {roles.map((role, i) => (
            <motion.div
              key={`${role.company}-${role.period}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
                delay: 0.05,
              }}
              className={
                i === roles.length - 1 ? "relative pb-0" : "relative pb-10"
              }
            >
              <span
                className="absolute top-1.5 -left-[2.28rem] h-3 w-3 rounded-full border-2 border-background"
                style={{ background: role.chapter.accent }}
              />
              <p className="mb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {role.period}
              </p>
              <h3 className="mb-0.5 text-lg font-semibold text-foreground">
                {role.role}
              </h3>
              <p className="mb-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                <MapPin className="h-3.5 w-3.5" />
                {role.company}, {role.location}
                {role.freelance ? " · Freelance" : ""}
              </p>
              <ul className="mb-3 list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-foreground/70">
                {role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {role.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
