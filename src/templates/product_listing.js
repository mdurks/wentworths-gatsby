import React from "react"
import { useEffect, useState } from "react"
import { graphql } from "gatsby"

import { gsap, ScrollTrigger } from "gsap/all"
import styled from "styled-components"

// import Layout from "../components/layout"
import Product_in_list from "../components/Product_in_list"
import Product_filter_checkbox from "../components/Product_filter_checkbox"

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
  position: relative;
  /* text-align: center; */

  ${bp_min_desktop} {
    display: flex;
    justify-content: space-evenly;

    &:before {
      content: "";
      position: absolute;
      top: 32px;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #c0b7a3;
    }
  }

  fieldset {
    position: relative;
    flex: 0 1 280px;
    padding: 0;
    border: none;
    border-bottom: 1px solid #ada99f;

    ${bp_min_desktop} {
      border: none;
    }

    &.item_checked,
    &:hover {
      .filter_list_container {
        height: 275px;
        padding: 20px 0 0;
        overflow: visible;

        ${bp_min_desktop} {
          padding: 35px 11px 15px 10px;
          border: 1px solid #c0b7a3;
          border-top: none;
        }
      }

      legend {
        &:after {
          opacity: 0;
          top: 255px;
        }
      }
    }

    &.item_checked {
      .filter_list_container {
        position: relative;
        height: 100px;

        ul {
          overflow-y: hidden;
        }
      }
    }
  }

  legend {
    display: block;
    font-family: "Playfair Display", serif;
    font-size: 25px;
    text-transform: uppercase;
    color: #ac832f;

    ${bp_min_desktop} {
      position: relative;
      display: inline;
      padding: 10px 30px;
      text-align: center;
      z-index: 10;

      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #e5e3de;
        z-index: -1;
      }
      &:after {
        /* content: "❯"; */
        content: "❭";
        position: absolute;
        top: 38px;
        left: 46%;
        transform: rotate(90deg);
        transition: all 0.3s;
        transition-timing-function: ease-in-out;
        opacity: 1;
        pointer-events: none;
        z-index: -1;
      }
    }
  }

  .filter_list_container {
    width: 100%;
    height: 0px;
    padding: 0 10px;
    border-radius: 0 0 10px 10px;
    background-color: #e5e2dc;
    transition: all 0.3s;
    transition-timing-function: ease-in-out;
    overflow: hidden;
    z-index: 5;

    ${bp_min_desktop} {
      position: absolute;
      top: -30px;
    }
  }

  ul {
    height: 100%;
    overflow-x: hidden;
    overflow-y: scroll;

    ${bp_min_desktop} {
      padding: 0 7px 0 0;

      /* ::-webkit-scrollbar {
        width: 14px;
      }
      ::-webkit-scrollbar-track {
        background: #efede9;
      }
      ::-webkit-scrollbar-thumb {
        background: #d0c3a8;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #d0c3a8;
      } */
    }
  }

  label {
    display: block;
    padding: 10px 15px;
    margin: 0 5px 4px;
    cursor: pointer;
    background-color: #efede9;

    ${bp_min_desktop} {
      display: block;
      border-radius: 5px;

      &:hover {
        background-color: #f5f3ef;
      }
    }
  }

  li:last-child label {
    margin-bottom: 0;
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

  .filter_item_amount {
    /* font-family: "Arial, sans-serif"; */
    float: right;
    margin: -2px 0 0;
    color: #966500;
    font-weight: bold;
  }
`

const Div__filter_info = styled.div`
  margin: 40px 0 50px;
  text-align: center;
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

//
//
// store checkboxs and product info
let selected_checkboxs = []
let occurances_gemstone = []
let occurances_metal = []
let occurances_stoneCut = []
let occurances_stoneColour = []

const ProductPage = ({
  data: {
    gcms: { products },
  },
  pageContext,
}) => {
  // console.log("pageContext: ", pageContext)
  // console.log("products: ", products)

  let return_array_center_out = a => {
    var o = [],
      s = a.length,
      l = Math.floor(s / 2),
      c
    for (c = 0; c < s; c++)
      o.push(a[(l += s % 2 ? (c % 2 ? +c : -c) : c % 2 ? -c : +c)])
    return o
  }

  let return_unique_values_in_araray = (value, index, self) => {
    return self.indexOf(value) === index
  }
  //
  //
  // 'Page load' animations and such
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
    init_filters()
    //

    document.body.style.backgroundColor = "#e5e3de"
    document.getElementsByTagName("nav")[0].style.background =
      "linear-gradient(0deg, #6db2c300 0%, #7B7262 100%)"
  }, [])
  //
  // End useEffect
  //
  //
  // Filters:
  //
  // gemstone
  // metal
  // stoneCut
  // stoneColour
  //
  //
  // Store gemstone types based upon 'products' object data
  //
  let init_filters = () => {
    let filters_array_for_gemstone = []
    let filters_array_for_metal = []
    let filters_array_for_stoneCut = []
    let filters_array_for_stoneColour = []

    productList.forEach(el => {
      filters_array_for_gemstone.push(el.filter_gemstone)
      filters_array_for_metal.push(el.filter_metal)
      filters_array_for_stoneCut.push(el.filter_stoneCut)
      if (el.filter_stoneColour !== null) {
        filters_array_for_stoneColour.push(el.filter_stoneColour)
      }
    })

    // Store number of occurances of an item to display: 'Aquamarine (12)'
    occurances_gemstone = filters_array_for_gemstone
      .sort()
      .reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {})
    occurances_gemstone = Object.values(occurances_gemstone)

    occurances_metal = filters_array_for_metal
      .sort()
      .reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {})
    occurances_metal = Object.values(occurances_metal)

    occurances_stoneCut = filters_array_for_stoneCut
      .sort()
      .reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {})
    occurances_stoneCut = Object.values(occurances_stoneCut)

    occurances_stoneColour = filters_array_for_stoneColour
      .sort()
      .reduce((acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc), {})
    occurances_stoneColour = Object.values(occurances_stoneColour)

    // Store unique filter types so multiple entries are reduced to one
    // ['Ruby', 'Ruby', 'Diamond'] becomes ['Ruby', 'Diamond']
    setFilters_for_gemstone(
      filters_array_for_gemstone.filter(return_unique_values_in_araray).sort()
    )
    setFilters_for_metal(
      filters_array_for_metal.filter(return_unique_values_in_araray).sort()
    )
    setFilters_for_stoneCut(
      filters_array_for_stoneCut.filter(return_unique_values_in_araray).sort()
    )
    setFilters_for_stoneColour(
      filters_array_for_stoneColour
        .filter(return_unique_values_in_araray)
        .sort()
    )

    setTimeout(() => {
      // reset any open filter fieldsets
      document.querySelectorAll(".filter fieldset").forEach(el => {
        el.classList.remove("item_checked")
      })

      selected_checkboxs.forEach(el => {
        document.getElementById(el).checked = true
        document
          .getElementById(el)
          .parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
            "item_checked"
          )
      })
    }, 300)
  }
  //
  //
  // Build the filter object to compare against 'product' object
  //
  let create_filter_object = () => {
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
    // console.log("checked_filters_ids", checked_filters_ids)

    selected_checkboxs = checked_filters_ids
    // console.log("selected_checkboxs", selected_checkboxs)

    // check ids to see if a property exists simply to add that key to the filters object
    // the following forEeach can then push strings to the empty array created below
    checked_filters_ids.forEach(el => {
      if (el.indexOf("metal") !== -1) {
        filters.filter_metal = []
      } else if (el.indexOf("gemstone") !== -1) {
        filters.filter_gemstone = []
      } else if (el.indexOf("stoneCut") !== -1) {
        filters.filter_stoneCut = []
      } else if (el.indexOf("stoneColour") !== -1) {
        filters.filter_stoneColour = []
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
      } else if (el.indexOf("stoneColour") !== -1) {
        filters.filter_stoneColour.push(
          el.slice(el.indexOf("stoneColour_") + 12)
        )
      }
    })

    // console.log("filters: ", filters)

    // now we have built the filter obect, pass it over to the function to do the filtering
    filterProducts(filters)
  }
  //
  //
  // take the built filters object and do the filtering
  // this uses a react useState hook to update the JS map
  // function which renders out the product_in_list component
  let filterProducts = filters => {
    let filterKeys = Object.keys(filters)

    setProductList(
      products.filter(item => {
        return filterKeys.every(key => {
          return filters[key].indexOf(item[key]) !== -1
        })
      })
    )

    // now create the filters
    // console.log("productList", productList)
    // init_filters()
  }
  //
  //
  // add a 'change' eventlistener to every filter checkbox
  // document.querySelectorAll(".filter input[type=checkbox]").forEach(el => {
  //   el.addEventListener("change", create_filter_object, false)
  // })
  //
  //
  // Hooks
  const [productList, setProductList] = useState(products)
  const [filters_for_gemstone, setFilters_for_gemstone] = useState([])
  const [filters_for_metal, setFilters_for_metal] = useState([])
  const [filters_for_stoneCut, setFilters_for_stoneCut] = useState([])
  const [filters_for_stoneColour, setFilters_for_stoneColour] = useState([])
  //
  //
  // every time the productList hook changes, call init_filters()
  useEffect(() => {
    init_filters()
  }, [productList])

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
              <legend>Gem</legend>
              <div className="filter_list_container">
                <ul>
                  {filters_for_gemstone.map((el, index) => (
                    <li onClick={create_filter_object}>
                      <Product_filter_checkbox
                        filterCategory={"gemstone"}
                        filterName={el}
                        filterAmount={occurances_gemstone[index]}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>
            <fieldset>
              <legend>Shape</legend>
              <div className="filter_list_container">
                <ul>
                  {filters_for_stoneCut.map((el, index) => (
                    <li onClick={create_filter_object}>
                      <Product_filter_checkbox
                        filterCategory={"stoneCut"}
                        filterName={el}
                        filterAmount={occurances_stoneCut[index]}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>
            <fieldset>
              <legend>Metal</legend>
              <div className="filter_list_container">
                <ul>
                  {filters_for_metal.map((el, index) => (
                    <li onClick={create_filter_object}>
                      <Product_filter_checkbox
                        filterCategory={"metal"}
                        filterName={el}
                        filterAmount={occurances_metal[index]}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>
            <fieldset>
              <legend>Colour</legend>
              <div className="filter_list_container">
                <ul>
                  {filters_for_stoneColour.map((el, index) => (
                    <li onClick={create_filter_object}>
                      <Product_filter_checkbox
                        filterCategory={"stoneColour"}
                        filterName={el}
                        filterAmount={occurances_stoneColour[index]}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>
          </Div__filter>
          <Div__filter_info>
            Showing &nbsp;{productList.length} of
            {" " + products.length}
            &nbsp;&nbsp;
            {pageContext.category} {pageContext.product_type}.
          </Div__filter_info>
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
