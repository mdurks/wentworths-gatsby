import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import GraphImg from "graphcms-image"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import { gsap, ScrollTrigger } from "gsap/all"

import img_model_earring_couch from "../images/general-product/model-earring-couch.jpg"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const pageQuery = graphql`
  {
    gcms {
      blockFullSizeImages {
        images {
          url
          id
          handle
          height
          width
        }
      }
    }
  }
`

const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const section_vertical_padding = "12vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

const Div__block_full_size_image = styled.div`
  padding: (${section_vertical_padding} / 2) ${section_horizontal_padding};
  min-height: calc(100vh + ${section_vertical_padding});
  position: relative;
  overflow: hidden;

  .graphcms-image-outer-wrapper {
    position: absolute !important;
    height: 100%;
    width: 100%;
  }

  .Section__hero__backgroundImg {
    /* object-fit: cover; */
    position: absolute;
    /*
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    */
    width: 100%;
    height: 100%;

    div {
      width: 100%;
      height: 100%;
    }

    @media (min-width: 2500px) {
      // width of image
      max-width: 2500px;
      // width: $section_content_max_width;
    }
  }
`

const Block_one_row_jewellery = () => {
  const {
    gcms: { blockFullSizeImages },
  } = useStaticQuery(pageQuery)

  let gsap__image = null

  useEffect(() => {
    gsap.from(".Section__hero__backgroundImg", {
      scrollTrigger: {
        trigger: gsap__image,
        // markers: true,
        start: "top 80%",
        scrub: 1,
      },
      // duration: 2,
      scale: 1.3,
    })
  }, [])

  return (
    <>
      <Div__block_full_size_image ref={e => (gsap__image = e)}>
        {/* <img
          className="Section__hero__backgroundImg"
          src={img_model_earring_couch}
          alt=""
        /> */}
        {/* <GraphImg
          className="Section__hero__backgroundImg"
          image={blockFullSizeImages[0].images[0]}
          transforms={["quality=value:80"]}
          maxWidth={2000}
        /> */}
        {typeof window !== "undefined" && window.innerWidth < 600 ? (
          <GraphImg
            className="Section__hero__backgroundImg"
            image={blockFullSizeImages[0].images[1]}
            transforms={["quality=value:80"]}
            maxWidth={2000}
          />
        ) : (
          <GraphImg
            className="Section__hero__backgroundImg"
            image={blockFullSizeImages[0].images[0]}
            transforms={["quality=value:80"]}
            maxWidth={2000}
          />
        )}
      </Div__block_full_size_image>
    </>
  )
}

export default Block_one_row_jewellery
