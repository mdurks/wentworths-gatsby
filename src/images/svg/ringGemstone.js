import React from "react"

export const Svg_ringGemstone = ({ width, height, fill, fillRing }) => {
  width = width || "21"
  height = height || "25"
  fill = fill || "#B3B3B3"
  fillRing = fillRing || "#959595"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 24.4a10.2 10.2 0 1 0 0-20.5 10.2 10.2 0 0 0 0 20.5Zm0-2.1a8.1 8.1 0 1 0 0-16.2 8.1 8.1 0 0 0 0 16.2Z"
        fill={fill}
      />
      <path
        d="m2.8 3.5 7.7 7.6 7.7-7.6-2.4-2L13 .8H8.2l-3 .5-2.4 2Z"
        fill={fillRing}
      />
    </svg>
  )
}
