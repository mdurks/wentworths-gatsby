//
//
//  This is an old component that I may be able to use in the future
//  used to be the original homepage intro text and image design
//
//

import React from "react"
import { useRef, useEffect, useState, createRef } from "react"
import { graphql, useStaticQuery } from "gatsby"

import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"
import css_breakpoints from "../common/css_breakpoints"

import { gsap, ScrollTrigger } from "gsap/all"

import white_bordered_two_ringss_pink_ribbon from "../images/general-product/white-bordered-two-ringss-pink-ribbon.jpg"
import white_bordered_pink_diamon_ring from "../images/general-product/white-bordered-pink-diamon-ring.jpg"
import sparkle_background_blue from "../images/sparkle-background-blue.png"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

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

const Div__ITB = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0 75px;
  overflow: hidden;

  ${css_breakpoints.min_desktop} {
    min-height: calc(100vh + ${section_vertical_padding});
    padding: 75px 0;
  }

  > section {
    ${css_breakpoints.min_desktop} {
      display: flex;
      flex-direction: row-reverse;
      justify-content: center;
      align-items: center;
    }

    > div {
      ${css_breakpoints.min_desktop} {
        flex: 1 0 50%;
      }
    }
  }

  h1 {
    margin: 20px 0 30px;
    text-transform: uppercase;

    ${css_breakpoints.min_desktop} {
      margin: 0 0 30px;
    }
  }

  p + p {
    margin-top: 25px;
  }

  img {
    width: 100%;

    ${css_breakpoints.min_desktop} {
      width: auto;
    }
  }
`

const Div__ITB__imgGroup = styled.div`
  position: relative;
`

const Div__ITB__colorBox01 = styled.div`
  ${css_breakpoints.min_tablet} {
    position: absolute;
    top: 0;
    left: calc(50% + 167px);
    width: 11px;
    height: 185px;
    background-color: #9cccd7;
  }
`

const Div__ITB__colorBox02 = styled.div`
  ${css_breakpoints.min_tablet} {
    position: absolute;
    bottom: 2px;
    left: calc(50% - 177px);
    width: 11px;
    height: 185px;
    background-color: #9cccd7;
  }
`

const Img__ITB__imgSparkle = styled.img`
  display: none;

  ${css_breakpoints.min_desktop} {
    display: block;
    position: relative;
    right: auto;
    bottom: auto;
    left: calc(50% - (310px / 2));
    top: calc(50% - (607px / 2));
  }
`

const Img__ITB__layout1__img1 = styled.div`
  display: none;
  ${css_breakpoints.min_desktop} {
    display: block;
    position: absolute;
    left: calc(40% - (326px / 2));
    top: calc(50% - (444px / 2));
    height: 444px;
    overflow: hidden;
  }
`

const Img__ITB__layout1__img2 = styled.div`
  margin: 20px 0 0 -5px;

  ${css_breakpoints.min_desktop} {
    margin: 0;
    position: absolute;
    left: calc(59% - (356px / 2));
    top: calc(95% - (211px / 2));
    overflow: hidden;
    height: 211px;
    z-index: 1;
  }
`

const Div__ITB__textGroup = styled.div`
  ${css_breakpoints.min_desktop} {
    padding: 0 5%;
  }
`

const ImageTextBox = () => {
  const {
    gcms: { welcomes },
  } = useStaticQuery(pageQuery)

  let tl = gsap.timeline()
  let gsap__Div__ITB = null
  let gsap__ITB__siteContainer = null
  let gsap__title = null
  let gsap__introMessage = null
  let gsap__colorBox01 = null
  let gsap__Img__ITB__imgSparkle = null
  let gsap__Img__ITB__layout1__img1 = null
  let gsap__Img__ITB__layout1__img2 = null

  useEffect(() => {
    gsap.from(gsap__title, {
      scrollTrigger: {
        trigger: gsap__title,
        // markers: true,
        start: "top 80%",
      },
      duration: 2,
      opacity: 0,
      x: 20,
    })

    gsap.from(gsap__introMessage, {
      scrollTrigger: {
        trigger: gsap__introMessage,
        // markers: true,
        start: "top 80%",
      },
      duration: 2,
      opacity: 0,
      x: 20,
    })

    gsap.from(gsap__colorBox01, {
      scrollTrigger: {
        trigger: gsap__colorBox01,
        // markers: true,
        //start: "top 90%", // colorBox, viewport start location
        start: 0,
        end: () => gsap__Div__ITB.offsetTop * 0.9,
        scrub: true,
      },
      duration: 2,
      opacity: 0,
      y: gsap__ITB__siteContainer.offsetTop,
    })

    gsap.from(gsap__Img__ITB__imgSparkle, {
      scrollTrigger: {
        trigger: gsap__Img__ITB__imgSparkle,
        // markers: true,
        //start: "top 90%", // colorBox, viewport start location
        start: 0,
        end: () => gsap__Div__ITB.offsetTop * 0.9,
        scrub: true,
      },
      duration: 2,
      y: "+=500",
    })

    gsap.from(gsap__Img__ITB__layout1__img1, {
      scrollTrigger: {
        trigger: gsap__Img__ITB__layout1__img1,
        // markers: true,
        //start: "top 90%", // colorBox, viewport start location
        start: "-100 55%",
        end: () => gsap__Div__ITB.offsetTop * 0.9,
        // scrub: true,
      },
      duration: 2,
      y: "+=50",
      height: 0,
      opacity: 0,
    })

    gsap.from(gsap__Img__ITB__layout1__img2, {
      scrollTrigger: {
        trigger: gsap__Img__ITB__layout1__img2,
        // markers: true,
        //start: "top 90%", // colorBox, viewport start location
        start: "-100 60%",
        end: () => gsap__Div__ITB.offsetTop * 0.9,
        // scrub: true,
      },
      duration: 2,
      y: "+=50",
      height: 0,
      opacity: 0,
    })

    // return function to kill timeline on dismount
    return () => tl.kill()
  }, [])

  return (
    <>
      <Div__ITB ref={e => (gsap__Div__ITB = e)}>
        <Styled_SiteContainer ref={e => (gsap__ITB__siteContainer = e)}>
          <Div__ITB__textGroup>
            <h1 className="gsap__title" ref={e => (gsap__title = e)}>
              {welcomes[0].heroHeading}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: welcomes[0].firstIntroMessage.html,
              }}
              ref={e => (gsap__introMessage = e)}
            ></div>
          </Div__ITB__textGroup>
          <Div__ITB__imgGroup>
            <Div__ITB__colorBox01
              ref={e => (gsap__colorBox01 = e)}
            ></Div__ITB__colorBox01>
            <Div__ITB__colorBox02></Div__ITB__colorBox02>
            <Img__ITB__imgSparkle
              ref={e => (gsap__Img__ITB__imgSparkle = e)}
              src={sparkle_background_blue}
              alt=""
            />
            <Img__ITB__layout1__img1
              ref={e => (gsap__Img__ITB__layout1__img1 = e)}
            >
              <img src={white_bordered_two_ringss_pink_ribbon} alt="" />
            </Img__ITB__layout1__img1>
            <Img__ITB__layout1__img2
              ref={e => (gsap__Img__ITB__layout1__img2 = e)}
            >
              <img src={white_bordered_pink_diamon_ring} alt="" />
            </Img__ITB__layout1__img2>
          </Div__ITB__imgGroup>
        </Styled_SiteContainer>
      </Div__ITB>
    </>
  )
}

export default ImageTextBox
