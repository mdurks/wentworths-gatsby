import React from "react"
import { useEffect } from "react"
import { Styled_SiteContainer } from "../../../styles/commonStyles"
import { Div__block_bespoke_design_advert } from "./block_bespoke_design_advert.styles"
import { gsap, ScrollTrigger } from "gsap/all"

import img_sketch_rings from "../../../images/misc/sketch-rings.jpg"
import img_sketch_book from "../../../images/misc/sketch-book.jpg"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

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
        start: "top 66%",
        end: "33% top",
        toggleActions: "play none none reset",
        // markers: true,
        // end: `+=${viewportWidth}`,
        scrub: true,
        // pin: true,
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
