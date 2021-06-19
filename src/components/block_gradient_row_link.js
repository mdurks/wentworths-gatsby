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
  height: 80px;
  overflow: hidden;
  background: linear-gradient(
    to ${props => props.img_alignment},
    #f9f6ee 49.99%,
    ${props => props.tint_colour} 50%
  );
  margin-bottom: 6px;

  ${bp_min_desktop} {
    height: 250px;
    margin-bottom: 10px;
  }

  .link_block {
    position: relative;
    display: block;
    height: 80px;
    background: linear-gradient(
      to ${props => props.img_alignment},
      #f9f6ee 50%,
      ${props => props.tint_colour} 100%
    );

    ${bp_min_desktop} {
      height: 250px;
    }
  }

  .text {
    position: absolute;
    left: ${props => (props.img_alignment === "right" ? "0" : "40%")};
    display: flex;
    align-items: center;
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
      font-size: 13px;

      ${bp_min_desktop} {
        font-size: 21px;
      }
    }

    &-title {
      display: block;
      font-size: 20px;
      font-family: "Playfair Display", serif;
      text-shadow: 0px 4px 4px rgb(0 0 0 / 40%);
      line-height: 20px;

      ${bp_min_desktop} {
        line-height: 30px;
        font-size: 41px;
      }
    }
  }

  .img {
    position: absolute;
    width: 33.33%;
    left: ${props => (props.img_alignment === "right" ? "66.66%" : "0%")};

    ${bp_min_desktop} {
      width: 50%;
      left: ${props => (props.img_alignment === "right" ? "50%" : "0%")};
    }

    > div {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 110%;

      ${bp_min_desktop} {
        width: 70%;
      }
    }
  }
`

const Block_gradient_row_link = props => {
  console.log("props", props)
  //
  //
  //

  useEffect(() => {
    // let tl_gsap = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: gsap__SIT__backgroundStrip,
    //     start: "-5% 85%",
    //     // toggleActions: "play none none reset",
    //     // markers: true,
    //     // end: `+=${viewportWidth}`,
    //     // scrub: 1,
    //     // pin: true,
    //     // anticipatePin: 1,
    //   },
    // })
    // tl_gsap.from(gsap__SIT__backgroundStrip, {
    //   // scrollTrigger: {
    //   //   trigger: gsap__SIT__backgroundStrip,
    //   //   // markers: true,
    //   //   start: "top 80%",
    //   // },
    //   duration: 2,
    //   opacity: 0,
    //   ease: "power2.out",
    // })
    // return function to kill timeline on dismount
    // return () => tl_gsap.kill()
  }, [])

  return (
    <Div__gradient_row_link
      tint_colour={props.tint_colour}
      img_alignment={props.img_alignment}
      className={props.img_alignment}
    >
      <Styled_SiteContainer noPadding>
        <a className="link_block" href={props.hyperlink}>
          <div className="text">
            <p>
              <span className="text-pre-title">{props.pre_title}</span>
              <span className="text-title">{props.title}</span>
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
    </Div__gradient_row_link>
  )
}

const X = (
  <Block_gradient_row_link onClick={() => console.log("clicked")} isSelected>
    Some Children
  </Block_gradient_row_link>
)

export default Block_gradient_row_link
