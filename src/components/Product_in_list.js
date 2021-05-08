import React from "react"

// import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import Link from "gatsby-plugin-transition-link"

import GraphImg from "graphcms-image"
import styled from "styled-components"

import { gsap, Expo, Power2 } from "gsap/all"

const bp_min_desktop = "@media (min-width: 1024px)"

const Styled_ProductItem = styled(Link)`
  display: block;
  position: relative;
  margin-bottom: 50px;
  padding: 30px 0;
  text-decoration: none;
  color: #90836b;

  ${bp_min_desktop} {
    flex: 0 0 20%;
    padding: 30px 0 100px;

    &:nth-child(even) {
      display: block;
      padding: 100px 0 30px;

      .productImg {
        top: 71px;
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
        bottom: -12px;
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
    width: 60%;
    margin: 200px auto 0;
    line-height: 25px;
    color: #a59985;
    transition: all ease 0.5s;
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
  let tl = gsap.timeline()
  let tl_duration = 1.25
  let tl_target_image_container = `.image_${props.product.slug}`

  let page_exit_animation = (exit, node) => {
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
    let target_image_width = document
      .querySelector(tl_target_image_container)
      .getBoundingClientRect().width
    // get height of image
    let target_image_height =
      document
        .querySelector(tl_target_image_container)
        .firstElementChild.getBoundingClientRect().height - 45
    //
    console.log(target_image_width, target_image_height)
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

    let originY =
      window.scrollY +
      document.querySelector(tl_target_image_container).getBoundingClientRect()
        .top

    let originX = document
      .querySelector(tl_target_image_container)
      .getBoundingClientRect().left

    console.log("Origin-X-Y: ", originY, originX)

    let destination_width = 540
    let destination_height = 540
    let destination_x = 325 //- originX
    let destination_y = window.scrollY + 244 - originY

    //Origin-X-Y:  621 227
    //destination-X-Y:  98 -407

    console.log("destination-X-Y: ", destination_x, destination_y)

    tl.set(
      document.querySelector(tl_target_image_container).nextElementSibling,
      {
        css: {
          opacity: 0,
        },
      }
    )

    // tl.set(tl_target_image_container, {
    //   css: {
    //     zIndex: 20,
    //     position: "absolute",
    //     top: originY,
    //     left: originX,
    //     width: target_image_width,
    //     height: target_image_height,
    //   },
    // })
    //
    // animate image to new position, filling the whole screen, centered and in the same position as the same image on the incoming product detail page, seamlessly
    tl.to(tl_target_image_container, {
      duration: tl_duration,
      ease: Power2.easeInOut,
      left: destination_x,
      // top: window.innerWidth < 768 ? window.scrollY + 100 : window.scrollY,
      top: destination_y,
      width: destination_width,
      height: destination_height,
    })
    //
    tl.to(
      document.querySelector(".productsPageHeaeder").childNodes,
      {
        duration: 1,
        ease: Power2.easeInOut,
        opacity: 0,
      },
      "-=1.25"
    )

    let jewellery_items_array = Array.from(
      document.querySelectorAll(".productInListItem")
    )
    jewellery_items_array.splice(props.mapCount, 1)
    tl.to(
      jewellery_items_array,
      {
        duration: 0.6,
        ease: Power2.easeInOut,
        opacity: 0,
        y: 20,
        stagger: 0.1,
      },
      "-=1.5"
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
          />
        </Styled_Img>
        <div className="productStage"></div>
      </div>
      <p className="productDesc">{props.product.name}</p>
      {/* <div>
        <p>{props.product.description}</p>
        <p>£{props.product.price}</p>
      </div> */}
    </Styled_ProductItem>
  )
}
export default Product

// import React from "react"
// // import { Link } from "gatsby"
// // import AniLink from "gatsby-plugin-transition-link/AniLink"
// import Link from "gatsby-plugin-transition-link"

// import GraphImg from "graphcms-image"
// import styled from "styled-components"

// import { gsap } from "gsap/all"

// const Product = props => {
//   this.page_exit_animation_duration = 1
//   this.page_exit_animation = (exit, node) => {
//     gsap.to("#gatsby-focus-wrapper", {
//       duration: this.page_exit_animation_duration,
//       opacity: 0,
//     })
//   }

//   return (
//     // AniLink :
//     // <Styled_ProductItem
//     //   to={`/${props.category}/${props.product.slug}/`}
//     //   swipe
//     //   direction="up"
//     //   top="exit"
//     //   duration={1}
//     // >
//     //
//     // Transition Link:
//     <Styled_ProductItem
//       to={`/${props.category}/${props.product.slug}/`}
//       exit={{
//         trigger: ({ exit, node }) => this.page_exit_animation(exit, node),
//         length: this.page_exit_animation_duration,
//       }}
//       entry={{
//         delay: this.page_exit_animation_duration,
//       }}
//     >
//       <Styled_Title>{props.product.name}</Styled_Title>
//       <Styled_Img>
//         <GraphImg
//           image={props.product.image[0]}
//           transforms={["quality=value:80"]}
//           maxWidth={500}
//         />
//       </Styled_Img>
//       <div>
//         <p>{props.product.description}</p>
//         <p>£{props.product.price}</p>
//       </div>
//     </Styled_ProductItem>
//   )
// }
// export default Product
