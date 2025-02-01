import { Image } from "@nextui-org/image";

interface ObjectProps {
  x: number;
  y: number;
  image: string;
}

const Object = ({ x, y, image }: ObjectProps) => {
  return (
    <div
      className="absolute"
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <Image src={image} alt="Object" width={50} height={50} />
    </div>
  );
};

export default Object;
