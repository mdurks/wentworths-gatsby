import React from "react"

export const Svg_necklaceDiamond = ({
  width,
  height,
  fill,
  fillGem,
  stroke,
  strokeWidth,
}) => {
  width = width || "27"
  height = height || "14"
  fill = fill || "#C6C6C6"
  fillGem = fillGem || "#fff"
  stroke = stroke || "#C6C6C6"
  strokeWidth = strokeWidth || "2"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.2" cy="6" r="1.6" fill={fill} />
      <circle cx="19.8" cy="6" r="1.6" fill={fill} />
      <circle cx="4.1" cy="4.1" r="1.6" fill={fill} />
      <circle cx="22.9" cy="4.1" r="1.6" fill={fill} />
      <circle cx="1.6" cy="1.6" r="1.6" fill={fill} />
      <circle cx="25.4" cy="1.6" r="1.6" fill={fill} />
      <circle
        cx="13.7"
        cy="7.1"
        r="5.7"
        fill={fillGem}
        stroke-linejoin="round"
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path
        d="M11.9 2.8 13.7 1l1.8 1.8H18v2.5l1.8 1.6L18 8.8v2.5h-2.5l-1.8 1.8-1.9-1.8H9.3V8.7L7.7 6.9l1.7-1.5V2.8H12Z"
        stroke-linejoin="round"
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path
        d="m11.2 4.7.6-2 1.9 1 2.5 1 1.9.5L17 7l-1 2.5-.6 2-1.8-1-2.5-1-2-.7 1-1.8 1-2.3Z"
        stroke-linejoin="round"
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path
        d="m13.6 3.6 2-1 .4 2L17.1 7l1 1.8-2 .7-2.5 1-1.8 1-.6-2-1-2.5-.8-1.6 1.8-.8 2.4-1Z"
        stroke-linejoin="round"
        stroke={stroke}
        stroke-width={strokeWidth}
      />
    </svg>
  )
}
