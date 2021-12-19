import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"
import { useEffect } from "react"
import { gsap, ScrollTrigger } from "gsap/all"

import styled from "styled-components"
import css_breakpoints from "../common/css_breakpoints"
import Flickity from "react-flickity-component"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const Div__block_best_seller = styled.div`
  position: relative;
  margin-bottom: 14px;
  text-align: center;
  background-color: #e5e3de;

  ${css_breakpoints.min_desktop} {
  }

  .headingGroup {
    position: relative;
    height: 390px;
    background: linear-gradient(0deg, #ffffff 0%, #e5e3de 100%);
    box-shadow: inset 0px 15px 75px -32px #00000050;

    /* Tiling Diamond img */
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMA90v6fh+ZEw5WThpalJKMhXVoqNyq9wAAARdJREFUSMec1FEOhCAMBNAiqwgICNz/rgtxzWTTRKjzR5OX+aGlp+haNb3MUluW9xZabqHlVpeioYU2E2VokVWfnWj/KGihhRZacz2MTDv0otsJ7GkwMOe0tlVXlbqFTqoN7aSN/n/o45Q+ug23hQ5dHxN2W4ll3aCHVq4ts0zbsZVrB/uk3cBKNP5zaPZRh/ufcxs9DeLjpblN3HKdmF6wC6OYE5rt7yDYb3Y3xsFtYb3i7m41eue6ddc/m2HndL50bSkkTunuW3od0AAAwzAM48/aIAzg0vVvbVKH69rzYPNVMyQznrMYs5ITBhNDE4ATvRP6UzdTdFOxU+6DFQM0g1IDcYOPA66DzAnrrwkvKK9GL2WlgwB6HCGhU6TCrAAAAABJRU5ErkJggg==);
      opacity: 0.3;
    }

    ${css_breakpoints.min_desktop} {
      height: 490px;
    }
  }

  .entryHeading {
    position: relative;
    padding: 47px 0 0;
    letter-spacing: 0px;
    font-size: clamp(18px, 4vw, 21px);
    line-height: clamp(34px, 4vw, 37px);
    text-transform: uppercase;
    font-family: "Playfair Display", serif;
    z-index: 1;

    ${css_breakpoints.min_desktop} {
      top: 140px;
      padding: 0;
      letter-spacing: -1px;
    }

    > span {
      display: none;
      opacity: 0;

      ${css_breakpoints.min_desktop} {
        /* display: block; */
      }
    }

    > div {
      position: relative;
      top: 0;
      opacity: 0;
      font-size: clamp(44px, 4vw, 47px);

      ${css_breakpoints.min_desktop} {
        display: inline-block;
        margin-top: 3px;
        letter-spacing: 15px;

        &:before {
          content: "";
          position: absolute;
          top: 21px;
          left: -200px;
          width: 160px;
          height: 1px;
          border-bottom: 1px dashed #000;
        }

        &:after {
          content: "";
          position: absolute;
          top: 21px;
          left: 515px;
          width: 160px;
          height: 1px;
          border-bottom: 1px dashed #000;
        }
      }
    }
  }

  h2 {
    position: absolute;
    top: 124px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    font-family: "Amalfi Coast", serif;
    font-size: clamp(40px, 7vw, 110px);
    line-height: 64px;
    letter-spacing: -1px;
    color: #c78e16;
    opacity: 0;

    ${css_breakpoints.min_desktop} {
      top: 165px;
      line-height: 295px;
      color: #c1a260;
    }
  }
`

const Div__flickity = styled.div`
  .carousel {
    height: 180px;
    z-index: 456;

    ${css_breakpoints.min_desktop} {
      height: 280px;
    }
  }

  .flickity-viewport {
    height: 325px;
    top: -125px;

    ${css_breakpoints.min_desktop} {
      top: -105px;
    }
  }

  .flickity-slider > div {
    height: 250px !important;
    width: 210px !important;

    ${css_breakpoints.min_desktop} {
      width: 330px !important;
    }
  }

  .bestSellerItem {
    display: block;
    opacity: 0;
    cursor: grab;

    :active {
      cursor: grabbing;
    }

    .graphcms-image-outer-wrapper {
      position: relative;
      z-index: 1 !important;
      transition: all ease-in-out 0.4s;
      top: 30px;
      width: 200px;
      margin: auto;
    }

    @media (hover: hover) {
      &:hover {
        .graphcms-image-outer-wrapper {
          top: -15px;
          width: 250px;
        }

        .productStage {
          top: 145px;
          height: 94px;
          width: 263px;
        }

        .productDesc {
          top: 270px;
          opacity: 1;
        }
      }
    }
  }

  .productStage {
    position: absolute;
    top: 155px;
    left: 50%;
    transform: translateX(-50%);
    width: 183px;
    height: 80px;
    background-color: white;
    border-radius: 100%;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.2),
      inset 0px 0px 20px 10px rgba(0, 0, 0, 0.08);
    transition: all ease-in-out 0.4s;

    ${css_breakpoints.min_desktop} {
      top: 151px;
      height: 85px;
      width: 213px;
    }
  }

  .productDesc {
    display: none;

    ${css_breakpoints.min_tablet} {
      display: block;
      position: absolute;
      top: 265px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      font-size: 16px;
      line-height: 25px;
      text-transform: uppercase;
      color: #8f8571;
      font-family: "Playfair Display", serif;
      font-weight: bold;
      opacity: 0.5;
      transition: top ease-in-out 0.4s, opacity ease-in-out 0.65s;
    }
  }
`

// const pageQuery = graphql`
//   {
//     gcms {
//       products(
//         orderBy: updatedAt_DESC
//         where: {
//           categoryType_contains_some: engagement
//           AND: { bestSeller: true }
//         }
//       ) {
//         id
//         slug
//         name
//         categoryType
//         productType
//         price
//         createdAt
//         updatedAt
//         image(first: 1) {
//           id
//           url
//           handle
//           width
//           height
//         }
//       }
//     }
//   }
// `

const Block_best_seller = props => {
  // const {
  //   gcms: { products },
  // } = useStaticQuery(pageQuery)

  let Block_best_seller = null
  let gsap__entryHeading = null // A Mutual Promise
  let gsap__entryHeading_wj = null // Wentworth Jewels
  let gsap__entryHeading_category_title = null // Engagement

  useEffect(() => {
    let tl_gsap__entryHeading = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: Block_best_seller,
        id: "tl_gsap__entryHeading",
        start: window.innerWidth < 768 ? "top 70%" : "top 70%",
        // markers: true,
        // toggleActions: "play none none reset",
      },
    })
    // tl_gsap__entryHeading.to(gsap__entryHeading, {
    //   duration: 2,
    //   opacity: 1,
    //   ease: "back",
    // })
    tl_gsap__entryHeading.to(
      gsap__entryHeading_wj,
      {
        duration: 2,
        opacity: 1,
        ease: "back",
      }
      // "-=1.75"
    )
    tl_gsap__entryHeading.to(
      gsap__entryHeading_category_title,
      {
        duration: 1.75,
        opacity: 1,
        ease: "back",
      },
      "-=1.65"
    )
    tl_gsap__entryHeading.to(
      document.querySelectorAll(".bestSellerItem"),
      {
        opacity: 1,
        duration: 0.6,
        ease: "back",
        x: -100,
        stagger: 0.1,
      },
      "-=1.75"
    )

    // return function to kill timeline on dismount
    // return () => tl_gsap__entryHeading.kill()
  }, [])

  const flickityOptions = {
    prevNextButtons: false,
    setGallerySize: false,
    pageDots: false,
    initialIndex: props.products.length / 2,
    freeScroll: true,
    wrapAround: true,
    percentPosition: false,
    freeScrollFriction: 0.065,
  }

  return (
    <>
      <Div__block_best_seller ref={e => (Block_best_seller = e)}>
        <div className="headingGroup">
          <p className="entryHeading">
            <span ref={e => (gsap__entryHeading = e)}>Wentworth Jewels</span>{" "}
            <div ref={e => (gsap__entryHeading_wj = e)}>Best selling</div>
          </p>
          <h2 ref={e => (gsap__entryHeading_category_title = e)}>
            {props.categoryTitle}
          </h2>
        </div>

        <Div__flickity>
          <link
            rel="stylesheet"
            href="https://unpkg.com/flickity@2/dist/flickity.min.css"
          ></link>
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            {props.products
              .filter(el => el.bestSeller)
              .map(el => (
                <>
                  <div>
                    <a
                      href={`/engagement/${el.productType}/${el.slug}/`}
                      className="bestSellerItem bestSellerItem1"
                    >
                      <GraphImg
                        image={el.image[0]}
                        transforms={["quality=value:80"]}
                        maxWidth={300}
                      />
                      <div className="productStage"></div>
                      <p className="productDesc">
                        {el.name}
                        <br />£{el.price}
                      </p>
                    </a>
                  </div>
                </>
              ))}
          </Flickity>
        </Div__flickity>
      </Div__block_best_seller>
    </>
  )
}

export default Block_best_seller
