import { Link } from "@remix-run/react";
import styles from "./CategoryItem.module.css";
import React from "react";

interface CategoryItemProps {
  title: string;
  icon: React.ReactNode;
}

const CategoryItem: React.FC<CategoryItemProps> = (props) => {
  const { title, icon } = props;
  return (
    <Link
      className={`${styles["category-item"]} w-full h-full p-8 aspect-square flex flex-col justify-center items-center cursor-pointer hover:brightness-90`}
      to={"#"}
    >
      {icon}
      <h4 className="text-xl text-light">{title}</h4>
    </Link>
  );
};

export default React.memo(CategoryItem);
