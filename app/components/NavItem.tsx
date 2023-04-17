import React from "react";
import { Link } from "@remix-run/react";

interface NavigateItemProps {
  title: string;
  icon: React.ReactNode;
  to?: string;
}

const NavItem: React.FC<NavigateItemProps> = ({
  icon,
  title,
  to = "#",
}: NavigateItemProps) => {
  return (
    <Link
      className="flex cursor-pointer items-center bg-transparent px-3 py-1 rounded-md hover:bg-stone-600 transition-colors"
      to={to}
    >
      {icon}
      <h3 className="ml-2 text-light">{title}</h3>
    </Link>
  );
};

export default React.memo(NavItem);
