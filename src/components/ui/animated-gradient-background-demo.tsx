"use client";

import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { Cat } from "lucide-react";
import { motion } from "motion/react";

const DemoVariant1 = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Gradient Background */}
      <AnimatedGradientBackground />

      <div className="relative z-10 flex flex-col items-center justify-start h-full px-4 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
        >
          <Cat className="h-24 w-24 text-white" strokeWidth={1.5} />
        </motion.div>
        <p className="mt-4 text-lg text-gray-300 md:text-xl max-w-lg">
          A customizable animated radial gradient background with a subtle
          breathing effect.
        </p>
      </div>
    </div>
  );
};

export { DemoVariant1 };
