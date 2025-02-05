"use client";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import GameCard from "@/components/game-card";

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

        <div className="flex flex-wrap justify-center gap-6 md:justify-start">
          {" "}
          <GameCard
            title="Probando Dulces"
            image="/probando-dulces-bg.webp"
            link="/game/probando-dulces"
          />
          <GameCard
            title="¡Salva a Oliver!"
            image="/salva-a-oliver-bg.png"
            link="/game/salva-a-oliver"
          />
          <GameCard
            title="Próximamente"
            image="/icono-plus-game.svg"
            link="#"
          />
        </div>
      </div>
      <div className="fixed bottom-4 right-4 flex flex-col space-y-4 items-end z-50">
        <a
          href="https://www.instagram.com/ramos._.xd"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-pink-500 transition-all"
        >
          <FaInstagram />
        </a>
        <a
          href="https://x.com/NiltonRamos2003"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-400 transition-all"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.linkedin.com/in/nilton-ramos-encarnacion-0819b433b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-blue-700 transition-all"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/NiltonRamosE/letsgotoflorida"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-gray-500 transition-all"
        >
          <FaGithub />
        </a>
      </div>
    </DefaultLayout>
  );
}
