import React from "react"
import { graphql } from "gatsby"
import GraphImg from "graphcms-image"

//import Layout from "../components/layout"

import Form_Enquire from "../components/Form-Enquire"
import Form_Viewing from "../components/Form-Viewing"

// import Snipcart from "../components/snipcart"

import styled, { css } from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"
//import { render } from "preact"

import { gsap } from "gsap/all"

// import backgroundImg from "../images/rings-on-necklace-large.jpg"

const Styled_BackgroundImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -1;

  > div {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;

    > div {
      height: 100%;
    }
  }
`

const Styled_Img = styled.div`
  opacity: 0;

  @media (min-width: 768px) {
    width: 100%;
    margin: 0 auto 25px;
  }
`

const Styled_Title = styled.h2`
  @media (min-width: 768px) {
    margin-top: 25px;
    margin-bottom: 50px;
    text-align: center;
  }
`

const Styled_CMScontent = styled.div`
  img {
    height: auto;
  }
`

const Styled_btn = styled.button`
  display: block;
  margin: 50px auto;
  padding: 15px 20px;
  width: 75%;
  background-color: #aba157;
  color: #ffffff;
  border: none;
  border-radius: 200px;
  font-family: "Playfair Display", serif;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  /* box-shadow: inset 0px 7px 11px 0px rgba(0, 0, 0, 0.3); */

  @media (min-width: 768px) {
    display: inline-block;
    margin: 40px 20px 0 0;
    padding: 15px 20px 17px;
    width: 210px;
    cursor: pointer;
    font-size: 25px;

    &:hover {
      /* background-color: #8d8547; */
      box-shadow: none;
    }
  }

  ${props =>
    props.printBtn &&
    css`
      @media (max-width: 767px) {
        display: none;
      }
    `};

  ${props =>
    props.btn_sml &&
    css`
      margin: 10px auto 30px;
      background-color: #a09d83;
      @media (min-width: 768px) {
        width: 160px;
        font-size: 16px;
      }
    `};
`

const Styled_ProductInfoDisplay = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin: 50px 0;

    > div:first-child {
      flex: 1 0 55%;
    }

    > div:last-child {
      padding-left: 40px;
    }
  }
`

const Styled_section = styled.section`
  background-color: #c5c3ac;
`

const Styled_section2 = styled.section`
  background-color: #b3b091;
`

// const DetailsPage = ({
//   data: {
//     gcms: { product },
//   },
//   pageContext,
// }) => {
//   return (
//     <>
//       <Styled_SiteContainer>
//         <Styled_Title id="productTitle">{product.name}</Styled_Title>
//         <p>{product.description}</p>

//         <Styled_ProductInfoDisplay>
//           <Styled_Img>
//             <GraphImg
//               image={product.image[0]}
//               transforms={["quality=value:80"]}
//               maxWidth={500}
//             />
//           </Styled_Img>
//           <Styled_CMScontent>
//             <div
//               dangerouslySetInnerHTML={{
//                 __html: product.detailedDescription.html,
//               }}
//             ></div>
//             <p>£{product.price}</p>

//             <p style={{ textAlign: "center", marginTop: "50px" }}>
//               If you have a questions you can always call{" "}
//               <a
//                 href="tel:080012341234"
//                 style={{ textDecoration: "underline", display: "inline-block" }}
//               >
//                 0800 1234 1234
//               </a>{" "}
//               and speak to an advisor.
//             </p>
//             <p style={{ textAlign: "center" }}>
//               <Styled_btn
//                 className="snipcart-add-item"
//                 data-item-id={product.id}
//                 data-item-price={product.price}
//                 data-item-url={pageContext.pageURL}
//                 data-item-description={product.description}
//                 data-item-image={product.image[0].url}
//                 data-item-name={product.name}
//               >
//                 Add to cart
//               </Styled_btn>
//             </p>
//             <p style={{ textAlign: "center" }}>
//               <Styled_btn
//                 btn_sml
//                 onClick={() => {
//                   document.documentElement.classList.remove("showViewing")
//                   document.documentElement.classList.toggle("showEnquire")
//                   document.documentElement.classList.toggle("pageNoScrollY")
//                 }}
//               >
//                 Enquire
//               </Styled_btn>
//               <Styled_btn
//                 btn_sml
//                 onClick={() => {
//                   document.documentElement.classList.remove("showEnquire")
//                   document.documentElement.classList.toggle("showViewing")
//                   document.documentElement.classList.toggle("pageNoScrollY")
//                 }}
//               >
//                 Book a viewing
//               </Styled_btn>
//               {/* <Styled_btn printBtn onClick={window.print}>
//             Print
//           </Styled_btn> */}
//             </p>
//           </Styled_CMScontent>
//         </Styled_ProductInfoDisplay>

//         <Form_Enquire product={product.name} pageURL={pageContext.pageURL} />
//         <Form_Viewing product={product.name} pageURL={pageContext.pageURL} />
//       </Styled_SiteContainer>
//     </>
//   )
// }

class DetailsPage extends React.Component {
  constructor(props) {
    super(props)
    // init gsap timeline for this page
    this.tl = gsap.timeline()
    // reference to the DOM nodes
    this.gsap__title = null
    this.gsap__title_p = null
    this.gsap__primaryImg = null
    this.gsap__description = null
    this.gsap__price = null
    this.gsap__callText = null
    this.gsap__addToCart = null
    this.gsap__enquireBtn = null
    this.gsap__bookViewingBtn = null
    // define array to store all gsap items to animate
    this.gsap__items = []
    // reference to the animation
    this.myTween = null
  }

  componentDidMount() {
    // use the node ref to create the animation
    // this.myTween = gsap.from(this.gsap__title, {
    //   duration: 3,
    //   delay: 1.25,
    //   opacity: 0,
    // })
    // this.tl.from(this.gsap__title, {
    //   duration: 1.5,
    //   delay: 1.25,
    //   opacity: 0,
    // })
    // this.tl.from(
    //   this.gsap__title_p,
    //   {
    //     duration: 1.5,
    //     opacity: 0,
    //   },
    //   "-=1"
    // )

    this.gsap__items = [
      this.gsap__primaryImg,
      this.gsap__description,
      this.gsap__price,
      this.gsap__callText,
      this.gsap__addToCart,
      this.gsap__enquireBtn,
      this.gsap__bookViewingBtn,
    ]
    this.tl.from(this.gsap__title, {
      delay: 2.25,
      duration: 1.5,
      y: 15,
      opacity: 0,
    })
    this.tl.from(
      this.gsap__title_p,
      {
        duration: 1,
        y: 15,
        opacity: 0,
      },
      "-=1"
    )
    this.tl.from(
      this.gsap__items,
      {
        duration: 0.55,
        y: 15,
        opacity: 0,
        stagger: 0.15,
      },
      "-=0.5"
    )

    // Hero block parallax
    let heroBlock__backGroundImg = document.getElementById("heroImg")
    function manage_parallax() {
      // let scrollPos = document.documentElement.scrollTop
      requestAnimationFrame(function () {
        heroBlock__backGroundImg.style.transform = String(
          "translateY(" +
            document.documentElement.scrollTop / 4 +
            "px) translateZ(0)"
        )
      })
    }
    document.addEventListener("scroll", manage_parallax, false)
  }

  render() {
    const {
      data: {
        gcms: { product },
      },
      pageContext,
    } = this.props
    return (
      <>
        <Styled_SiteContainer productDetailFirstBlock>
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
                    top: -191px;
                    margin-bottom: -191px;
                    padding-top: 191px;
                    overflow-x: hidden;
                    overflow-y: hidden;
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

          <Styled_BackgroundImg id="heroImg">
            <GraphImg
              image={product.image[0]}
              transforms={["quality=value:80"]}
              maxWidth={1920}
              fadeIn={false}
              blurryPlaceholder={false}
            />
          </Styled_BackgroundImg>

          <Styled_Title ref={h2 => (this.gsap__title = h2)}>
            {product.name}
          </Styled_Title>

          <p ref={p => (this.gsap__title_p = p)}>{product.description}</p>

          <Styled_ProductInfoDisplay>
            <Styled_Img ref={div => (this.gsap__primaryImg = div)}>
              <GraphImg
                image={product.image[0]}
                transforms={["quality=value:80"]}
                maxWidth={500}
              />
            </Styled_Img>
            <Styled_CMScontent>
              <div
                dangerouslySetInnerHTML={{
                  __html: product.detailedDescription.html,
                }}
                ref={div => (this.gsap__description = div)}
              ></div>
              <p ref={p => (this.gsap__price = p)}>£{product.price}</p>

              <p
                style={{ textAlign: "center", marginTop: "50px" }}
                ref={p => (this.gsap__callText = p)}
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
              <p
                style={{ textAlign: "center" }}
                ref={p => (this.gsap__addToCart = p)}
              >
                <Styled_btn
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
              </p>
              <p style={{ textAlign: "center" }}>
                <Styled_btn
                  btn_sml
                  onClick={() => {
                    document.documentElement.classList.remove("showViewing")
                    document.documentElement.classList.toggle("showEnquire")
                    // document.documentElement.classList.toggle("pageNoScrollY")
                  }}
                  ref={button => (this.gsap__enquireBtn = button)}
                >
                  Enquire
                </Styled_btn>
                <Styled_btn
                  btn_sml
                  onClick={() => {
                    document.documentElement.classList.remove("showEnquire")
                    document.documentElement.classList.toggle("showViewing")
                    // document.documentElement.classList.toggle("pageNoScrollY")
                  }}
                  ref={button => (this.gsap__bookViewingBtn = button)}
                >
                  Book a viewing
                </Styled_btn>
                {/* <Styled_btn printBtn onClick={window.print}>
              Print
            </Styled_btn> */}
              </p>
            </Styled_CMScontent>
          </Styled_ProductInfoDisplay>
          <Form_Enquire product={product.name} pageURL={pageContext.pageURL} />
          <Form_Viewing product={product.name} pageURL={pageContext.pageURL} />
        </Styled_SiteContainer>

        <Styled_section>
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
              voluptatibus nemo similique, sequi sunt ratione ab nam
              consequuntur placeat perspiciatis! Quod commodi libero fuga.
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
              voluptatibus nemo similique, sequi sunt ratione ab nam
              consequuntur placeat perspiciatis! Quod commodi libero fuga.
            </p>
          </Styled_SiteContainer>
        </Styled_section2>
      </>
    )
  }
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
