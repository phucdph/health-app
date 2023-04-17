import column1 from "~/assets/images/column-1.jpg";
import column2 from "~/assets/images/column-2.jpg";
import column3 from "~/assets/images/column-3.jpg";
import column4 from "~/assets/images/column-4.jpg";
import column5 from "~/assets/images/column-5.jpg";
import column6 from "~/assets/images/column-6.jpg";
import column7 from "~/assets/images/column-7.jpg";
import column8 from "~/assets/images/column-8.jpg";

import Button from "../Button";
import PostItem from "../PostItem";

const images = [
  column1,
  column2,
  column3,
  column4,
  column5,
  column6,
  column7,
  column8,
];

export const posts = Array.from({ length: 8 }, (_, i) => ({
  date: "2021.05.21",
  time: "23:25",
  image: images[i],
  title:
    "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメっておきたい魚を食べるメっておきたい魚を食べるメっておきたい魚を食べるメ",
  tags: ["魚料理", "#和食", "DHA"],
}));

const PostSection: React.FC = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-3">
        {posts?.map((item, i) => (
          <PostItem key={i} {...item} />
        ))}
      </div>

      <div className="mt-7 mb-11 text-center">
        <Button>コラムをもっと見る</Button>
      </div>
    </div>
  );
};

export default PostSection;
