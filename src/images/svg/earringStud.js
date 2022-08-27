import React from "react"

export const Svg_earringStud = ({
  width,
  height,
  fillGem,
  fill,
  stroke,
  strokeWidth,
}) => {
  width = width || "30"
  height = height || "20"
  fillGem = fillGem || "#fff"
  fill = fill || "#959595"
  stroke = stroke || "#959595"
  strokeWidth = strokeWidth || "2"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.3 4.1 9 11l6-8.4L12.6.8 10 .6 5.8 1 3.2 2 1.3 4Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="M1.3 4.1 9 11 4.4 4H1.3Zm6.9-.2.8 7L4.4 4h3.8Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="m8.2 3.9.8 7 3-7.6-3.8.6ZM15 2.5 9 11l3-7.6 3-.8ZM1.3 4.1 3.2 2l1.2 2H1.3Zm6.9-.2L6.3 2 4.4 4h3.8Zm0 0 1.5-2.2L12 3.3l-3.8.6Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="M6.3 2H3.2l1.2 2 2-2Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="M8.2 3.9 6.3 2l3.4-.4-1.5 2.2ZM12.7.8l-3 .9L12 3.3l.7-2.5ZM15 2.5 12.7.8 12 3.3l3-.8Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="M6.3 2H3.2l2.6-1L9.9.6l2.8.2-3 .9-3.4.4Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="M14.5 16.2c.1.7-2 2.2-4.6 2.5-2.6.3-4.9-.7-5-1.4-.1-1.3 2-1.5 4.7-1.9 2.6-.3 4.8-.5 5 .8Z"
        fill={fill}
      />
      <path d="m8 10 1 .9.8-1 .7 6.3-1.8.2-.8-6.4Z" fill={fill} />
      <path
        d="m15.8 2.6 6 8.3L29.5 4l-2-2.3-2.4-.8-4.2-.4-2.8.2-2.3 1.8Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="m15.8 2.6 6 8.3-3-7.6-3-.7Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="m22.6 3.9-.8 7-3-7.6 3.8.6Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="m22.6 3.9-.8 7L26.4 4h-3.8Zm6.9.2L21.8 11l4.6-7h3ZM15.8 2.6 18 .8l.7 2.5-3-.7Zm6.8 1.3L21 1.7l-2.3 1.6 3.8.6Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="M22.6 3.9 24.5 2l1.9 2-3.8-.2Zm-1.5-2.2-3-1 .7 2.6 2.3-1.6Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="M22.6 3.9 21 1.7l3.4.4-2 1.8Zm5-2.1-3.1.3 1.9 2 1.2-2.3Zm1.9 2.3-1.9-2.3-1.2 2.3h3Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="m21.1 1.7-3-1 2.7-.1L25 1l2.6.8-3.1.3-3.4-.4Z"
        fill={fillGem}
        stroke={stroke}
        stroke-linejoin="round"
        stroke-width={strokeWidth}
      />
      <path
        d="M25.9 17.3c0 .7-2.4 1.7-5 1.4-2.7-.3-4.7-1.8-4.6-2.5.1-1.3 2.3-1 5-.8 2.6.3 4.7.6 4.6 1.9Z"
        fill={fill}
      />
      <path d="m21 9.8.7 1 1-.7-.7 6.3-1.8-.2.7-6.4Z" fill={fill} />
    </svg>
  )
}
