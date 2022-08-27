import React from "react"

export const Svg_earringPearl = ({
  width,
  height,
  fill,
  fillEdge,
  fillShadow,
}) => {
  width = width || "18"
  height = height || "18"
  fill = fill || "#fff"
  fillEdge = fillEdge || "#C6C6C6"
  fillShadow = fillShadow || "#D7D7D7"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9" cy="9" r="9" fill={fillEdge} />
      <circle cx="9" cy="9" fill="#fff" r="6.8" />
      <path
        d="M4.7 13c-1.7-2.3 2.4-2 5-4 2.5-2 2.6-5.3 4.3-3 1.7 2.3 1 5.8-1.5 7.7-2.6 2-6 1.7-7.8-.7Z"
        fill={fillShadow}
      />
    </svg>
  )
}
