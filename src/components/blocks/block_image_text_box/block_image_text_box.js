//
//
//  This is an old component that I may be able to use in the future
//  used to be the original homepage intro text and image design
//
//

import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Styled_SiteContainer } from "../../../styles/commonStyles"
import {
  Div__ITB,
  Div__ITB__imgGroup,
  Div__ITB__colorBox01,
  Div__ITB__colorBox02,
  Img__ITB__imgSparkle,
  Img__ITB__layout1__img1,
  Img__ITB__layout1__img2,
  Div__ITB__textGroup,
} from "./block_image_text_box.styles"

import { gsap, ScrollTrigger } from "gsap/all"

import white_bordered_two_ringss_pink_ribbon from "../../../images/general-product/white-bordered-two-ringss-pink-ribbon.jpg"
// import white_bordered_pink_diamon_ring from "../../../images/general-product/white-bordered-pink-diamon-ring.jpg"
import sparkle_background_blue from "../../../images/sparkle-background-blue.png"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

// const pageQuery = graphql`
//   {
//     gcms {
//       welcomes {
//         heroHeading
//         firstIntroMessage {
//           html
//         }
//         heroImage {
//           id
//           url
//           handle
//           width
//           height
//         }
//       }
//     }
//   }
// `

const BlockImageTextBox = ({ title, bodyText }) => {
  // const {
  //   gcms: { welcomes },
  // } = useStaticQuery(pageQuery)

  let gsap__Div__ITB = null
  let gsap__ITB__siteContainer = null
  let gsap__title = null
  let gsap__introMessage = null
  let gsap__colorBox01 = null
  let gsap__Img__ITB__imgSparkle = null
  let gsap__Img__ITB__layout1__img1 = null
  let gsap__Img__ITB__layout1__img2 = null

  // useEffect(() => {
  //   gsap.from(gsap__title, {
  //     scrollTrigger: {
  //       trigger: gsap__title,
  //       // markers: true,
  //       start: "top 80%",
  //     },
  //     duration: 2,
  //     opacity: 0,
  //     x: 20,
  //   })

  //   gsap.from(gsap__introMessage, {
  //     scrollTrigger: {
  //       trigger: gsap__introMessage,
  //       // markers: true,
  //       start: "top 80%",
  //     },
  //     duration: 2,
  //     opacity: 0,
  //     x: 20,
  //   })

  //   gsap.from(gsap__colorBox01, {
  //     scrollTrigger: {
  //       trigger: gsap__colorBox01,
  //       // markers: true,
  //       //start: "top 90%", // colorBox, viewport start location
  //       start: 0,
  //       end: () => gsap__Div__ITB.offsetTop * 0.9,
  //       scrub: true,
  //     },
  //     duration: 2,
  //     opacity: 0,
  //     y: gsap__ITB__siteContainer.offsetTop,
  //   })

  //   gsap.from(gsap__Img__ITB__imgSparkle, {
  //     // scrollTrigger: {
  //     //   trigger: gsap__Img__ITB__imgSparkle,
  //     //   // markers: true,
  //     //   //start: "top 90%", // colorBox, viewport start location
  //     //   start: 0,
  //     //   end: () => gsap__Div__ITB.offsetTop * 0.9,
  //     //   scrub: true,
  //     // },
  //     duration: 2,
  //     opacity: 0,
  //     y: "-=20",
  //   })

  //   gsap.from(gsap__Img__ITB__layout1__img1, {
  //     scrollTrigger: {
  //       trigger: gsap__Img__ITB__layout1__img1,
  //       // markers: true,
  //       //start: "top 90%", // colorBox, viewport start location
  //       start: "-100 55%",
  //       end: () => gsap__Div__ITB.offsetTop * 0.9,
  //       // scrub: true,
  //     },
  //     duration: 2,
  //     y: "+=50",
  //     height: 0,
  //     opacity: 0,
  //   })

  //   gsap.from(gsap__Img__ITB__layout1__img2, {
  //     scrollTrigger: {
  //       trigger: gsap__Img__ITB__layout1__img2,
  //       // markers: true,
  //       //start: "top 90%", // colorBox, viewport start location
  //       start: "-100 60%",
  //       end: () => gsap__Div__ITB.offsetTop * 0.9,
  //       // scrub: true,
  //     },
  //     duration: 2,
  //     y: "+=50",
  //     height: 0,
  //     opacity: 0,
  //   })
  // })

  return (
    <>
      <Div__ITB ref={e => (gsap__Div__ITB = e)}>
        <Styled_SiteContainer ref={e => (gsap__ITB__siteContainer = e)}>
          <Div__ITB__textGroup>
            <h1 className="gsap__title" ref={e => (gsap__title = e)}>
              {/* {welcomes[0].heroHeading} */}
              {title}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: bodyText,
              }}
              ref={e => (gsap__introMessage = e)}
            ></div>
          </Div__ITB__textGroup>
          <Div__ITB__imgGroup>
            {/* <Div__ITB__colorBox01
            ref={e => (gsap__colorBox01 = e)}
            ></Div__ITB__colorBox01>
            <Div__ITB__colorBox02></Div__ITB__colorBox02> */}
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
            {/* <Img__ITB__layout1__img2
              ref={e => (gsap__Img__ITB__layout1__img2 = e)}
            >
              <img src={white_bordered_pink_diamon_ring} alt="" />
            </Img__ITB__layout1__img2> */}
          </Div__ITB__imgGroup>
        </Styled_SiteContainer>
      </Div__ITB>
    </>
  )
}

export default BlockImageTextBox
