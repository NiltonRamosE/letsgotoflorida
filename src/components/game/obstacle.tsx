import { Image } from "@nextui-org/image";

interface ObstacleProps {
  x: number;
  y: number;
  image: string;
}

const Obstacle = ({ x, y, image }: ObstacleProps) => {
  return (
    <div
      className="absolute"
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <Image src={image} alt="Obstacle" width={50} height={50} />
    </div>
  );
};

export default Obstacle;
