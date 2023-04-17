import Button from "../Button";
import DiaryItem from "../DiaryItem";

export const diaries = Array.from({ length: 8 }, () => ({
  date: "2021.05.21",
  time: "23:25",
  title: "私の日記の記録が一部表示されます。",
  content:
    "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキス",
}));

const MyDiarySection: React.FC = () => {
  return (
    <div id="my_diary" className="pb">
      <h3 className="text-[22px]">MY DIARY</h3>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3">
        {diaries?.map((item, i) => (
          <DiaryItem key={i} {...item} />
        ))}
      </div>

      <div className="mt-7 mb-11 text-center">
        <Button>自分の日記をもっと見る</Button>
      </div>
    </div>
  );
};

export default MyDiarySection;
