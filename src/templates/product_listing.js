import React from "react"
import { useEffect, useState } from "react"
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

const Div__filter = styled.div`
  text-align: center;

  fieldset {
    border: 1px solid #ada99f;
  }

  label {
    display: block;
    padding: 10px 15px;
    margin: 0 5px;
    cursor: pointer;

    ${bp_min_desktop} {
      display: inline-block;
      border-radius: 5px;

      &:hover {
        background-color: #efede9;
      }
    }
  }
  input {
    width: 20px;
    height: 20px;
    margin: 0 10px 0 0;
    border-radius: 5px;
    vertical-align: text-top;
    border: 1px solid #ada99f;
    cursor: pointer;
  }

  button {
    padding: 10px 20px;
    margin: 10px;
    border-radius: 5px;
    border: 1px solid black;
    background-color: white;
    color: black;
    cursor: pointer;
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
            start: "-30px 88%",
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

    //
    //
    // Filters:

    // gemstone
    // metal
    // stoneCut

    let create_filter_object = e => {
      // reset filters every time a filter clicked
      let filters = {}
      let checked_filters_ids = []

      // grab all checked checkboxs that are part of the filter
      // pass their id values over which help build the filter object
      document
        .querySelectorAll(".filter input[type=checkbox]:checked")
        .forEach(el => {
          checked_filters_ids.push(el.id)
        })

      // check ids to see if a property exists simply to add that key to the filters object
      // the following forEeach can then push strings to the empty array created below
      checked_filters_ids.forEach(el => {
        if (el.indexOf("metal") !== -1) {
          filters.filter_metal = []
        } else if (el.indexOf("gemstone") !== -1) {
          filters.filter_gemstone = []
        } else if (el.indexOf("stoneCut") !== -1) {
          filters.filter_stoneCut = []
        }
      })

      // populate filters with chosen filter value(s)
      checked_filters_ids.forEach(el => {
        if (el.indexOf("metal") !== -1) {
          filters.filter_metal.push(el.slice(el.indexOf("metal_") + 6))
        } else if (el.indexOf("gemstone") !== -1) {
          filters.filter_gemstone.push(el.slice(el.indexOf("gemstone_") + 9))
        } else if (el.indexOf("stoneCut") !== -1) {
          filters.filter_stoneCut.push(el.slice(el.indexOf("stoneCut_") + 9))
        }
      })

      // console.log("filters: ", filters)

      // now we have defined the filter, pass it over to the function to do the filtering
      filterProducts(filters)
    }

    // take the built filters object and do the filtering
    // this uses a react useState hook to update the JS map
    // function which renders out the product_in_list component
    function filterProducts(filters) {
      let filterKeys = Object.keys(filters)

      setProductList(
        products.filter(item => {
          return filterKeys.every(key => {
            return filters[key].indexOf(item[key]) !== -1
          })
        })
      )
    }

    // add a 'change' eventlistener to every filter checkbox
    document.querySelectorAll(".filter input[type=checkbox]").forEach(el => {
      el.addEventListener("change", create_filter_object, false)
    })

    //
    //

    document.body.style.backgroundColor = "#e5e3de"
    document.getElementsByTagName("nav")[0].style.background =
      "linear-gradient(0deg, #6db2c300 0%, #7B7262 100%)"
  }, [])

  const [productList, setProductList] = useState(products)

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
          <Div__filter className="filter">
            <fieldset>
              <legend>Gem:</legend>

              <label for="filter_chkbx_gemstone_Diamond">
                <input
                  type="checkbox"
                  id="filter_chkbx_gemstone_Diamond"
                  name="filter_chkbx_gemstone_Diamond"
                />
                Diamond
              </label>

              <label for="filter_chkbx_gemstone_Morganite">
                <input
                  type="checkbox"
                  id="filter_chkbx_gemstone_Morganite"
                  name="filter_chkbx_gemstone_Morganite"
                />
                Morganite
              </label>

              <label for="filter_chkbx_gemstone_Aquamarine">
                <input
                  type="checkbox"
                  id="filter_chkbx_gemstone_Aquamarine"
                  name="filter_chkbx_gemstone_Aquamarine"
                />
                Aquamarine
              </label>

              <label for="filter_chkbx_gemstone_Coloured_Diamond">
                <input
                  type="checkbox"
                  id="filter_chkbx_gemstone_Coloured_Diamond"
                  name="filter_chkbx_gemstone_Coloured_Diamond"
                />
                Coloured Diamond
              </label>
            </fieldset>

            <fieldset>
              <legend>Shape:</legend>

              <label for="filter_chkbx_stoneCut_Princess">
                <input
                  type="checkbox"
                  id="filter_chkbx_stoneCut_Princess"
                  name="filter_chkbx_stoneCut_Princess"
                />
                Princess
              </label>

              <label for="filter_chkbx_stoneCut_Oval">
                <input
                  type="checkbox"
                  id="filter_chkbx_stoneCut_Oval"
                  name="filter_chkbx_stoneCut_Oval"
                />
                Oval
              </label>

              <label for="filter_chkbx_stoneCut_Emerald">
                <input
                  type="checkbox"
                  id="filter_chkbx_stoneCut_Emerald"
                  name="filter_chkbx_stoneCut_Emerald"
                />
                Emerald
              </label>

              <label for="filter_chkbx_stoneCut_Cushion">
                <input
                  type="checkbox"
                  id="filter_chkbx_stoneCut_Cushion"
                  name="filter_chkbx_stoneCut_Cushion"
                />
                Cushion
              </label>

              <label for="filter_chkbx_stoneCut_Assher">
                <input
                  type="checkbox"
                  id="filter_chkbx_stoneCut_Assher"
                  name="filter_chkbx_stoneCut_Assher"
                />
                Assher
              </label>

              <label for="filter_chkbx_stoneCut_Round">
                <input
                  type="checkbox"
                  id="filter_chkbx_stoneCut_Round"
                  name="filter_chkbx_stoneCut_Round"
                />
                Round
              </label>
            </fieldset>

            <fieldset>
              <legend>Metal:</legend>

              <label for="filter_chkbx_metal_Platinum">
                <input
                  type="checkbox"
                  id="filter_chkbx_metal_Platinum"
                  name="filter_chkbx_metal_Platinum"
                />
                Platinum
              </label>

              <label for="filter_chkbx_metal_Rose_Gold">
                <input
                  type="checkbox"
                  id="filter_chkbx_metal_Rose_Gold"
                  name="filter_chkbx_metal_Rose_Gold"
                />
                Rose gold
              </label>

              <label for="filter_chkbx_metal_White_Gold">
                <input
                  type="checkbox"
                  id="filter_chkbx_metal_White_Gold"
                  name="filter_chkbx_metal_White_Gold"
                />
                White gold
              </label>

              <label for="filter_chkbx_metal_Gold">
                <input
                  type="checkbox"
                  id="filter_chkbx_metal_Gold"
                  name="filter_chkbx_metal_Gold"
                />
                Gold
              </label>

              <label for="filter_chkbx_metal_Silver">
                <input
                  type="checkbox"
                  id="filter_chkbx_metal_Silver"
                  name="filter_chkbx_metal_Silver"
                />
                Silver
              </label>
            </fieldset>

            {/* <button id="filter_btn_apply_filter">Filter</button> */}
          </Div__filter>
          <Div__productRow className="productRow">
            {productList.map(({ id, ...product }, index) => (
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
        filter_gemstone
        filter_metal
        filter_stoneCut
        filter_stoneColour
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

// export const pageQuery = graphql`
//   query ProductListingQuery(
//     $category: [GCMS_CategoryType!]
//     $product_type: GCMS_ProductType
//   ) {
//     gcms {
//       products(
//         orderBy: updatedAt_DESC
//         where: {
//           productType: $product_type
//           AND: { categoryType_contains_some: $category }
//         }
//       ) {
//         id
//         slug
//         name
//         categoryType
//         productType
//         price
//         description
//         gemstone
//         metal
//         stoneCut
//         createdAt
//         image {
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

export default ProductPage
