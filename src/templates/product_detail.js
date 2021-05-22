import React from "react"
import { useEffect, useState } from "react"
import { graphql } from "gatsby"
import GraphImg from "graphcms-image"

//import Layout from "../components/layout"

import Block_bespoke_design_advert from "../components/block_bespoke_design_advert"
import Form_Enquire from "../components/Form-Enquire"
import Form_Viewing from "../components/Form-Viewing"

// import Snipcart from "../components/snipcart"

import styled, { css } from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import { gsap, ScrollTrigger, Power3 } from "gsap/all"

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

    > div {
      ${bp_min_desktop} {
        flex: 1 1 50%;
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
  }

  .graphcms-image-outer-wrapper {
    transition: all 0.4s ease;
    transform: scale(1);

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
    background-color: black;
    color: white;
    border-radius: 100%;
    line-height: 15px;
    font-size: 26px;
    cursor: pointer;
    font-weight: bold;
    z-index: 5;

    ${bp_min_desktop} {
      top: 20px;
      right: 20px;
    }
  }
`

const DetailsPage = ({
  data: {
    gcms: { product },
  },
  pageContext,
}) => {
  // console.log("product: ", product)

  // reference to the DOM nodes
  let gsap__title = null
  let gsap__title_p = null
  let gsap__primaryImg = null
  let gsap__description = null
  let gsap__callText = null
  let gsap__enquireBtn = null
  let gsap__bookViewingBtn = null

  useEffect(() => {
    //
    //
    // JS to go back
    //
    // intercept browser action to go back and stop it
    // call function to do exit animation, then redirect url to previous page
    history.pushState(null, document.title, location.href)
    window.addEventListener("popstate", function (event) {
      history.pushState(null, document.title, location.href)
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
    }
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
    // Set page colours
    //
    document.body.style.backgroundColor = "#e5e3de"
    document.getElementsByTagName("nav")[0].style.background =
      "linear-gradient(0deg, #6db2c300 0%, #7B7262 100%)"
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
  // Modal zoomed in mouse mover
  //
  let modal_desktop_zoomed = false
  let product_detail_modal = document.querySelector(".product_detail_modal")
  let product_detail_modal_content = document.querySelector(".modalContent")

  let modal_mouse_mover = () => {
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

          <Styled_Img ref={div => (gsap__primaryImg = div)}>
            <div className="productStage"></div>
            <GraphImg
              image={product.image[0]}
              transforms={["quality=value:80"]}
              maxWidth={1920}
              fadeIn={false}
              blurryPlaceholder={false}
            />
          </Styled_Img>

          <Styled_CMScontent className="hero_details">
            <Styled_Title ref={h2 => (gsap__title = h2)}>
              {product.name}
            </Styled_Title>

            <p className="productPrice">£{product.price}</p>
            <p className="productVAT">Includes VAT + Delivery</p>

            <Styled_btn
              btn_selected
              className="snipcart-add-item"
              data-item-id={product.id}
              data-item-price={product.price}
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
              ref={button => (gsap__bookViewingBtn = button)}
            >
              Book a viewing
            </Styled_btn>

            <Styled_btn
              onClick={() => {
                document.documentElement.classList.remove("showViewing")
                document.documentElement.classList.toggle("showEnquire")
                // document.documentElement.classList.toggle("pageNoScrollY")
              }}
              ref={button => (gsap__enquireBtn = button)}
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
                      setModal_open("block")
                      setModal_img_from_product_array(index + 1)
                      document.body.classList.toggle("no_scroll")
                      if (window.innerWidth >= 768) {
                        document.getElementsByTagName("nav")[0].style.top =
                          "-100px"
                      }
                    }}
                  >
                    <GraphImg
                      image={el}
                      transforms={["quality=value:80"]}
                      maxWidth={1920}
                      className="productScrollingImg"
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
            product_detail_modal_content.style.left = ""
            product_detail_modal_content.style.top = ""
          }
        }}
      >
        <div
          className="modal_close"
          onClick={e => {
            e.preventDefault()
            e.stopPropagation()
            setModal_open("none")
            document
              .querySelector(".modalContent")
              .classList.remove("modalContent--zoom")
            document.body.classList.toggle("no_scroll")
            document.getElementsByTagName("nav")[0].style.top = ""
          }}
        >
          X
        </div>
        <div className="modalContent">
          <GraphImg
            image={product.image[modal_img_from_product_array]}
            transforms={["quality=value:80"]}
            maxWidth={1920}
          />
        </div>
      </Div_modal>

      {/* <div style="height: 2000px"></div> */}

      {/* <Block_bespoke_design_advert /> */}
    </>
  )
}

export const pageQuery = graphql`
  query ProductPageQuery($id: ID!) {
    gcms {
      product(where: { id: $id }) {
        id
        name
        price
        description
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
    }
  }
`

export default DetailsPage
