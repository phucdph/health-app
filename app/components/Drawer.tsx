import { Link } from "@remix-run/react";
import CloseIcon from "./icons/CloseIcon";

export interface DrawerItem {
  title: string;
  url: string;
}

interface DrawerProps {
  visible?: boolean;
  onClose?: () => void;
  items?: DrawerItem[];
}

const Drawer = (props: DrawerProps) => {
  const { visible, onClose, items } = props;
  return visible ? (
    <div className="absolute top-4 right-0">
      <div
        className="ml-auto flex h-8 w-8 cursor-pointer items-center justify-center bg-dark"
        onClick={onClose}
      >
        <CloseIcon width={24} height={24} />
      </div>
      <div>
        {items?.map((item, i) => (
          <Link key={i} to={item.url}>
            <p className="flex h-[72px] items-center bg-gray px-8  text-lg text-light">
              {item.title}
            </p>
            <hr className="opacity-1 absolute h-[1px] w-full text-light opacity-[0.15] mix-blend-normal" />
          </Link>
        ))}
      </div>
    </div>
  ) : null;
};

export default Drawer;
