import type { IExercise } from "~/services/typings";
import ExerciseItem from "../ExerciseItem";

interface Props {
  exercises?: IExercise[];
}

const MyExerciseSection: React.FC<Props> = (props) => {
  const { exercises } = props;
  return (
    <div id="my_exercise" className="pt-0 pb-14">
      <div className="bg-text p-6">
        <div className=" mb-3 flex items-center text-light">
          <h4>MY EXERCISE</h4>
          <p className="ml-3 text-2xl">2021.05.21</p>
        </div>
        <ul className="flex h-[192px] flex-wrap gap-x-[40px] gap-y-2 overflow-y-scroll">
          {exercises?.map((exercise, i) => (
            <li key={exercise.id} className="w-[416px]">
              <ExerciseItem data={exercise} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyExerciseSection;
