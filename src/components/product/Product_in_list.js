import React from "react"

// import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import Link from "gatsby-plugin-transition-link"
import GraphImg from "graphcms-image"
import styled from "styled-components"
import { gsap, Power2 } from "gsap/all"

import { globalSiteSettings } from "../../common/globalVars"
import css_breakpoints from "../../common/css_breakpoints"
import { number_with_commas } from "../../common/utility"

const Styled_ProductItem = styled(Link)`
  display: block;
  position: relative;
  margin-bottom: 25px;
  padding: 30px 0;
  text-decoration: none;
  color: #90836b;
  -webkit-tap-highlight-color: transparent;

  ${css_breakpoints.min_desktop} {
    flex: 0 0 20%;
    padding: 30px 0 100px;

    &:nth-child(even) {
      display: block;
      padding: 100px 0 30px;

      .image_to_animate_on_click {
        top: 70px;
      }

      /* .productImg {
        top: 71px;
      }

      .productStage {
        top: 187px;
      } */
    }
  }

  ${css_breakpoints.min_desktop} {
    &:hover {
      .productImg {
        top: -33px;
        left: calc(50% + 3px);
        width: 175px;
        height: 245px;
      }

      .productStage {
        bottom: -11px;
        width: 119%;
        height: 48%;
      }

      .productDesc {
        top: 16px;
      }

      .productPrice {
        top: 16px;
        // opacity: 1;
      }
    }

    /* &:nth-child(even):hover {
      .productImg {
        top: 36px;
      }

      .productStage {
        top: 197px;
      }
    } */
  }

  img {
    width: auto;
  }

  .image_to_animate_on_click {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 200px;
    height: 200px;
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
  }

  .productImg {
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all ease 0.5s;
  }

  .productStage {
    position: absolute;
    /* top: 115px; */
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    /* width: 213px;
    height: 85px; */
    width: 107%;
    height: 43%;
    background-color: white;
    border-radius: 100%;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.2),
      inset 0px 0px 20px 10px rgba(0, 0, 0, 0.08);
    transition: all ease 0.5s;
  }

  .productDesc {
    position: relative;
    top: 0;
    width: 75%;
    margin: 200px auto 0;
    font-size: 16px;
    line-height: 20px;
    color: black;
    text-transform: capitalize;
    transition: all ease 0.5s;
  }

  .productPrice {
    position: relative;
    top: 0;
    font-family: sans-serif;
    font-size: 18px;
    color: rgb(167, 119, 17);
    transition: all ease 0.5s;

    // ${css_breakpoints.min_desktop} {
    //   font-size: 30px;
    //   top: -20px;
    //   opacity: 0;
    // }
  }
`

const Styled_Img = styled.div`
  /* margin-bottom: 25px; */
  > div {
    height: 100%;

    > div {
      height: 100%;
    }
  }
`

const Product = props => {
  //
  //
  let tl = gsap.timeline()
  let tl_duration = 1.5
  let tl_target_image_container = `.image_${props.product.slug}`

  let page_exit_animation = (exit, node) => {
    /*
    //
    //
    // Target Hole To Fill
    //
    // get next element before the image
    // let tl_target_prevEl = document.querySelector(tl_target_image_container).nextElementSibling
    // figure out height of the space the image took up
    // let tl_target_hole_to_fill = Number(
    //   document
    //     .querySelector(tl_target_image_container.firstElementChild)
    //     .getBoundingClientRect().height
    // )
    // add margin to the bottom of the element next to the image to prevent the elements beneath the image jumping up the page
    // tl.set(tl_target_prevEl, {
    //   css: {
    //     marginBottom: tl_target_hole_to_fill,
    //   },
    // })
    //
    //
    // Calculate Image Size
    //
    // get width of image
    // let target_image_width = document
    //   .querySelector(tl_target_image_container)
    //   .getBoundingClientRect().width
    // // get height of image
    // let target_image_height =
    //   document
    //     .querySelector(tl_target_image_container)
    //     .firstElementChild.getBoundingClientRect().height - 45
    // //
    // console.log(target_image_width, target_image_height)
    //
    // Begin Animating Image
    //
    // "lift" image off the page, but place it exactly where it was as the starting point
    // tl.set(tl_target_image_container, {
    //   css: {
    //     // outline: "1px solid rgba(255,0,0,0.5)",
    //     zIndex: 20,
    //     position: "absolute",
    //     top:
    //       window.scrollY +
    //       document
    //         .querySelector(tl_target_image_container)
    //         .getBoundingClientRect().top,
    //     left: document
    //       .querySelector(tl_target_image_container)
    //       .getBoundingClientRect().left,
    //     width: target_image_width,
    //     height: target_image_height,
    //   },
    // })
    */
    //
    //
    // fade out product title & price
    //
    tl.set(".productDesc, .productPrice", {
      css: {
        opacity: 0,
        y: "+=20",
      },
    })
    tl.set(".productRow", {
      css: {
        overflow: "visible",
      },
    })
    //
    //
    // Fade out other page elements on page exit
    //
    let elements_to_fade_out = Array.from(
      document.querySelector(".productsPageHeaeder").childNodes
    )
    elements_to_fade_out.push(document.querySelector(".filter"))
    elements_to_fade_out.push(document.querySelector(".filter_info"))
    elements_to_fade_out.reverse()
    //
    tl.to(elements_to_fade_out, {
      duration: 0.25,
      ease: Power2.easeInOut,
      opacity: 0,
      stagger: 0.07,
    })
    //
    //
    // find original position of element, and because they're placed unevenly on the yaxis,
    // remove any extra 'top' that might be there
    //
    let originY =
      window.scrollY +
      document.querySelector(tl_target_image_container).getBoundingClientRect()
        .top -
      Number(
        window
          .getComputedStyle(document.querySelector(tl_target_image_container))
          .getPropertyValue("top")
          .slice(0, -2)
      )
    //
    let destination_width = window.innerWidth >= 1024 ? 540 : 315
    let destination_height = window.innerWidth >= 1024 ? 540 : 315
    //
    let parent_width = document.querySelector(".productRow").offsetWidth
    let parent_offset_right =
      document.querySelector(tl_target_image_container).parentElement
        .offsetLeft -
      document.querySelector(".productRow").offsetLeft +
      5
    let parent_offset_top = window.innerHeight / 2 - destination_height / 2
    //
    let destination_y_refine = window.innerWidth >= 1024 ? 40.5 : -62
    let destination_x_refine = window.innerWidth >= 1024 ? 0.3 : 0.5
    //
    let destination_x =
      parent_offset_right * -1 + parent_width * destination_x_refine - 1
    let destination_y =
      window.scrollY + parent_offset_top - originY + destination_y_refine
    //
    //
    // animate image to new position, filling the whole screen, centered and in the same position as the same image on the incoming product detail page, seamlessly
    //
    // image animation:
    tl.to(
      tl_target_image_container,
      {
        duration: tl_duration,
        ease: Power2.easeInOut,
        left: destination_x,
        // top: window.innerWidth < 768 ? window.scrollY + 100 : window.scrollY,
        top: destination_y,
        width: destination_width,
        height: destination_height,
      },
      "-=0.75"
    )
    // productStage animation:
    tl.to(
      document.querySelector(tl_target_image_container + " .productStage"),
      {
        duration: tl_duration - tl_duration * 0.5,
        ease: Power2.out,
        width: window.innerWidth >= 1024 ? "433px" : "315px",
        height: window.innerWidth >= 1024 ? "176px" : "120px",
      },
      `-=${tl_duration}`
    )
    //
    //
    // fade out other product images on the page
    //
    let jewellery_items_array = Array.from(
      document.querySelectorAll(".productInListItem")
    )
    jewellery_items_array.splice(props.mapCount, 1)
    tl.to(
      jewellery_items_array,
      {
        duration: 0.5,
        ease: Power2.easeInOut,
        opacity: 0,
        y: 20,
        stagger: 0.075,
      },
      `-=${tl_duration}`
    )
    //
    // Fade the page out
    // tl.to("#gatsby-focus-wrapper", {
    //   duration: 1,
    //   opacity: 0,
    // })
  }

  return (
    <Styled_ProductItem
      className={`productInListItem productInListItem${props.mapCount + 1}`}
      to={`/${props.category}/${props.product.slug}/`}
      //
      //
      // animation to show when clicking this product
      //
      exit={{
        trigger: ({ exit, node }) => page_exit_animation(exit, node),
        length: tl_duration,
      }}
      entry={{
        appearAfter: tl_duration,
        delay: 0,
      }}
    >
      {/* the image div below gets an animated transition through to its page by targetting its class */}
      <div className={`image_to_animate_on_click image_${props.product.slug}`}>
        <Styled_Img className="productImg">
          <GraphImg
            image={props.product.image[0]}
            transforms={["quality=value:80"]}
            maxWidth={1920}
            baseURI={globalSiteSettings.graphcmsImageBaseURI}
          />
        </Styled_Img>
        <div className="productStage"></div>
      </div>
      <p className="productDesc">{props.product.name}</p>
      <p className="productPrice">£{number_with_commas(props.product.price)}</p>
      {/* <div>
        <p>{props.product.description}</p>
      </div> */}
    </Styled_ProductItem>
  )
}
export default Product
