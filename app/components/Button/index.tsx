import React from "react";
import styles from "./Button.module.css";

interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  return <button className={`${styles.btn} hover:brightness-95`} {...props} />;
};

export default Button;
