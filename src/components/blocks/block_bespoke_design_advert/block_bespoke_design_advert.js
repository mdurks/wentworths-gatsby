import React, { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"
import { gsap, ScrollTrigger } from "gsap/all"

import { Styled_SiteContainer } from "../../../styles/commonStyles"
import { Div__block_bespoke_design_advert } from "./block_bespoke_design_advert.styles"

import img_sketch_rings from "../../../images/misc/sketch-rings.jpg"
import img_sketch_book from "../../../images/misc/sketch-book.jpg"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const pageQuery = graphql`
  {
    gcms {
      blockBespokeDesignAdverts {
        backgroundDesktop {
          id
          url
          handle
          width
          height
        }
        backgroundMobile {
          id
          url
          handle
          width
          height
        }
        finishedProductImage {
          id
          url
          handle
          width
          height
        }
        sketchFinal {
          id
          url
          handle
          width
          height
        }
        sketchOne {
          id
          url
          handle
          width
          height
        }
        sketchTwo {
          id
          url
          handle
          width
          height
        }
        sketchThree {
          id
          url
          handle
          width
          height
        }
        sketchFour {
          id
          url
          handle
          width
          height
        }
        sketchFive {
          id
          url
          handle
          width
          height
        }
        sketchSix {
          id
          url
          handle
          width
          height
        }
        sketchSeven {
          id
          url
          handle
          width
          height
        }
        sketchEight {
          id
          url
          handle
          width
          height
        }
        sketchNine {
          id
          url
          handle
          width
          height
        }
        sketchTen {
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

const Block_bespoke_design_advert = () => {
  const {
    gcms: { blockBespokeDesignAdverts },
  } = useStaticQuery(pageQuery)

  let sketchImagesArray = []

  const filteredSketches = Object.keys(blockBespokeDesignAdverts[0])
    .filter(key => key.includes("sketch"))
    .reduce((obj, key) => {
      obj[key] = blockBespokeDesignAdverts[0][key]
      return obj
    }, {})

  for (const [key, value] of Object.entries(filteredSketches)) {
    sketchImagesArray.push(value)
  }

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

  useEffect(() => {
    let viewportHeight = window.innerHeight

    let tl_gsap__sketch_playreel = gsap.timeline({
      scrollTrigger: {
        trigger: gsap__block_bespoke_design_advert,
        start: "-10% bottom",
        end: "bottom top",
        // toggleActions: "play none none reset",
        toggleActions: "play pause resume pause",
        // markers: true,
        // end: `+=${window.innerWidth}`,
        // scrub: true,
        // pin: true,
        // anticipatePin: 1,
      },
    })
    gsap__sketch_group.forEach((el, index) => {
      gsap.set(el, {
        y: getRndInteger(viewportHeight * 0.05, (viewportHeight - 150) * 0.9),
        rotationX: 10,
        rotationY: getRndInteger(-350, -110),
        rotationZ: 353,
      })
      tl_gsap__sketch_playreel.to(
        gsap__sketch_group[index],
        {
          left: "-300px",
          duration: getRndInteger(7.5, 10),
          // ease: "ease",
          rotationY: 350,
          repeat: -1,
        },
        "-=" + getRndInteger(5, 7)
      )
    })

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
            {sketchImagesArray.map((el, index) => (
              <div
                className="offscreen_right"
                ref={e => (gsap__sketch_group[index] = e)}
              >
                <GraphImg
                  className="gsap_scrolling_img"
                  image={el}
                  transforms={["quality=value:80"]}
                  maxWidth={1200}
                />
                <div className="gsap_scolling_img_backface"></div>
              </div>
            ))}
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
