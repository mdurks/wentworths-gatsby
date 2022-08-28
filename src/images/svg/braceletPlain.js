import React from "react"

export const Svg_braceletPlain = ({ width, height, fill }) => {
  width = width || "21"
  height = height || "26"
  fill = fill || "#B3B3B3"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 25.2a10.2 10.2 0 1 0 0-20.5 10.2 10.2 0 0 0 0 20.5Zm0-2.1a8.1 8.1 0 1 0 0-16.2 8.1 8.1 0 0 0 0 16.2Z"
        fill={fill}
      />
    </svg>
  )
}
