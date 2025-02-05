import { motion } from "framer-motion";

interface GameOverModalProps {
  isOpen: boolean;
  message: string;
  imageSrc: string;
  onClose: () => void;
}

const GameOverModal = ({ isOpen, message, imageSrc, onClose }: GameOverModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="p-6 rounded-2xl shadow-2xl text-center w-96 max-w-full relative"
        style={{
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          color: "white",
        }}
      >
        <motion.img
          src={imageSrc}
          alt="Game Over"
          className="w-40 h-40 mx-auto rounded-lg shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        <div className="text-xl font-semibold mt-4">{message}</div>
        <motion.button
          onClick={onClose}
          className="mt-6 px-6 py-3 text-lg font-semibold text-white rounded-full transition-all duration-300 shadow-md"
          style={{
            background: "linear-gradient(90deg, #ff7e5f, #feb47b)",
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Reiniciar
        </motion.button>
      </motion.div>
    </div>
  );
};

export default GameOverModal;
