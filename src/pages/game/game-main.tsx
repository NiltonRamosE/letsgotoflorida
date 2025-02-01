"use client";
import DefaultLayout from "@/layouts/default";
import AdvanceBar from "@/components/game/advancebar";
import MoveControls from "@/components/game/movecontrols";
import { motion } from "framer-motion";
import { useState } from "react";
import { Image } from "@nextui-org/image";

export default function MainGamePage() {
  const [score, setScore] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const handleMoveUp = () => setPositionY((prev) => prev - 10);
  const handleMoveDown = () => setPositionY((prev) => prev + 10);

  return (
    <DefaultLayout>
      <div className="absolute top-4 left-4 right-4 z-20">
        <AdvanceBar progress={(score / 50) * 100} />
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 overflow-hidden">
        <motion.div
          className="w-32"
          animate={{ y: positionY }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src="/pavo.webp"
            alt="Pavo player"
            className="transform transition-transform hover:scale-105"
          />
        </motion.div>
      </div>
      <div className="absolute bottom-18 left-0 right-0 flex justify-center">
        <MoveControls onMoveUp={handleMoveUp} onMoveDown={handleMoveDown} />
      </div>

      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        <motion.a
          href="/"
          className="px-6 py-3 text-lg font-semibold text-white bg-black/50 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 whitespace-nowrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Volver
        </motion.a>

        <div className="bg-black/50 text-white px-6 py-3 rounded-lg text-xl font-bold z-20 whitespace-nowrap">
          Score: {score} m
        </div>
      </div>
    </DefaultLayout>
  );
}
