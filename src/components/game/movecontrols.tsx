"use client";
import { Button } from "@nextui-org/react";

interface MoveControlsProps {
  onMoveUp: () => void;
  onMoveDown: () => void;
}

export default function MoveControls({ onMoveUp, onMoveDown }: MoveControlsProps) {
  return (
    <div className="flex items-center space-x-4">
      <Button
        className="px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300"
        onClick={onMoveUp}
      >
        Arriba
      </Button>

      <Button
        className="px-6 py-3 text-lg font-semibold text-white bg-red-500 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300"
        onClick={onMoveDown}
      >
        Abajo
      </Button>
    </div>
  );
}
