import React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"
import GraphImg from "graphcms-image"

//import Layout from "../components/layout"

import Form_Enquire from "../components/Form-Enquire"
import Form_Viewing from "../components/Form-Viewing"

// import Snipcart from "../components/snipcart"

import styled, { css } from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import { gsap, Power3 } from "gsap/all"

const bp_min_desktop = "@media (min-width: 1024px)"
const section_vertical_height = "100vh"
const section_vertical_padding = "0vh"

const Div__detail_hero_block = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 25px 0 70px;
  align-items: center;
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

  .productPrice {
    font-family: "Playfair Display", serif;
    font-size: 32px;
    color: #776a54;
    opacity: 0;
  }

  .productVAT {
    margin: 0 0 50px;
    font-family: "Playfair Display", serif;
    font-size: 17px;
    color: #000;
    opacity: 0;
  }

  .productStage {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    width: 433px;
    height: 176px;
    background-color: white;
    border-radius: 100%;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.2),
      inset 0px 0px 20px 10px rgba(0, 0, 0, 0.08);
    transition: all ease 0.5s;
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
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  width: 540px;
  height: 540px;
  /* outline: 1px solid rgba(0, 0, 0, 0.3); */
`

const Styled_CMScontent = styled.div`
  position: absolute;
  top: 50%;
  left: 75%;
  transform: translate(-50%, -50%);
  width: 30%;
`

const Styled_Title = styled.h2`
  margin-bottom: 50px;
  font-size: 29px;
  color: #776a54;
  opacity: 0;
`

const Styled_btn = styled.button`
  display: block;
  margin: 50px auto;
  padding: 15px 20px;
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

  @media (min-width: 768px) {
    /* display: inline-block; */
    margin: 0 0 22px;
    padding: 7px 36px;
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

const Styled_section = styled.section`
  background-color: #c5c3ac;
`

const Styled_section2 = styled.section`
  background-color: #b3b091;
`

const DetailsPage = ({
  data: {
    gcms: { product },
  },
  pageContext,
}) => {
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

    // JS to go back
    //
    let previous_page_exit_animation_duration = 1.5
    let hero_detail_els = document.querySelector(".hero_details").childNodes

    gsap.to(hero_detail_els, {
      delay: previous_page_exit_animation_duration,
      opacity: 1,
      duration: 1,
      stagger: 0.2,
      ease: Power3.inOut,
      y: -30,
      // ease: Power3.out,
    })
    //
    // Hero block parallax
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
    document.body.style.backgroundColor = "#e5e3de"
    document.getElementsByTagName("nav")[0].style.background =
      "linear-gradient(0deg, #6db2c300 0%, #7B7262 100%)"
  }, [])

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
                  */

                  .tl-wrapper {
                    // top: -191px;
                    // margin-bottom: -191px;
                    // padding-top: 191px;
                    // overflow-x: hidden;
                    // overflow-y: hidden;
                    // height: calc(100vh - 51px);
                  }

                  /*
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

            {/*
            <p ref={p => (gsap__title_p = p)}>{product.description}</p>

            <div
              dangerouslySetInnerHTML={{
                __html: product.detailedDescription.html,
              }}
              ref={div => (gsap__description = div)}
            ></div>

            <p
              style={{ textAlign: "center", marginTop: "50px" }}
              ref={p => (gsap__callText = p)}
            >
              If you have a questions you can always call{" "}
              <a
                href="tel:080012341234"
                style={{
                  textDecoration: "underline",
                  display: "inline-block",
                }}
              >
                0800 1234 1234
              </a>{" "}
              and speak to an advisor.
            </p>
            */}

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

      {/* <Styled_section>
        <Styled_SiteContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            1234 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit fugiat, excepturi tempora a necessitatibus incidunt
            voluptatibus nemo similique, sequi sunt ratione ab nam consequuntur
            placeat perspiciatis! Quod commodi libero fuga.
          </p>
        </Styled_SiteContainer>
      </Styled_section>

      <Styled_section2>
        <Styled_SiteContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            fugiat, excepturi tempora a necessitatibus incidunt voluptatibus
            nemo similique, sequi sunt ratione ab nam consequuntur placeat
            perspiciatis! Quod commodi libero fuga.
          </p>
          <p>
            1234 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Impedit fugiat, excepturi tempora a necessitatibus incidunt
            voluptatibus nemo similique, sequi sunt ratione ab nam consequuntur
            placeat perspiciatis! Quod commodi libero fuga.
          </p>
        </Styled_SiteContainer>
      </Styled_section2> */}
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
