import { Link } from "@remix-run/react";
import React from "react";

interface MenuItemProps {
  title: string;
  src?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ src, title }) => {
  return (
    <Link to={"#"}>
      <div className="group relative w-full aspect-square cursor-pointer">
        <img src={src} alt={title} className="w-full h-full object-cover group-hover:blur-[2px] group-hover:brightness-90" />
        <h4 className="absolute bottom-0 left-0 bg-c300 p-2 text-light">
          {title}
        </h4>
      </div>
    </Link>
  );
};

export default React.memo(MenuItem);
