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
      //
      //
      var toNodeList = function (arrayOfNodes) {
        arrayOfNodes.forEach(function (item) {
          item.className = item.className + " custom_class"
        })

        var elems = document.querySelectorAll(".custom_class")

        arrayOfNodes.forEach(function (item) {
          item.className = item.className.replace("custom_class", "")
        })

        return elems
      }

      function isNodeList(nodes) {
        var stringRepr = Object.prototype.toString.call(nodes)

        return (
          typeof nodes === "object" &&
          /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
          nodes.hasOwnProperty("length") &&
          (nodes.length === 0 ||
            (typeof nodes[0] === "object" && nodes[0].nodeType > 0))
        )
      }
      //
      //
      // grab each individual product and create array of arrays
      // divided by how many there are on a row
      //
      // turn:
      // [1,2,3,4,5,6,7,8,9,10,11,12,13]
      // into:
      // [[1,2,3,4,5], [6,7,8,9,10], [11,12,13]]
      //
      let items = []
      for (
        let i = 1;
        i <= document.querySelectorAll(".productItem").length;
        i++
      ) {
        items.push(i)
      }
      let group_size = 5
      let number_of_divisions = Math.ceil(items.length / group_size) // round up: 13 / 5 = 2.6 = 3
      let items_divided_up = []

      let slice_start = 0
      let slice_end = group_size

      for (let i = 0; i < number_of_divisions; i++) {
        items_divided_up.push(items.slice(slice_start, slice_end))
        slice_start += group_size
        slice_end += group_size
      }
      //
      // take this array of arrays and sort each group 'centered out'
      //
      let items_centered_out = []
      //
      for (let i = 0; i < items_divided_up.length; i++) {
        items_centered_out.push(return_array_center_out(items_divided_up[i]))
      }
      // we now have:
      // [[3,4,2,5,1], [8,9,7,10,6], [12,13,11]]
      //
      //
      // Create timelines:
      //
      let tl_gsap__productItem = []
      //
      for (let x = 0; x < items_centered_out.length; x++) {
        //
        // tl_gsap__productItem[x] = gsap.timeline({
        //   paused: true,
        //   scrollTrigger: {
        //     // trigger: Block_one_row_jewellery,
        //     trigger: document.querySelector(
        //       ".productItem" + items_centered_out[x][0]
        //     ),
        //     markers: true,
        //     start: "-100 75%",
        //     toggleActions: "play none none reset",
        //   },
        // })
        //
        let mylength = [...items_centered_out[x]]
        //
        for (let i = 0; i < mylength.length; i++) {
          //
          let currentNumber = items_centered_out[x][i]
          let delayAmount = i * 0.15
          let yAmount = (mylength.length - i) * 0.2 * 400
          //
          gsap.from(".productItem" + currentNumber, {
            scrollTrigger: {
              trigger: document.querySelector(".productItem" + currentNumber)
                .parentElement,
              // markers: true,
              start: "-60 75%",
              toggleActions: "play none none reset",
            },
            delay: delayAmount,
            duration: 1.25,
            opacity: 0,
            y: yAmount,
            ease: "back",
          })
        }
        //
        //let product_items = document.querySelectorAll(".productItem")
        //
        // tl_gsap__productItem[x].from(toNodeList(items_centered_out[x]), {
        //   duration: 2.2,
        //   opacity: 0,
        //   // y: 120,
        //   y: function (i) {
        //     return "+=" + (items_centered_out[x].length - i) * 100
        //   },
        //   ease: "back",
        //   stagger: 0.15,
        // })
        // tl_gsap__productItem[x].from(
        //   toNodeList(items_centered_out[x]),
        //   {
        //     duration: 0.25,
        //     opacity: 0,
        //     stagger: 0.2,
        //   },
        //   "-=.75"
        // )
        //
      }
      //
      //
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
              <a href="/" className="productItem productItem1">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem2">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>
              <a href="/" className="productItem productItem3">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem4">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>
              <a href="/" className="productItem productItem5">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>
            </Div__productRow>
            <Div__productRow>
              <a href="/" className="productItem productItem6">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>
              <a href="/" className="productItem productItem7">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem8">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem9">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem10">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>
            </Div__productRow>
            <Div__productRow>
              <a href="/" className="productItem productItem11">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem12">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem13">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem14">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem15">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>
            </Div__productRow>
            <Div__productRow>
              <a href="/" className="productItem productItem16">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem17">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem18">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem19">
                <img
                  className="productImg"
                  src={img_product_ring_silver_round_blue_diamond}
                  alt=""
                />
                <div className="productStage"></div>
                <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
              </a>

              <a href="/" className="productItem productItem20">
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
