import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

const section_vertical_padding = "0vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

export const Styled_HeroImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  min-height: 100vh;

  ${css_breakpoints.min_desktop} {
    min-height: auto;
  }

  div {
    height: 100%;
    width: 100%;
  }

  img {
    object-fit: cover;
  }
`

export const Section__hero = styled.section`
  padding: (${section_vertical_padding} / 2) ${section_horizontal_padding};
  min-height: calc(100vh + ${section_vertical_padding});
  position: relative;
  display: flex;
  overflow: hidden;

  .Section__hero__heading {
    position: absolute;
    top: 29%;
    left: 0;
    margin: 0;
    font-size: clamp(26px, 5vw, 52px);
    font-family: "Playfair Display", serif;
    text-transform: uppercase;
    color: black;
    /* text-shadow: 0px 4px 4px rgb(0 0 0 / 50%); */
    opacity: 0;
    z-index: 1;

    ${css_breakpoints.min_desktop} {
      top: 26%;
      left: 27%;
    }
  }

  .Section__hero__heading--handwritten {
    position: absolute;
    top: -54%;
    left: 23%;
    /* font-size: clamp(60px, 13vw, 200px); */
    /* font-family: "Amalfi Coast", serif; */
    /* text-transform: none; */
    /* color: white; */
    /* text-shadow: 0px 2px 3px rgb(0 0 0 / 30%); */
    /* opacity: 0; */
    z-index: -1;

    ${css_breakpoints.min_desktop} {
      top: -341%;
      left: 22%;
      font-size: clamp(80px, 13vw, 200px);
    }

    svg {
      display: block;
      width: auto;
      height: clamp(215px, 58vw, 733px);
      filter: drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.3));
    }
  }
`
