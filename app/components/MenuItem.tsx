import { Link } from "@remix-run/react";
import React from "react";
import type { IMenu } from "~/services/typings";

interface MenuItemProps {
  data: IMenu;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { data } = props;
  return (
    <Link to={"#"}>
      <div className="group relative w-full aspect-square cursor-pointer">
        <img
          src={data?.image}
          alt={data?.name}
          className="w-full h-full object-cover group-hover:blur-[2px] group-hover:brightness-90"
        />
        <h4 className="absolute bottom-0 left-0 bg-c300 p-2 text-light">
          {data?.name}
        </h4>
      </div>
    </Link>
  );
};

export default React.memo(MenuItem);
