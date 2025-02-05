import { motion } from "framer-motion";
import { Image } from "@nextui-org/image";

interface GameCardProps {
  title: string;
  image: string;
  link: string;
}

export default function GameCard({ title, image, link }: GameCardProps) {
  return (
    <motion.a
      href={link}
      className="flex flex-col items-center w-32 h-36 transition-transform transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Image src={image} alt={title} className="w-24 h-24 object-contain" />
      <p className="mt-2 text-sm font-semibold text-center text-gray-800">{title}</p>
    </motion.a>
  );
}
