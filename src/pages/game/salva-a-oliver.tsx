"use client";
import DefaultLayout from "@/layouts/default";
import AdvanceBar from "@/components/game/advancebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";

export default function SalvaOliverPage() {
  const [level, setLevel] = useState(0);

  return (
    <DefaultLayout>
      <div className="absolute top-4 left-4 right-4 z-20">
        <AdvanceBar
          progress={(level / 5) * 100}
          imageLeft="/gaston-acurio.webp"
          imageRight="/sylvee-black.webp"
        />
      </div>
      <div className="relative flex flex-col items-center justify-center min-h-screen text-center space-y-6 overflow-hidden">
        <motion.div
          className="w-18 md:w-24 lg:w-32 absolute"
          style={{ left: 50 }}
          transition={{ duration: 0.1 }}
        >
          <Image
            src="/oliver.webp"
            alt="Oliver player"
            className="transform transition-transform hover:scale-105"
          />
        </motion.div>
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
          Nivel: {level}
        </div>
      </div>
    </DefaultLayout>
  );
}
