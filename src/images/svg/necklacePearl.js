import React from "react"

export const Svg_necklacePearl = ({
  width,
  height,
  fill,
  fillPearl,
  fillPearlEdge,
  fillShadow,
}) => {
  width = width || "27"
  height = height || "14"
  fill = fill || "#C6C6C6"
  fillPearl = fillPearl || "#fff"
  fillPearlEdge = fillPearlEdge || "#C6C6C6"
  fillShadow = fillShadow || "#D7D7D7"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 27 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse cx="7.2" cy="6.8" rx="1.6" ry="1.5" fill={fill} />
      <ellipse cx="19.8" cy="6.8" rx="1.6" ry="1.5" fill={fill} />
      <circle cx="4.1" cy="4.9" r="1.5" fill={fill} />
      <circle cx="22.9" cy="4.9" r="1.5" fill={fill} />
      <circle cx="1.6" cy="2.4" r="1.6" fill={fill} />
      <circle cx="25.4" cy="2.4" r="1.6" fill={fill} />
      <ellipse cx="13.7" cy="7.4" rx="6" ry="5.9" fill={fillPearlEdge} />
      <ellipse cx="13.7" cy="7.4" rx="4.6" ry="4.5" fill={fillPearl} />
      <path
        d="M10.8 10c-1.1-1.4 1.6-1.3 3.3-2.6 1.7-1.3 1.7-3.5 2.9-2 1.1 1.6.7 3.9-1 5.2-1.7 1.2-4 1-5.2-.5Z"
        fill={fillShadow}
      />
    </svg>
  )
}
