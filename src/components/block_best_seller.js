import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import GraphImg from "graphcms-image"
import { useEffect } from "react"
import { gsap, ScrollTrigger } from "gsap/all"

import styled from "styled-components"
import Flickity from "react-flickity-component"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const Div__block_best_seller = styled.div`
  position: relative;
  margin-bottom: 14px;
  text-align: center;
  background-color: #e5e3de;

  ${bp_min_desktop} {
  }

  .headingGroup {
    position: relative;
    height: 390px;
    background: linear-gradient(0deg, #ffffff 0%, #e5e3de 100%);

    /* Tiling Diamond img */
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMA90v6fh+ZEw5WThpalJKMhXVoqNyq9wAAARdJREFUSMec1FEOhCAMBNAiqwgICNz/rgtxzWTTRKjzR5OX+aGlp+haNb3MUluW9xZabqHlVpeioYU2E2VokVWfnWj/KGihhRZacz2MTDv0otsJ7GkwMOe0tlVXlbqFTqoN7aSN/n/o45Q+ug23hQ5dHxN2W4ll3aCHVq4ts0zbsZVrB/uk3cBKNP5zaPZRh/ufcxs9DeLjpblN3HKdmF6wC6OYE5rt7yDYb3Y3xsFtYb3i7m41eue6ddc/m2HndL50bSkkTunuW3od0AAAwzAM48/aIAzg0vVvbVKH69rzYPNVMyQznrMYs5ITBhNDE4ATvRP6UzdTdFOxU+6DFQM0g1IDcYOPA66DzAnrrwkvKK9GL2WlgwB6HCGhU6TCrAAAAABJRU5ErkJggg==);
      opacity: 0.4;
    }
  }

  .entryHeading {
    position: relative;
    padding: 30px 0 0;
    letter-spacing: -1px;
    font-size: clamp(18px, 4vw, 21px);
    text-transform: uppercase;
    font-family: "Playfair Display", serif;
    z-index: 1;

    ${bp_min_desktop} {
      top: 70px;
      padding: 0;
    }

    > span {
      opacity: 0;
    }

    > div {
      position: relative;
      top: -5px;
      opacity: 0;
      font-size: clamp(34px, 4vw, 47px);

      ${bp_min_desktop} {
        top: auto;
        margin-top: 3px;
      }
    }
  }

  h2 {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    text-align: center;
    font-family: "Amalfi Coast", serif;
    font-size: clamp(44px, 7vw, 90px);
    line-height: 80px;
    letter-spacing: -1px;
    color: #ba9b7c;
    opacity: 0;

    ${bp_min_desktop} {
      line-height: 295px;
    }
  }
`

const Div__flickity = styled.div`
  .carousel {
    height: 180px;
    z-index: 456;
  }

  .flickity-viewport {
    height: 305px;
    top: -125px;
  }

  .flickity-slider > div {
    height: 250px !important;
    width: 210px !important;

    ${bp_min_desktop} {
      width: 330px !important;
    }
  }

  .bestSellerItem {
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

    ${bp_min_desktop} {
      top: 151px;
      height: 85px;
      width: 213px;
    }
  }

  .productDesc {
    position: absolute;
    top: 258px;
    left: 50%;
    transform: translateX(-50%);
    width: 210px;
    font-size: 16px;
    line-height: 25px;
    color: #000;
    opacity: 0;
    transition: top ease-in-out 0.4s, opacity ease-in-out 0.65s;
  }
`

const pageQuery = graphql`
  {
    gcms {
      products(
        orderBy: updatedAt_DESC
        where: {
          categoryType_contains_some: engagement
          AND: { bestSeller: true }
        }
      ) {
        id
        slug
        name
        categoryType
        productType
        price
        createdAt
        updatedAt
        image(first: 1) {
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

const Block_best_seller = () => {
  const {
    gcms: { products },
  } = useStaticQuery(pageQuery)

  console.log("products", products)
  let Block_best_seller = null
  let gsap__entryHeading = null // A Mutual Promise
  let gsap__entryHeading_wj = null // Wentworth Jewels
  let gsap__entryHeading_category_title = null // Engagement

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
    let tl_gsap__entryHeading = gsap.timeline({
      paused: true,
      scrollTrigger: {
        trigger: Block_best_seller,
        // markers: true,
        id: "tl_gsap__entryHeading",
        start: window.innerWidth < 768 ? "top 70%" : "top 60%",
        // toggleActions: "play none none reset",
      },
    })
    tl_gsap__entryHeading.to(gsap__entryHeading, {
      duration: 3,
      opacity: 1,
      ease: "back",
    })
    tl_gsap__entryHeading.to(
      gsap__entryHeading_wj,
      {
        duration: 3,
        opacity: 1,
        ease: "back",
      },
      "-=2.5"
    )
    tl_gsap__entryHeading.to(
      gsap__entryHeading_category_title,
      {
        duration: 3,
        opacity: 1,
        ease: "back",
      },
      "-=2.5"
    )

    if (window.innerWidth < 768) {
      document.querySelectorAll(".bestSellerItem").forEach(el => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            // markers: true,
            start: "top 88%",
            toggleActions: "restart none none reset",
          },
          duration: 2.5,
          opacity: 0,
          scale: 0.6,
          ease: "elastic",
        })
      })
    } else {
      //
      //
      var toNodeList = function (arrayOfNodes) {
        arrayOfNodes.forEach(function (item) {
          item.className = item.className + " custom_class"
        })

        var elems = document.querySelectorAll(".custom_class")

        arrayOfNodes.forEach(function (item) {
          item.className = item.className.replace("custom_class", "")
        })

        return elems
      }

      function isNodeList(nodes) {
        var stringRepr = Object.prototype.toString.call(nodes)

        return (
          typeof nodes === "object" &&
          /^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr) &&
          nodes.hasOwnProperty("length") &&
          (nodes.length === 0 ||
            (typeof nodes[0] === "object" && nodes[0].nodeType > 0))
        )
      }
      //
      //
      // grab each individual product and create array of arrays
      // divided by how many there are on a row
      //
      // turn:
      // [1,2,3,4,5,6,7,8,9,10,11,12,13]
      // into:
      // [[1,2,3,4,5], [6,7,8,9,10], [11,12,13]]
      //
      let items = []
      for (
        let i = 1;
        i <= document.querySelectorAll(".bestSellerItem").length;
        i++
      ) {
        items.push(i)
      }
      let group_size = 5
      let number_of_divisions = Math.ceil(items.length / group_size) // round up: 13 / 5 = 2.6 = 3
      let items_divided_up = []

      let slice_start = 0
      let slice_end = group_size

      for (let i = 0; i < number_of_divisions; i++) {
        items_divided_up.push(items.slice(slice_start, slice_end))
        slice_start += group_size
        slice_end += group_size
      }
      //
      // take this array of arrays and sort each group 'centered out'
      //
      let items_centered_out = []
      //
      for (let i = 0; i < items_divided_up.length; i++) {
        items_centered_out.push(return_array_center_out(items_divided_up[i]))
      }
      // we now have:
      // [[3,4,2,5,1], [8,9,7,10,6], [12,13,11]]
      //
      //
      // Create timelines:
      //
      let tl_gsap__bestSellerItem = []
      //
      for (let x = 0; x < items_centered_out.length; x++) {
        //
        // tl_gsap__bestSellerItem[x] = gsap.timeline({
        //   paused: true,
        //   scrollTrigger: {
        //     // trigger: Block_best_seller,
        //     trigger: document.querySelector(
        //       ".bestSellerItem" + items_centered_out[x][0]
        //     ),
        //     markers: true,
        //     start: "-100 75%",
        //     toggleActions: "play none none reset",
        //   },
        // })
        //
        let mylength = [...items_centered_out[x]]
        //
        // for (let i = 0; i < mylength.length; i++) {
        //   //
        //   let currentNumber = items_centered_out[x][i]
        //   let delayAmount = i * 0.15
        //   let yAmount = (mylength.length - i) * 0.2 * 400
        //   //
        //   gsap.from(".bestSellerItem" + currentNumber, {
        //     scrollTrigger: {
        //       trigger: document.querySelector(".bestSellerItem" + currentNumber)
        //         .parentElement,
        //       // markers: true,
        //       start: "-60 75%",
        //       toggleActions: "play none none reset",
        //     },
        //     delay: delayAmount,
        //     duration: 1.25,
        //     opacity: 0,
        //     y: yAmount,
        //     ease: "back",
        //   })
        // }
        //
        //let product_items = document.querySelectorAll(".bestSellerItem")
        //
        // tl_gsap__bestSellerItem[x].from(toNodeList(items_centered_out[x]), {
        //   duration: 2.2,
        //   opacity: 0,
        //   // y: 120,
        //   y: function (i) {
        //     return "+=" + (items_centered_out[x].length - i) * 100
        //   },
        //   ease: "back",
        //   stagger: 0.15,
        // })
        // tl_gsap__bestSellerItem[x].from(
        //   toNodeList(items_centered_out[x]),
        //   {
        //     duration: 0.25,
        //     opacity: 0,
        //     stagger: 0.2,
        //   },
        //   "-=.75"
        // )
        //
      }
      //
      //
    }

    // return function to kill timeline on dismount
    // return () => tl_gsap__entryHeading.kill()
  }, [])

  const flickityOptions = {
    prevNextButtons: false,
    setGallerySize: false,
    pageDots: false,
    initialIndex: products.length / 2,
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
            Engagement Rings
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
            {products.map((el, index) => (
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
                    <p className="productDesc">{el.name}</p>
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
