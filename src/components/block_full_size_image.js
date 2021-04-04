import React from "react"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import img_model_earring_couch from "../images/general-product/model-earring-couch.jpg"

const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const section_vertical_padding = "0vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

const Div__block_full_size_image = styled.div`
  padding: (${section_vertical_padding} / 2) ${section_horizontal_padding};
  min-height: calc(100vh + ${section_vertical_padding});
  position: relative;

  .Section__hero__backgroundImg {
    object-fit: cover;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;

    @media (min-width: 2500px) {
      // width of image
      max-width: 2500px;
      // width: $section_content_max_width;
    }
  }
`

const Block_one_row_jewellery = () => {
  return (
    <>
      <Div__block_full_size_image>
        <img
          className="Section__hero__backgroundImg"
          src={img_model_earring_couch}
          alt=""
        />
      </Div__block_full_size_image>
    </>
  )
}

export default Block_one_row_jewellery
