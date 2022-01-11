import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import GraphImg from "graphcms-image"

import { useAppContext } from "../../store/AppContext"

import {
  number_with_commas,
  return_array_center_out,
} from "../../common/utility"

//import Layout from "../components/layout"

import Block_best_seller from "../../components/blocks/block_best_seller/block_best_seller"
import Block_may_also_like from "../../components/blocks/block_may_also_like/block_may_also_like"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"
// import Form_Enquire from "../components/forms/Form-Enquire"
// import Form_Viewing from "../components/forms/Form-Viewing"

// import Snipcart from "../components/snipcart"
import {
  Div__detail_hero_block,
  Styled_Img,
  Styled_CMScontent,
  Styled_Title,
  Div_detailed_description_block,
  Div_modal,
} from "./product_detail.styles"
import { Styled_SiteContainer, Styled_btn } from "../../styles/commonStyles"
import { gsap, ScrollTrigger, Power3 } from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const DetailsPage = ({
  data: {
    gcms: { product, products },
  },
  pageContext,
}) => {
  const appContext = useAppContext()

  ScrollTrigger.refresh()

  useEffect(() => {
    //
    //
    // Fade in hero elements
    //
    gsap.to(document.querySelector(".hero_details").childNodes, {
      delay: 1.5,
      duration: 1,
      stagger: 0.2,
      ease: Power3.inOut,
      // ease: Power3.out,
      opacity: 1,
      y: -30,
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
        id: "Styled_Img",
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
    let el = document.querySelector(".detailed_description_text")
    let elParent = document.querySelector(".detailed_description_text")
      .parentNode

    if (window.innerWidth >= 1024 && el && elParent) {
      let stick_detailed_description_text = () => {
        el.style.position = ""
        el.style.top = ""
        el.style.top = el.offsetTop + "px"
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

            <div className="heroDetailsWrapper">
              <div>
                <span>Stone: </span>
                <span>{product.filter_gemstone}</span>
              </div>
              <div>
                <span>Cut: </span>
                <span>{product.filter_stoneCut}</span>
              </div>
              <div>
                <span>Colour: </span>
                <span>{product.filter_stoneColour}</span>
              </div>
              <div>
                <span>Carat: </span>
                <span>{product.filter_carat}</span>
              </div>
              <div>
                <span>Clarity: </span>
                <span>{product.filter_carat}</span>
              </div>
              <div>
                <span>Metal: </span>
                <span>{product.filter_metal}</span>
              </div>
            </div>

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
                appContext.setContactModalTitle("Book a viewing")
                appContext.setProductName(product.name)
                appContext.setProductUrl(pageContext.pageURL)
                appContext.setContactModalOpen(!appContext.contactModalOpen)
                // disable the webpage beneath the model from scrolling
                if (window.innerWidth < 768)
                  document.body.classList.add("no_y_scroll")
              }}
            >
              Book a viewing
            </Styled_btn>

            <Styled_btn
              onClick={() => {
                appContext.setContactModalTitle("Enquire")
                appContext.setProductName(product.name)
                appContext.setProductUrl(pageContext.pageURL)
                appContext.setContactModalOpen(!appContext.contactModalOpen)
                // disable the webpage beneath the model from scrolling
                if (window.innerWidth < 768)
                  document.body.classList.add("no_y_scroll")
              }}
            >
              Enquire
            </Styled_btn>

            {/* <Styled_btn printBtn onClick={window.print}>
              Print
            </Styled_btn> */}
          </Styled_CMScontent>

          {/* <Form_Enquire product={product.name} pageURL={pageContext.pageURL} />
          <Form_Viewing product={product.name} pageURL={pageContext.pageURL} /> */}
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

      {products.find(el => el.bestSeller) && (
        <Block_best_seller
          categoryTitle={`${pageContext.thisCategory} ${pageContext.productType}`}
          category={pageContext.thisCategory}
          products={products.filter(el => el.bestSeller)}
        />
      )}

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
      product(where: { id: $id }) {
        id
        name
        price
        description
        categoryType
        productType
        filter_gemstone
        filter_carat
        filter_metal
        filter_stoneColour
        filter_stoneCut
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
