import { Link } from "@remix-run/react";
import React from "react";
import styles from "./ExerciseItem.module.css";

interface ExerciseItemProps {
  title: string;
  time: number;
  calorie: number;
}

const ExerciseItem: React.FC<ExerciseItemProps> = ({
  calorie,
  time,
  title,
}) => {
  return (
    <Link to={"#"}>
      <div
        className={`${styles["exercise-item"]} flex items-start justify-between border-b text-light`}
      >
        <div className="mb-2 text-base leading-none">
          <h4>{title}</h4>
          <p className="text-c300">{calorie}Kcal</p>
        </div>
        <p className="text-lg leading-none text-c300">{time} min</p>
      </div>
    </Link>
  );
};

export default React.memo(ExerciseItem);
