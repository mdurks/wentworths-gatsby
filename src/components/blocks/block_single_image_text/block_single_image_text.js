import React from "react"
import { useEffect } from "react"

import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"

import { globalSiteSettings } from "../../../common/globalVars.js"

import {
  Div__SIT,
  Div__SIT__backgroundStrip,
  Img__SIT__img1,
  Div__SIT__textGroup,
} from "./block_single_image_text.styles.js"
import { Styled_SiteContainer } from "../../../styles/commonStyles"

import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const pageQuery = graphql`
  {
    gcms {
      welcomes {
        heroHeading
        heroSubheading
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
        supportingImage {
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

const Block_single_image_text = () => {
  const {
    gcms: { welcomes },
  } = useStaticQuery(pageQuery)

  let gsap__Div__SIT = null
  let gsap__SIT__backgroundStrip = null
  let gsap__SIT__siteContainer = null
  let gsap__title = null
  let gsap__subTitle = null
  let gsap__introMessage = null
  let gsap__Img__SIT__img1 = null

  useEffect(() => {
    //
    // gsap__Div__SIT.style.minHeight = gsap__Div__SIT.offsetHeight + "px"
    //
    //
    // Parallax effect for desktop img1 - causing warning about "GSAP target null not found"
    //
    let block_single_image_parallax = () => {
      if (window.innerWidth > 600) {
        gsap.to(".block_single_parallax_image", {
          scrollTrigger: {
            trigger: ".block_single_parallax_image",
            // markers: true,
            //start: "top 90%", // colorBox, viewport start location
            start: "50% 50%",
            // end: () => gsap__Div__SIT.offsetTop * 0.9,
            scrub: 1,
          },
          y: `+=${window.innerHeight / 8}px`,
          // y: "-=30%",
        })
      }
    }

    let tl_gsap = gsap.timeline({
      scrollTrigger: {
        trigger: gsap__SIT__backgroundStrip,
        start: "-5% 90%",
        // toggleActions: "play none none reset",
        // markers: true,
        // end: `+=${viewportWidth}`,
        // scrub: 1,
        // pin: true,
        // anticipatePin: 1,
      },
      onComplete: block_single_image_parallax,
    })

    tl_gsap.from(gsap__SIT__backgroundStrip, {
      duration: 2,
      opacity: 0,
      ease: "power2.out",
    })

    tl_gsap.from(
      gsap__title,
      {
        duration: 2,
        opacity: 0,
        y: 100,
        ease: "power2.out",
      },
      "-=1.95"
    )

    // tl_gsap.from(
    //   gsap__subTitle,
    //   {
    //     duration: 1.25,
    //     opacity: 0,
    //     y: 50,
    //     ease: "power2.out",
    //   },
    //   "-=1.5"
    // )

    tl_gsap.from(
      gsap__introMessage,
      {
        duration: 1.15,
        opacity: 0,
        y: 50,
        ease: "power2.out",
      },
      "-=1.25"
    )

    if (window.innerWidth <= 600) {
      gsap.from(gsap__Img__SIT__img1, {
        scrollTrigger: {
          trigger: gsap__Img__SIT__img1,
          // markers: true,
          start: "top bottom",
        },
        duration: 2,
        opacity: 0,
        // y: "+=100px",
        y: `+=${window.innerHeight / 4}px`,
      })
    } else {
      tl_gsap.from(
        gsap__Img__SIT__img1,
        {
          duration: 2.5,
          y: "+=100",
          height: 0,
          opacity: 0,
          ease: "power3.inOut",
        },
        "-=2"
      )
    }

    // return function to kill timeline on dismount
    return () => tl_gsap.kill()
  }, [])

  return (
    <>
      <Div__SIT ref={e => (gsap__Div__SIT = e)}>
        <Div__SIT__backgroundStrip ref={e => (gsap__SIT__backgroundStrip = e)}>
          <Styled_SiteContainer ref={e => (gsap__SIT__siteContainer = e)}>
            <Div__SIT__textGroup>
              <h1 className="gsap__title" ref={e => (gsap__title = e)}>
                {welcomes[0].heroSubheading}
              </h1>
              {/* <p className="gsap__subTitle" ref={e => (gsap__subTitle = e)}>
                {welcomes[0].heroSubheading}
              </p> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: welcomes[0].firstIntroMessage.html,
                }}
                ref={e => (gsap__introMessage = e)}
              ></div>
            </Div__SIT__textGroup>

            <Img__SIT__img1
              className="block_single_parallax_image"
              ref={e => (gsap__Img__SIT__img1 = e)}
            >
              <GraphImg
                image={welcomes[0].heroImage}
                transforms={["quality=value:80"]}
                maxWidth={577}
                baseURI={globalSiteSettings.graphcmsImageBaseURI}
              />
            </Img__SIT__img1>
          </Styled_SiteContainer>
        </Div__SIT__backgroundStrip>
      </Div__SIT>
    </>
  )
}

export default Block_single_image_text
