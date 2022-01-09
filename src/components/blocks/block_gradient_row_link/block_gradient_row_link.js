import React from "react"
import { useEffect } from "react"
import GraphImg from "graphcms-image"

import { Styled_SiteContainer } from "../../../styles/commonStyles"
import { Div__gradient_row_link } from "./block_gradient_row_link.styles"

import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const Block_gradient_row_link = props => {
  //
  //
  let this_component_name =
    "gradient_row_link_" + props.title.replace(/\s+/g, "")
  //
  useEffect(() => {
    //
    setTimeout(() => {
      let this_component_el = document.querySelector(
        `.${this_component_name} .wrapper`
      )
      //
      let tl_gsap = gsap.timeline({
        scrollTrigger: {
          trigger: this_component_el,
          start: window.innerHeight < 768 ? "top 95%" : "top 95%",
          // toggleActions: "play none none reset",
          toggleActions: "play none none none",
          // markers: true,
          // end: `+=${viewportWidth}`,
          // scrub: 1,
          // pin: true,
          // anticipatePin: 1,
        },
      })
      tl_gsap.to(this_component_el, {
        duration: 0.75,
        x: 0,
        ease: "power2.out",
      })
      tl_gsap.to(
        document.querySelector(`.${this_component_name} .text-pre-title span`),
        {
          duration: 1,
          top: 0,
          ease: "power2.inOut",
        },
        "-=.75"
      )
      tl_gsap.to(
        document.querySelector(`.${this_component_name} .text-title span`),
        {
          duration: 1,
          top: 0,
          ease: "power2.inOut",
        },
        "-=1"
      )
      tl_gsap.to(
        document.querySelector(`.${this_component_name} .img`),
        {
          duration: 1.25,
          opacity: 1,
          top: 0,
          ease: "power2.inOut",
        },
        "-=.7"
      )
      //
      //
      // return function to kill timeline on dismount
      return () => tl_gsap.kill()
    }, 750)
  }, [])

  return (
    <Div__gradient_row_link
      tint_colour={props.tint_colour}
      img_alignment={props.img_alignment}
      className={`${props.img_alignment} ${this_component_name}`}
    >
      <div className="wrapper">
        <Styled_SiteContainer noPadding>
          <a className="link_block" href={props.hyperlink}>
            <div className="text">
              <p className="text-pre-title">
                <span>{props.pre_title}</span>
              </p>
              <p className="text-title">
                <span>{props.title}</span>
              </p>
            </div>
            <div className="img">
              <GraphImg
                image={props.image}
                transforms={["quality=value:80"]}
                maxWidth={600}
              />
            </div>
          </a>
        </Styled_SiteContainer>
      </div>
    </Div__gradient_row_link>
  )
}

export default Block_gradient_row_link
