"use client";
import DefaultLayout from "@/layouts/default";
import AdvanceBar from "@/components/game/advancebar";
import MoveControls from "@/components/game/movecontrols";
import Object from "@/components/game/object";
import obstaclesData from "@/data/obstaclesData";
import rewardsData from "@/data/rewardsData";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Image } from "@nextui-org/image";

export default function MainGamePage() {
  const [score, setScore] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [objects, setObjects] = useState<{ x: number; y: number; image: string; points: number }[]>([]);

  const handleMoveUp = () => setPositionY((prev) => prev - 10);
  const handleMoveDown = () => setPositionY((prev) => prev + 10);

  useEffect(() => {
    const interval = setInterval(() => {
      const isReward = Math.random() > 0.5;
      const objectList = isReward ? rewardsData : obstaclesData;
      const randomObject = objectList[Math.floor(Math.random() * objectList.length)];

      setObjects((prev) => [
        ...prev,
        {
          x: window.innerWidth,
          y: Math.random() * window.innerHeight * 0.8,
          image: randomObject.image,
          points: randomObject.points
        }
      ]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setObjects((prev) =>
        prev.map((obj) => ({ ...obj, x: obj.x - 10 })).filter((obj) => obj.x > -50)
      );
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setObjects((prevObjects) =>
      prevObjects.filter((obj) => {
        const isCollision =
          obj.x < 80 && obj.x > 40 && positionY < obj.y + 50 && positionY + 50 > obj.y;

        if (isCollision) {
          setScore((prevScore) => prevScore + obj.points);
        }

        return !isCollision;
      })
    );
  }, [positionY]);

  return (
    <DefaultLayout>
      <div className="absolute top-4 left-4 right-4 z-20">
        <AdvanceBar progress={(score / 50) * 100} />
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen text-center space-y-6 overflow-hidden">
        {objects.map((obj, index) => (
          <Object key={index} x={obj.x} y={obj.y} image={obj.image} />
        ))}

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
    </DefaultLayout>
  );
}
