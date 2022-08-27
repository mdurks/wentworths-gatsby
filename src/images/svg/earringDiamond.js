import React from "react"

export const Svg_earringDiamond = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}) => {
  width = width || "20"
  height = height || "20"
  fill = fill || "#fff"
  stroke = stroke || "#959595"
  strokeWidth = strokeWidth || "2"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="10"
        cy="10"
        r="8.5"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="M7.3 3.8 10 1.1l2.6 2.5h3.6v3.7l2.6 2.4-2.6 2.7v3.7h-3.6L10 18.8l-2.7-2.6-3.7-.1v-3.6L1.2 9.8l2.6-2.2V3.8h3.5Z"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="m6.4 6.6.9-3 2.6 1.5 3.7 1.5 2.7.7L15 10l-1.6 3.6-.8 2.8L9.9 15l-3.5-1.4-2.9-1L5 10l1.5-3.3Z"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="m9.8 5 2.8-1.4.8 2.9L15 9.9l1.3 2.6-2.9 1-3.6 1.4-2.6 1.4-.8-2.8-1.5-3.6-1.2-2.4 2.7-1L9.8 5Z"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
    </svg>
  )
}
