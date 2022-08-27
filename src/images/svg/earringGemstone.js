import React from "react"

export const Svg_earringGemstone = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}) => {
  width = width || "18"
  height = height || "18"
  fill = fill || "#D7D7D7"
  stroke = stroke || "#959595"
  strokeWidth = strokeWidth || "2"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9"
        cy="9"
        r="8.5"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="m7 4.4 2-2 2.1 2H14v2.8L16 9l-2 2v3h-3l-2 2-2-2-2.8-.2V11l-2-2 2-1.8v-3H7Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
    </svg>
  )
}
