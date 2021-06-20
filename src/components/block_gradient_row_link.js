import React from "react"
import { useEffect } from "react"
import GraphImg from "graphcms-image"

import { Styled_SiteContainer } from "../styles/commonStyles"
import styled from "styled-components"
import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const bp_min_tablet = "@media (min-width: 768px)"
const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const Div__gradient_row_link = styled.div`
  position: relative;
  overflow: hidden;
  margin: 6px 0;

  ${bp_min_desktop} {
    margin: 10px 0;
  }

  .wrapper {
    position: relative;
    transform: translateX(
      ${props => (props.img_alignment === "right" ? "-100%" : "100%")}
    );
    height: 110px;
    overflow: hidden;
    background: linear-gradient(
      to ${props => props.img_alignment},
      #f9f6ee 49.99%,
      ${props => props.tint_colour} 50%
    );

    ${bp_min_desktop} {
      height: 200px;
    }
  }

  .link_block {
    position: relative;
    display: block;
    height: 110px;
    background: linear-gradient(
      to ${props => props.img_alignment},
      #f9f6ee 50%,
      ${props => props.tint_colour} 100%
    );

    ${bp_min_desktop} {
      height: 200px;
    }
  }

  .text {
    position: absolute;
    left: ${props =>
      props.img_alignment === "right" ? "-10px" : "calc(40% + 10px)"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 60%;
    text-transform: uppercase;
    text-align: ${props =>
      props.img_alignment === "right" ? "right" : "left"};

    ${bp_min_desktop} {
      width: 50%;
      left: ${props => (props.img_alignment === "right" ? "0" : "50%")};
    }

    > p {
      width: 100%;
      line-height: 17px;

      ${bp_min_desktop} {
        line-height: 30px;
      }
    }

    &-pre-title {
      display: block;
      height: 15px;
      overflow: hidden;
      font-size: 13px;

      ${bp_min_desktop} {
        height: 30px;
        font-size: 21px;
      }

      span {
        position: relative;
        top: 20px;

        ${bp_min_desktop} {
          top: 35px;
        }
      }
    }

    &-title {
      display: block;
      overflow: hidden;
      height: 20px;
      font-size: 20px;
      font-family: "Playfair Display", serif;
      text-shadow: 0px 2px 3px rgb(0 0 0 / 30%);
      line-height: 20px;

      ${bp_min_desktop} {
        height: 40px;
        line-height: 30px;
        font-size: 41px;
        text-shadow: 0px 4px 4px rgb(0 0 0 / 40%);
      }

      span {
        position: relative;
        top: -20px;

        ${bp_min_desktop} {
          top: -45px;
        }
      }
    }
  }

  .img {
    position: absolute;
    width: 33.33%;
    top: 20px;
    left: ${props => (props.img_alignment === "right" ? "66.66%" : "0%")};
    opacity: 0;

    ${bp_min_desktop} {
      width: 50%;
      left: ${props => (props.img_alignment === "right" ? "50%" : "0%")};
    }

    > div {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 130%;

      ${bp_min_desktop} {
        top: 0;
        width: 60%;
      }
    }
  }
`

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
          start: "top 97%",
          toggleActions: "play none none reset",
          // markers: true,
          // end: `+=${viewportWidth}`,
          // scrub: 1,
          // pin: true,
          // anticipatePin: 1,
        },
      })
      tl_gsap.to(this_component_el, {
        duration: 1.2,
        x: 0,
        ease: "power2.out",
      })
      tl_gsap.to(
        document.querySelector(`.${this_component_name} .text-pre-title span`),
        {
          duration: 1.5,
          top: 0,
          ease: "power2.inOut",
        },
        "-=.85"
      )
      tl_gsap.to(
        document.querySelector(`.${this_component_name} .text-title span`),
        {
          duration: 1.5,
          top: 0,
          ease: "power2.inOut",
        },
        "-=1.15"
      )
      tl_gsap.to(
        document.querySelector(`.${this_component_name} .img`),
        {
          duration: 1.5,
          opacity: 1,
          top: 0,
          ease: "power2.inOut",
        },
        "-=1.3"
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
