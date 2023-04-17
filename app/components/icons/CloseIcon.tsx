import type { IconProps } from "./typings";

const CloseIcon = ({
  width = 32,
  height = 32,
  color = "#FF963C",
}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect opacity="0.01" width="32" height="32" stroke={color} />
      <path d="M7 7L26 26" stroke={color} strokeWidth="3" />
      <path d="M7 26L26 7" stroke={color} strokeWidth="3" />
    </svg>
  );
};

export default CloseIcon;
