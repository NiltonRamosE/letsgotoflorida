"use client";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Image } from "@nextui-org/image";

export default function MainGamePage() {
  const [score, setScore] = useState(0);

  /*useEffect(() => {
    const interval = setInterval(() => {
      setScore((prevScore) => prevScore + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);*/

  return (
    <DefaultLayout>
      <div className="absolute top-4 left-4">
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

      <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-6 overflow-hidden">
        <div className="absolute top-4 right-4 bg-black/50 text-white px-6 py-3 rounded-lg text-xl font-bold">
          Score: {score} m
        </div>

        <motion.div
          className="w-32"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
        >
          <Image
            src="/pavo.webp"
            alt="Florida game"
            className="transform transition-transform hover:scale-105"
          />
        </motion.div>
      </div>
    </DefaultLayout>
  );
}
