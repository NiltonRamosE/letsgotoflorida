"use client";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 overflow-hidden">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          ¡Let's go to Florida!
        </motion.h1>

        <motion.div
          className="w-3/4 md:w-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/syda-index.webp"
            alt="Florida game"
            className="transform transition-transform hover:scale-105"
          />
        </motion.div>

        <motion.a
          href="/game/game-main"
          className="px-10 py-5 text-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          JUGAR AHORA
        </motion.a>
      </div>
    </DefaultLayout>
  );
}
