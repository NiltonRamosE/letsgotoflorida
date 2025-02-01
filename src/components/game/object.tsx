import { Image } from "@nextui-org/image";

interface ObjectProps {
  x: number;
  y: number;
  image: string;
  id: string;
}

const Object = ({ x, y, image, id }: ObjectProps) => {
  return (
    <div
      id={id}
      className="absolute"
      style={{ top: `${y}px`, left: `${x}px` }}
    >
      <Image src={image} alt="Object" width={50} height={50} />
    </div>
  );
};

export default Object;
