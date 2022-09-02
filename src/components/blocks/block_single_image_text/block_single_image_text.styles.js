import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

const section_vertical_padding = "10vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

export const Div__SIT = styled.div`
  /* min-height: 100vh; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0;

  ${css_breakpoints.min_desktop} {
    /* min-height: calc(100vh + ${section_vertical_padding}); */
    min-height: 1000px;
    padding: 75px 0;
  }

  section {
    position: relative;
  }

  h1 {
    margin: 5px 0 10px;
    font-size: 39px;
    line-height: 55px;
    font-family: "Playfair Display",serif;
    color: #a77711;
    letter-spacing: -1px;

    ${css_breakpoints.min_desktop} {
      margin: 0 0 30px;
      font-size: 65px;
      line-height: 80px;
      letter-spacing: -2px;
    }
  }

  .gsap__subTitle {
    margin: 0 0 30px;
    text-transform: uppercase;
    font-size: 25px;
    font-family: "Playfair Display", serif;
    line-height: 36px;
    color: black;

    ${css_breakpoints.min_desktop} {
      line-height: normal;
    }
  }

  p {
    margin-top: 25px;
  }

  img {
    width: 100%;
  }
`

export const Div__SIT__backgroundStrip = styled.div`
  width: 100%;
  background-color: #f9f6ee;
  padding: 10px 0 26px;

  ${css_breakpoints.min_desktop} {
    padding: 50px 0 70px;
  }
`

export const Img__SIT__img1 = styled.div`
  margin: 30px -15px -25px;

  ${css_breakpoints.min_desktop} {
    position: absolute;
    /* left: calc(40% - (326px / 2));
    top: calc(50% - (444px / 2)); */
    width: calc(50% - 40px);
    top: calc(50% + 20px);
    transform: translateY(-50%);
    max-height: 75vh;
    margin: 0;
    overflow: hidden;
  }

  div {
    width: 100%;
    height: 100%;
  }
`

export const Div__SIT__textGroup = styled.div`
  ${css_breakpoints.min_desktop} {
    position: relative;
    width: 50%;
    left: 50%;
    padding: 0 5%;
  }
`
