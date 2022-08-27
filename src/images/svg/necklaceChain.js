import React from "react"

export const Svg_necklaceChain = ({
  width,
  height,
  fill,
  fillGem,
  stroke,
  strokeWidth,
}) => {
  width = width || "27"
  height = height || "11"
  fill = fill || "#C6C6C6"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7.2" cy="6" r="1.6" fill={fill} />
      <circle cx="19.8" cy="6" r="1.6" fill={fill} />
      <circle cx="10.1" cy="8" r="1.6" fill={fill} />
      <circle cx="13.5" cy="8.6" r="1.6" fill={fill} />
      <circle cx="16.8" cy="8" r="1.6" fill={fill} />
      <circle cx="4.1" cy="4.1" r="1.6" fill={fill} />
      <circle cx="22.9" cy="4.1" r="1.6" fill={fill} />
      <circle cx="1.6" cy="1.6" r="1.6" fill={fill} />
      <circle cx="25.4" cy="1.6" r="1.6" fill={fill} />
    </svg>
  )
}
