import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import GraphImg from "graphcms-image"
import { Div__block_full_size_image } from "./block_full_size_image.styles"

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

const Block_one_row_jewellery = () => {
  const {
    gcms: { blockFullSizeImages },
  } = useStaticQuery(pageQuery)

  let gsap__image = null

  useEffect(() => {
    // scrolling zoom effect on image
    gsap.from(".Section__hero__backgroundImg", {
      scrollTrigger: {
        trigger: gsap__image,
        // markers: true,
        start: "top 112%",
        scrub: 1,
      },
      // duration: 2,
      scale: 1.3,
    })

    // Mouse move hero image parallax
    const mouseMoveParallaxTarget = document.querySelector(
      ".block_full_size_image"
    )
    const mouseMoveParallaxTarget_xratio =
      (mouseMoveParallaxTarget.offsetWidth - window.innerWidth) /
      window.innerWidth
    const mouseMoveParallaxTarget_yratio =
      (window.innerHeight * 1.05 - window.innerHeight) / window.innerHeight

    const mouseMoveParallaxTargetFunc = e => {
      // console.log(e.pageX, e.pageY - window.scrollY)
      mouseMoveParallaxTarget.style.left =
        e.pageX * mouseMoveParallaxTarget_xratio * -1 + "px"
      mouseMoveParallaxTarget.style.top =
        (e.pageY - window.scrollY) * mouseMoveParallaxTarget_yratio * -1 + "px"
    }
    mouseMoveParallaxTarget.addEventListener(
      "mousemove",
      mouseMoveParallaxTargetFunc
    )

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
            className="Section__hero__backgroundImg block_full_size_image"
            image={blockFullSizeImages[0].images[1]}
            transforms={["quality=value:80"]}
            maxWidth={2000}
          />
        ) : (
          <GraphImg
            className="Section__hero__backgroundImg block_full_size_image"
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
