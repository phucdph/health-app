
import RecommendItem from "../RecommendItem";

const recommends = [
  {
    title: "RECOMMENDED COLUMN",
    description: "オススメ",
  },
  {
    title: "RECOMMENDED DIET",
    description: "ダイエット",
  },
  {
    title: "RECOMMENDED BEAUTY",
    description: "美容",
  },
  {
    title: "RECOMMENDED HEALTH",
    description: "健康",
  },
];

const RecommendSection: React.FC = () => {
  return (
    <div className="!py-14">
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1  gap-8">
      {recommends?.map((item) => (
        <RecommendItem key={item.title} {...item} />
      ))}
    </div>
  </div>
  );
};

export default RecommendSection;
