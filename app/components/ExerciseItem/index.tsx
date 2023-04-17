import { Link } from "@remix-run/react";
import React from "react";
import type { IExercise } from "~/services/typings";
import styles from "./ExerciseItem.module.css";

interface ExerciseItemProps {
  data: IExercise;
}

const ExerciseItem: React.FC<ExerciseItemProps> = (props) => {
  const { data } = props;
  return (
    <Link to={"#"}>
      <div
        className={`${styles["exercise-item"]} flex items-start justify-between border-b text-light`}
      >
        <div className="mb-2 text-base leading-none">
          <h4>{data?.name}</h4>
          <p className="text-c300">{data?.calorie}Kcal</p>
        </div>
        <p className="text-lg leading-none text-c300">{data?.time} min</p>
      </div>
    </Link>
  );
};

export default React.memo(ExerciseItem);
