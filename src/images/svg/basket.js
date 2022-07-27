import React from "react"

const Svg_basket = ({ width, height, fill, stroke, strokeWidth }) => {
  width = width || "22"
  height = height || "22"
  fill = fill || "none"
  stroke = stroke || "white"
  strokeWidth = strokeWidth || "1.96"

  return (
    <svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 27 25"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.18921 7.18926C8.18921 4.42038 9.33184 1 13.9024 1C18.4729 1 18.7994 4.42038 18.7994 7.18926"
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path
        d="M24.9021 23.5208H2L4.08201 6.24512H22.5599L24.9021 23.5208Z"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
      />
    </svg>
  )
}

export default Svg_basket
