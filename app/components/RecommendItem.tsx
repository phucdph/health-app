import React from "react";
import { Link } from "@remix-run/react";

interface RecommentItemProps {
  title: string;
  description: string;
}

const RecommendItem: React.FC<RecommentItemProps> = ({
  title,
  description,
}) => {
  return (
    <Link to={"#"}>
      <div className="flex h-36 cursor-pointer flex-col items-center justify-center bg-dark hover:bg-dark/80 text-center align-middle text-light transition-colors">
        <h4 className="max-w-[200px] text-[22px] text-c300">{title}</h4>
        <hr className="my-2 h-[1px] w-14 bg-light" />
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default React.memo(RecommendItem);
