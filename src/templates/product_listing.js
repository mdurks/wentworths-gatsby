import React from "react"
import { useEffect } from "react"
import { graphql } from "gatsby"

import { gsap, ScrollTrigger } from "gsap/all"
import styled from "styled-components"

// import Layout from "../components/layout"
import Product_in_list from "../components/Product_in_list"

import { Styled_SiteContainer } from "../styles/commonStyles"
// import Snipcart from "../components/snipcart"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const bp_min_desktop = "@media (min-width: 1024px)"

const Div__productsPage = styled.div``

const Div__pageHeader = styled.div`
  padding: 130px 0 50px;
  text-align: center;

  ${bp_min_desktop} {
    padding: 250px 0 40px;
  }

  p {
    margin: auto;
    font-family: "Raleway", sans-serif;
    opacity: 0;

    ${bp_min_desktop} {
      width: 50%;
    }
  }

  .subTitle {
    position: relative;
    width: auto;
    font-family: "Playfair Display", serif;
    font-size: clamp(21px, 4vw, 35px);
    text-transform: uppercase;
    opacity: 0;
    z-index: 1;

    ${bp_min_desktop} {
      margin: 0 0 0 -320px;
    }
  }

  .pageTitle {
    margin: 10px 0 30px -30px;
    font-family: "Amalfi Coast", serif;
    font-size: clamp(41px, 7vw, 100px);
    line-height: clamp(61px, 7vw, 120px);
    color: #ba9b7c;
    opacity: 0;

    ${bp_min_desktop} {
      margin: 0 0 60px;
    }
  }
`

const Div__productRow = styled.div`
  text-align: center;
  /* outline: 1px solid rgba(0, 0, 0, 0.3); */

  ${bp_min_desktop} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 40px 0 0;
  }
`

const ProductPage = ({
  data: {
    gcms: { products },
  },
  pageContext,
}) => {
  // console.log("pageContext: ", pageContext)
  console.log("products: ", products)

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
    gsap.to(".subTitle, .pageTitle, .productsPageHeaeder p:last-of-type", {
      delay: 0.5,
      opacity: 1,
      duration: 1.5,
      stagger: 0.35,
    })
    //
    //
    if (window.innerWidth < 768) {
      document.querySelectorAll(".productInListItem").forEach(el => {
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
        i <= document.querySelectorAll(".productInListItem").length;
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
      for (let x = 0; x < items_centered_out.length; x++) {
        //
        let mylength = [...items_centered_out[x]]
        //
        for (let i = 0; i < mylength.length; i++) {
          //
          let currentNumber = items_centered_out[x][i]
          let delayAmount = i * 0.15
          let yAmount = (mylength.length - i) * 0.2 * 400
          //
          gsap.from(".productInListItem" + currentNumber, {
            scrollTrigger: {
              trigger: document.querySelector(
                ".productInListItem" +
                  items_centered_out[x][items_centered_out[x].length - 1]
              ),
              // markers: true,
              start: "-60 90%",
              toggleActions: "play none none reset",
            },
            delay: delayAmount,
            duration: 1.25,
            opacity: 0,
            y: yAmount,
            ease: "back",
          })
        }
      }
    }

    document.body.style.backgroundColor = "#e5e3de"
    document.getElementsByTagName("nav")[0].style.background =
      "linear-gradient(0deg, #6db2c300 0%, #7B7262 100%)"
  }, [])

  return (
    <>
      <Div__productsPage className="productsPageContainer">
        <Styled_SiteContainer>
          <Div__pageHeader className="productsPageHeaeder">
            <p className="subTitle">A mutual promise</p>
            {/* <h1 className="pageTitle">Engagement Rings</h1> */}
            <h1 className="pageTitle">
              {pageContext.category} {pageContext.product_type}
            </h1>
            <p>
              Perfectly made diamond engagement rings for your special day. Each
              diamond, chosen by our experts, for brilliance and shine.
            </p>
          </Div__pageHeader>
          <Div__productRow className="productRow">
            {products.map(({ id, ...product }, index) => (
              <>
                <Product_in_list
                  key={id}
                  category={`${pageContext.category}/${pageContext.product_type}`} // this forms part of the URL
                  product={product}
                  mapCount={index}
                />
              </>
            ))}
          </Div__productRow>
        </Styled_SiteContainer>
      </Div__productsPage>
    </>
  )
}

// Create a 'page query' allowing variables in a gql query
// Define variables for the 'context' values coming from gatsby-node.js
// Use these variables to filter by category and product type e.g. jewellery & rings

export const pageQuery = graphql`
  query ProductListingQuery(
    $category: [GCMS_CategoryType!]
    $product_type: GCMS_ProductType
  ) {
    gcms {
      products(
        orderBy: updatedAt_DESC
        where: {
          productType: $product_type
          AND: { categoryType_contains_some: $category }
        }
      ) {
        id
        slug
        name
        categoryType
        productType
        price
        description
        gemstone
        metal
        stoneCut
        createdAt
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

export default ProductPage
