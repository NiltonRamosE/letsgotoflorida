"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import  Snowfall  from "@/components/snowfall";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen bg-blue-200 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(135,206,250,0.5)_100%)]">
        <div className="absolute top-0 left-0 w-full h-full z-10 overflow-hidden">
          <Snowfall />
        </div>
      </div>

      <main className="container mx-auto px-6 flex-grow relative z-20">
        <AnimatePresence mode="wait">
          {mounted && (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}