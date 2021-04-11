import React from "react"
import { useEffect } from "react"
import { gsap, ScrollTrigger } from "gsap/all"

import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import img_product_ring_silver_round_blue_diamond from "../images/products/ring/product-ring-silver-round-blue-diamond.png"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const section_vertical_height = "100vh"
const section_vertical_padding = "0vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

const Div__block_one_row_jewellery = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 25px 0 70px;
  align-items: center;
  text-align: center;
  background-color: #e5e3de;

  ${bp_min_desktop} {
    min-height: calc(${section_vertical_height} + ${section_vertical_padding});
    padding: 75px 0;
  }

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .entryHeading {
    position: relative;
    margin-top: 30px;
    letter-spacing: -1px;
    font-size: clamp(18px, 4vw, 25px);
    text-transform: uppercase;
    font-family: "Playfair Display", serif;

    ${bp_min_desktop} {
      top: 70px;
      margin-top: 0;
    }

    > span {
      opacity: 0;
    }

    > div {
      opacity: 0;
      font-size: clamp(25px, 4vw, 50px);

      ${bp_min_desktop} {
        margin-top: 10px;
      }
    }
  }

  h2 {
    position: relative;
    margin-bottom: 20px;
    text-align: center;
    font-family: "Alex Brush", serif;
    font-size: clamp(78px, 14vw, 235px);
    letter-spacing: -1px;
    color: #ba9b7c;
    opacity: 0;

    ${bp_min_desktop} {
      left: -50px;
      margin-bottom: 0;
    }
  }

  img {
    width: auto;
  }

  .productItem {
    position: relative;
    padding: 30px 0;
    text-decoration: none;
    color: #90836b;

    ${bp_min_desktop} {
      padding: 30px 0 100px;

      &:nth-child(even) {
        display: block;
        padding: 100px 0 30px;

        .productImg {
          top: 103px;
        }

        .productStage {
          top: 187px;
        }
      }
    }

    ${bp_min_desktop} {
      &:hover {
        .productImg {
          top: -33px;
          left: calc(50% + 3px);
          width: 175px;
          height: 245px;
        }

        .productStage {
          top: 127px;
          width: 194px;
          height: 93px;
        }

        .productDesc {
          top: 20px;
          color: #000;
        }
      }

      &:nth-child(even):hover {
        .productImg {
          top: 36px;
        }

        .productStage {
          top: 197px;
        }
      }
    }
  }

  .productImg {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 110px;
    height: 154px;
    z-index: 1;
    transition: all ease 0.5s;
  }

  .productStage {
    position: absolute;
    top: 115px;
    left: 50%;
    transform: translateX(-50%);
    width: 213px;
    height: 85px;
    background-color: white;
    border-radius: 100%;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.2),
      inset 0px 0px 20px 10px rgba(0, 0, 0, 0.08);
    transition: all ease 0.5s;
  }

  .productDesc {
    position: relative;
    top: 0;
    width: 60%;
    margin: 200px auto 0;
    line-height: 25px;
    color: #a59985;
    transition: all ease 0.5s;

    /* ${bp_min_desktop} {
      opacity: 0;
    } */
  }
`

const Div__productRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${bp_min_desktop} {
    margin: 40px 0 0;
  }
`

const Block_one_row_jewellery = () => {
  let Block_one_row_jewellery = null
  let gsap__entryHeading = null // A Mutual Promise
  let gsap__entryHeading_wj = null // Wentworth Jewels
  let gsap__entryHeading_category_title = null // Engagement

  let return_array_center_out = a => {
    var o = [],
      s = a.length,
      l = Math.floor(s / 2),
      c
    for (c = 0; c < s; c++)
      o.push(a[(l += s % 2 ? (c % 2 ? +c : -c) : c % 2 ? -c : +c)])
    return o
  }

  useEffect(() => {
    let tl_gsap__entryHeading = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: Block_one_row_jewellery,
        // markers: true,
        id: "tl_gsap__entryHeading",
        start: window.innerWidth < 768 ? "top 70%" : "top 60%",
        toggleActions: "play none none reset",
      },
    })
    tl_gsap__entryHeading.to(gsap__entryHeading, {
      duration: 3,
      opacity: 1,
      ease: "back",
    })
    tl_gsap__entryHeading.to(
      gsap__entryHeading_wj,
      {
        duration: 3,
        opacity: 1,
        ease: "back",
      },
      "-=2.5"
    )
    tl_gsap__entryHeading.to(
      gsap__entryHeading_category_title,
      {
        duration: 3,
        opacity: 1,
        ease: "back",
      },
      "-=2.5"
    )

    if (window.innerWidth < 768) {
      document.querySelectorAll(".productItem").forEach(el => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            // markers: true,
            start: "top 88%",
            toggleActions: "restart none none reset",
          },
          duration: 2.5,
          opacity: 0,
          scale: 0.6,
          ease: "elastic",
        })
      })
    } else {
      let tl_gsap__productItem = gsap.timeline({
        paused: true,
        scrollTrigger: {
          trigger: Block_one_row_jewellery,
          // markers: true,
          id: "tl_gsap__productItem",
          start: "top 35%",
          toggleActions: "play none none reset",
        },
      })
      tl_gsap__productItem.from(
        return_array_center_out(document.querySelectorAll(".productItem")),
        {
          duration: 1.2,
          opacity: 0,
          y: 120,
          ease: "back",
          stagger: 0.2,
        }
      )
      tl_gsap__productItem.from(
        return_array_center_out(document.querySelectorAll(".productDesc")),
        {
          duration: 0.25,
          opacity: 0,
          stagger: 0.2,
        },
        "-=.75"
      )
    }

    // return function to kill timeline on dismount
    // return () => tl_gsap__entryHeading.kill()
  }, [])

  return (
    <>
      <Div__block_one_row_jewellery ref={e => (Block_one_row_jewellery = e)}>
        <Styled_SiteContainer>
          <p className="entryHeading">
            <span ref={e => (gsap__entryHeading = e)}>A mutual promise</span>{" "}
            <div ref={e => (gsap__entryHeading_wj = e)}>Wentworth Jewels</div>
          </p>
          <h2 ref={e => (gsap__entryHeading_category_title = e)}>Engagement</h2>
          {/* Extra div added below because gatsby would not apply the styled component when building, works when wrappd in another div ?/?? */}
          <div>
            <Div__productRow>
              <a href="/" className="productItem">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>
            </Div__productRow>
          </div>
        </Styled_SiteContainer>
      </Div__block_one_row_jewellery>
    </>
  )
}

export default Block_one_row_jewellery
