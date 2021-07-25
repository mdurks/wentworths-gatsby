import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import GraphImg from "graphcms-image"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"
import css_breakpoints from "../common/css_breakpoints"

import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

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
  min-height: 100vh;

  ${css_breakpoints.min_desktop} {
    min-height: auto;
  }

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
    top: 29%;
    left: 0;
    margin: 0;
    font-size: clamp(26px, 5vw, 52px);
    font-family: "Playfair Display", serif;
    text-transform: uppercase;
    color: black;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    opacity: 0;
    z-index: 1;

    ${css_breakpoints.min_desktop} {
      top: 26%;
      left: 27%;
    }
  }

  .Section__hero__heading--handwritten {
    position: absolute;
    top: 127%;
    left: 30%;
    font-size: clamp(60px, 13vw, 200px);
    font-family: "Amalfi Coast", serif;
    text-transform: none;
    color: white;
    text-shadow: 0px 4px 4px rgb(0 0 0 / 50%);
    opacity: 0;
    z-index: -1;

    ${css_breakpoints.min_desktop} {
      top: 252%;
      left: 27%;
      font-size: clamp(80px, 13vw, 200px);
    }
  }
`

const Block_one_row_jewellery = () => {
  const {
    gcms: { blockHeroImages },
  } = useStaticQuery(pageQuery)

  let gsap_section_hero = null
  let gsap_section_hero_img = null

  useEffect(() => {
    let viewportWidth = window.innerWidth

    gsap.from(".Section__hero__backgroundImg", {
      duration: 3,
      scale: 1.1,
      ease: "power2.out",
    })
    gsap.to(gsap_section_hero_img, {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        toggleActions: "play none none none",
        // markers: true,
        scrub: true,
      },
      y: `+=${window.innerHeight / 4}`,
    })

    gsap.to(".Section__hero__heading", {
      duration: 3,
      delay: 1,
      opacity: 1,
      x: "10%",
      ease: "power2.out",
    })
    gsap.to(".Section__hero__heading", {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        toggleActions: "play none none none",
        // markers: true,
        scrub: true,
      },
      y: `+=${window.innerHeight / 3}`,
    })

    let hero_heading_handwriting = viewportWidth < 768 ? "-7%" : "-7%"

    gsap.to(".Section__hero__heading--handwritten", {
      duration: 3,
      delay: 2,
      opacity: 1,
      x: hero_heading_handwriting,
      ease: "power2.out",
    })
  }, [])

  return (
    <>
      <Section__hero ref={e => (gsap_section_hero = e)}>
        <Styled_HeroImg ref={e => (gsap_section_hero_img = e)}>
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
