import { Link } from "@remix-run/react";
import React from "react";
import type { IRecord } from "~/services/typings";

interface RecordItemProps {
  data: IRecord;
}

const RecordItem: React.FC<RecordItemProps> = (props) => {
  const { data } = props;
  return (
    <Link
      to={`#${data?.id}`}
      className="relative w-full h-full aspect-square cursor-pointer justify-center bg-c300 p-6 hover:brightness-90"
    >
      <img
        src={data?.image}
        alt={data?.title}
        className="w-full h-full grayscale object-cover"
      />
      <div className="absolute top-6 left-6 right-6 bottom-6 flex transform flex-col items-center justify-center bg-dark/50">
        <h4 className="w-max text-2xl text-c300">{data?.title}</h4>
        <p className="mt-3 h-[20px] w-[160px] bg-c400 text-center text-sm text-light">
          {data?.description}
        </p>
      </div>
    </Link>
  );
};

export default React.memo(RecordItem);
