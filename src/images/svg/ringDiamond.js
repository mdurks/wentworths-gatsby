import React from "react"

export const Svg_ringDiamond = ({ width, height, fill, fillRing }) => {
  width = width || "21"
  height = height || "26"
  fill = fill || "#B3B3B3"
  fillRing = fillRing || "#fff"

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
      <path
        d="m2.8 3.9 7.7 8.6 7.7-8.6-2.4-2.3L13 1H8.2l-3 .6-2.4 2.3Z"
        fill={fill}
      />
      <path
        d="m5.7 4.3 4.7 5.4 4.7-5.4L13.7 3l-1.8-.4H9L7.1 3 5.7 4.3Z"
        fill={fillRing}
      />
    </svg>
  )
}
