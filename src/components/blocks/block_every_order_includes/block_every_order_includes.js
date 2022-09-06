import React from "react"
import { useEffect } from "react"

import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"

import { globalSiteSettings } from "../../../common/globalVars.js"
import { Block_every_order_includesWrapper } from "./block_every_order_includes.styles.js"
import { Styled_SiteContainer } from "../../../styles/commonStyles"

import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const pageQuery = graphql`
  {
    gcms {
      welcomes {
        everyOrderIncludesText {
          html
        }
        everyOrderIncludesImage {
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

const Block_every_order_includes = () => {
  const {
    gcms: { welcomes },
  } = useStaticQuery(pageQuery)

  useEffect(() => {
    //

    let tl_gsap_Block_every_order_includes = gsap.timeline({
      scrollTrigger: {
        trigger: ".Block_every_order_includes",
        start: "top 90%",
        toggleActions: "play none none none",
        // toggleActions: "play none none reset",
        // markers: true,
        // end: `+=${viewportWidth}`,
        // scrub: 1,
        // pin: true,
        // anticipatePin: 1,
      },
    })

    tl_gsap_Block_every_order_includes.set(
      ".Block_every_order_includes__text h2, .Block_every_order_includes__text li",
      {
        opacity: 0,
        y: 20,
      }
    )
    tl_gsap_Block_every_order_includes.fromTo(
      ".Block_every_order_includes__img > div > div",
      {
        x: -100,
      },
      {
        x: 0,
        duration: 2,
      }
    )
    tl_gsap_Block_every_order_includes.fromTo(
      ".Block_every_order_includes__img > div",
      {
        clipPath: "inset(0% 100% 0% -100%",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1.15,
        ease: "power1.inOut",
      },
      "-=2"
    )
    // tl_gsap_Block_every_order_includes.to(
    //   ".Block_every_order_includes__img > div",
    //   {
    //     clipPath: "inset(0% 0% 0% 0%)",
    //     duration: 0.9,
    //     ease: "power1.inOut",
    //   },
    //   "-=0.75"
    // )
    tl_gsap_Block_every_order_includes.fromTo(
      ".Block_every_order_includes__text",
      {
        opacity: 0,
        x: window.innerWidth < 768 ? 0 : 100,
        y: window.innerWidth < 768 ? 100 : 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power1.inOut",
      },
      "-=1.8"
    )
    tl_gsap_Block_every_order_includes.to(
      ".Block_every_order_includes__text h2, .Block_every_order_includes__text li",
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.1,
      },
      "-=0.75"
    )

    // return function to kill timeline on dismount
    return () => tl_gsap_Block_every_order_includes.kill()
  }, [])

  return (
    <>
      <Block_every_order_includesWrapper className="Block_every_order_includes">
        <Styled_SiteContainer noPadding>
          <div className="Block_every_order_includes__img">
            <GraphImg
              image={welcomes[0].everyOrderIncludesImage}
              transforms={["quality=value:80"]}
              maxWidth={983}
              baseURI={globalSiteSettings.graphcmsImageBaseURI}
            />
          </div>
          <div className="Block_every_order_includes__text">
            <h2>Every order includes:</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: welcomes[0].everyOrderIncludesText.html,
              }}
            ></div>
            {/* <div className="Block_every_order_includes__textBar"></div> */}
          </div>
        </Styled_SiteContainer>
      </Block_every_order_includesWrapper>
    </>
  )
}

export default Block_every_order_includes
