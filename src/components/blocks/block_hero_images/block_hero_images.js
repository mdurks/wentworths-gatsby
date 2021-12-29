import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Styled_SiteContainer } from "../../../styles/commonStyles"
import { Styled_HeroImg, Section__hero } from "./block_hero_images.styles"

import GraphImg from "graphcms-image"
import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

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

const Block_hero_images = () => {
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
      duration: 1.25,
      delay: 0.75,
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
      duration: 1.25,
      delay: 1.25,
      opacity: 1,
      x: hero_heading_handwriting,
      ease: "power2.out",
    })
  }, [])

  return (
    <>
      <Section__hero ref={e => (gsap_section_hero = e)}>
        <Styled_HeroImg ref={e => (gsap_section_hero_img = e)}>
          <GraphImg
            className="Section__hero__backgroundImg"
            image={
              typeof window !== "undefined" && window.innerWidth < 600
                ? blockHeroImages[0].imagesMobile[0]
                : blockHeroImages[0].images[0]
            }
            transforms={["quality=value:80"]}
            maxWidth={2000}
          />
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

export default Block_hero_images
