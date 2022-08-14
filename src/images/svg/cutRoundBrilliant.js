import React from "react"

export const Svg_curRoundBrilliant = ({
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
      <path
        d="M35.2 15.3 49.7 1l14.7 14.3h20.3v20.1L99 49 84.7 63.7v21H64.2L49.7 99l-15-14.3-20-1v-20L1 48.9l14.4-12.5V15.3h19.8Z"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="m29.9 31 5-16.4 14.7 8.1L70 31l15.2 4.2-7.5 14.4-8.8 19.8-4.5 15.9L49.6 77 30 69.4 14 64l7.6-14.3L30 31Z"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <path
        d="m49.1 22.2 15.4-7.6L69 30.4l8.8 19.2L85.2 64 69 69.4l-20 7.7-14.6 8.2-4.6-15.9-8.3-19.8-6.9-13.4L30 30.4l19-8.2Zm-14.3-7.6L30.1 4.2m34.4 10.4 4.8-10.7m16 31.3L96 30.8M85.3 63.9l10.5 5.9M64.4 85.3l4.3 11m-34.3-11L30 95.8M14 63.9l-9.9 5.8m10.6-33.5-11-5.1"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
      <circle
        cx="50"
        cy="50"
        r="49.5"
        fill={fill}
        stroke={stroke}
        stroke-width={strokeWidth}
        stroke-linejoin="round"
      />
    </svg>
  )
}
