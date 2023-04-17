import { Link } from "@remix-run/react";
import React from "react";

interface RecordItemProps {
  title: string;
  src: string;
  description: string;
  id: string;
}

const RecordItem: React.FC<RecordItemProps> = ({
  description,
  src,
  title,
  id,
}) => {
  return (
    <Link
      to={`#${id}`}
      className="relative w-full h-full aspect-square cursor-pointer justify-center bg-c300 p-6 hover:brightness-90"
    >
      <img
        src={src}
        alt={title}
        className="w-full h-full grayscale object-cover"
      />
      <div className="absolute top-6 left-6 right-6 bottom-6 flex transform flex-col items-center justify-center bg-dark/50">
        <h4 className="w-max text-2xl text-c300">{title}</h4>
        <p className="mt-3 h-[20px] w-[160px] bg-c400 text-center text-sm text-light">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default React.memo(RecordItem);
