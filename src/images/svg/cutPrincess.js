import React from "react"

export const Svg_curPrincess = ({
  width,
  height,
  fill,
  stroke,
  strokeWidth,
}) => {
  width = width || "20"
  height = height || "20"
  fill = fill || "none"
  stroke = stroke || ""
  strokeWidth = strokeWidth || "2"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1"
        width="98"
        height="98"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path
        d="m20 50.4 2.3-28.1L50.4 20l28.2 2.3 2.3 28.1-2.3 28.2-28.2 4.6-28.1-4.6L20 50.4Z"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path
        d="M12 78.6V22.3h10.3V11.9h56.3v10.4h11l-.7 56.3H78.6v10.3H22.3V78.6H11.9Z"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
      />
      <path
        d="M12 22.3 3 3l19.3 9 28.1 8 29.3-8L99 3 89 22.3l-8.1 27.6 8 28.7L99 99 78.6 89l-28.2-5.8-28.1 5.7L3 99l9-19.3 8-29.3-8-28.1Z"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
      />
    </svg>
  )
}
