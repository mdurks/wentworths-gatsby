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

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${css_breakpoints.max_mobile} {
      padding: 510px 15px 0;
    }
  }

  .img_sketch_rings {
    position: absolute;
    top: -40px;
    right: 0;
    height: 187px;
    width: auto;
    background: white;
    border: 10px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(2.68deg);

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: -922%;
      left: 38%;
      width: 287px;
      height: 287px;
    }
  }

  .img_sketch_book {
    position: absolute;
    top: 150px;
    left: 0;
    height: 316px;
    width: auto;
    background: white;
    border: 10px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-7.38deg);

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
    width: calc(100vw - 20px);
    height: 100vh;
    /* outline: 1px solid blue; */
    overflow: hidden;
    perspective: 1400px;
  }
  .offscreen_right {
    position: absolute;
    left: 105%;
    top: 0;
    height: 287px;
    width: 287px;
    transform-style: preserve-3d;

    .gsap_scrolling_img {
      height: 287px;
      width: 287px;
      border: 10px solid white;
      /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    }

    > div {
      content: " ";
      position: absolute;
      top: 0;
      width: 287px;
      height: 287px;
      /* background-color: white; */
      background: linear-gradient(to bottom, #fdfbf7 0%, #cccac5 100%);
      transform: rotateY(180deg);
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
    padding: 10px 30px 13px;
    font-size: 19px;
    text-transform: uppercase;
    color: #965f27;
    text-decoration: none;
    background-color: #e5e3de;
    border-radius: 100px;
    border: 2px solid #b49372;
    transition: all ease 0.4s;

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: 760%;
      left: 64.5%;
      margin: 0;

      &:hover {
        background-color: #b49372;
        color: white;
      }
    }
  }
`
