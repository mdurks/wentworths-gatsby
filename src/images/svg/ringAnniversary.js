import React from "react"

export const Svg_ringAnniversary = ({
  width,
  height,
  fill,
  fillStone,
  fillStoneInner,
}) => {
  width = width || "22"
  height = height || "24"
  fill = fill || "#B3B3B3"
  fillStone = fillStone || "#5A5A5A"
  fillStoneInner = fillStoneInner || "#fff"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 .5H9.7l-1 1v2l1 1h2.1l1-1v-2l-1-1Z" fill={fillStone} />
      <path
        d="M11.6 1.1H10l-.6.7V3l.6.7h1.5l.6-.7V1.8l-.6-.7Z"
        fill={fillStoneInner}
      />
      <path
        d="M2.2 3.7.6 5.2l.1 1.4L2.1 8h1.4L5 6.5V5.1L3.4 3.7H2.2Z"
        fill={fillStone}
      />
      <path d="m2.4 4.4-1 1v1l1 .9h.9l1-1v-1l-1-.9h-1Z" fill={fillStoneInner} />
      <path
        d="m21 5.2-1.5-1.5h-1.3l-1.4 1.4v1.4L18.1 8h1.4L21 6.6V5.2Z"
        fill={fillStone}
      />
      <path d="m20.4 5.4-1-1h-1l-1 1v.9l1 1h1l1-1v-.9Z" fill={fillStoneInner} />
      <path
        d="m17 2-2-1-1.3.6-.7 1.8.4 1.3 2 .8 1.3-.5.7-1.9L17 2Z"
        fill={fillStone}
      />
      <path
        d="M16.4 2.4 15 1.8l-.8.4-.6 1.3.4.9 1.4.6.8-.4.5-1.3-.3-.9Z"
        fill={fillStoneInner}
      />
      <path
        d="m6.7 1.1-2 .9-.4 1.3L5 5l1.3.6 2-.9.4-1.3L8 1.7l-1.3-.6Z"
        fill={fillStone}
      />
      <path
        d="m6.7 1.8-1.5.6-.3.9.6 1.3.8.4 1.5-.6.3-.9-.6-1.3-.8-.4Z"
        fill={fillStoneInner}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.9 23.6a10.2 10.2 0 1 0 0-20.4 10.2 10.2 0 0 0 0 20.4Zm0-2.5a7.8 7.8 0 1 0 0-15.6 7.8 7.8 0 0 0 0 15.6Z"
        fill={fill}
      />
    </svg>
  )
}
