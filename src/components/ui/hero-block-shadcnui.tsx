"use client";

import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowDown, Layers, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/data/experience";

const ACCENT = "#2563EB";

export function HeroBlock() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-foreground text-background">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(120% 90% at 50% 0%, ${ACCENT}33, transparent 60%), #09090B`,
        }}
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-background/10"
          >
            <Layers className="h-9 w-9" style={{ color: ACCENT }} strokeWidth={1.25} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 text-4xl font-bold sm:text-5xl md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-6 text-lg font-medium sm:text-xl md:text-2xl"
            style={{ color: ACCENT }}
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-base text-background/70 sm:text-lg md:text-xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-10 flex flex-wrap justify-center gap-4"
          >
            <Button
              size="lg"
              className="gap-2"
              nativeButton={false}
              render={<a href={`mailto:${profile.email}`} />}
            >
              <Mail className="h-4 w-4" />
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 border-background/20 bg-transparent text-background hover:bg-background/10 hover:text-background"
              nativeButton={false}
              render={<a href="#experience" />}
            >
              View Experience
              <ArrowDown className="h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 text-sm text-background/50"
          >
            <span className="flex items-center gap-1.5">
              <Mail className="h-4 w-4" />
              {profile.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="h-4 w-4" />
              {profile.phone}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.2, duration: 1.5, repeat: Infinity },
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform"
      >
        <ArrowDown className="h-6 w-6 text-background/40" />
      </motion.div>
    </section>
  );
}
