import React from "react";
import { Link } from "@remix-run/react";

interface PostItemProps {
  title: string;
  image: string;
  tags: string[];
  time: string;
  date: string;
}

const PostItem: React.FC<PostItemProps> = ({
  image,
  date,
  tags,
  time,
  title,
}) => {
  return (
    <Link to={"#"} className="mb-4">
      <div className="relative h-36 w-full cursor-pointer">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <h4 className="absolute bottom-0 left-0 h-6 w-36 bg-c300 text-center text-light">
          {date}
          <span>{time}</span>
        </h4>
      </div>
      <div>
        <h4 className="font-light line-clamp-2 mt-1">{title}</h4>
        {tags?.map((item) => (
          <span key={item} className="mr-4 text-xs text-c400">
            #{item}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default React.memo(PostItem);
