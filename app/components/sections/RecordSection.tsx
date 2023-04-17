import MyRecommend1 from "~/assets/images/MyRecommend-1.jpg";
import MyRecommend2 from "~/assets/images/MyRecommend-2.jpg";
import MyRecommend3 from "~/assets/images/MyRecommend-3.jpg";
import RecordItem from "../RecordItem";

export const records = [
  {
    title: "BODY RECORD",
    src: MyRecommend1,
    description: "自分のカラダの記録",
    id: "body_record",
  },
  {
    title: "MY EXERCISE",
    src: MyRecommend2,
    description: "自分の運動の記録",
    id: "my_exercise",
  },
  {
    title: "MY DIARY",
    src: MyRecommend3,
    description: "自分の日記",
    id: "my_diary",
  },
];

const RecordSection: React.FC = () => {
  return (
    <div className="!py-14">
      <div className="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-12">
        {records?.map((item) => (
          <RecordItem key={item.title} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RecordSection;
