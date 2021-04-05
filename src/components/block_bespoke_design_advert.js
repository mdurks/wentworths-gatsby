import React from "react"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import img_sketch_rings from "../images/misc/sketch-rings.jpg"
import img_sketch_book from "../images/misc/sketch-book.jpg"

const bp_max_mobile = "@media (max-width: 767px)"
const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const section_vertical_padding = "12vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

const Div__block_bespoke_design_advert = styled.div`
  padding: (${section_vertical_padding} / 2) ${section_horizontal_padding};
  min-height: calc(100vh + ${section_vertical_padding});
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 75px 0;
  text-align: center;
  background-color: #e5e3de;

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${bp_max_mobile} {
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

    ${bp_min_desktop} {
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

    ${bp_min_desktop} {
      position: absolute;
      top: -523%;
      left: 7%;
      width: 507px;
      height: 511px;
    }
  }

  .bespoke_design_heading1 {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 26px;
    text-transform: uppercase;
    font-family: "Playfair Display", serif;

    ${bp_min_desktop} {
      position: absolute;
      top: 170%;
      left: 46.5%;
      width: auto;
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
    color: #b49372;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    ${bp_min_desktop} {
      width: auto;
      position: absolute;
      top: 310%;
      left: 39%;
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

    ${bp_min_desktop} {
      position: absolute;
      top: 530%;
      left: 68%;
      width: auto;
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

    ${bp_min_desktop} {
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

const Block_bespoke_design_advert = () => {
  return (
    <>
      <Div__block_bespoke_design_advert>
        <Styled_SiteContainer>
          <img className="img_sketch_rings" src={img_sketch_rings} alt="" />
          <img className="img_sketch_book" src={img_sketch_book} alt="" />
          <p className="bespoke_design_heading1">Bespoke design</p>
          <p className="bespoke_design_heading2">bring your imagination</p>
          <p className="bespoke_design_heading3">in to reality</p>
          <a className="bespoke_design_link" href="/">
            View Bespoke Design
          </a>
        </Styled_SiteContainer>
      </Div__block_bespoke_design_advert>
    </>
  )
}

export default Block_bespoke_design_advert
