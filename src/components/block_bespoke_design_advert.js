import React from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"
import css_breakpoints from "../common/css_breakpoints"
import { gsap, ScrollTrigger } from "gsap/all"

import img_sketch_rings from "../images/misc/sketch-rings.jpg"
import img_sketch_book from "../images/misc/sketch-book.jpg"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const section_vertical_padding = "0vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

const Div__block_bespoke_design_advert = styled.div`
  position: relative;
  padding: (${section_vertical_padding} / 2) ${section_horizontal_padding};
  min-height: calc(100vh + ${section_vertical_padding});
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 75px 0; */
  text-align: center;
  background-color: #e5e3de;

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${css_breakpoints.max_mobile} {
      padding: 510px 15px 0;
    }
  }

  .img_sketch_rings {
    position: absolute;
    top: -40px;
    right: 0;
    height: 187px;
    width: auto;
    background: white;
    border: 10px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(2.68deg);

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: -922%;
      left: 38%;
      width: 287px;
      height: 287px;
    }
  }

  .img_sketch_book {
    position: absolute;
    top: 150px;
    left: 0;
    height: 316px;
    width: auto;
    background: white;
    border: 10px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(-7.38deg);

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: -523%;
      left: 7%;
      width: 507px;
      height: 511px;
    }
  }

  // -------------------------------

  // GSAP Animation

  .bespoke_design_gsap_scrolling_image_container {
    position: absolute;
    width: calc(100vw - 20px);
    height: 100vh;
    /* outline: 1px solid blue; */
    overflow: hidden;
    perspective: 1400px;
  }
  .offscreen_right {
    position: absolute;
    left: 105%;
    top: 0;
    height: 287px;
    width: 287px;
    transform-style: preserve-3d;

    .gsap_scrolling_img {
      height: 287px;
      width: 287px;
      border: 10px solid white;
      /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    }

    > div {
      content: " ";
      position: absolute;
      top: 0;
      width: 287px;
      height: 287px;
      /* background-color: white; */
      background: linear-gradient(to bottom, #fdfbf7 0%, #cccac5 100%);
      transform: rotateY(180deg);
    }
  }

  // -------------------------------

  .bespoke_design_heading1 {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 26px;
    text-transform: uppercase;
    font-family: "Playfair Display", serif;

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: 170%;
      left: 46.5%;
      width: auto;
    }
  }

  .bespoke_design_heading2 {
    position: relative;
    width: 100%;
    margin: 10px 0 25px;
    text-align: center;
    font-size: clamp(45px, 4vw, 71px);
    line-height: clamp(50px, 4vw, 30px);
    font-family: "Playfair Display", serif;
    letter-spacing: -1px;
    /* color: #b49372; */
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.35);

    ${css_breakpoints.min_desktop} {
      width: auto;
      position: absolute;
      top: 310%;
      left: 39%;
      margin: 0;
    }
  }

  .bespoke_design_heading3 {
    position: relative;
    width: 100%;
    text-align: center;
    font-size: 26px;
    text-transform: uppercase;
    font-family: "Playfair Display", serif;

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: 530%;
      left: 68%;
      width: auto;
    }
  }

  .bespoke_design_link {
    position: relative;
    margin: 50px 0 0;
    padding: 10px 30px 13px;
    font-size: 19px;
    text-transform: uppercase;
    color: #965f27;
    text-decoration: none;
    background-color: #e5e3de;
    border-radius: 100px;
    border: 2px solid #b49372;
    transition: all ease 0.4s;

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: 760%;
      left: 64.5%;
      margin: 0;

      &:hover {
        background-color: #b49372;
        color: white;
      }
    }
  }
`

const Block_bespoke_design_advert = () => {
  function getRndInteger(min, max) {
    return Math.random() * (max - min) + min
  }

  let gsap__sketch1 = null
  let gsap__sketch2 = null
  let gsap__sketch3 = null
  let gsap__sketch4 = null
  let gsap__sketch5 = null
  let gsap__sketch6 = null
  let gsap__sketch7 = null
  let gsap__sketch8 = null
  let gsap__sketch9 = null
  let gsap__sketch10 = null
  let gsap__block_bespoke_design_advert = null

  useEffect(() => {
    let viewportWidth = window.innerWidth
    let viewportHeight = window.innerHeight
    let gsap__sketch_group_yZone = viewportHeight
    let gsap__sketch_group = [
      gsap__sketch1,
      gsap__sketch2,
      gsap__sketch3,
      gsap__sketch4,
      gsap__sketch5,
      gsap__sketch6,
      gsap__sketch7,
      gsap__sketch8,
      gsap__sketch9,
      gsap__sketch10,
    ]

    let tl_gsap__sketch_playreel = gsap.timeline({
      scrollTrigger: {
        trigger: gsap__block_bespoke_design_advert,
        start: "top top",
        toggleActions: "play none none reset",
        // markers: true,
        // end: `+=${viewportWidth}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    })
    gsap__sketch_group.forEach((el, index) => {
      gsap.set(el, {
        y: getRndInteger(viewportHeight * 0.1, (viewportHeight - 150) * 0.9),
        rotationX: 10,
        rotationY: getRndInteger(-350, 10),
        rotationZ: 353,
      })
      tl_gsap__sketch_playreel.to(
        gsap__sketch_group[index],
        {
          left: "-300px",
          duration: getRndInteger(2.75, 3.66),
          ease: "ease",
          rotationY: 350,
        },
        "-=" + getRndInteger(2, 4)
      )
    })
    // tl_gsap__sketch_playreel.to(gsap__sketch1, {
    //   left: "-300px",
    //   duration: 10,
    //   ease: "ease",
    // })

    // return function to kill timeline on dismount
    return () => tl_gsap__sketch_playreel.kill()
  }, [])

  return (
    <>
      <Div__block_bespoke_design_advert
        ref={e => (gsap__block_bespoke_design_advert = e)}
      >
        <Styled_SiteContainer>
          <div className="bespoke_design_gsap_scrolling_image_container">
            <div className="offscreen_right" ref={e => (gsap__sketch1 = e)}>
              <img
                className="gsap_scrolling_img"
                src={img_sketch_rings}
                alt=""
              />
              <div></div>
            </div>
            <div className="offscreen_right" ref={e => (gsap__sketch2 = e)}>
              <img
                className="gsap_scrolling_img"
                src={img_sketch_rings}
                alt=""
              />
              <div></div>
            </div>
            <div className="offscreen_right" ref={e => (gsap__sketch3 = e)}>
              <img
                className="gsap_scrolling_img"
                src={img_sketch_rings}
                alt=""
              />
              <div></div>
            </div>
            <div className="offscreen_right" ref={e => (gsap__sketch4 = e)}>
              <img
                className="gsap_scrolling_img"
                src={img_sketch_rings}
                alt=""
              />
              <div></div>
            </div>
            <div className="offscreen_right" ref={e => (gsap__sketch5 = e)}>
              <img
                className="gsap_scrolling_img"
                src={img_sketch_rings}
                alt=""
              />
              <div></div>
            </div>
            <div className="offscreen_right" ref={e => (gsap__sketch6 = e)}>
              <img
                className="gsap_scrolling_img"
                src={img_sketch_rings}
                alt=""
              />
              <div></div>
            </div>
            <div className="offscreen_right" ref={e => (gsap__sketch7 = e)}>
              <img
                className="gsap_scrolling_img"
                src={img_sketch_rings}
                alt=""
              />
              <div></div>
            </div>
            <div className="offscreen_right" ref={e => (gsap__sketch8 = e)}>
              <img
                className="gsap_scrolling_img"
                src={img_sketch_rings}
                alt=""
              />
              <div></div>
            </div>
            <div className="offscreen_right" ref={e => (gsap__sketch9 = e)}>
              <img
                className="gsap_scrolling_img"
                src={img_sketch_rings}
                alt=""
              />
              <div></div>
            </div>
            <div className="offscreen_right" ref={e => (gsap__sketch10 = e)}>
              <img
                className="gsap_scrolling_img"
                src={img_sketch_rings}
                alt=""
              />
              <div></div>
            </div>
          </div>
          <img className="img_sketch_rings" src={img_sketch_rings} alt="" />
          <img className="img_sketch_book" src={img_sketch_book} alt="" />
          <p className="bespoke_design_heading1">Bespoke design</p>
          <p className="bespoke_design_heading2">bring your imagination</p>
          <p className="bespoke_design_heading3">in to reality</p>
          <a className="bespoke_design_link" href="/">
            View Bespoke Design
          </a>
        </Styled_SiteContainer>
      </Div__block_bespoke_design_advert>
    </>
  )
}

export default Block_bespoke_design_advert
