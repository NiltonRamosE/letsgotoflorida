"use client";
import { motion } from "framer-motion";

export default function AdvanceBar({ progress }: { progress: number }) {
  return (
    <div className="relative w-full max-w-3xl mx-auto mt-6 px-4 sm:px-8">
      <img
        src="/peru-flag.png"
        alt="Perú"
        className="absolute left-[-24px] top-[-0.5px] w-12 z-10"
      />
      
      <div className="relative w-full h-8 bg-gray-300 rounded-full overflow-hidden border-2 border-gray-400">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 rounded-full"
          style={{ width: `${progress}%` }}
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      <img
        src="/usa-flag.png"
        alt="USA"
        className="absolute right-[-24px] top-[-1px] w-12 h-8 z-10"
      />
    </div>
  );
}
