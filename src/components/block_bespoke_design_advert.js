import React from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"
import { gsap, ScrollTrigger, MotionPathPlugin } from "gsap/all"

import img_sketch_rings from "../images/misc/sketch-rings.jpg"
import img_sketch_book from "../images/misc/sketch-book.jpg"
import img_background_tools from "../images/misc/block_bespoke_design_advert_background-tools.jpg"
import img_background_tools_mobile from "../images/misc/block_bespoke_design_advert_background-tools-mobile.jpg"

gsap.registerPlugin(MotionPathPlugin)
gsap.core.globals("MotionPathPlugin", MotionPathPlugin)
gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const bp_max_mobile = "@media (max-width: 767px)"
const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

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
  overflow: hidden;

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    /* ${bp_max_mobile} {
      padding: 510px 15px 0;
    } */
  }

  .img_sketch_rings {
    position: absolute;
    top: 9%;
    left: 35%;
    height: 187px;
    width: auto;
    background: white;
    border: 10px solid white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: rotate(2.68deg) scale(0.65);
    opacity: 0;

    ${bp_min_desktop} {
      position: absolute;
      top: 24%;
      left: 40%;
      width: 287px;
      height: 287px;
      transform: rotate(2.68deg) scale(1);
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
    transform: scale(0.2);
    opacity: 0;

    ${bp_min_desktop} {
      position: absolute;
      top: 35%;
      left: 36.5%;
      width: 507px;
      height: 511px;
    }
  }

  .img_background_tools {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('${img_background_tools_mobile}');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    ${bp_min_desktop} {
      opacity: 0.8;
      background-image: url('${img_background_tools}');
    }
  }

  // -------------------------------

  // GSAP Animation

  .gsap_bespoke_design_it_all_starts {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    font-family: "Playfair Display", serif;
    letter-spacing: -2px;
    z-index: 15;

    &_word1 {
      font-size: clamp(27px, 4vw, 71px);
    }
    &_word2 {
      font-size: clamp(44px, 8vw, 136px);
    }

    span {
      position: relative;
      left: 0;
    }
  }

  .bespoke_design_gsap_scrolling_image_container {
    position: absolute;
    width: 100vw;
    height: 100vh;
    /* outline: 1px solid blue; */
    overflow: hidden;
    perspective: 1400px;
    z-index: 5;
  }
  .offscreen_right {
    position: absolute;
    left: -460px;
    top: -531px;
    height: 100%;
    width: 100%;
    transform-style: preserve-3d;

    ${bp_min_desktop} {
      top: 0;
      left: -75%;
    }

    .gsap_scrolling_img {
      position: absolute;
      top: 0;
      height: 287px;
      width: 287px;
      border: 10px solid white;
      backface-visibility: hidden;
      /* box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); */
    }

    > div {
      content: " ";
      position: absolute;
      top: 0;
      left: 50%;
      width: 287px;
      height: 287px;
      /* background-color: white; */
      background: linear-gradient(to bottom, #fdfbf7 0%, #cccac5 100%);
      transform: rotateY(180deg);
      backface-visibility: hidden;
    }
  }

  // -------------------------------

  .bespoke_design_heading1 {
    position: relative;
    margin: 70% 0 0;
    width: 100%;
    text-align: center;
    font-size: 26px;
    text-transform: uppercase;
    font-family: "Playfair Display", serif;
    opacity: 0;
    z-index: 20;

    ${bp_min_desktop} {
      position: absolute;
      top: 170%;
      left: 46.5%;
      margin: 0;
      width: auto;
    }
  }

  .bespoke_design_heading2 {
    position: relative;
    top: 7px;
    width: 100%;
    margin: 10px 0 25px;
    text-align: center;
    font-size: clamp(45px, 4vw, 71px);
    line-height: clamp(45px, 5vw, 95px);
    font-family: "Playfair Display", serif;
    letter-spacing: -1px;
    /* color: #b49372; */
    text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.35);
    z-index: 20;
    overflow: hidden;

    span {
      position: relative;
      top: 100px;
    }

    ${bp_min_desktop} {
      width: auto;
      position: absolute;
      top: 208%;
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
    opacity: 0;
    z-index: 20;

    ${bp_min_desktop} {
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
    opacity: 0;
    z-index: 20;

    ${bp_min_desktop} {
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
  //
  //
  function random_number_between_range(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
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
  let gsap_img_background_tools = null
  let gsap_bespoke_design_heading1 = null
  let gsap_bespoke_design_heading2 = null
  let gsap_bespoke_design_heading3 = null
  let gsap_bespoke_design_link = null
  let gsap_img_sketch_rings = null
  let gsap_img_sketch_book = null
  let gsap_bespoke_design_it_all_starts_word1 = null
  let gsap_bespoke_design_it_all_starts_word2 = null

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
        toggleActions: "play none none none",
        markers: true,
        // end: `+=${viewportWidth}`,
        scrub: 3,
        pin: true,
        anticipatePin: 1,
      },
    })
    //
    //
    // for each sketch image, position it randomly vertically, randomly Y rotated
    // each one will finish in the center at a random off center position
    // a seond animation for each image will fade it out as it comes to the end
    // of the motion path
    //
    gsap__sketch_group.forEach((el, index) => {
      gsap.set(el, {
        y: random_number_between_range(
          viewportHeight * 0.1,
          (viewportHeight - 300) * 0.9
        ),
        rotationX: 10,
        rotationY: random_number_between_range(-650, -310),
        rotationZ: 353,
        zIndex: index,
      })
      //
      // let random_stagger_time = random_number_between_range(10, 20)
      // let random_duration = random_number_between_range(10, 20)
      let random_stagger_time = random_number_between_range(30, 40)
      let random_duration = random_number_between_range(30, 40)
      //
      let gsap__sketch_group_left =
        viewportWidth < 768
          ? random_number_between_range(-200, -220) + "%"
          : random_number_between_range(-66, -18) + "%"
      let gsap__sketch_group_top =
        viewportWidth < 768
          ? random_number_between_range(-35, -45) + "%"
          : random_number_between_range(0, 15) + "%"
      let gsap__sketch_group_scale = viewportWidth < 768 ? 0.5 : 0.75
      //
      tl_gsap__sketch_playreel.to(
        gsap__sketch_group[index],
        {
          top: gsap__sketch_group_top,
          left: gsap__sketch_group_left,
          duration: random_duration,
          ease: "easeIn",
          rotationY: 350,
          scale: gsap__sketch_group_scale,
          // y: window.innerHeight / 2 + "px",
          motionPath: {
            path:
              "M-43 680c194-50 440-124 732-130 304-7 1184-90 1163-183-19-85-899-107-1244-82-93 6-219 9-249 74-32 67 44 90 178 98 168 10 615-1 616-52 1-55-455-84-453 100",
          },
        },
        "-=" + random_stagger_time
      )
    })
    // end sketch group forEach
    //
    //
    tl_gsap__sketch_playreel.to(
      ".gsap_bespoke_design_it_all_starts",
      {
        duration: 50,
        ease: "easeOut",
        y: "-50px",
      },
      "-=50"
    )
    tl_gsap__sketch_playreel.to(
      ".gsap_bespoke_design_it_all_starts span > span",
      {
        duration: function (index) {
          return index / 1.75
        },
        ease: "ease",
        opacity: 0,
        left: "-150px",
        stagger: function (index) {
          return (index + 1) / 1.75
        },
      },
      "-=15"
    )
    //
    // fade out sketch images
    //
    let gsap__sketch_group_left =
      viewportWidth < 768
        ? "-200%"
        : random_number_between_range(-32, -42) + "%"
    let gsap__sketch_group_top =
      viewportWidth < 768 ? "-80%" : random_number_between_range(-30, -40) + "%"
    //
    tl_gsap__sketch_playreel.to(
      gsap__sketch_group,
      {
        duration: 10,
        ease: "ease",
        opacity: 0,
        // rotationY: 0,
        rotationY: random_number_between_range(-550, 110),
        // top: "-35%",
        // left: "-40%",
        top: gsap__sketch_group_top,
        left: gsap__sketch_group_left,
        scale: 0.35,
        stagger: 0.6,
      },
      "-=18"
    )
    //
    // fade in background tools img
    //
    tl_gsap__sketch_playreel.to(
      gsap_img_background_tools,
      {
        duration: 17,
        ease: "ease",
        opacity: 0,
        scale: 1.4,
      },
      "-=10"
    )
    //
    // animate in finishing images
    //
    let gsap_img_sketch_book_scale = viewportWidth < 768 ? 0.65 : 1
    let gsap_img_sketch_book_x = viewportWidth < 768 ? "-10%" : "-68%"
    let gsap_img_sketch_book_y = viewportWidth < 768 ? "-44%" : "-11%"
    //
    gsap.set(gsap_img_sketch_book, {
      rotationX: 0,
      rotationY: 0,
      rotationZ: 353,
    })
    tl_gsap__sketch_playreel.to(
      gsap_img_sketch_book,
      {
        duration: 30,
        ease: "ease",
        opacity: 1,
        scale: gsap_img_sketch_book_scale,
        x: gsap_img_sketch_book_x,
        y: gsap_img_sketch_book_y,
        rotationX: 10,
        rotationY: 383,
      },
      "-=16"
    )
    //
    let gsap_img_sketch_rings_x = viewportWidth < 768 ? "27%" : "17%"
    let gsap_img_sketch_rings_y = viewportWidth < 768 ? "3%" : "-6%"
    //
    tl_gsap__sketch_playreel.to(
      gsap_img_sketch_rings,
      {
        duration: 20,
        ease: "ease",
        opacity: 1,
        x: gsap_img_sketch_rings_x,
        y: gsap_img_sketch_rings_y,
      },
      "-=5"
    )
    //
    // animate in finishing texts
    //
    tl_gsap__sketch_playreel.to(
      gsap_bespoke_design_heading1,
      {
        duration: 13,
        ease: "ease",
        opacity: 1,
      },
      "-=6"
    )
    //
    let bespoke_design_heading2_top = viewportWidth < 768 ? -7 : 0
    //
    tl_gsap__sketch_playreel.to(
      ".bespoke_design_heading2 span",
      {
        duration: 20,
        ease: "ease",
        top: bespoke_design_heading2_top,
      },
      "-=1"
    )
    tl_gsap__sketch_playreel.to(
      gsap_bespoke_design_heading3,
      {
        duration: 13,
        ease: "ease",
        opacity: 1,
      },
      "-=1"
    )
    tl_gsap__sketch_playreel.to(
      gsap_bespoke_design_link,
      {
        duration: 13,
        ease: "ease",
        opacity: 1,
      },
      "-=1"
    )
    // tl_gsap__sketch_playreel.to(gsap__sketch1, {
    //   left: "-300px",
    //   duration: 10,
    //   ease: "ease",
    // })
  }, [])

  return (
    <>
      <Div__block_bespoke_design_advert
        ref={e => (gsap__block_bespoke_design_advert = e)}
      >
        <div
          ref={e => (gsap_img_background_tools = e)}
          className="img_background_tools"
          // src={img_background_tools}
          // alt=""
        ></div>

        <Styled_SiteContainer>
          <div className="gsap_bespoke_design_it_all_starts">
            <p>
              <span
                ref={e => (gsap_bespoke_design_it_all_starts_word1 = e)}
                className="gsap_bespoke_design_it_all_starts_word1"
              >
                <span>i</span>
                <span>t</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>l</span>
                <span>l</span>
                <span>&nbsp;</span>
                <span>s</span>
                <span>t</span>
                <span>a</span>
                <span>r</span>
                <span>t</span>
                <span>s</span>
                <span>&nbsp;</span>
              </span>
              <span
                ref={e => (gsap_bespoke_design_it_all_starts_word2 = e)}
                className="gsap_bespoke_design_it_all_starts_word2"
              >
                <span>w</span>
                <span>i</span>
                <span>t</span>
                <span>h</span>
                <span>&nbsp;</span>
                <span>a</span>
                <span>n</span>
                <span>&nbsp;</span>
                <span>i</span>
                <span>d</span>
                <span>e</span>
                <span>a</span>
              </span>
            </p>
          </div>

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

            <img
              ref={e => (gsap_img_sketch_rings = e)}
              className="img_sketch_rings"
              src={img_sketch_rings}
              alt=""
            />
            <img
              ref={e => (gsap_img_sketch_book = e)}
              className="img_sketch_book"
              src={img_sketch_book}
              alt=""
            />
          </div>

          <p
            ref={e => (gsap_bespoke_design_heading1 = e)}
            className="bespoke_design_heading1"
          >
            Bespoke design
          </p>
          <p
            ref={e => (gsap_bespoke_design_heading2 = e)}
            className="bespoke_design_heading2"
          >
            <span>bring your imagination</span>
          </p>
          <p
            ref={e => (gsap_bespoke_design_heading3 = e)}
            className="bespoke_design_heading3"
          >
            in to reality
          </p>
          <a
            ref={e => (gsap_bespoke_design_link = e)}
            className="bespoke_design_link"
            href="/"
          >
            View Bespoke Design
          </a>
        </Styled_SiteContainer>
      </Div__block_bespoke_design_advert>
    </>
  )
}

export default Block_bespoke_design_advert
