import React from "react"
// import { Link } from "gatsby"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
import Link from "gatsby-plugin-transition-link"

import GraphImg from "graphcms-image"
import styled from "styled-components"

import { gsap, Expo } from "gsap/all"

const Styled_ProductItem = styled(Link)`
  margin-bottom: 40px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #bdbdbd;

  @media (min-width: 768px) {
    border: none;
  }
`

const Styled_Img = styled.div`
  margin-bottom: 25px;
`

const Styled_Title = styled.h2`
  @media (min-width: 768px) {
    min-height: 80px;
    text-align: center;
  }
`

const Product = props => {
  // setTimeout(() => {
  //   console.clear()
  // }, 200)

  const tl = gsap.timeline()
  const tl_duration = 2
  const tl_target_image_container = `.image_${props.product.slug}`

  const page_exit_animation = (exit, node) => {
    //
    // get previous element before the image
    const tl_target_prevEl = document.querySelector(tl_target_image_container)
      .previousElementSibling
    // figure out height of the space the image took up
    const tl_target_hole_to_fill = Number(
      37.35 +
        document
          .querySelector(tl_target_image_container)
          .getBoundingClientRect().height
    )
    // add margin to the bottom of the element previous to the image to prevent the elements beneath the image jumping up the page
    tl.set(tl_target_prevEl, {
      css: {
        marginBottom: tl_target_hole_to_fill,
      },
    })
    //
    // get width of image
    const target_image_width = document
      .querySelector(tl_target_image_container)
      .getBoundingClientRect().width
    // get height of image
    const target_image_height = document
      .querySelector(tl_target_image_container)
      .getBoundingClientRect().height
    // finding the aspect ratio, calculate the new height of the image when the width is as wide as the browser width
    const adjusted_height =
      (target_image_height / target_image_width) * window.innerWidth
    // calculate y position of image to place the center of the image in the center of the page
    const target_image_ypos_to_place_center =
      (adjusted_height - window.innerHeight) / 2
    //
    // "lift" image off the page, but place it where it was as our starting point
    tl.set(tl_target_image_container, {
      css: {
        // outline: "1px solid rgba(255,0,0,0.5)",
        zIndex: 2,
        position: "absolute",
        top:
          window.scrollY +
          document
            .querySelector(tl_target_image_container)
            .getBoundingClientRect().top,
        left: document
          .querySelector(tl_target_image_container)
          .getBoundingClientRect().left,
        width: target_image_width,
        height: target_image_height,
      },
    })
    //
    // animate image to new position, filling the whole screen, centered and in the same position as the same image on the product detail page, seamlessly
    tl.to(tl_target_image_container, {
      duration: tl_duration,
      // ease: CustomEase.create("custom", "M0,0 C0.6,0.01 -0.05,0.9 1,1 "),
      ease: Expo.easeInOut,
      left: 0,
      top: 10 - target_image_ypos_to_place_center + window.scrollY,
      width: "100%",
      // height: "100%",
      height: window.innerHeight,
    })
    //
    // fade the page out
    // tl.to("#gatsby-focus-wrapper", {
    //   duration: 1,
    //   opacity: 0,
    // })
  }

  return (
    <Styled_ProductItem
      to={`/${props.category}/${props.product.slug}/`}
      exit={{
        trigger: ({ exit, node }) => page_exit_animation(exit, node),
        length: tl_duration,
      }}
      entry={{
        appearAfter: tl_duration,
        delay: 0,
      }}
    >
      <Styled_Title>{props.product.name}</Styled_Title>
      {/* the image div below gets an animated transition through to its page by targetting its class */}
      <Styled_Img className={`image_${props.product.slug}`}>
        <GraphImg
          image={props.product.image[0]}
          transforms={["quality=value:80"]}
          maxWidth={500}
        />
      </Styled_Img>
      <div>
        <p>{props.product.description}</p>
        <p>£{props.product.price}</p>
      </div>
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
