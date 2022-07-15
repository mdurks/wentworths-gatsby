import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

const section_vertical_padding = "0vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

export const Div__block_bespoke_design_advert = styled.div`
  position: relative;
  padding: (${section_vertical_padding} / 2) ${section_horizontal_padding};
  min-height: calc(100vh + ${section_vertical_padding});
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 75px 0; */
  text-align: center;
  background-color: #e5e3de;
  overflow: hidden;

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${css_breakpoints.max_mobile} {
      padding: 10px 15px 0;
    }
  }

  .finalImageOne {
    display: none;

    ${css_breakpoints.min_tablet} {
      display: block;
      position: absolute;
      top: -40px;
      right: 0;
      height: 187px;
      width: auto;
      background: white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0);
      transform: rotate(2.68deg);
      transform-style: preserve-3d;
    }

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: -922%;
      left: 38%;
      width: 287px;
      height: 287px;
    }

    .graphcms-image-outer-wrapper {
      z-index: 1 !important;
    }

    .graphcms-image-wrapper {
      border: 10px solid white;
    }

    .finalImageOne_backface {
      display: none;

      ${css_breakpoints.min_tablet} {
        display: block;
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to bottom, #fdfbf7 0%, #cccac5 100%);
      }
    }
  }

  .finalImageTwo {
    display: none;

    ${css_breakpoints.min_tablet} {
      display: block;
      position: absolute;
      top: 150px;
      left: 0;
      height: 316px;
      width: auto;
      background: white;
      border: 10px solid white;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0);
      transform: rotate(-7.38deg);
    }
    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: -523%;
      left: 7%;
      width: 507px;
      height: 511px;
    }
  }

  // -------------------------------

  // GSAP Animation

  .bespoke_design_gsap_scrolling_image_container {
    position: absolute;
    width: calc(100% + 30px);
    height: 100vh;
    /* outline: 1px solid blue; */
    overflow: hidden;
    perspective: 1400px;

    ${css_breakpoints.min_desktop} {
      width: calc(100vw - 20px);
    }
  }

  .offscreen_right {
    position: absolute;
    left: 105%;
    top: 0;
    height: 287px;
    width: 287px;
    transform-style: preserve-3d;

    .gsap_scrolling_img {
      height: 150px;
      width: 150px;
      border: 5px solid white;
      /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */

      ${css_breakpoints.min_desktop} {
        height: 287px;
        width: 287px;
        border: 10px solid white;
      }
    }

    > div {
      content: " ";
      position: absolute;
      top: 0;
      width: 150px;
      height: 150px;
      /* background-color: white; */
      background: linear-gradient(to bottom, #fdfbf7 0%, #cccac5 100%);
      transform: rotateY(180deg);

      ${css_breakpoints.min_desktop} {
        height: 287px;
        width: 287px;
      }
    }
  }

  // -------------------------------

  .bespoke_design_heading1 {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 26px;
    text-transform: capitalize;
    font-family: "Playfair Display", serif;

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: 140%;
      left: 46.5%;
      width: auto;
      font-size: 36px;
    }
  }

  .bespoke_design_heading2 {
    position: relative;
    width: 100%;
    margin: 10px 0 25px;
    text-align: center;
    font-size: clamp(45px, 4vw, 71px);
    line-height: clamp(50px, 4vw, 30px);
    font-family: "Playfair Display", serif;
    letter-spacing: -1px;
    text-transform: uppercase;
    color: #a77711;
    /* text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.35); */

    ${css_breakpoints.min_desktop} {
      width: 68%;
      position: absolute;
      top: 310%;
      left: 33%;
      margin: 0;
    }
  }

  .bespoke_design_heading3 {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 26px;
    text-transform: uppercase;
    font-family: "Playfair Display", serif;

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: 530%;
      left: 68%;
      width: auto;
      font-size: 36px;
    }
  }

  .bespoke_design_link {
    position: relative;
    margin: 50px 0 0;
    padding: 11px 30px 12px;
    font-size: 19px;
    text-transform: uppercase;
    text-decoration: none;
    background-color: #b3924c;
    border: 2px solid #b3924c;
    color: white;

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: 830%;
      left: 62.5%;
      margin: 0;
    }
  }
`
