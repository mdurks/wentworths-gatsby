import React from "react"

export const Svg_ringEternity = ({
  width,
  height,
  fill,
  fillStone,
  fillStoneInner,
}) => {
  width = width || "23"
  height = height || "24"
  fill = fill || "#B3B3B3"
  fillStone = fillStone || "#5A5A5A"
  fillStoneInner = fillStoneInner || "#fff"

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 23 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.4.3h-1.8l-.8.9v1.7l.8.8h1.8l.8-.8V1.2l-.8-.9Z"
        fill={fillStone}
      />
      <path
        d="M12.2.7h-1.4l-.6.7v1.3l.6.7h1.4l.6-.7V1.4l-.6-.7Z"
        fill={fillStoneInner}
      />
      <path
        d="M12.4 19.9h-1.8l-.8.8v1.7l.8 1h1.8l.8-1v-1.7l-.8-.8Z"
        fill={fillStone}
      />
      <path
        d="M12.2 20.3h-1.4l-.6.6v1.4l.6.6h1.4l.6-.6v-1.4l-.6-.6Z"
        fill={fillStoneInner}
      />
      <path
        d="M23 12.7V11l-.9-.8h-1.7l-.8.8v1.8l.8.8h1.7l.9-.8Z"
        fill={fillStone}
      />
      <path
        d="M22.6 12.5v-1.4l-.7-.6h-1.3l-.6.6v1.4l.6.6H22l.7-.6Z"
        fill={fillStoneInner}
      />
      <path
        d="M3.4 12.7V11l-.8-.8H.9L0 11v1.8l.9.8h1.7l.8-.8Z"
        fill={fillStone}
      />
      <path
        d="M3 12.5v-1.4l-.6-.6H1l-.7.6v1.4l.7.6h1.3l.6-.6Z"
        fill={fillStoneInner}
      />
      <path
        d="M4 3 2.7 4.3v1.2L4 6.7h1l1.4-1.2-.1-1.2L5.2 3H4Z"
        fill={fillStone}
      />
      <path
        d="m4.2 3.5-1 1v.9l1 .9H5l1-1v-.9l-1-.9h-.8Z"
        fill={fillStoneInner}
      />
      <path
        d="m17.9 16.9-1.4 1.3.1 1.1 1.2 1.2 1.2.1 1.3-1.3V18L19 17h-1Z"
        fill={fillStone}
      />
      <path d="m18 17.3-1 1v.9l1 1h.8l1-1v-1l-1-.9H18Z" fill={fillStoneInner} />
      <path
        d="M20.3 4.3 19 3h-1.2l-1.2 1.3v1.2l1.3 1.3H19l1.2-1.3V4.3Z"
        fill={fillStone}
      />
      <path
        d="m19.9 4.5-1-1h-1l-.9 1v.8l1 1h.9l1-1v-.8Z"
        fill={fillStoneInner}
      />
      <path
        d="M6.5 18.2 5 16.9H4l-1.2 1.2v1.2L4 20.6h1.2l1.2-1.3v-1.1Z"
        fill={fillStone}
      />
      <path d="m6 18.3-1-1h-.9l-1 1v.9l1 1h1l.9-1v-.9Z" fill={fillStoneInner} />
      <path
        d="M1.2 6.6.5 8.3l.5 1 1.6.7 1-.4.8-1.7-.5-1-1.6-.7-1 .4Z"
        fill={fillStone}
      />
      <path
        d="M1.5 7 1 8.1l.4.9 1.2.5.8-.4L4 8l-.4-.8-1.2-.5-.9.3Z"
        fill={fillStoneInner}
      />
      <path
        d="m19.3 14-.7 1.7.5 1.1 1.6.7 1-.4.8-1.8-.5-1-1.6-.7-1 .4Z"
        fill={fillStone}
      />
      <path
        d="m19.6 14.4-.6 1.3.4.8 1.2.5.9-.3.5-1.3-.3-.8-1.3-.5-.8.3Z"
        fill={fillStoneInner}
      />
      <path
        d="M16.7 1.5 15 .8l-1 .5-.7 1.6.4 1.1 1.7.7 1.1-.5.6-1.6-.4-1Z"
        fill={fillStone}
      />
      <path
        d="m16.4 1.8-1.3-.5-.8.4-.5 1.2.3.8 1.3.6.8-.4.5-1.2-.3-.9Z"
        fill={fillStoneInner}
      />
      <path
        d="M9.3 19.6 7.6 19l-1.1.5-.6 1.6.4 1 1.7.8 1-.5.7-1.6-.4-1Z"
        fill={fillStone}
      />
      <path
        d="m9 19.9-1.4-.5-.8.3-.5 1.3.3.8 1.3.5.8-.3.5-1.2-.3-.9Z"
        fill={fillStoneInner}
      />
      <path
        d="m8 .8-1.8.7-.4 1.2.7 1.5 1 .5L9.3 4l.4-1L9 1.2 8 .8Z"
        fill={fillStone}
      />
      <path
        d="m7.9 1.3-1.3.5-.3.9.5 1.2.8.4 1.3-.6.3-.8-.5-1.2-.8-.4Z"
        fill={fillStoneInner}
      />
      <path
        d="m15.5 18.9-1.8.7-.4 1.1.7 1.6 1 .5 1.8-.7.4-1.1-.7-1.6-1-.5Z"
        fill={fillStone}
      />
      <path
        d="m15.4 19.3-1.3.6-.3.8.5 1.3.8.3 1.3-.5.3-.9-.5-1.2-.8-.4Z"
        fill={fillStoneInner}
      />
      <path
        d="m22.5 8.3-.7-1.8-1.1-.4-1.6.7-.5 1 .7 1.8 1.1.4 1.6-.7.5-1Z"
        fill={fillStone}
      />
      <path
        d="M22 8.2 21.5 7l-.9-.3-1.2.5-.4.8.6 1.3.8.3 1.2-.5.4-.8Z"
        fill={fillStoneInner}
      />
      <path
        d="M4.4 15.8 3.7 14l-1.1-.4-1.6.7-.5 1 .7 1.8 1.1.4 1.6-.7.5-1Z"
        fill={fillStone}
      />
      <path
        d="m4 15.7-.6-1.3-.8-.3-1.2.5-.4.8.5 1.3.9.3 1.2-.5.4-.8Z"
        fill={fillStoneInner}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.5 22a10.1 10.1 0 1 0 0-20.3 10.1 10.1 0 0 0 0 20.3Zm0-2.1a8 8 0 1 0 0-16.2 8 8 0 0 0 0 16.2Z"
        fill={fill}
      />
    </svg>
  )
}
