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
  // console.log("products", props.products)

  // Mouse move product image parallax
  let productWindowImage_xratio
  let productWindowImage_yratio

  const productWindowMouseParallaxFunc = e => {
    // console.log(
    //   "productWindowMouseParallaxFunc",
    //   e.pageX,
    //   e.pageY - window.scrollY
    // )
    window.currentProductWindow.style.left =
      e.pageX * productWindowImage_xratio * -1 + "px"
    window.currentProductWindow.style.top =
      (e.pageY - window.scrollY) * productWindowImage_yratio * -1 + "px"
  }

  const productWindow_addParallax = target => {
    const el = document.querySelector(`.productWindowImg_${target}`).parentNode
    const elParent = el.parentNode

    window.currentProductWindow = el

    productWindowImage_xratio =
      (el.offsetWidth - (elParent.offsetWidth + 5)) / elParent.offsetWidth
    productWindowImage_yratio =
      (el.offsetHeight - (elParent.offsetHeight + 5)) / elParent.offsetHeight

    el.addEventListener("mousemove", productWindowMouseParallaxFunc)
  }

  const productWindow_removeParallax = target => {
    const el = document.querySelector(`.productWindowImg_${target}`).parentNode
    el.removeEventListener("mousemove", productWindowMouseParallaxFunc)
  }

  useEffect(() => {
    //
    // mobile:
    //
    if (window.innerWidth < 768) {
      document.querySelectorAll(".productWindowItem").forEach(el => {
        gsap.set(el, {
          opacity: 0,
          y: "50px",
        })
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            // markers: true,
            start: "25% bottom",
            toggleActions: "restart none none reverse",
          },
          duration: 0.5,
          opacity: 1,
          y: "0",
        })
      })
      //
      // tablet / desktop:
      //
    } else {
      // get all product windows
      const allProductWindows = Array.from(
        document.querySelectorAll(".productWindowItem")
      )

      // how many rows?
      const numberOfProductWindowsPerRow = 2
      const numberOfProductWindowRows = Math.ceil(
        allProductWindows.length / numberOfProductWindowsPerRow
      )

      // group in twos
      let rowOfProductWindows = []
      let rowOfCount = 0

      for (let i = 0; i < numberOfProductWindowRows; i++) {
        // TODO maybe:
        // following is manually adding 2 elements to the array
        // ideally needs to be dynamic based upon numberOfProductWindowsPerRow value
        rowOfProductWindows.push([
          allProductWindows[rowOfCount],
          allProductWindows[rowOfCount + 1],
        ])
        rowOfCount = rowOfCount + numberOfProductWindowsPerRow
      }

      // set scroll triggers with stagger for each row
      rowOfProductWindows.forEach(el => {
        gsap.set(el, {
          opacity: 0,
          y: "50px",
        })
        gsap.to(el, {
          scrollTrigger: {
            trigger: el,
            // markers: true,
            start: "25% bottom",
            // toggleActions: "restart none none reset",
            toggleActions: "restart none none reverse",
          },
          duration: 0.5,
          stagger: 0.25,
          opacity: 1,
          y: "0",
        })
      })
    }
  }, [])

  return (
    <>
      <Section_product_windows>
        <Styled_SiteContainer>
          <Div_productWrapper>
            {props.products.map((item, index) => (
              <A_productItem
                className="productWindowItem"
                to={`/${item.categoryType[0]}/${item.productType}/${item.slug}/`}
                onMouseOver={() => {
                  productWindow_addParallax(index)
                }}
                onMouseLeave={() => {
                  productWindow_removeParallax(index)
                }}
              >
                <GraphImg
                  image={item.productWindowImage}
                  transforms={["quality=value:80"]}
                  maxWidth={700}
                  className={`productWindowImg_${index}`}
                />
                <Div_product_name>{item.name}</Div_product_name>
              </A_productItem>
            ))}
          </Div_productWrapper>
        </Styled_SiteContainer>
      </Section_product_windows>
    </>
  )
}

export default Block_product_windows