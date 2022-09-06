import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Link from "gatsby-plugin-transition-link"

import { globalSiteSettings } from "../../../common/globalVars"
import GraphImg from "graphcms-image"
import { Div__block_full_size_image } from "./block_full_size_image.styles"

import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const pageQuery = graphql`
  {
    gcms {
      blockFullSizeImages {
        products {
          id
          name
          slug
          productType
          categoryType
          blockFullImageComponent {
            id
            url
            width
            height
            handle
          }
        }
      }
    }
  }
`

const Block_one_row_jewellery = () => {
  const {
    gcms: { blockFullSizeImages },
  } = useStaticQuery(pageQuery)

  // console.log("blockFullSizeImages", blockFullSizeImages)

  const linkURL = `/${blockFullSizeImages[0].products[0].categoryType[0]}/${blockFullSizeImages[0].products[0].productType}/${blockFullSizeImages[0].products[0].slug}/`

  useEffect(() => {
    // scrolling zoom effect on image
    gsap.from(".block_full_size_image", {
      scrollTrigger: {
        // markers: true,
        trigger: ".block_full_size_imageWrapper",
        start: "top 112%",
        end: "110% bottom",
        scrub: true,
      },
      // duration: 2,
      scaleY: 1.3,
      scaleX: 1.6,
    })

    gsap.to(".block_full_size_image__descriptionWrapper", {
      scrollTrigger: {
        // markers: true,
        id: "sc_block_full_size_image__descriptionWrapper",
        trigger: ".block_full_size_imageWrapper",
        start: `top ${window.innerHeight - 150}`,
        end: "bottom bottom",
        scrub: 1,
        // toggleClass: { targets: ".block_full_size_imageWrapper", className: "fixDescription" },

        onEnter: () => {
          document
            .querySelector(".block_full_size_imageWrapper")
            .classList.add("fixDescription", "fixDescriptionFadeIn")
        },
        onLeaveBack: () => {
          document
            .querySelector(".block_full_size_imageWrapper")
            .classList.remove("fixDescription", "fixDescriptionFadeIn")
        },
        onLeave: () => {
          document
            .querySelector(".block_full_size_imageWrapper")
            .classList.remove("fixDescription")
        },
        onEnterBack: () => {
          document
            .querySelector(".block_full_size_imageWrapper")
            .classList.add("fixDescription")
        },
      },
      // y: window.innerHeight / 1.75,
    })

    if (window.innerWidth > 1024) {
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
          (e.pageY - window.scrollY) * mouseMoveParallaxTarget_yratio * -1 +
          "px"
      }
      mouseMoveParallaxTarget.addEventListener(
        "mousemove",
        mouseMoveParallaxTargetFunc
      )
    }

    // Show/Hide main nav when this component in central view
    gsap.from(".block_full_size_image", {
      scrollTrigger: {
        trigger: ".block_full_size_imageWrapper",
        // markers: true,
        start: "-60px top",
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

    // return function to kill timeline on dismount
    return () =>
      ScrollTrigger.getById(
        "sc_block_full_size_image__descriptionWrapper"
      ).kill(true)
  }, [])

  return (
    <>
      <Div__block_full_size_image className="block_full_size_imageWrapper">
        <Link to={linkURL}>
          {typeof window !== "undefined" && window.innerWidth < 600 ? (
            <GraphImg
              className="block_full_size_image"
              image={
                blockFullSizeImages[0].products[0].blockFullImageComponent[1]
              }
              transforms={["quality=value:80"]}
              maxWidth={2000}
              baseURI={globalSiteSettings.graphcmsImageBaseURI}
            />
          ) : (
            <GraphImg
              className="block_full_size_image"
              image={
                blockFullSizeImages[0].products[0].blockFullImageComponent[0]
              }
              transforms={["quality=value:80"]}
              maxWidth={2000}
              baseURI={globalSiteSettings.graphcmsImageBaseURI}
            />
          )}
          <div className="block_full_size_image__descriptionWrapper">
            {/* <span className="block_full_size_image__questionButon">?</span> */}
            <Link
              to={linkURL}
              className="block_full_size_image__link"
              onMouseOver={() => {
                document.querySelector(
                  ".block_full_size_image__link"
                ).style.width =
                  document.querySelector(
                    ".block_full_size_image__questionTextInner"
                  ).offsetWidth +
                  40 +
                  "px"
              }}
              onMouseOut={() => {
                document.querySelector(
                  ".block_full_size_image__link"
                ).style.width = "44px"
              }}
            >
              <span className="block_full_size_image__questionText">
                <span className="block_full_size_image__questionTextInner">
                  {blockFullSizeImages[0].products[0].name}
                </span>
              </span>
            </Link>
          </div>
        </Link>
      </Div__block_full_size_image>
    </>
  )
}

export default Block_one_row_jewellery
