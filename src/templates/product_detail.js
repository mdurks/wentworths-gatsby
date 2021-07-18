import React from "react"
import { useEffect, useState } from "react"
import { graphql } from "gatsby"
import GraphImg from "graphcms-image"

//import Layout from "../components/layout"

import Block_may_also_like from "../components/block_may_also_like"
import Block_bespoke_design_advert from "../components/block_bespoke_design_advert"
import Form_Enquire from "../components/Form-Enquire"
import Form_Viewing from "../components/Form-Viewing"

// import Snipcart from "../components/snipcart"

import styled, { css } from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import { gsap, ScrollTrigger, Power3, Power2 } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const bp_min_tablet = "@media (min-width: 768px)"
const bp_min_desktop = "@media (min-width: 1024px)"
const section_vertical_height = "100vh"
const section_vertical_padding = "5vh"

const Div__detail_hero_block = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 25px 0 0;
  align-items: center;
  /* background-color: #e5e3de; */

  ${bp_min_desktop} {
    min-height: calc(${section_vertical_height} + ${section_vertical_padding});
    padding-top: 75px;
  }

  > section {
    position: relative;

    ${bp_min_desktop} {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .productPrice {
    font-family: "Playfair Display", serif;
    font-size: 32px;
    color: #776a54;
    opacity: 0;
  }

  .productVAT {
    margin: 20px 0 50px;
    font-family: "Playfair Display", serif;
    font-size: 16px;
    color: #000;
    opacity: 0;

    ${bp_min_desktop} {
      margin: 10px 0 50px;
    }
  }

  .productStage {
    position: absolute;
    height: 120px;
    width: 100%;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
    background-color: white;
    border-radius: 100%;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.2),
      inset 0px 0px 20px 10px rgba(0, 0, 0, 0.08);
    transition: all ease 0.5s;

    ${bp_min_desktop} {
      bottom: 0px;
      width: 433px;
      height: 176px;
    }
  }
`

// const Styled_BackgroundImg = styled.div`
//   position: absolute;
//   top: 100px;
//   left: -1px;
//   width: calc(100% + 2px);
//   height: 100vh;
//   background-repeat: no-repeat;
//   background-position: center;
//   background-size: cover;
//   z-index: -1;

//   @media (min-width: 768px) {
//     top: 0;
//   }

//   > div {
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     height: 100%;

//     > div {
//       height: 100%;
//     }
//   }
// `

const Styled_Img = styled.div`
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  margin: 80px 0 100px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  ${bp_min_desktop} {
    position: absolute;
    top: 50%;
    left: 30%;
    transform: translate(-50%, -50%);
    width: 540px;
    height: 540px;
    margin: 0;
    /* outline: 1px solid rgba(0, 0, 0, 0.3); */
  }

  div {
    height: 100%;
    width: 100%;
  }

  .animating_to_modal {
    height: 100%;
    margin: 0;
    top: 0;
    box-shadow: none !important;
    transform: translate(0px, 0px) scale(1) !important;
    transition: none !important;
    opacity: 1 !important;

    img {
      object-fit: contain !important;
    }
  }

  .reset_after_animated_to_modal {
    /* position: relative;
    overflow: hidden;
    z-index: 1;
    opacity: 1;
    transform: translate(0px, -100px) scale(1);
    transition: none !important;

    ${bp_min_desktop} {
      transform: translate(0px, -100px) scale(0.9);
    } */
  }
`

const Styled_CMScontent = styled.div`
  text-align: center;

  ${bp_min_desktop} {
    position: absolute;
    top: 50%;
    left: 75%;
    transform: translate(-50%, -50%);
    width: 30%;
    text-align: left;
  }
`

const Styled_Title = styled.h2`
  font-size: 29px;
  color: #776a54;
  opacity: 0;

  ${bp_min_desktop} {
    margin-bottom: 50px;
  }
`

const Styled_btn = styled.button`
  display: block;
  margin: 25px auto;
  padding: 15px 20px;
  width: 100%;
  color: #9c7043;
  background-color: transparent;
  border: 1px solid #b6926d;
  border-radius: 200px;
  font-family: "Playfair Display", serif;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  transition: background-color ease 0.4s;
  opacity: 0;
  /* box-shadow: inset 0px 7px 11px 0px rgba(0, 0, 0, 0.3); */

  ${bp_min_tablet} {
    margin: 0 0 22px;
    padding: 7px 36px;
    width: auto;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #b6926d;
      box-shadow: none;
    }
  }

  ${props =>
    props.btn_selected &&
    css`
      color: #fff;
      background-color: #b6926d;
    `};
`

const Div_detailed_description_block = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: #f4f3f1;

  ${bp_min_desktop} {
    min-height: calc(100vh + ${section_vertical_padding});
    padding: 0;
    padding-top: 75px;
    padding-bottom: 75px;
  }

  p {
    + p {
      margin-top: 40px;
    }

    &:last-of-type {
      margin-bottom: 40px;
    }
  }

  .detailed_description_colWrapper {
    display: flex;
    flex-direction: column;
    padding: 30px 0 0;

    ${bp_min_desktop} {
      flex-direction: row;
      padding: 0;
    }

    > div:first-of-type {
      ${bp_min_desktop} {
        flex: 1 1 55%;
        padding: 0 0 50px;
      }
    }

    > div:last-of-type {
      ${bp_min_desktop} {
        flex: 1 1 45%;
        padding: 50px;
      }
    }
  }

  .detailed_description_text {
    opacity: 0;
    padding-top: 20px;

    ${bp_min_desktop} {
      height: 75vh;
      padding-top: 0;
      padding-right: 30px;
      overflow-y: auto;
      font-size: 16px;
    }
  }
  /* &.stick_description .detailed_description_text {
    position: fixed;
    top: 150px;
    width: ${
      document.querySelector(".detailed_description_text").offsetWidth + "px"
    };
  } */

  .productScrollingImg {
    position: relative;
    top: 100px;
    margin-bottom: 30px;
    /* outline: 1px solid grey; */
    opacity: 0;
    transform: scale(0.8);

    &.animating_to_modal {
      height: 100%;
      margin: 0;
      top: 0;
      box-shadow: none !important;
      transform: translate(0px, 0px) scale(1) !important;
      transition: none !important;
      opacity: 1 !important;

      img {
        object-fit: contain !important;
      }
    }

    &.reset_after_animated_to_modal {
      position: relative;
      overflow: hidden;
      z-index: 1;
      opacity: 1;
      transform: translate(0px, -100px) scale(1);
      transition: none !important;

      ${bp_min_desktop} {
        transform: translate(0px, -100px) scale(0.9);
      }
    }
  }

  .graphcms-image-outer-wrapper {
    transition: all 0.4s ease;
    transform: scale(1);
    height: 100%;
    width: 100%;

    .productScrollingImg {
      box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.1);
      transition: all 0.4s ease;
    }

    @media (hover: hover) {
      cursor: zoom-in;

      &:hover {
        transform: scale(1.05);

        .productScrollingImg {
          box-shadow: 5px 5px 15px 3px rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
`

const Div_modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 5;
  /* overflow: auto; */

  .modalContent {
    /* position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    */

    position: absolute;
    width: 100vw;
    height: 100vh;
    background: white;
    left: 0;
    top: 0;

    ${bp_min_desktop} {
      padding: 30px;
    }

    @media (hover: hover) {
      cursor: zoom-in;
    }

    &.modalContent--zoom {
      width: 200%;
      height: auto;

      ${bp_min_desktop} {
        width: 150%;
        padding: 100px;

        @media (hover: hover) {
          cursor: zoom-out;
        }
      }

      div {
        width: auto;
        height: auto;
      }
    }

    div {
      width: 100%;
      height: 100%;
    }

    img {
      object-fit: contain !important;
    }
  }

  .modal_close {
    position: fixed;
    top: 10px;
    right: 10px;
    padding: 15px;
    background-color: #846a4f;
    color: white;
    border-radius: 100%;
    line-height: 15px;
    font-size: 26px;
    cursor: pointer;
    font-weight: bold;
    user-select: none;
    transition: all ease 0.3s;
    opacity: 0;
    z-index: 5;
    -webkit-tap-highlight-color: transparent;

    ${bp_min_desktop} {
      top: 40px;
      right: 45px;
    }

    @media (hover: hover) {
      &:hover {
        padding: 28px;
        top: 27px;
        right: 32px;
        font-size: 20px;
      }

      &:active {
        padding: 22px;
        top: 33px;
        right: 38px;
      }
    }
  }

  .modal_next_prev_btn {
    opacity: 0;

    ${bp_min_desktop} {
      position: fixed;
      top: 50%;
      left: 50px;
      padding: 12px 16px 16px;
      background-color: #846a4f;
      color: white;
      border-radius: 100%;
      line-height: 15px;
      font-size: 26px;
      cursor: pointer;
      font-weight: bold;
      transition: all ease 0.3s;
      user-select: none;
      z-index: 5;

      &--next {
        left: auto;
        right: 50px;
      }

      @media (hover: hover) {
        &:not([disabled]):hover {
          left: 35px;
          top: calc(50% - 10px);
          padding: 17px 30px 26px 12px;
          font-size: 40px;
        }

        &--next {
          &:not([disabled]):hover {
            left: auto;
            right: 35px;
            padding: 17px 12px 26px 30px;
          }
        }
      }

      &:disabled {
        background-color: #c0c0c0;
        cursor: not-allowed;
      }

      &:not([disabled]):active {
        padding: 14px 27px 23px 9px;
        top: calc(50% - 6px);
      }

      &--next {
        &:not([disabled]):active {
          padding: 14px 9px 23px 27px;
          top: calc(50% - 6px);
        }
      }
    }
  }

  .modalPagination {
    position: absolute;
    bottom: 50px;
    display: flex;
    justify-content: center;
    width: 100%;

    &__container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      max-width: 80vw;
      padding: 5px 5px 15px;
      background: #ffffff7d;
      border-radius: 3px;
      height: 76px;
    }

    &__pageBtn {
      position: relative;
      /* top: 50px; */
      flex: 0 0 auto;
      width: 62px;
      height: 62px;
      margin: 6px 0 14px;
      padding: 0px 6px;
      margin-top: 0;
      background-color: transparent;
      transition: margin-top ease 0.3s, width ease 0.3s, height ease 0.3s,
        left ease 0.3s;
      -webkit-tap-highlight-color: transparent;

      > div {
        border: 1px solid #846a4f;
        background-color: white;
      }

      &:hover {
        width: 60px;
        height: 60px;
        margin-top: -5px;

        &:before {
          bottom: -16px;
        }
      }

      &:before {
        content: "";
        position: absolute;
        bottom: -9px;
        left: 6px;
        width: 50px;
        height: 0px;
        background-color: #846a4f;
        z-index: 1;
        transition: all ease 0.3s;
      }

      &.modalPagination__selected {
        /* border: 2px solid black; */

        &:before {
          height: 5px;
        }
      }
    }
  }
`

const DetailsPage = ({
  data: {
    gcms: { product, products },
  },
  pageContext,
}) => {
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
    //
    //
    // Fade in hero elements
    //
    gsap.to(document.querySelector(".hero_details").childNodes, {
      delay: 1.5,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: Power3.inOut,
      y: -30,
      // ease: Power3.out,
    })
    //
    //
    // Hero elements
    //
    // let tl_hero_els = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: document.body,
    //     // markers: true,
    //     start: "50% top",
    //     toggleActions: "play none none reverse",
    //   },
    // })
    // tl_hero_els.to(document.querySelector(".hero_details").childNodes, {
    //   opacity: 0,
    //   duration: 0.7,
    //   stagger: 0.1,
    //   ease: Power2.out,
    //   y: "-=50px",
    // })
    //
    //
    // Hero parallax
    //
    gsap.to(".Styled_Img", {
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        toggleActions: "play none none none",
        // markers: true,
        scrub: true,
      },
      top: `+=${window.innerHeight / 6.5}`,
    })
    //
    //
    // Hero block parallax
    //
    // let heroBlock__backGroundImg = document.getElementById("heroImg")
    //
    // function manage_parallax() {
    //   // let scrollPos = document.documentElement.scrollTop
    //   requestAnimationFrame(function () {
    //     heroBlock__backGroundImg.style.transform = String(
    //       "translateY(" +
    //         document.documentElement.scrollTop / 4 +
    //         "px) translateZ(0)"
    //     )
    //   })
    // }
    // document.addEventListener("scroll", manage_parallax, false)
    //
    //
    // Fade in descriptive text
    //
    gsap.to(".detailed_description_text", {
      scrollTrigger: {
        trigger:
          window.innerWidth < 768
            ? ".detailed_description_text"
            : ".detailed_description_block",
        // markers: true,
        start: "top 70%",
        toggleActions: "play none none none",
      },
      ease: Power3.inOut,
      opacity: 1,
      duration: 2,
    })
    //
    //
    // Sticky descriptive text
    //
    if (window.innerWidth >= 1024) {
      let stick_detailed_description_text = () => {
        let el = document.querySelector(".detailed_description_text")
        el.style.position = ""
        el.style.top = ""
        el.style.top = el.offsetTop + "px"
        el.style.width =
          document.querySelector(".detailed_description_text").parentNode
            .offsetWidth -
          100 +
          "px"
        el.style.position = "fixed"
      }
      let un_stick_detailed_description_text = () => {
        let el = document.querySelector(".detailed_description_text")
        el.style.position = ""
        el.style.top = ""
        el.style.width = ""
      }
      let detailed_description_text_style = window.getComputedStyle(
        document.querySelector(".detailed_description_block"),
        null
      )
      let stick_to_bottom_detailed_description_text = () => {
        let el = document.querySelector(".detailed_description_text")
        el.style.position = "relative"
        el.style.top =
          window.scrollY -
          Number(
            detailed_description_text_style
              .getPropertyValue("padding-top")
              .slice(0, -2)
          ) +
          15 -
          window.innerHeight +
          "px"
      }
      //
      ScrollTrigger.create({
        id: "detailed_description_block",
        trigger: ".detailed_description_block",
        // markers: true,
        start: "top top",
        end: "bottom bottom",
        // toggleClass: "stick_description",
        onEnter: stick_detailed_description_text,
        onLeave: stick_to_bottom_detailed_description_text,
        onEnterBack: stick_detailed_description_text,
        onLeaveBack: un_stick_detailed_description_text,
      })
    }
    //
    //
    // Product scrolling images
    //
    let product_scrolling_images = document.querySelectorAll(
      ".productScrollingImg"
    )
    for (let i = 0; i < product_scrolling_images.length; i++) {
      gsap.to(product_scrolling_images[i], {
        scrollTrigger: {
          trigger: product_scrolling_images[i],
          // markers: true,
          start: window.innerWidth < 768 ? "-120% 50%" : "-80% 50%",
          toggleActions: "play none none none",
        },
        duration: 0.5,
        ease: Power3.inOut,
        y: -100,
        opacity: 1,
        scale: window.innerWidth < 768 ? "1" : "0.9",
      })
    }
    //
    //
    // Swipe events for modal
    let touchstartX = 0
    let touchendX = 0
    const el_to_listen_for_swipe = document.querySelector(".modalContent")
    function handle_gesture() {
      if (touchendX < touchstartX)
        document.querySelector(".modal_next_prev_btn--next").click()
      if (touchendX > touchstartX)
        document.querySelector(".modal_next_prev_btn--prev").click()
    }
    el_to_listen_for_swipe.addEventListener("touchstart", e => {
      touchstartX = e.changedTouches[0].screenX
    })
    el_to_listen_for_swipe.addEventListener("touchend", e => {
      touchendX = e.changedTouches[0].screenX
      handle_gesture()
    })
    //
    //
    // Set page colours
    //
    document.body.style.backgroundColor = "#e5e3de"
    document.body.classList.add("mainNav--brown")
    //
    //
    //
    // JS to go back
    //
    // intercept browser action to go back and stop it
    // call function to do exit animation, then redirect url to previous page
    history.pushState(null, document.title, location.href)
    window.addEventListener("popstate", function (event) {
      history.pushState(null, document.title, location.href)
      document.body.classList.add("no_x_scroll")
      exit_animation()
    })
    //
    let exit_animation = () => {
      //
      let pathArray = window.location.href.split("/")
      let newPathname = ""
      for (let i = 0; i < pathArray.length - 2; i++) {
        newPathname += pathArray[i] + "/"
      }
      window.location = newPathname
      //
      gsap.to(".tl-wrapper--mount", {
        opacity: 0,
        duration: 0.3,
        ease: Power3.inOut,
        y: 30,
      })
      //
    }
    //
    //
    // when this component unmounts:
    return () => {
      ScrollTrigger.getById("detailed_description_block").kill(true)
    }
    //
    //
    //
  }, [])

  const [modal_open, setModal_open] = useState("none")
  const [
    modal_img_from_product_array,
    setModal_img_from_product_array,
  ] = useState(0)
  //
  //
  //
  // Click product image to start zoom in to modal
  //
  let open_modal_animation = index => {
    //
    // disable the webpage beneath the model from scrolling
    document.body.classList.add("no_y_scroll")
    // hide the nav by animating it off-screen
    if (window.innerWidth >= 768) {
      document.getElementsByTagName("nav")[0].style.top = "-200px"
    } else {
      // mobile - hide the burger btn and nav so it doesn't overlap the modal
      document.querySelector(".burgerBtn").style.display = "none"
      document.querySelector(".mainNav").style.display = "none"
    }
    //
    // show the modal and image, but set opacity to 0
    document.querySelector(".product_detail_modal").style.opacity = "0"
    setModal_open("block")
    setModal_img_from_product_array(index)
    //
    // get handles on the elements to animate
    let target_product_img = document.querySelector(
      ".productScrollingImg_" + index
    )
    let target_product_img_parent = target_product_img.parentNode.parentNode
    //
    //
    // 'Lift' product image off the page with css 'fixed' and place it
    // exactly where it was, then we can animate it to fill the page
    //
    // if hero image
    if (index === 0) {
      gsap.set(".hero_details", {
        css: {
          marginTop: document.querySelector(".hero_details").offsetTop - 15,
        },
      })
      //
      // calculate where the image is before lift off
      let image_starting_y_pos
      let image_starting_x_pos
      //
      // mobile
      if (window.innerWidth < 1024) {
        image_starting_y_pos =
          target_product_img_parent.offsetTop +
          target_product_img_parent.offsetParent.offsetTop -
          window.scrollY +
          "px"
        image_starting_x_pos =
          target_product_img_parent.offsetLeft +
          target_product_img_parent.offsetParent.offsetLeft -
          target_product_img_parent.offsetWidth / 2 +
          "px"
        //
        // tablet or desktop
      } else {
        image_starting_y_pos =
          target_product_img_parent.offsetTop -
          window.scrollY +
          (window.innerHeight / 2 -
            target_product_img_parent.offsetHeight / 2) +
          //75 +
          "px"
        image_starting_x_pos = target_product_img_parent.offsetLeft + "px"
      }
      gsap.set(target_product_img_parent, {
        css: {
          position: "fixed",
          top: image_starting_y_pos,
          left: image_starting_x_pos,
          // document.querySelector(".detailed_description_block").offsetLeft +
          width: target_product_img_parent.offsetWidth + "px",
          height: target_product_img_parent.offsetHeight + "px",
          padding: window.innerWidth < 1024 ? "0px" : "30px",
          margin: window.innerWidth < 1024 ? "0px" : "30px",
          backgroundColor: "#ffffff00",
          transform: "none",
          zIndex: 5,
        },
      })
      gsap.set(".productStage", {
        css: {
          opacity: 0,
        },
      })
      //
      // else not hero image
    } else {
      gsap.set(target_product_img_parent, {
        css: {
          position: "fixed",
          top:
            target_product_img_parent.offsetTop -
            window.scrollY +
            document.querySelector(".detailed_description_block").offsetTop +
            "px",
          left:
            target_product_img_parent.offsetLeft +
            document.querySelector(".detailed_description_block").offsetLeft +
            "px",
          width: target_product_img_parent.offsetWidth + "px",
          height: target_product_img_parent.offsetHeight + "px",
          padding: window.innerWidth < 1024 ? "0px" : "30px",
          backgroundColor: "#ffffff00",
          zIndex: 5,
        },
      })
    }
    //
    // override conflicting styles
    target_product_img.classList.remove("reset_after_animated_to_modal")
    target_product_img.classList.add("animating_to_modal")
    //
    // now animate
    gsap.to(target_product_img_parent, {
      duration: 0.76,
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#ffffff",
      ease: "power1.inOut",
      // call the function that shows the modal after the animation finishes
      onComplete: click_product,
      onCompleteParams: [index],
    })
  }
  //
  //
  // click_product(index)
  //
  let click_product = index => {
    let target_product_img = document.querySelector(
      ".productScrollingImg_" + index
    )
    target_product_img.classList.remove("animating_to_modal")
    target_product_img.classList.add("reset_after_animated_to_modal")

    // clear the css properties set on the product image after zooming it in
    target_product_img.parentNode.parentNode.style = ""
    target_product_img.style = ""

    document.querySelector(".product_detail_modal").style.opacity = ""
    gsap.to(
      [
        ".modal_close",
        ".modal_next_prev_btn--prev",
        ".modal_next_prev_btn--next",
      ],
      {
        duration: 0.5,
        opacity: 1,
        stagger: 0.2,
      }
    )

    gsap.fromTo(
      return_array_center_out(
        document.querySelectorAll(".modalPagination__pageBtn")
      ),
      {
        opacity: 0,
        top: 50,
        // left: 50,
        rotation: 45,
      },
      {
        ease: "back",
        duration: 0.7,
        opacity: 1,
        top: 0,
        // left: 0,
        rotation: 0,
        stagger: 0.1,
      }
    )
  }
  //
  //
  // Close modal animation
  //
  let hide_modal = () => {
    setModal_open("none")
    reset_modal_zoom_state()
    gsap.set(".product_detail_modal", {
      scale: 1,
    })
  }

  let modal_close_animation = () => {
    gsap.to(".product_detail_modal", {
      duration: 0.35,
      opacity: 0,
      scale: 0.8,
      ease: "power1.inOut",
    })
    gsap.to(
      [
        ".modal_close",
        ".modal_next_prev_btn--prev",
        ".modal_next_prev_btn--next",
      ],
      {
        duration: 0.5,
        opacity: 0,
        stagger: 0.2,
        onComplete: hide_modal,
      }
    )
  }
  //
  //
  // Modal show prev image
  //
  let modal_show_prev_image_animation = () => {
    let target_img = document.querySelector(
      ".modalContent  .graphcms-image-wrapper"
    ).lastElementChild

    let tl = gsap.timeline()

    tl.to(target_img, {
      duration: 0.3,
      x: "10%",
      opacity: -0.55,
    })
    tl.set(
      target_img,
      {
        x: "-20%",
        onComplete: function () {
          setModal_img_from_product_array(
            modal_img_from_product_array >= 1
              ? modal_img_from_product_array - 1
              : 0
          )
          reset_modal_zoom_state()
        },
      },
      "+=0.35"
    )
    tl.to(
      target_img,
      {
        duration: 0.3,
        x: "0px",
        opacity: 1,
      },
      "+=0.15"
    )
  }
  //
  //
  // Modal show next image
  //
  let modal_show_next_image_animation = () => {
    let target_img = document.querySelector(
      ".modalContent  .graphcms-image-wrapper"
    ).lastElementChild

    let tl = gsap.timeline()

    tl.to(target_img, {
      duration: 0.3,
      x: "-10%",
      opacity: -0.55,
    })
    tl.set(
      target_img,
      {
        x: "+20%",
        onComplete: function () {
          setModal_img_from_product_array(
            modal_img_from_product_array <= product.image.length - 2
              ? modal_img_from_product_array + 1
              : product.image.length - 1
          )
          reset_modal_zoom_state()
        },
      },
      "+=0.35"
    )
    tl.to(
      target_img,
      {
        duration: 0.3,
        x: "0px",
        opacity: 1,
      },
      "+=0.15"
    )
  }
  //
  //
  // Modal pagination
  //
  let modal_pagination_goto_page = index => {
    let target_img = document.querySelector(
      ".modalContent  .graphcms-image-wrapper"
    ).lastElementChild

    let tl = gsap.timeline()

    tl.to(target_img, {
      duration: 0.15,
      opacity: -0.55,
    })
    tl.set(
      target_img,
      {
        onComplete: function () {
          setModal_img_from_product_array(index)
          reset_modal_zoom_state()
        },
      },
      "+=0.2"
    )
    tl.to(
      target_img,
      {
        duration: 0.15,
        opacity: 1,
      },
      "+=0.08"
    )
  }
  //
  //
  // Modal zoomed in mouse mover
  //
  let modal_desktop_zoomed = false

  let modal_mouse_mover = () => {
    let product_detail_modal = document.querySelector(".product_detail_modal")
    let product_detail_modal_content = document.querySelector(".modalContent")
    //
    let product_detail_modal_content_xratio =
      window.innerWidth /
      (product_detail_modal_content.offsetWidth + window.innerWidth)
    //
    let product_detail_modal_content_yratio =
      (product_detail_modal_content.offsetHeight - window.innerHeight) /
      window.innerHeight
    //
    product_detail_modal.onmousemove = function (e) {
      if (modal_desktop_zoomed) {
        // console.log(e.pageX, e.pageY - window.scrollY)
        product_detail_modal_content.style.left =
          e.pageX * product_detail_modal_content_xratio * -1 + "px"
        product_detail_modal_content.style.top =
          (e.pageY - window.scrollY) *
            product_detail_modal_content_yratio *
            -1 +
          "px"
      }
    }
  }
  //
  //
  // Reset modal zoom state
  //
  let reset_modal_zoom_state = () => {
    let product_detail_modal_content = document.querySelector(".modalContent")
    document
      .querySelector(".modalContent")
      .classList.remove("modalContent--zoom")
    modal_desktop_zoomed = false
    product_detail_modal_content.style.left = ""
    product_detail_modal_content.style.top = ""
  }
  //
  //
  //
  function number_with_commas(x) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")
  }
  //
  //
  //

  return (
    <>
      <Div__detail_hero_block>
        <Styled_SiteContainer>
          {/* Overide css wrapper classes to change backround colour */}
          <style
            dangerouslySetInnerHTML={{
              __html:
                `
                  /*
                  #gatsby-focus-wrapper,
                  .tl-wrapper--unmount,
                  .tl-wrapper--mount {
                    background-color: hsl(` +
                Math.floor(Math.random() * 360) +
                `deg 30% 90%);
                  }

                  .tl-wrapper {
                    top: -191px;
                    margin-bottom: -191px;
                    padding-top: 191px;
                    overflow-x: hidden;
                    overflow-y: hidden;
                    height: calc(100vh - 51px);
                  }

                  #gatsby-focus-wrapper {
                    background-image: url('/static/rings-on-necklace-large-2cc6c33b94b8a444bd171bbc1fd8047e.jpg');
                  }
                  */
              `,
            }}
          ></style>

          {/* <Styled_BackgroundImg id="heroImg">
          <GraphImg
            image={product.image[0]}
            transforms={["quality=value:80"]}
            maxWidth={1920}
            fadeIn={false}
            blurryPlaceholder={false}
          />
        </Styled_BackgroundImg> */}

          <div>
            <Styled_Img
              onClick={() => {
                open_modal_animation(0)
              }}
              className="Styled_Img"
            >
              <div className="productStage"></div>
              <GraphImg
                image={product.image[0]}
                transforms={["quality=value:80"]}
                maxWidth={1920}
                fadeIn={false}
                blurryPlaceholder={false}
                className="productScrollingImg_0"
              />
            </Styled_Img>
          </div>

          <Styled_CMScontent className="hero_details">
            <Styled_Title>{product.name}</Styled_Title>

            <p className="productPrice">£{number_with_commas(product.price)}</p>
            <p className="productVAT">Includes VAT + Delivery</p>

            <Styled_btn
              btn_selected
              className="snipcart-add-item"
              data-item-id={product.id}
              data-item-price={number_with_commas(product.price)}
              data-item-url={pageContext.pageURL}
              data-item-description={product.description}
              data-item-image={product.image[0].url}
              data-item-name={product.name}
            >
              Add to cart
            </Styled_btn>

            <Styled_btn
              onClick={() => {
                document.documentElement.classList.remove("showEnquire")
                document.documentElement.classList.toggle("showViewing")
                // document.documentElement.classList.toggle("pageNoScrollY")
              }}
            >
              Book a viewing
            </Styled_btn>

            <Styled_btn
              onClick={() => {
                document.documentElement.classList.remove("showViewing")
                document.documentElement.classList.toggle("showEnquire")
                // document.documentElement.classList.toggle("pageNoScrollY")
              }}
            >
              Enquire
            </Styled_btn>

            {/* <Styled_btn printBtn onClick={window.print}>
              Print
            </Styled_btn> */}
          </Styled_CMScontent>

          <Form_Enquire product={product.name} pageURL={pageContext.pageURL} />
          <Form_Viewing product={product.name} pageURL={pageContext.pageURL} />
        </Styled_SiteContainer>
      </Div__detail_hero_block>

      <Div_detailed_description_block className="detailed_description_block">
        <Styled_SiteContainer>
          <div className="detailed_description_colWrapper">
            <div>
              {/* loop out all the product images, skipping the first one since it's the hero img */}
              {product.image.slice(1).map((el, index) => (
                <>
                  <div
                    onClick={() => {
                      open_modal_animation(index + 1)
                    }}
                  >
                    <GraphImg
                      image={el}
                      transforms={["quality=value:80"]}
                      maxWidth={1920}
                      className={`productScrollingImg productScrollingImg_${
                        index + 1
                      }`}
                    />
                  </div>
                </>
              ))}
            </div>
            <div>
              <div
                className="detailed_description_text"
                dangerouslySetInnerHTML={{
                  __html: product.detailedDescription.html,
                }}
              ></div>
            </div>
          </div>
        </Styled_SiteContainer>
      </Div_detailed_description_block>

      <Div_modal
        className="product_detail_modal"
        style={{ display: modal_open }}
        onClick={() => {
          if (window.innerWidth > 1024) {
            document
              .querySelector(".modalContent")
              .classList.toggle("modalContent--zoom")
            modal_desktop_zoomed = !modal_desktop_zoomed
            modal_mouse_mover()
            document.querySelector(".modalContent").style.left = ""
            document.querySelector(".modalContent").style.top = ""
          }
        }}
      >
        <button
          className="modal_close"
          onClick={e => {
            e.stopPropagation()
            document.body.classList.remove("no_y_scroll")
            document.getElementsByTagName("nav")[0].style.top = ""
            document.querySelector(".productStage").style.opacity = ""
            document.querySelector(".burgerBtn").style = ""
            document.querySelector(".mainNav").style = ""
            document.querySelector(".hero_details").style = ""
            modal_close_animation()
          }}
        >
          X
        </button>
        <button
          className="modal_next_prev_btn modal_next_prev_btn--prev"
          disabled={modal_img_from_product_array === 0}
          onClick={e => {
            e.stopPropagation()
            modal_show_prev_image_animation()
          }}
        >
          &lt;
        </button>
        <button
          className="modal_next_prev_btn modal_next_prev_btn--next"
          disabled={modal_img_from_product_array === product.image.length - 1}
          onClick={e => {
            e.stopPropagation()
            modal_show_next_image_animation()
          }}
        >
          &gt;
        </button>
        <div className="modalContent">
          <GraphImg
            image={product.image[modal_img_from_product_array]}
            transforms={["quality=value:80"]}
            maxWidth={1920}
          />
        </div>
        <div className="modalPagination">
          <div className="modalPagination__container">
            {product.image.map((el, index) => (
              <>
                <button
                  className={`modalPagination__pageBtn ${
                    modal_img_from_product_array === index
                      ? "modalPagination__selected"
                      : ""
                  }`}
                  onClick={e => {
                    e.stopPropagation()
                    modal_pagination_goto_page(index)
                  }}
                  aria-label={`View image ${index + 1}`}
                >
                  <GraphImg
                    image={el}
                    transforms={["quality=value:50"]}
                    maxWidth={50}
                  />
                </button>
              </>
            ))}
          </div>
        </div>
      </Div_modal>

      <Block_may_also_like
        categoryType={pageContext.thisCategory}
        productType={pageContext.productType}
        products={products}
      />

      {/* <Block_bespoke_design_advert /> */}
    </>
  )
}

// This pageQuery brings back 2 objects
// The first is just this pages product information
// The second brings back other products for this category and type for the 'You may also like' component

export const pageQuery = graphql`
  query ProductPageQuery(
    $id: ID!
    $thisCategory: [GCMS_CategoryType!]
    $productType: GCMS_ProductType
  ) {
    gcms {
      product(where: { id: $id }) {
        id
        name
        price
        description
        categoryType
        productType
        createdAt
        detailedDescription {
          html
        }
        image {
          id
          url
          handle
          width
          height
        }
      }
      products(
        orderBy: updatedAt_DESC
        where: {
          categoryType_contains_some: $thisCategory
          AND: { productType: $productType }
          NOT: { id: $id }
        }
      ) {
        id
        name
        slug
        price
        image {
          id
          url
          handle
          width
          height
        }
      }
    }
  }
`

export default DetailsPage
