
import ExerciseItem from "../ExerciseItem";

export const exercises = Array.from({ length: 40 }, () => ({
  title: "家事全般（立位・軽い",
  calorie: 26,
  time: 10,
}));


const MyExerciseSection: React.FC = () => {
  return (
    <div id="my_exercise" className="pt-0 pb-14">
    <div className="bg-text p-6">
      <div className=" mb-3 flex items-center text-light">
        <h4>MY EXERCISE</h4>
        <p className="ml-3 text-2xl">2021.05.21</p>
      </div>
      <ul className="flex h-[192px] flex-wrap gap-x-[40px] gap-y-2 overflow-y-scroll">
        {exercises?.map((item, i) => (
          <li key={i} className="w-[416px]">
            <ExerciseItem {...item} />
          </li>
        ))}
      </ul>
    </div>
  </div>
  );
};

export default MyExerciseSection;
