import React from "react"

export const Svg_necklacePendant = ({
  width,
  height,
  fill,
  fillGem,
  stroke,
  strokeWidth,
}) => {
  width = width || "27"
  height = height || "30"
  fill = fill || "#C6C6C6"
  fillGem = fillGem || "#fff"
  stroke = stroke || "#C6C6C6"
  strokeWidth = strokeWidth || "2"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="5.6" cy="5.1" r="1.9" fill={fill} />
      <circle cx="21.4" cy="5.1" r="1.9" fill={fill} />
      <circle cx="9.1" cy="7.4" r="1.9" fill={fill} />
      <circle cx="18" cy="7.4" r="1.9" fill={fill} />
      <circle cx="1.9" cy="2.8" r="1.9" fill={fill} />
      <circle cx="25.1" cy="2.8" r="1.9" fill={fill} />
      <path
        d="M11.7 8c.2-.8.7-1.7 1.5-1.7h.8c.8 0 1 .7 1.5 1.7l.9 3.4c0 1-.7 1.7-1.5 1.7h-2.6c-.9 0-1.5-.8-1.5-1.7l1-3.4Z"
        fill={fill}
      />
      <path
        d="M19.5 21c0 4.1-2.7 7.3-5.8 7.2-3.1 0-5.8-3.2-5.8-7.3 0-4.2 2.7-7.3 5.8-7.2 3.1 0 5.8 3.2 5.8 7.3Z"
        fill={fillGem}
        stroke-linejoin="round"
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path
        d="m11.8 15.5 1.8-2.2 1.9 2.3h2.6v3.1l1.8 2.1-1.8 2.3v3.3h-2.6l-1.9 2.2-1.8-2.3-2.6-.2v-3l-1.7-2.4 1.8-2v-3.2h2.5Z"
        stroke-linejoin="round"
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path
        d="m11.1 18 .7-2.6 1.8 1.3 2.6 1.3 2 .7-1 2.2-1.1 3-.6 2.6-1.9-1.3-2.5-1.3-2-.9 1-2.2 1-2.9Z"
        stroke-linejoin="round"
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path
        d="m13.6 16.6 2-1.2.5 2.5 1 3 1 2.3-2 .8-2.5 1.2-1.9 1.2-.6-2.5-1-3-.9-2.2 2-.8 2.4-1.3Z"
        stroke-linejoin="round"
        stroke={stroke}
        stroke-width={strokeWidth}
      />
    </svg>
  )
}
