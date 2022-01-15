import styled, { css } from "styled-components"

const section_vertical_padding = "12vh" // add this value in the scrolltrigger start point
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

export const Div__block_full_size_image = styled.div`
  position: relative;
  min-height: calc(100vh + ${section_vertical_padding});
  overflow: hidden;
  /* padding: calc(${section_vertical_padding} / 2) ${section_horizontal_padding}; */
  border-bottom: 10px solid white;

  .graphcms-image-outer-wrapper {
    position: absolute !important;
    height: 100%;
    width: 100%;
  }

  .block_full_size_image {
    position: absolute;
    /*
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    */
    width: 105%;
    height: 105%;

    div {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 2500px) {
      max-width: 2500px;
      // width: $section_content_max_width;
    }
  }
`
