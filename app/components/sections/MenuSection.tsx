import MenuItem from "~/components/MenuItem";
import Button from "../Button";
import type { IMenu } from "~/services/typings";

interface IProps {
  menus?: IMenu[];
}

const MenuSection: React.FC<IProps> = (props) => {
  const { menus } = props;
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-2">
        {menus?.map((item, i) => (
          <MenuItem key={item.id} data={item} />
        ))}
      </div>

      <div className="mt-7 mb-11 text-center">
        <Button>記録をもっと見る</Button>
      </div>
    </>
  );
};

export default MenuSection;
