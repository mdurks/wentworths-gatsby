import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"
import Link from "gatsby-plugin-transition-link"
import { useEffect } from "react"
import { gsap, ScrollTrigger } from "gsap/all"

import { globalSiteSettings } from "../../../common/globalVars"
import { number_with_commas } from "../../../common/utility"

import {
  Div__block_best_seller,
  Div__flickity,
} from "./block_best_seller.styles"
import Flickity from "react-flickity-component"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

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
  let gsap__entryHeading_bestSeller = null // Best Selling
  let gsap__entryHeading_category_title = null // Engagement Rings

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
    gsap.set(gsap__entryHeading_bestSeller, {
      clipPath: "inset(0% 60% -50%)",
    })
    tl_gsap__entryHeading.to(gsap__entryHeading_bestSeller, {
      duration: 4,
      ease: "power3.out",
      clipPath: "inset(0% -100% -50%)",
    })
    tl_gsap__entryHeading.to(
      gsap__entryHeading_category_title,
      {
        duration: 2,
        opacity: 1,
        ease: "back",
      },
      "-=3.5"
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
      "-=3.25"
    )

    // return function to kill timeline on dismount
    // return () => tl_gsap__entryHeading.kill()
  }, [])

  const numberOfProducts = props.products.length

  let isFlickityScrollable
  if (typeof window !== `undefined`) {
    isFlickityScrollable = window.innerWidth < 600 ? true : numberOfProducts > 6
  }

  const flickityOptions = {
    prevNextButtons: true,
    setGallerySize: false,
    pageDots: true,
    initialIndex: isFlickityScrollable ? numberOfProducts / 2 : 1,
    freeScroll: isFlickityScrollable,
    wrapAround: isFlickityScrollable,
    percentPosition: false,
    freeScrollFriction: 0.065,
  }

  return (
    <>
      <Div__block_best_seller ref={e => (Block_best_seller = e)}>
        <div className="headingGroup">
          <p className="entryHeading">
            <div ref={e => (gsap__entryHeading_bestSeller = e)}>
              Best selling
            </div>
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
            {props.products.map(el => (
              <>
                <div>
                  <Link
                    to={`/engagement/${el.productType}/${el.slug}/`}
                    className="bestSellerItem bestSellerItem1"
                  >
                    <GraphImg
                      image={el.image[0]}
                      transforms={["quality=value:80"]}
                      maxWidth={300}
                      baseURI={globalSiteSettings.graphcmsImageBaseURI}
                    />
                    <div className="productStage"></div>
                    <p className="productDesc">
                      {el.name} <span>£{number_with_commas(el.price)}</span>
                    </p>
                  </Link>
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
