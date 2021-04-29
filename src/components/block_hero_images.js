import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import GraphImg from "graphcms-image"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const section_vertical_padding = "0vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

const pageQuery = graphql`
  {
    gcms {
      blockHeroImages {
        images {
          id
          url
          handle
          width
          height
        }
        imagesMobile {
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
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  div {
    height: 100%;
    width: 100%;
  }

  img {
    object-fit: cover;
  }
`

const Section__hero = styled.section`
  padding: (${section_vertical_padding} / 2) ${section_horizontal_padding};
  min-height: calc(100vh + ${section_vertical_padding});
  position: relative;
  display: flex;
  overflow: hidden;

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
    top: 252%;
    left: 17%;
    font-size: clamp(80px, 13vw, 200px);
    /* font-family: "Alex Brush", serif; */
    font-family: "Amalfi Coast", serif;
    text-transform: none;
    color: white;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    z-index: -1;
  }
`

const Block_one_row_jewellery = () => {
  const {
    gcms: { blockHeroImages },
  } = useStaticQuery(pageQuery)

  useEffect(() => {
    gsap.from(".Section__hero__backgroundImg", {
      duration: 3,
      scale: 1.1,
      ease: "power2.out",
    })
  }, [])

  return (
    <>
      <Section__hero>
        <Styled_HeroImg>
          {/* conditional rendering - check screen width and set background image */}
          {typeof window !== "undefined" && window.innerWidth < 600 ? (
            <GraphImg
              className="Section__hero__backgroundImg"
              image={blockHeroImages[0].imagesMobile[0]}
              transforms={["quality=value:80"]}
              maxWidth={2000}
            />
          ) : (
            <GraphImg
              className="Section__hero__backgroundImg"
              image={blockHeroImages[0].images[0]}
              transforms={["quality=value:80"]}
              maxWidth={2000}
            />
          )}
        </Styled_HeroImg>
        <Styled_SiteContainer>
          <p class="Section__hero__heading">
            We are the memory{" "}
            <span class="Section__hero__heading--handwritten">makers</span>
          </p>
        </Styled_SiteContainer>
      </Section__hero>
    </>
  )
}

export default Block_one_row_jewellery
