"use client";
import DefaultLayout from "@/layouts/default";
import AdvanceBar from "@/components/game/advancebar";
import { motion } from "framer-motion";
import { useState } from "react";
import { Image } from "@nextui-org/image";

export default function MainGamePage() {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState(0);

  const handleMove = () => {
    setPosition((prev) => prev + 10);
    setScore((prevScore) => prevScore + 1);
  };

  return (
    <DefaultLayout>
      <div className="absolute top-4 left-4 z-20">
        <motion.a
          href="/"
          className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-400 to-blue-200 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Volver
        </motion.a>
      </div>

      <div className="mt-24 md:mt-32">
        <AdvanceBar progress={(score / 50) * 100} />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 overflow-hidden">
        <div className="absolute top-4 right-4 bg-black/50 text-white px-6 py-3 rounded-lg text-xl font-bold z-20">
          Score: {score} m
        </div>

        <motion.div
          className="w-32"
          animate={{ x: position }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/pavo.webp"
            alt="Pavo player"
            className="transform transition-transform hover:scale-105"
          />
        </motion.div>

        <motion.button
          onClick={handleMove}
          className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-green-500 via-green-400 to-green-300 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          whileTap={{ scale: 0.9 }}
        >
          Avanzar
        </motion.button>
      </div>
    </DefaultLayout>
  );
}
