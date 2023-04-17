import MenuItem from "~/components/MenuItem";
import m01 from "~/assets/images/m01.jpg";
import l03 from "~/assets/images/l03.jpg";
import d01 from "~/assets/images/d01.jpg";
import l01 from "~/assets/images/l01.jpg";
import l02 from "~/assets/images/l02.jpg";
import d02 from "~/assets/images/d02.jpg";
import s01 from "~/assets/images/s01.jpg";
import Button from "../Button";

export const menus = [
  {
    title: "05.21.Morning",
    src: m01,
  },
  {
    title: "05.21.Lunch",
    src: l03,
  },
  {
    title: "05.21.Dinner",
    src: d01,
  },
  {
    title: "05.21.Snack",
    src: l01,
  },
  {
    title: "05.20.Morning",
    src: m01,
  },
  {
    title: "05.20.Lunch",
    src: l02,
  },
  {
    title: "05.20.Dinner",
    src: d02,
  },
  {
    title: "05.21.Snack",
    src: s01,
  },
];

const MenuSection: React.FC = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2">
        {menus?.map((item, i) => (
          <MenuItem key={i} {...item} />
        ))}
      </div>

      <div className="mt-7 mb-11 text-center">
        <Button>記録をもっと見る</Button>
      </div>
    </>
  );
};

export default MenuSection;
