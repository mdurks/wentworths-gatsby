import React from "react"

export const Svg_donut = ({ width, height, fill, stroke, strokeWidth }) => {
  width = width || "20"
  height = height || "20"
  fill = fill || "none"
  stroke = stroke || ""
  strokeWidth = strokeWidth || "2"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 20a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
      />
    </svg>
  )
}
