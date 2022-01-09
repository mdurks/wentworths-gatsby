import React from "react"
import { useEffect } from "react"

import GraphImg from "graphcms-image"

import {
  Section_product_windows,
  Div_productWrapper,
  A_productItem,
  Div_product_name,
} from "./block_product_windows.styles.js"
import { Styled_SiteContainer } from "../../../styles/commonStyles"

import { gsap, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const Block_product_windows = props => {
  console.log("products", props.products)

  useEffect(() => {
    // let tl_gsap = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".lkjlkj",
    //     start: "-5% 90%",
    //     // toggleActions: "play none none reset",
    //     // markers: true,
    //     // end: `+=${viewportWidth}`,
    //     // scrub: 1,
    //     // pin: true,
    //     // anticipatePin: 1,
    //   },
    // })
    // tl_gsap.from(".lkjlkj", {
    //   duration: 2,
    //   opacity: 0,
    //   ease: "power2.out",
    // })
    // // return function to kill timeline on dismount
    // return () => tl_gsap.kill()
  }, [])

  return (
    <>
      <Section_product_windows>
        <Styled_SiteContainer>
          <Div_productWrapper>
            {props.products.map(item => (
              <A_productItem
                to={`/${item.categoryType[0]}/${item.productType}/${item.slug}/`}
              >
                <GraphImg
                  image={item.image[0]}
                  transforms={["quality=value:80"]}
                  maxWidth={700}
                />
                <Div_product_name>
                  <span>{item.name}</span>
                </Div_product_name>
              </A_productItem>
            ))}
          </Div_productWrapper>
        </Styled_SiteContainer>
      </Section_product_windows>
    </>
  )
}

export default Block_product_windows
