import CategoryItem from "../CategoryItem";
import CupIcon from "../icons/CupIcon";
import KnifeIcon from "../icons/KnifeIcon";

const categories = [
  {
    title: "Morning",
    icon: <KnifeIcon width={54} height={54} color="#FFFFFF" />,
  },
  {
    title: "Lunch",
    icon: <KnifeIcon width={54} height={54} color="#FFFFFF" />,
  },
  {
    title: "Dinner",
    icon: <KnifeIcon width={54} height={54} color="#FFFFFF" />,
  },
  {
    title: "Snack",
    icon: <CupIcon width={54} height={54} color="#FFFFFF" />,
  },
];

const CategorySection: React.FC = () => {
  return (
    <div className="py-12 grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-1 gap-2">
      {categories?.map((item) => (
        <CategoryItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default CategorySection;
