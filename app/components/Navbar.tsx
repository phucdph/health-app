import { Link } from "@remix-run/react";
import { useState } from "react";
import Drawer from "./Drawer";
import ChallengeIcon from "./icons/ChallengeIcon";
import CountIcon from "./icons/CountIcon";
import InfoIcon from "./icons/InfoIcon";
import MemoIcon from "./icons/MemoIcon";
import MenuIcon from "./icons/MenuIcon";
import NavItem from "./NavItem";
import logo from "../assets/images/logo.png";

const items = [
  {
    title: "自分の記録",
    url: "",
  },
  {
    title: "体重グラフ",
    url: "",
  },
  {
    title: "目標",
    url: "",
  },
  {
    title: "選択中のコース",
    url: "",
  },
  {
    title: "コラム一覧",
    url: "",
  },
  {
    title: "設定",
    url: "",
  },
];

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-text shadow-lg">
        <div className="container relative mx-auto h-[64px]">
          <div className="flex h-full items-center justify-between">
            <Link to={"/"} className="-mb-2 px-4">
              <img
                src={logo}
                width={109}
                height={35}
                className="object-contain"
                alt="Healthy"
              />
            </Link>

            <div className="flex items-center">
              <NavItem
                title="自分の記録"
                to="/record"
                icon={<MemoIcon />}
              />
              <NavItem title="チャレンジ" icon={<ChallengeIcon />} />
              <NavItem
                title="お知らせ"
                to="/column"
                icon={
                  <>
                    <div className="relative">
                      <InfoIcon />
                      <div className="absolute -top-1 -right-5">
                        <CountIcon color="#EA6C00" />
                      </div>
                    </div>
                  </>
                }
              />
              <div
                className="relative ml-6 cursor-pointer"
                onClick={() => setVisible(true)}
              >
                <MenuIcon />
              </div>

              <Drawer
                visible={visible}
                items={items}
                onClose={() => setVisible(false)}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
