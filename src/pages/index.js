import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"
import styled from "styled-components"

// import Layout from "../components/layout"
// import Snipcart from "../components/snipcart"
import Image_text_box from "../components/image_text_box"
import Block_hero_images from "../components/block_hero_images"
import Block_single_image_text from "../components/block_single_image_text"
import Block_one_row_jewellery from "../components/block_one_row_jewellery"
import Block_full_size_image from "../components/block_full_size_image"
import Block_bespoke_design_advert from "../components/block_bespoke_design_advert"
import { Styled_SiteContainer } from "../styles/commonStyles"

import two_diamond_rings_bluebackground_large from "../images/general-product/two-diamond-rings-bluebackground-large.jpg"

const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const section_vertical_padding = "0vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

const pageQuery = graphql`
  {
    gcms {
      welcomes {
        heroHeading
        firstIntroMessage {
          html
        }
        heroImage {
          id
          url
          handle
          width
          height
        }
      }
    }
  }
`

const Styled_HeroImg = styled.div`
  position: relative;
  height: 200px;
  overflow: hidden;

  > div {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  > div > div {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media (min-width: 600px) {
    height: 400px;
  }
  @media (min-width: 950px) {
    height: 600px;
  }
`

const Section__hero = styled.section`
  padding: (${section_vertical_padding} / 2) ${section_horizontal_padding};
  min-height: calc(100vh + ${section_vertical_padding});
  position: relative;
  display: flex;
  overflow: hidden;

  .Section__hero__backgroundImg {
    object-fit: cover;
    // z-index: -1;
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

  .Section__hero__heading {
    position: absolute;
    top: 26%;
    left: 27%;
    margin: 0;
    font-size: clamp(24px, 5vw, 52px);
    font-family: "Playfair Display", serif;
    text-transform: uppercase;
    color: black;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    z-index: 1;
  }

  .Section__hero__heading--handwritten {
    position: absolute;
    top: 220%;
    left: 26%;
    font-size: clamp(80px, 13vw, 220px);
    font-family: "Alex Brush", serif;
    text-transform: none;
    color: white;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    z-index: -1;
  }
`

const IndexPage = () => {
  const {
    gcms: { welcomes },
  } = useStaticQuery(pageQuery)

  useEffect(() => {
    document.body.style.backgroundColor = "#fff"
    document.getElementsByTagName("nav")[0].style = ""
  }, [])

  return (
    <>
      <Block_hero_images />

      <Block_single_image_text />

      {/* <Image_text_box /> */}

      <Block_one_row_jewellery />

      <Block_full_size_image />

      <Block_bespoke_design_advert />

      {/* <Styled_HeroImg>
        <div>
          <GraphImg
            image={welcomes[0].heroImage}
            transforms={["quality=value:80"]}
            maxWidth={1200}
          />
        </div>
      </Styled_HeroImg> */}
    </>
  )
}

export default IndexPage
