"use client";
import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

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
      <div className="fixed bottom-4 right-4 flex space-x-4 z-50">
        {/* Enlaces con iconos */}
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
