import { Link } from "@remix-run/react";
import React from "react";

export const menus = [
  {
    title: "会員登録",
    url: "#",
  },
  {
    title: "運営会社",
    url: "#",
  },
  {
    title: "利用規約",
    url: "#",
  },
  {
    title: "個人情報の取扱について",
    url: "#",
  },
  {
    title: "特定商取引法に基づく表記",
    url: "#",
  },
  {
    title: "お問い合わせ",
    url: "#",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="h-[128px] bg-text">
      <ul className="container mx-auto flex h-full items-center gap-[46px]">
        {menus?.map((item) => (
          <Link key={item.title} to={item.url}>
            <li className="text-xs text-light hover:underline">{item.title}</li>
          </Link>
        ))}
      </ul>
    </footer>
  );
};
export default Footer;
