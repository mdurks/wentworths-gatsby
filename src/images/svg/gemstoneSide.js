import React from "react"

const Svg_gemstoneSide = ({ width, height, fill, stroke, strokeWidth }) => {
  width = width || "191"
  height = height || "142"
  fill = fill || "none"
  stroke = stroke || "black"
  strokeWidth = strokeWidth || "2"

  return (
    <svg
      fill="none"
      width={width}
      height={height}
      viewBox="0 0 191 142"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m1 37 95 104 94-104-29-28-36-7H68L30 9 1 37Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
        fill={fill}
      />
      <path
        d="m1 37 95 104-52-99-43-5Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="M96 44v97L44 42l52 2Zm0 0v97l52-99-52 2Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="M190 37 96 141l52-99 42-5ZM1 37 31 9l13 33-43-5Zm95 7L73 17 44 42l52 2Zm0 0 23-27 29 25-52 2Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="M73 17 31 9l13 33 29-25Zm23 27L73 17h46L96 44Zm65-35-42 8 29 25 13-33Zm29 28L161 9l-13 33 42-5Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="M73 17 31 9l36-7h57l37 7-42 8H73Z"
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
    </svg>
  )
}

export default Svg_gemstoneSide
