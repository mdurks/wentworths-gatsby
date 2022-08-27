import React from "react"

export const Svg_ringPearl = ({
  width,
  height,
  fill,
  fillPearlShadow,
  fillPearl,
}) => {
  width = width || "16"
  height = height || "20"
  fill = fill || "#B3B3B3"
  fillPearlShadow = fillPearlShadow || "#D7D7D7"
  fillPearl = fillPearl || "#fff"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8 19.5a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm0-1.7A6.3 6.3 0 1 0 8 5.1a6.3 6.3 0 0 0 0 12.7Z"
        fill={fill}
      />
      <circle cx="8" cy="4.7" r="4.7" fill={fill} />
      <circle cx="8" cy="4.7" r="3.5" fill={fillPearl} />
      <path
        d="M5.8 6.7c-1-1.2 1.2-1 2.6-2 1.3-1 1.3-2.8 2.2-1.6 1 1.2.6 3-.8 4-1.3 1-3.1.8-4-.4Z"
        fill={fillPearlShadow}
      />
    </svg>
  )
}
