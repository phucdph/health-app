import type { IExercise, IMenu } from "./typings";
import m01 from "~/assets/images/m01.jpg";
import l03 from "~/assets/images/l03.jpg";
import d01 from "~/assets/images/d01.jpg";
import l01 from "~/assets/images/l01.jpg";
import l02 from "~/assets/images/l02.jpg";
import d02 from "~/assets/images/d02.jpg";
import s01 from "~/assets/images/s01.jpg";

export const getExercises = async () => {
  const exercises: IExercise[] = Array.from({ length: 40 }, (_, i) => ({
    id: i.toString(),
    name: "家事全般（立位・軽い",
    calorie: 26,
    time: 10,
  }));
  return exercises;
};

export const getMenus = async () => {
  const menus: IMenu[] = [
    {
      id: "1",
      name: "05.21.Morning",
      image: m01,
    },
    {
      id: "2",
      name: "05.21.Lunch",
      image: l03,
    },
    {
      id: "3",
      name: "05.21.Dinner",
      image: d01,
    },
    {
      id: "4",
      name: "05.21.Snack",
      image: l01,
    },
    {
      id: "5",
      name: "05.20.Morning",
      image: m01,
    },
    {
      id: "6",
      name: "05.20.Lunch",
      image: l02,
    },
    {
      id: "7",
      name: "05.20.Dinner",
      image: d02,
    },
    {
      id: "8",
      name: "05.21.Snack",
      image: s01,
    },
  ];
  return menus;
};
