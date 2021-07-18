import React from "react"
import { useEffect } from "react"

import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"

import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const bp_min_tablet = "@media (min-width: 768px)"
const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const section_vertical_padding = "10vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

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

const Div__SIT = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${bp_min_desktop} {
    min-height: calc(100vh + ${section_vertical_padding});
    padding: 75px 0;
  }

  section {
    position: relative;
  }

  h1 {
    position: relative;
    margin: 50px 0 50px;
    font-size: clamp(54px, 6vw, 98px);
    /* text-transform: uppercase; */
    font-family: "Amalfi Coast", serif;
    color: #83674d;

    ${bp_min_desktop} {
      top: -54px;
      left: -20px;
      margin: 0 0 30px;
    }
  }

  .gsap__subTitle {
    margin: 0 0 30px;
    text-transform: uppercase;
    font-size: 25px;
    font-family: "Playfair Display", serif;
    line-height: 36px;
    color: black;
    ${bp_min_desktop} {
      line-height: normal;
    }
  }

  p {
    margin-top: 25px;
    color: #766f5d;
  }

  img {
    width: 100%;
  }
`

const Div__SIT__backgroundStrip = styled.div`
  width: 100%;
  background-color: #f9f6ee;
  padding: 10px 0 20px;

  ${bp_min_desktop} {
    padding: 10px 0 70px;
  }
`

const Img__SIT__img1 = styled.div`
  margin: 30px 0 0;

  ${bp_min_desktop} {
    position: absolute;
    /* left: calc(40% - (326px / 2));
    top: calc(50% - (444px / 2)); */
    width: calc(50% - 40px);
    top: calc(50% + 30px);
    transform: translateY(-50%);
    max-height: 80vh;
    margin: 0;
    overflow: hidden;
  }

  div {
    width: 100%;
    height: 100%;
  }
`

// const Img__SIT__img2 = styled.div`
//   ${bp_min_desktop} {
//     position: absolute;
//     /* left: calc(59% - (356px / 2));
//     top: calc(95% - (211px / 2)); */
//     overflow: hidden;
//     left: 84%;
//     bottom: -33%;
//     width: 249px;
//     height: 165px;
//     z-index: 1;
//   }

//   div {
//     width: 100%;
//     height: 100%;
//   }
// `

const Div__SIT__textGroup = styled.div`
  ${bp_min_desktop} {
    position: relative;
    width: 50%;
    left: 50%;
    padding: 0 5%;
  }
`

const Block_single_image_text = () => {
  const {
    gcms: { welcomes },
  } = useStaticQuery(pageQuery)

  let tl_gsap = gsap.timeline()
  let gsap__Div__SIT = null
  let gsap__SIT__backgroundStrip = null
  let gsap__SIT__siteContainer = null
  let gsap__title = null
  let gsap__subTitle = null
  let gsap__introMessage = null
  let gsap__Img__SIT__img1 = null
  // let gsap__Img__SIT__img2 = null

  useEffect(() => {
    //
    gsap__Div__SIT.style.minHeight = gsap__Div__SIT.offsetHeight + "px"
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
            scrub: 1.5,
          },
          y: `+=${window.innerHeight / 8}px`,
          // y: "-=30%",
        })
      }
    }

    let tl_gsap = gsap.timeline({
      scrollTrigger: {
        trigger: gsap__SIT__backgroundStrip,
        start: "-5% 85%",
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
      // scrollTrigger: {
      //   trigger: gsap__SIT__backgroundStrip,
      //   // markers: true,
      //   start: "top 80%",
      // },
      duration: 2,
      opacity: 0,
      ease: "power2.out",
    })

    tl_gsap.from(
      gsap__title,
      {
        // scrollTrigger: {
        //   trigger: gsap__SIT__siteContainer,
        //   // markers: true,
        //   start: "top 60%",
        // },
        duration: 2,
        opacity: 0,
        y: 40,
        ease: "power2.out",
      },
      "-=1.5"
    )

    tl_gsap.from(
      gsap__subTitle,
      {
        // scrollTrigger: {
        //   trigger: gsap__SIT__siteContainer,
        //   // markers: true,
        //   start: "top 60%",
        // },
        duration: 1,
        opacity: 0,
        y: 40,
        ease: "power2.out",
      },
      "-=1.5"
    )

    tl_gsap.from(
      gsap__introMessage,
      {
        // scrollTrigger: {
        //   trigger: gsap__SIT__siteContainer,
        //   // markers: true,
        //   start: "top 60%",
        // },
        duration: 1,
        opacity: 0,
        y: 40,
        ease: "power2.out",
      },
      "-=1"
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
                {welcomes[0].heroHeading}
              </h1>
              <p className="gsap__subTitle" ref={e => (gsap__subTitle = e)}>
                {welcomes[0].heroSubheading}
              </p>
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
              />
            </Img__SIT__img1>

            {/* {typeof window !== "undefined" && window.innerWidth > 600 ? (
              <Img__SIT__img2 ref={e => (gsap__Img__SIT__img2 = e)}>
                <GraphImg
                  image={welcomes[0].supportingImage}
                  transforms={["quality=value:80"]}
                  maxWidth={249}
                />
              </Img__SIT__img2>
            ) : (
              ""
            )} */}
          </Styled_SiteContainer>
        </Div__SIT__backgroundStrip>
      </Div__SIT>
    </>
  )
}

export default Block_single_image_text
