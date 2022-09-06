import React, { useEffect } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"
import { gsap, ScrollTrigger } from "gsap/all"

import { globalSiteSettings } from "../../../common/globalVars"
import { Styled_SiteContainer, Styled_btn } from "../../../styles/commonStyles"
import { Div__block_bespoke_design_advert } from "./block_bespoke_design_advert.styles"

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
        finalImageTwo {
          id
          url
          handle
          width
          height
        }
        finalImageOne {
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

  // TODO Reduce the number of sketches shown from 10 to 6, need to update CMS with this
  sketchImagesArray = sketchImagesArray.slice(0, 6)

  function getRndInteger(min, max) {
    return Math.random() * (max - min) + min
  }

  useEffect(() => {
    // let tl_gsap__sketch_playreel
    const sketch_group_y_positions = [
      "5%", // min Y
      "155%",
      "250%", // max Y
      "65%",
      "85%",
      "210%",
      "120%",
    ]

    // let viewportHeight = window.innerHeight
    let isMobile = window.innerWidth < 768

    const tl_gsap__sketch_playreel = gsap.timeline({
      scrollTrigger: {
        id: "sketches",
        trigger: ".gsap__block_bespoke_design_advert",
        start: isMobile ? "-200px bottom" : "-10% bottom",
        end: "bottom top",
        // toggleActions: "play none none reset",
        toggleActions: "play pause resume none",
        // markers: true,
        // end: `+=${window.innerWidth}`,
        // scrub: true,
        // pin: true,
        // anticipatePin: 1,
      },
    })
    const gsap__sketch_group = document.querySelectorAll(".offscreen_right")

    gsap__sketch_group.forEach((el, index) => {
      gsap.set(el, {
        // y: getRndInteger(viewportHeight * 0.05, (viewportHeight - 150) * 0.9),
        y: sketch_group_y_positions[index],
        rotationX: 10,
        rotationY: getRndInteger(-350, -110),
        rotationZ: 353,
      })
      tl_gsap__sketch_playreel.to(
        gsap__sketch_group[index],
        {
          left: isMobile ? "-160px" : "-300px",
          duration: isMobile ? getRndInteger(6, 8) : getRndInteger(10, 12),
          // ease: "ease",
          rotationY: 350,
          repeat: -1,
        },
        "-=" + getRndInteger(5, 7)
      )
    })

    tl_gsap__sketch_playreel.progress(0.25)

    const tl_gsap_closing_message = gsap.timeline({
      scrollTrigger: {
        id: "message",
        trigger: ".gsap__block_bespoke_design_advert",
        start: isMobile ? "-100px bottom" : "-10% bottom",
        // start: isMobile ? "top bottom" : "15% bottom",
        toggleActions: "play none none none",
        // toggleActions: "play none none reset",
        // markers: true,
      },
    })
    if (!isMobile) {
      gsap.set(".finalImageOne", {
        top: "-2632%",
        rotationX: 0,
        rotationY: 260,
        rotationZ: 363,
      })
      tl_gsap_closing_message.to(".finalImageOne", {
        top: "-922%",
        rotationX: 0,
        rotationY: 0,
        rotationZ: 363,
        duration: 1.5,
      })
      gsap.set(".finalImageTwo", {
        opacity: 0,
        top: "-922%",
        left: "38%",
        width: "287px",
        height: "287px",
        transform: "rotate(2.68deg)",
      })
      tl_gsap_closing_message.to(
        ".finalImageTwo",
        {
          opacity: 1,
          top: "-523%",
          left: "7%",
          width: "507px",
          height: "511px",
          transform: "rotate(-7.38deg)",
          duration: 1.25,
        },
        "-=0.25"
      )
      gsap.set(".finalImageTwo .graphcms-image-outer-wrapper", {
        opacity: 0,
      })
      tl_gsap_closing_message.to(
        ".finalImageTwo .graphcms-image-outer-wrapper",
        {
          opacity: 1,
          duration: 1,
          ease: "power3.in",
        },
        "-=1.25"
      )
      tl_gsap_closing_message.to(
        ".finalImageTwo",
        {
          scale: 1.5,
          duration: 0.3,
        },
        "-=1.24"
      )
      tl_gsap_closing_message.to(
        ".finalImageTwo",
        {
          scale: 1,
          duration: 0.6,
        },
        "-=0.9"
      )
      tl_gsap_closing_message.to(".finalImageTwo, .finalImageOne", {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      })
    }

    gsap.set(".bespoke_design_heading1", {
      x: 20,
      clipPath: "inset(0% 100% -50% 0%)",
    })
    tl_gsap_closing_message.to(
      ".bespoke_design_heading1",
      {
        x: 0,
        clipPath: "inset(0% 0% -50% 0%)",
        duration: 0.75,
        delay: isMobile ? 0.75 : 0,
      },
      isMobile ? "-=0" : "-=0.5"
    )
    gsap.set(".bespoke_design_heading2", {
      x: 20,
      clipPath: "inset(0% 100% -50% 0%)",
    })
    tl_gsap_closing_message.to(
      ".bespoke_design_heading2",
      {
        x: 0,
        clipPath: "inset(0% 0% -50% 0%)",
        duration: 1.5,
      },
      "+=0.1"
    )
    gsap.set(".bespoke_design_heading3", {
      x: 20,
      clipPath: "inset(0% 100% -50% 0%)",
    })
    tl_gsap_closing_message.to(
      ".bespoke_design_heading3",
      {
        x: 0,
        clipPath: "inset(0% 0% -50% 0%)",
        duration: 1.25,
      },
      "-=0.25"
    )
    gsap.set(".bespoke_design_link", {
      opacity: 0,
      y: 20,
    })
    tl_gsap_closing_message.to(
      ".bespoke_design_link",
      {
        opacity: 1,
        y: 0,
      },
      "-=0.5"
    )

    // return function to kill timeline on dismount
    return () => tl_gsap__sketch_playreel.kill()
  }, [])

  return (
    <>
      <Div__block_bespoke_design_advert className="gsap__block_bespoke_design_advert">
        <Styled_SiteContainer>
          <div className="bespoke_design_gsap_scrolling_image_container">
            {sketchImagesArray.map((el, index) => (
              <div className="offscreen_right">
                <GraphImg
                  className="gsap_scrolling_img"
                  image={el}
                  transforms={["quality=value:80"]}
                  maxWidth={1200}
                  baseURI={globalSiteSettings.graphcmsImageBaseURI}
                />
                {/* <div className="gsap_scolling_img_backface"></div> */}
              </div>
            ))}
          </div>
          <div className="finalImageOne">
            <GraphImg
              image={blockBespokeDesignAdverts[0].finalImageOne}
              transforms={["quality=value:80"]}
              maxWidth={600}
              baseURI={globalSiteSettings.graphcmsImageBaseURI}
            />
            <div class="finalImageOne_backface"></div>
          </div>
          <div className="finalImageTwo">
            <GraphImg
              image={blockBespokeDesignAdverts[0].finalImageTwo}
              transforms={["quality=value:80"]}
              maxWidth={1000}
              baseURI={globalSiteSettings.graphcmsImageBaseURI}
            />
          </div>
          <p className="bespoke_design_heading1">Bespoke jewellery design</p>
          <p className="bespoke_design_heading2">bring your imagination</p>
          <p className="bespoke_design_heading3">in to reality</p>
          <Styled_btn
            as={Link}
            className="bespoke_design_link"
            to="/services/bespoke-jewellery-design/"
          >
            View Bespoke Jewellery Designs
          </Styled_btn>
        </Styled_SiteContainer>
      </Div__block_bespoke_design_advert>
    </>
  )
}

export default Block_bespoke_design_advert
