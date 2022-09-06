import React, { useEffect, useState, useRef } from "react"
import { graphql } from "gatsby"
import GraphImg from "graphcms-image"

import { useAppContext } from "../../store/AppContext"
import { replaceAll } from "../../common/utility"

import {
  number_with_commas,
  return_array_center_out,
  calculatedViewportHeight,
} from "../../common/utility"

//import Layout from "../components/layout"

import SEO from "../../components/layout/seo"

import Flickity from "react-flickity-component"

import Block_best_seller from "../../components/blocks/block_best_seller/block_best_seller"
import Block_may_also_like from "../../components/blocks/block_may_also_like/block_may_also_like"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"
import Block_every_order_includes from "../../components/blocks/block_every_order_includes/block_every_order_includes"
import Block_newsletter_signup from "../../components/blocks/block_newsletter_signup/block_newsletter_signup"
import Block_3D_product from "../../components/blocks/block_3D_product/block_3D_product"

import {
  Div__detail_hero_block,
  Styled_Img,
  HeroProductContentWrapper,
  Styled_CMScontent,
  Styled_Title,
  Div_detailed_description_block,
  Div_modal,
  Div_social_share_group,
  HeroCarouselThumbnails,
  ThreeDControls,
} from "./product_detail.styles"
import { Styled_SiteContainer, Styled_btn } from "../../styles/commonStyles"
import { gsap, ScrollTrigger, Power3 } from "gsap/all"
import {
  breakpoints,
  navHeight,
  globalSiteSettings,
} from "../../common/globalVars"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const DetailsPage = ({
  data: {
    gcms: { globalSettings, product, products },
  },
  pageContext,
}) => {
  // console.log("product", product)
  // console.log("globalSettings", globalSettings)
  const appContext = useAppContext()

  let productPrice = product.price
  let formattedSnipcartCarratPrices
  let productCaratSizesArray
  let firstCaratValue

  // const isDiamondRing =
  //   product.productType === "rings" && product.filter_gemstone === "Diamond"

  if (product?.filter_carat) {
    firstCaratValue = product?.filter_carat.split(",")[0]
    const formattedCaratValue = String(firstCaratValue).replace(".", "_")
    const typeOfGemstoneLookup = `price_${product?.filter_gemstone.toLowerCase()}_${
      product?.filter_stoneColour
    }_Carat_${formattedCaratValue}`
    const globalSettingsStonePrice = globalSettings?.[0][typeOfGemstoneLookup]
    productPrice = productPrice + globalSettingsStonePrice

    // Create a string that looks like this for snipcart:
    // The | separates them, the brackets denotes the price, the parens are for display
    // 1ct|1.25ct (+£300.00)[+300.00]|1.5ct (+£600.00)[+600.00]|1.75ct (+£900.00)[+900.00]|2ct (+£1,200.00)[+1200.00]

    // Ring carat sizes should be comma separated values: "1,1.25,1.5"
    productCaratSizesArray = product?.filter_carat.split(",")
    const formattedCarratSizes = replaceAll(
      product?.filter_carat,
      ".",
      "_"
    ).split(",")
    // "1,1.25,1.5" turns into: ['1', '1_25', '1_5]

    formattedSnipcartCarratPrices = formattedCarratSizes.map(
      (carrat, index) => {
        const typeOfGemstoneLookup = `price_${product?.filter_gemstone.toLowerCase()}_${
          product?.filter_stoneColour
        }_Carat_${carrat}`
        const globalSettingsStonePrice =
          globalSettings?.[0][typeOfGemstoneLookup]

        if (index === 0) return `${productCaratSizesArray[index]}ct`
        return `|${productCaratSizesArray[index]}ct (+£${globalSettingsStonePrice}) [+${globalSettingsStonePrice}]`
      }
    )
    formattedSnipcartCarratPrices = formattedSnipcartCarratPrices.join("")
  }

  ScrollTrigger.refresh()

  useEffect(() => {
    //
    //
    // Fade in descriptive text
    //
    gsap.to(".detailed_description_text", {
      scrollTrigger: {
        trigger:
          window.innerWidth < breakpoints.tablet
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
    let el = document.querySelector(".detailed_description_text")
    let elParent = document.querySelector(".detailed_description_text")
      .parentNode

    if (window.innerWidth >= 1024 && el && elParent) {
      let stick_detailed_description_text = () => {
        el.style.position = ""
        el.style.top = ""
        el.style.top = el.offsetTop + 79 + "px"
        el.style.width = elParent.offsetWidth - 100 + "px"
        el.style.position = "fixed"
      }
      let un_stick_detailed_description_text = () => {
        // let el = document.querySelector(".detailed_description_text")
        el.style.position = ""
        el.style.top = ""
        el.style.width = ""
      }
      let detailed_description_text_style = window.getComputedStyle(
        document.querySelector(".detailed_description_block"),
        null
      )
      let stick_to_bottom_detailed_description_text = () => {
        // let el = document.querySelector(".detailed_description_text")
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
          start:
            window.innerWidth < breakpoints.tablet ? "-250% 50%" : "-200% 50%",
          toggleActions: "play none none none",
        },
        duration: 0.5,
        ease: Power3.inOut,
        y: -100,
        opacity: 1,
        scale: window.innerWidth < breakpoints.tablet ? "1" : "0.9",
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
      // ScrollTrigger.getById("detailed_description_block").kill(true)
      // let Alltrigger = ScrollTrigger.getAll()
      // for (let i = 0; i < Alltrigger.length; i++) {
      //   Alltrigger[i].kill(false)
      // }
    }
    //
    //
    //
  }, [])

  const threeDFileURL = product?.threeDModelFile?.url

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
    if (window.innerWidth >= breakpoints.tablet) {
      document.getElementsByTagName("nav")[0].style.top = "-200px"
    } else {
      // mobile - hide the burger btn and nav so it doesn't overlap the modal
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
  //
  let refHeroCarousel = useRef(null)

  const heroCarouselGotoSlide = slideToGoTo => {
    if (threeDFileURL)
      if (
        document
          .querySelector(".heroCarousel3DButton")
          .className.includes("active")
      ) {
        refHeroCarousel.current.select(slideToGoTo, false, true)
      } else {
        // refHeroCarousel.current.next()
        refHeroCarousel.current.select(slideToGoTo)
      }

    if (threeDFileURL) {
      // in case the 3D product was visible, hide it and reset back to the carousel
      document.querySelector(".block3DProduct").classList.remove("active")
      document.querySelector(".heroCarousel3DButton").classList.remove("active")
    }
    document.querySelector(".heroCarousel").classList.remove("hide")
    document
      .querySelector(".hero_details")
      .classList.remove("closed_hero_details")

    const heroCarouselThumbnails = document.querySelectorAll(
      ".heroCarouselThumbnail"
    )
    heroCarouselThumbnails.forEach(el => el.classList.remove("active"))
    heroCarouselThumbnails[slideToGoTo].classList.add("active")

    const hero_details = document.querySelector(".hero_details")
    hero_details.slideNumber = `slide${slideToGoTo}`
    hero_details.setAttribute("data-slideNumber", `slide${slideToGoTo}`)
    if (slideToGoTo > 0) hero_details.classList.add("closed_hero_details")
    else hero_details.classList.remove("closed_hero_details")
  }

  const clickMobile3DCarouselButton = () => {
    document.querySelector(".block3DProduct").classList.toggle("active")
    document.querySelector(".threeDControls").classList.toggle("active")
  }

  const clickDesktop3DCarouselButton = () => {
    if (threeDFileURL) {
      document.querySelector(".block3DProduct").classList.add("active")
      document.querySelector(".heroCarousel3DButton").classList.add("active")
    }
    document.querySelector(".heroCarousel").classList.add("hide")
    document.querySelector(".hero_details").classList.add("closed_hero_details")

    document
      .querySelectorAll(".heroCarouselThumbnail")
      .forEach(el => el.classList.remove("active"))
  }

  const setHeroDetailsHoveredClass = () => {
    if (window.innerWidth >= breakpoints.tablet)
      document
        .querySelector(".hero_details")
        .classList.add("hero_details_hovered")
  }

  const removeHeroDetailsHoveredClass = () => {
    if (window.innerWidth >= breakpoints.tablet)
      document
        .querySelector(".hero_details")
        .classList.remove("hero_details_hovered")
  }

  const heroFlickityOptions = {
    prevNextButtons: false,
    pageDots: true,
    setGallerySize: false,
    resize: true,
    draggable: true,
    selectedAttraction: 0.009,
    friction: 0.16,
  }

  const setDocHeight = () => {
    const screenWidth = document.documentElement.clientWidth
    const screenHeight = document.documentElement.clientHeight

    document.documentElement.style.setProperty(
      "--vh",
      calculatedViewportHeight() + "px"
    )
    if (threeDFileURL && screenWidth < breakpoints.tablet) {
      document.querySelector(".block3DProduct").style.top = `-${
        screenHeight - navHeight.mobile
      }px`

      document.querySelector(".threeDControls").style.top =
        screenHeight - navHeight.mobile - 74 + "px"
    }
  }

  useEffect(() => {
    setDocHeight()
    window.addEventListener("resize", setDocHeight())
    window.addEventListener("orientationchange", setDocHeight())
  })

  return (
    <>
      <SEO
        title={`${product.name} - ${String(product.categoryType)
          .slice(0, 1)
          .toUpperCase()}${String(product.categoryType).slice(1)}`}
        description={product.description}
        image={product.image[0].url}
      />

      <Div__detail_hero_block>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flickity@2/dist/flickity.min.css"
        ></link>
        <Flickity
          className={"heroCarousel mobileFullHeight"} // default ''
          options={heroFlickityOptions} // takes flickity options {}
          flickityRef={carouselRef => {
            refHeroCarousel.current = carouselRef
          }}
        >
          {typeof window !== "undefined" && window.innerWidth < 600
            ? product?.imageMobile?.map(imageMobile => {
                return (
                  <GraphImg
                    image={imageMobile}
                    transforms={["quality=value:80"]}
                    maxWidth={500}
                    className="graphImg"
                    baseURI={globalSiteSettings.graphcmsImageBaseURI}
                  />
                )
              })
            : product?.image?.slice(1)?.map(image => {
                return (
                  <GraphImg
                    image={image}
                    transforms={["quality=value:80"]}
                    maxWidth={3000}
                    className="graphImg"
                    baseURI={globalSiteSettings.graphcmsImageBaseURI}
                  />
                )
              })}
        </Flickity>

        {threeDFileURL && (
          <ThreeDControls className="threeDControls">
            <button
              onClick={clickMobile3DCarouselButton}
              className="mobileToggleBtn"
            >
              <span className="showText">
                3D <span>View</span>
              </span>
              <span className="hideText">
                Hide <span>3D</span>
              </span>
            </button>
          </ThreeDControls>
        )}

        <HeroProductContentWrapper>
          <Styled_SiteContainer height100>
            {threeDFileURL && (
              <Block_3D_product threeDFileURL={threeDFileURL} />
            )}

            <HeroCarouselThumbnails>
              {product?.image?.slice(1)?.map((image, index) => {
                return (
                  <button
                    type="button"
                    onClick={() => {
                      heroCarouselGotoSlide(index)
                    }}
                    className={`heroCarouselThumbnail ${
                      index === 0 && "active"
                    }`}
                  >
                    <GraphImg
                      image={image}
                      transforms={["quality=value:80"]}
                      maxWidth={120}
                      baseURI={globalSiteSettings.graphcmsImageBaseURI}
                    />
                  </button>
                )
              })}
              {threeDFileURL && (
                <button
                  type="button"
                  onClick={clickDesktop3DCarouselButton}
                  className="heroCarousel3DButton"
                >
                  <div>
                    3D
                    <span>View</span>
                  </div>
                </button>
              )}
            </HeroCarouselThumbnails>
            <Styled_CMScontent
              className="hero_details"
              data-slideNumber="slide0"
              onMouseOver={setHeroDetailsHoveredClass}
              onMouseLeave={removeHeroDetailsHoveredClass}
            >
              <Styled_Title>{product.name}</Styled_Title>

              <p className="heroProductPrice">
                <span>£{number_with_commas(productPrice)}</span>
                <span className="productVAT">( includes VAT + Delivery )</span>
              </p>

              <div className="heroDetailsWrapper">
                {product.filter_gemstone && (
                  <div>
                    <span>Stone: </span>
                    <span>{product.filter_gemstone.replace(/_/g, " ")}</span>
                  </div>
                )}
                {product.filter_stoneCut && (
                  <div>
                    <span>Cut: </span>
                    <span>{product.filter_stoneCut}</span>
                  </div>
                )}
                {product.filter_carat && (
                  <div>
                    <span>Carat: </span>
                    <span>
                      <span className="caratSizeText">{firstCaratValue}ct</span>
                      <div className="availableCaratSize">
                        {/* <div>Available in sizes:</div> */}
                        {/* <p>Available carat sizes:</p> */}
                        <p>Available carat sizes once added to basket:</p>
                        {productCaratSizesArray?.map(carat => {
                          return <span>{carat}</span>
                        })}
                        {/* <p>
                          You can pick a different carat size once added to the
                          basket.
                        </p> */}
                      </div>
                    </span>
                  </div>
                )}
                {product.filter_stoneColour &&
                  product.filter_stoneColour !== "Default" && (
                    <div>
                      <span>Colour: </span>
                      <span>{product.filter_stoneColour}</span>
                    </div>
                  )}
                {product.filter_clarity && (
                  <div>
                    <span>Clarity: </span>
                    <span>{product.filter_clarity}</span>
                  </div>
                )}
                {product.filter_metal && (
                  <div>
                    <span>Metal: </span>
                    <span>{replaceAll(product?.filter_metal, "_", " ")}</span>
                  </div>
                )}

                <div className="additionalInfoContainer">
                  <p>
                    Please enquire below if there is something you wish to
                    change about this peice.
                  </p>
                </div>
                {/* <div className="selectRingSize">
                <a href="/">What's my ring size?</a>
              </div> */}
              </div>

              <button
                btn_selected
                className="addToCartBtn snipcart-add-item"
                // Snipcart:
                data-item-id={product.id}
                data-item-price={productPrice}
                data-item-url={pageContext.pageURL}
                data-item-description={product.description}
                data-item-image={product.image[0].url}
                data-item-name={product.name}
                data-item-stackable="never"
                // Size:
                data-item-custom1-name={
                  product.productType === "rings" && "Ring size:"
                }
                data-item-custom1-options={
                  product.productType === "rings" &&
                  product.size &&
                  product.size
                }
                data-item-custom1-required={
                  product.productType === "rings" && "true"
                }
                // Carat:
                data-item-custom2-name={product.filter_carat && "Carat"}
                data-item-custom2-options={
                  product.filter_carat && formattedSnipcartCarratPrices
                }
                data-item-custom2-required={product.filter_carat && "true"}
              >
                Add to basket
              </button>

              <div className="secondaryCTAWrapper">
                <button
                  className="secondaryCTABtn"
                  onClick={() => {
                    appContext.setContactModalTitle("Book a viewing")
                    appContext.setProductName(product.name)
                    appContext.setProductUrl(pageContext.pageURL)
                    appContext.setContactModalOpen(!appContext.contactModalOpen)
                    // disable the webpage beneath the model from scrolling
                    if (window.innerWidth < breakpoints.tablet)
                      document.body.classList.add("no_y_scroll")
                  }}
                >
                  Book a viewing
                </button>

                <button
                  className="secondaryCTABtn"
                  onClick={() => {
                    appContext.setContactModalTitle("Enquire")
                    appContext.setProductName(product.name)
                    appContext.setProductUrl(pageContext.pageURL)
                    appContext.setContactModalOpen(!appContext.contactModalOpen)
                    // disable the webpage beneath the model from scrolling
                    if (window.innerWidth < breakpoints.tablet)
                      document.body.classList.add("no_y_scroll")
                  }}
                >
                  Enquire
                </button>
              </div>

              <div className="backgroundColour"></div>

              {/* <Styled_btn printBtn onClick={window.print}>
              Print
            </Styled_btn> */}
            </Styled_CMScontent>
          </Styled_SiteContainer>
        </HeroProductContentWrapper>
      </Div__detail_hero_block>

      <Div_detailed_description_block className="detailed_description_block">
        <Styled_SiteContainer>
          <div className="detailed_description_colWrapper">
            <div>
              {/* loop out all the product images, skipping the first one since it's the hero img */}
              {product?.image?.slice(1)?.map((el, index) => (
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
                      baseURI={globalSiteSettings.graphcmsImageBaseURI}
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

      <Div_social_share_group>
        <Styled_SiteContainer>
          <div className="socialShareContent">
            <p>Share this with your favourite channel:</p>
            <div>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=https://wentworths-gatsby.netlify.app${pageContext.pageURL}/`}
                style={{ backgroundColor: "#5a32ae" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="fb"
                  role="img"
                >
                  <path
                    fill="white"
                    d="m375.14,288l14.22,-92.66l-88.91,0l0,-60.13c0,-25.35 12.42,-50.06 52.24,-50.06l40.42,0l0,-78.89s-36.68,-6.26 -71.75,-6.26c-73.22,0 -121.08,44.38 -121.08,124.72l0,70.62l-81.39,0l0,92.66l81.39,0l0,224l100.17,0l0,-224l74.69,0z"
                  ></path>
                </svg>
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=https://wentworths-gatsby.netlify.app${pageContext.pageURL}/`}
                style={{ backgroundColor: "#0098F4" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="tw"
                  role="img"
                >
                  <path
                    fill="white"
                    d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                  ></path>
                </svg>
              </a>
              <a
                href={`https://pinterest.com/pin/create/button/?url=https://wentworths-gatsby.netlify.app${pageContext.pageURL}/`}
                style={{ backgroundColor: "#DC0000" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="pn"
                  role="img"
                >
                  <path
                    fill="white"
                    d="m511,255.99999c0,140.86694 -114.13307,255.00001 -255.00001,255.00001c-26.32258,0 -51.61694,-4.01008 -75.47178,-11.41331c10.38508,-16.96573 25.91129,-44.72782 31.66936,-66.83468c3.08468,-11.92742 15.83468,-60.66532 15.83468,-60.66532c8.32863,15.83468 32.59476,29.30444 58.40323,29.30444c76.91129,0 132.33267,-70.74194 132.33267,-158.65525c0,-84.2117 -68.78831,-147.24194 -157.21573,-147.24194c-110.02017,0 -168.52622,73.82662 -168.52622,154.3367c0,37.42742 19.94758,84.00605 51.71976,98.8125c4.83266,2.2621 7.40323,1.23387 8.53427,-3.39315c0.82258,-3.49597 5.14113,-20.87298 7.09476,-28.89315c0.61694,-2.57056 0.30847,-4.83266 -1.74798,-7.3004c-10.38508,-12.85282 -18.81653,-36.29637 -18.81653,-58.19758c0,-56.24395 42.56855,-110.6371 115.16129,-110.6371c62.61895,0 106.5242,42.67137 106.5242,103.74799c0,68.99395 -34.85686,116.80646 -80.20162,116.80646c-24.98589,0 -43.80242,-20.66734 -37.73589,-46.06452c7.19758,-30.33266 21.07863,-63.03024 21.07863,-84.93145c0,-19.53629 -10.4879,-35.88508 -32.28629,-35.88508c-25.60282,0 -46.16734,26.4254 -46.16734,61.8992c0,22.62097 7.60887,37.83871 7.60887,37.83871s-25.19153,106.72984 -29.81855,126.67742c-5.14113,22.00403 -3.08468,53.05645 -0.9254,73.20968c-94.80242,-37.11895 -162.04839,-129.45363 -162.04839,-237.52017c0,-140.86694 114.13307,-255.00001 255.00001,-255.00001s255.00001,114.13307 255.00001,255.00001z"
                  ></path>
                </svg>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://wentworths-gatsby.netlify.app${pageContext.pageURL}/`}
                style={{ backgroundColor: "#0067B1" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="ln"
                  role="img"
                >
                  <path
                    fill="white"
                    d="m132.28,479.99501l-92.88,0l0,-299.1l92.88,0l0,299.1zm-46.49,-339.9c-29.7,0 -53.79,-24.6 -53.79,-54.3a53.79,53.79 0 0 1 107.58,0c0,29.7 -24.1,54.3 -53.79,54.3zm394.11,339.9l-92.68,0l0,-145.6c0,-34.7 -0.7,-79.2 -48.29,-79.2c-48.29,0 -55.69,37.7 -55.69,76.7l0,148.1l-92.78,0l0,-299.1l89.08,0l0,40.8l1.3,0c12.4,-23.5 42.69,-48.3 87.88,-48.3c94,0 111.28,61.9 111.28,142.3l0,164.3l-0.1,0z"
                  ></path>
                </svg>
              </a>
              <a
                href={`https://api.whatsapp.com/send?text=https://wentworths-gatsby.netlify.app${pageContext.pageURL}/`}
                style={{ backgroundColor: "#2CB742" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 418.135 418.135"
                  // xml:space="preserve"
                >
                  <path
                    fill="white"
                    d="M198.929,0.242C88.5,5.5,1.356,97.466,1.691,208.02c0.102,33.672,8.231,65.454,22.571,93.536
		L2.245,408.429c-1.191,5.781,4.023,10.843,9.766,9.483l104.723-24.811c26.905,13.402,57.125,21.143,89.108,21.631
		c112.869,1.724,206.982-87.897,210.5-200.724C420.113,93.065,320.295-5.538,198.929,0.242z M323.886,322.197
		c-30.669,30.669-71.446,47.559-114.818,47.559c-25.396,0-49.71-5.698-72.269-16.935l-14.584-7.265l-64.206,15.212l13.515-65.607
		l-7.185-14.07c-11.711-22.935-17.649-47.736-17.649-73.713c0-43.373,16.89-84.149,47.559-114.819
		c30.395-30.395,71.837-47.56,114.822-47.56C252.443,45,293.218,61.89,323.887,92.558c30.669,30.669,47.559,71.445,47.56,114.817
		C371.446,250.361,354.281,291.803,323.886,322.197z"
                  />
                  <path
                    fill="white"
                    d="M309.712,252.351l-40.169-11.534c-5.281-1.516-10.968-0.018-14.816,3.903l-9.823,10.008
		c-4.142,4.22-10.427,5.576-15.909,3.358c-19.002-7.69-58.974-43.23-69.182-61.007c-2.945-5.128-2.458-11.539,1.158-16.218
		l8.576-11.095c3.36-4.347,4.069-10.185,1.847-15.21l-16.9-38.223c-4.048-9.155-15.747-11.82-23.39-5.356
		c-11.211,9.482-24.513,23.891-26.13,39.854c-2.851,28.144,9.219,63.622,54.862,106.222c52.73,49.215,94.956,55.717,122.449,49.057
		c15.594-3.777,28.056-18.919,35.921-31.317C323.568,266.34,319.334,255.114,309.712,252.351z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </Styled_SiteContainer>
      </Div_social_share_group>

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
            baseURI={globalSiteSettings.graphcmsImageBaseURI}
          />
        </div>
        <div className="modalPagination">
          <div className="modalPagination__container">
            {product?.image?.map((el, index) => (
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
                    baseURI={globalSiteSettings.graphcmsImageBaseURI}
                  />
                </button>
              </>
            ))}
          </div>
        </div>
      </Div_modal>

      <Block_every_order_includes />

      <Block_may_also_like
        categoryType={pageContext.thisCategory}
        productType={pageContext.productType}
        products={products}
      />

      {products.find(el => el.bestSeller) && (
        <Block_best_seller
          categoryTitle={`${pageContext.thisCategory} ${pageContext.productType}`}
          category={pageContext.thisCategory}
          products={products.filter(el => el.bestSeller)}
        />
      )}

      <Block_newsletter_signup />

      <Block_bespoke_design_advert />
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
      globalSettings {
        price_diamond_Clear_Carat_1
        price_diamond_Clear_Carat_1_25
        price_diamond_Clear_Carat_1_5
        price_diamond_Pink_Carat_1
        price_diamond_Pink_Carat_1_25
        price_diamond_Pink_Carat_1_5
        price_diamond_Yellow_Carat_1
        price_diamond_Yellow_Carat_1_25
        price_diamond_Yellow_Carat_1_5
        price_aquamarine_Blue_Carat_1
        price_aquamarine_Blue_Carat_1_25
        price_aquamarine_Blue_Carat_1_5
      }
      product(where: { id: $id }) {
        id
        name
        slug
        price
        description
        categoryType
        productType
        filter_gemstone
        filter_carat
        filter_clarity
        filter_metal
        filter_stoneColour
        filter_stoneCut
        size
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
        imageMobile {
          id
          url
          handle
          width
          height
        }
        threeDModelFile {
          url
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
        productType
        price
        image(first: 1) {
          id
          url
          handle
          width
          height
        }
        bestSeller
      }
    }
  }
`

export default DetailsPage
