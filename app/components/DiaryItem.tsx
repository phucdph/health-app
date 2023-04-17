import React from "react";

interface DiaryItemProps {
  date: string;
  time: string;
  title: string;
  content: string;
}

const DiaryItem: React.FC<DiaryItemProps> = (props) => {
  const { date, time, title, content } = props;
  return (
    <div>
      <div className="border-2 border-[#707070] p-4">
        <div className="mb-2 text-lg">
          <h4>{date}</h4>
          <h4>{time}</h4>
        </div>
        <div className="pb-2 text-sm">
          <p>{title}</p>
          <p className="line-clamp-5">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DiaryItem);
