import type { IconProps } from "./typings";

const CountIcon = ({
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
      <circle cx="8" cy="8" r="8" fill={color} />
      <g clipPath="url(#clip0_3633_418)">
        <path
          d="M8.98544 4.72727V12H8.10476V5.65057H8.06214L6.28658 6.82955V5.93466L8.10476 4.72727H8.98544Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_3633_418">
          <rect
            width="16"
            height="14.5"
            fill="white"
            transform="translate(0 2)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CountIcon;
