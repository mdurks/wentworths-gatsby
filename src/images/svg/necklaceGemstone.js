import React from "react"

export const Svg_necklaceGemstone = ({
  width,
  height,
  fill,
  fillGem,
  stroke,
  strokeWidth,
}) => {
  width = width || "27"
  height = height || "15"
  fill = fill || "#C6C6C6"
  fillGem = fillGem || "#959595"
  stroke = stroke || "#C6C6C6"
  strokeWidth = strokeWidth || "2"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.2" cy="6.7" r="1.6" fill={fill} />
      <circle cx="19.8" cy="6.7" r="1.6" fill={fill} />
      <circle cx="4.1" cy="4.9" r="1.6" fill={fill} />
      <circle cx="22.9" cy="4.9" r="1.6" fill={fill} />
      <circle cx="1.6" cy="2.4" r="1.6" fill={fill} />
      <circle cx="25.4" cy="2.4" r="1.6" fill={fill} />
      <circle
        cx="13.7"
        cy="7.8"
        r="5.7"
        fill={fillGem}
        stroke-linejoin="round"
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path
        d="m13.6 4.4 2-1 .4 2 1.1 2.4 1 1.8-2 .6-2.5 1-1.8 1-.6-2-1-2.4-.8-1.7 1.8-.7 2.4-1Z"
        stroke-linejoin="round"
        stroke={stroke}
        stroke-width={strokeWidth}
      />
    </svg>
  )
}
