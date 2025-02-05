"use client";
import DefaultLayout from "@/layouts/default";
import AdvanceBar from "@/components/game/advancebar";
import { useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";
import GameOverModal from "@/components/game/gameovermodal";

const questions = [
  {
    question: "¿Qué comida le gusta a Oliver?",
    options: ["Papas fritas", "Lechuga", "Galletas"],
    correct: 1,
  },
  {
    question: "¿De qué país es Sylvee?",
    options: ["Brasil", "EE.UU.", "Perú"],
    correct: 1,
  },
  {
    question: "¿Cómo se llama la mascota de Sylvee?",
    options: ["Oliver", "Toby", "Bobby"],
    correct: 0,
  },
  {
    question: "¿Qué animal es Oliver?",
    options: ["Cuy", "Conejo", "Perro"],
    correct: 0,
  },
  {
    question: "¿De qué color es Oliver?",
    options: ["Blanco", "Negro", "Marrón"],
    correct: 0,
  },
];

export default function SalvaOliverPage() {
  const [level, setLevel] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [modalContent, setModalContent] = useState({
    message: "",
    imageSrc: "",
  });

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[level].correct) {
      if (level < questions.length - 1) {
        setLevel(level + 1);
      } else {
        setGameOver(true);
        setModalContent({
          message: "¡Felicidades! Haz logrado que Oliver se salve de Gastón. Lastimosamente sigue en Perú...",
          imageSrc: "/saveOliver/streamers-comiendo-cuy.jpg",
        });
      }
    } else {
      const gameOverMessages = [
        {
          message: "Gastón atrapó a Oliver.",
          imageSrc: "/saveOliver/gaston-cocina.webp",
        },
        {
          message: "Oliver se vió el stream de probando dulces y quemó.",
          imageSrc: "/saveOliver/cuy-frito.jpg",
        },
        {
          message:
            "Oliver se salvó del 28, pero no de la buena sazón de Doña Lili.",
          imageSrc: "/saveOliver/sazon-lili.jpg",
        },
        {
          message: "Nooo, Sylvee sacó a Oliver a pasear cerca de Maido.",
          imageSrc: "/saveOliver/baje-oliver.webp",
        },
        {
          message: "Terrible lo que pasará luego de que Oliver se case.",
          imageSrc: "/saveOliver/cuys-boda.jpg",
        },
      ];

      setGameOver(true);
      setModalContent(gameOverMessages[level]);
    }
  };

  const handleModalClose = () => {
    setGameOver(false);
    setLevel(0);
  };

  return (
    <DefaultLayout>
      <div className="absolute top-4 left-4 right-4 z-20">
        <AdvanceBar
          progress={(level / 5) * 100}
          imageLeft="/gaston-acurio.webp"
          imageRight="/sylvee-black.webp"
        />
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen text-center space-y-6 overflow-hidden px-4">
        <motion.div
          className="absolute top-40"
          style={{ left: "50%", transform: "translateX(-50%)" }}
          transition={{ duration: 0.1 }}
        >
          <Image
            src="/oliver.webp"
            alt="Oliver player"
            className="w-24 md:w-32 lg:w-40 rounded-full overflow-hidden shadow-lg transform transition-transform hover:scale-105"
          />
        </motion.div>

        {!gameOver ? (
          <div className="mt-32 md:mt-40 lg:mt-48 space-y-6">
            <div className="text-lg md:text-xl font-semibold px-4">
              {questions[level].question}
            </div>
            <div className="flex flex-col items-center space-y-4">
              {questions[level].options.map((option, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300 w-60 md:w-72"
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </div>
        ) : null}
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
          Nivel: {level + 1}
        </div>
      </div>

      <GameOverModal
        isOpen={gameOver}
        message={modalContent.message}
        imageSrc={modalContent.imageSrc}
        onClose={handleModalClose}
      />
    </DefaultLayout>
  );
}
