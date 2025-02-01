"use client";
import DefaultLayout from "@/layouts/default";
import AdvanceBar from "@/components/game/advancebar";
import MoveControls from "@/components/game/movecontrols";
import Object from "@/components/game/object";
import obstaclesData from "@/data/obstaclesData";
import rewardsData from "@/data/rewardsData";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Image } from "@nextui-org/image";

interface GameObject {
  x: number;
  y: number;
  image: string;
  points: number;
}

export default function MainGamePage() {
  const [score, setScore] = useState(0);
  const [positionY, setPositionY] = useState(300);
  const [objects, setObjects] = useState<GameObject[]>([]);
  const [showModal, setShowModal] = useState(false);

  const turkeyRef = useRef<HTMLDivElement | null>(null);

  const handleMoveUp = () => setPositionY((prev) => Math.max(0, prev - 30));
  const handleMoveDown = () =>
    setPositionY((prev) => Math.min(window.innerHeight - 60, prev + 30));

  const resetGame = () => {
    setScore(0);
    setPositionY(300);
    setObjects([]);
    setShowModal(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      const isReward = Math.random() > 0.5;
      const objectList = isReward ? rewardsData : obstaclesData;
      const randomObject =
        objectList[Math.floor(Math.random() * objectList.length)];

      setObjects((prev) => [
        ...prev,
        {
          x: window.innerWidth,
          y: Math.random() * (window.innerHeight - 100),
          image: randomObject.image,
          points: randomObject.points,
        },
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setObjects((prev) =>
        prev
          .map((obj) => ({ ...obj, x: obj.x - 10 }))
          .filter((obj) => obj.x > -50)
      );
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const checkCollision = () => {
      if (!turkeyRef.current) return;

      const turkeyRect = turkeyRef.current.getBoundingClientRect();

      setObjects((prevObjects) =>
        prevObjects.filter((obj) => {
          const objRef = document.getElementById(`object-${obj.x}-${obj.y}`);
          if (!objRef) return true;

          const objRect = objRef.getBoundingClientRect();

          const isCollision =
            turkeyRect.left < objRect.right &&
            turkeyRect.right > objRect.left &&
            turkeyRect.top < objRect.bottom &&
            turkeyRect.bottom > objRect.top;

          if (isCollision) {
            setScore((prevScore) => prevScore + obj.points);
          }

          return !isCollision;
        })
      );

      requestAnimationFrame(checkCollision);
    };

    const animationId = requestAnimationFrame(checkCollision);
    return () => cancelAnimationFrame(animationId);
  }, []);

  useEffect(() => {
    if (score >= 100) {
      setShowModal(true);
    }
  }, [score]);

  return (
    <DefaultLayout>
      <div className="absolute top-4 left-4 right-4 z-20">
        <AdvanceBar progress={(score / 100) * 100} />
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen text-center space-y-6 overflow-hidden">
        {objects.map((obj, index) => (
          <Object
            key={index}
            x={obj.x}
            y={obj.y}
            image={obj.image}
            id={`object-${obj.x}-${obj.y}`}
          />
        ))}

        <motion.div
          ref={turkeyRef}
          className="w-18 md:w-24 lg:w-32 absolute"
          style={{ top: positionY, left: 50 }}
          transition={{ duration: 0.1 }}
        >
          <Image
            src="/pavo.webp"
            alt="Pavo player"
            className="transform transition-transform hover:scale-105"
          />
        </motion.div>
      </div>

      <div className="absolute bottom-20 left-0 right-0 flex justify-center">
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
          Score: {score}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-600 p-8 rounded-xl text-center max-w-sm mx-auto shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-white">
              ¡Felicidades! Dejaste de ser un pavo y ahora eres todo un
              americano. Ya estás listo para ir a Florida.
            </h2>

            <div className="mb-6">
              <img
                src="/syda-game-fondo.webp"
                alt="Imagen de victoria"
                width={200}
                height={200}
                className="mx-auto rounded-lg shadow-lg border-4 border-white"
              />
            </div>

            <button
              onClick={resetGame}
              className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              Reiniciar Juego
            </button>
          </div>
        </div>
      )}
    </DefaultLayout>
  );
}
