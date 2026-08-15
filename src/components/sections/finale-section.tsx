"use client";

import { motion } from "motion/react";
import { GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { education, profile, skills } from "@/data/experience";

export function FinaleSection() {
  return (
    <section
      id="contact"
      aria-label="Skills, education, and contact"
      className="relative w-full bg-background px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium tracking-wide text-muted-foreground uppercase">
            The toolkit behind the story
          </p>
          <h2 className="text-4xl font-bold text-foreground md:text-5xl">
            Skills &amp; Background
          </h2>
        </motion.div>

        <div className="mb-16 grid gap-6 md:grid-cols-3">
          <SkillCard title="Frameworks &amp; Tools" items={skills.frameworks} />
          <SkillCard title="Soft Skills" items={skills.soft} />
          <SkillCard title="Project Management" items={skills.tools} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-16 flex items-center gap-4 rounded-2xl border bg-card p-6"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="h-6 w-6 text-primary" strokeWidth={1.5} />
          </div>
          <div>
            <p className="font-medium text-foreground">{education.degree}</p>
            <p className="text-sm text-muted-foreground">
              {education.school} · Graduated {education.graduated}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="rounded-3xl border bg-foreground px-8 py-14 text-center text-background md:py-20"
        >
          <h3 className="mb-4 text-3xl font-bold md:text-4xl">
            Let&apos;s build the next chapter.
          </h3>
          <p className="mx-auto mb-8 max-w-lg text-background/70">
            Open to Flutter and Vue engagements — banking, healthcare,
            fintech, or whatever comes next.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              size="lg"
              className="gap-2"
              nativeButton={false}
              render={<a href={`mailto:${profile.email}`} />}
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href={`tel:${profile.phone}`} />}
            >
              <Phone className="h-4 w-4" />
              {profile.phone}
            </Button>
          </div>
          <p className="mt-8 flex items-center justify-center gap-1.5 text-sm text-background/50">
            <MapPin className="h-4 w-4" />
            {profile.location}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="rounded-2xl border bg-card p-6"
    >
      <h3 className="mb-4 font-heading text-sm font-semibold tracking-wide text-foreground uppercase">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
