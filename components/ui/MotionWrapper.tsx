"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function MotionWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      {children}
    </motion.div>
  );
}
