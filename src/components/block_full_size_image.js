import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import GraphImg from "graphcms-image"
import styled from "styled-components"

import { gsap, ScrollTrigger } from "gsap/all"

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
    position: absolute;
    /*
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    */
    width: 100%;
    height: 100%;

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
    //
    //
    // Show/Hide main nav when this component in central view
    gsap.from(".Section__hero__backgroundImg", {
      scrollTrigger: {
        trigger: gsap__image,
        // markers: true,
        start: "-25% top",
        end: "75% top",
        onEnter: () => {
          document.body.classList.add("mainNav--shrink--transparent")
        },
        onLeaveBack: () => {
          document.body.classList.remove("mainNav--shrink--transparent")
        },
        onLeave: () => {
          document.body.classList.remove("mainNav--shrink--transparent")
        },
        onEnterBack: () => {
          document.body.classList.add("mainNav--shrink--transparent")
        },
      },
    })
  }, [])

  return (
    <>
      <Div__block_full_size_image ref={e => (gsap__image = e)}>
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
