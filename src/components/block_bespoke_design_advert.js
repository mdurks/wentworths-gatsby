import React from "react"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import img_sketch_rings from "../images/misc/sketch-rings.jpg"
import img_sketch_book from "../images/misc/sketch-book.jpg"

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
  }

  .img_sketch_rings {
    position: absolute;
    top: -922%;
    left: 38%;
    width: 287px;
    height: 287px;
    background: white;
    border: 10px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-2.68deg);
  }

  .img_sketch_book {
    position: absolute;
    top: -523%;
    left: 7%;
    width: 507px;
    height: 511px;
    background: white;
    border: 10px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-7.38deg);
  }

  .bespoke_design_heading1 {
    position: absolute;
    top: 170%;
    left: 46.5%;
    font-size: 26px;
    text-transform: uppercase;
    font-family: "Playfair Display", serif;
  }

  .bespoke_design_heading2 {
    position: absolute;
    top: 310%;
    left: 39%;
    font-size: 71px;
    font-family: "Playfair Display", serif;
    letter-spacing: -1px;
    color: #b49372;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .bespoke_design_heading3 {
    position: absolute;
    top: 530%;
    left: 68%;
    font-size: 26px;
    text-transform: uppercase;
    font-family: "Playfair Display", serif;
  }

  .bespoke_design_link {
    position: absolute;
    top: 760%;
    left: 64.5%;
    padding: 10px 30px 13px;
    font-size: 19px;
    text-transform: uppercase;
    color: #965f27;
    text-decoration: none;
    border-radius: 100px;
    border: 2px solid #b49372;
    transition: all ease 0.4s;

    &:hover {
      background-color: #b49372;
      color: white;
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
