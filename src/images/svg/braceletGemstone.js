import React from "react"

export const Svg_braceletGemstone = ({ width, height, fill }) => {
  width = width || "19"
  height = height || "20"
  fill = fill || "#C6C6C6"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.1" cy="16.9" r="2.1" fill={fill} />
      <circle cx="9.4" cy="3.1" r="2.1" fill={fill} />
      <circle cx="2.6" cy="12" r="2.1" fill={fill} />
      <circle cx="15.8" cy="8" r="2.1" fill={fill} />
      <circle cx="2.7" cy="7.7" r="2.1" fill={fill} />
      <circle cx="15.7" cy="12.3" r="2.1" fill={fill} />
      <circle cx="5.3" cy="4.4" r="2.1" fill={fill} />
      <circle cx="13.2" cy="15.6" r="2.1" fill={fill} />
      <circle cx="13.4" cy="4.5" r="2.1" fill={fill} />
      <circle cx="5.1" cy="15.5" r="2.1" fill={fill} />
    </svg>
  )
}
