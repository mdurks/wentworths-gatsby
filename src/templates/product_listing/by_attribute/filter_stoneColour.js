import React from "react"
import { useEffect, useState } from "react"
import { graphql } from "gatsby"

import { gsap, ScrollTrigger } from "gsap/all"
import {
  return_array_center_out,
  return_unique_values_in_araray,
  replaceAll,
  capitalizeWords,
} from "../../../common/utility"

// import Layout from "../components/layout"
import SEO from "../../../components/layout/seo"
import Product_in_list from "../../../components/product/Product_in_list"
import Product_filter_checkbox from "../../../components/product/Product_filter_checkbox"
import Block_newsletter_signup from "../../../components/blocks/block_newsletter_signup/block_newsletter_signup"

import {
  Div__productsPage,
  Div__pageHeader,
  Div__filter,
  Div__filter_info,
  Div__productRow,
} from "../product_listing.styles"
import { Styled_SiteContainer } from "../../../styles/commonStyles"
import Block_every_order_includes from "../../../components/blocks/block_every_order_includes/block_every_order_includes"
import Block_bespoke_design_advert from "../../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Snipcart from "../components/snipcart"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

// store checkboxs and product info
let selected_checkboxs = []
let occurances_gemstone = []
let occurances_metal = []
let occurances_stoneCut = []
let occurances_stoneColour = []

const ProductListingByAttribute = ({
  data: {
    gcms: { products, productListingTexts },
  },
  pageContext,
}) => {
  // console.log("pageContext: ", pageContext)
  // console.log("products: ", products)

  let subTitleText = productListingTexts.filter(
    item =>
      item.productType === pageContext.product_type &&
      item.categoryType === pageContext.category
  )
  subTitleText = subTitleText[0].text.html

  // 'Page load' animations and such
  useEffect(() => {
    gsap.to(
      ".subTitle, .pageTitle, .productsPageHeaeder p, .filter, .filter_info",
      {
        delay: 0.35,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
      }
    )
    gsap.set(".filter", {
      delay: 2,
      css: {
        transition: "all ease-in-out 0.5s",
      },
    })
    //
    //
    if (window.innerWidth < 768) {
      document.querySelectorAll(".productInListItem").forEach(el => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            // markers: true,
            start: "-60px 88%",
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
    //
    // Style page and nav
    // document.body.style.backgroundColor = "#e5e3de"
    document.body.classList.remove("no_x_scroll")
    //
    //
    // media query event handler
    if (matchMedia) {
      var mq = window.matchMedia("(min-width: 1024px)")
      mq.addListener(WidthChange)
      WidthChange(mq)
    }
    // media query change
    function WidthChange(mq) {
      if (mq.matches) {
        //desktop
        document.querySelectorAll(".filter fieldset").forEach(el => {
          el.addEventListener(
            "mouseover",
            () => {
              el.classList.add("filter_menu_open")
            },
            false
          )
        })
        document.querySelectorAll(".filter fieldset").forEach(el => {
          el.addEventListener(
            "mouseout",
            () => {
              el.classList.remove("filter_menu_open")
            },
            false
          )
        })
      } else {
        // mobile
        // click events for each filter category button to open sub menu
        document.querySelectorAll(".filter legend").forEach(el => {
          el.addEventListener(
            "click",
            event => {
              // close all other filter menus except the one we clicked on
              document.querySelectorAll(".filter legend").forEach(el => {
                if (event.target !== el)
                  el.parentNode.classList.remove("filter_menu_open")
              })
              // manually toggle the filter menu we clicked on
              el.parentNode.classList.toggle("filter_menu_open")
            },
            false
          )
        })
      }
    }
    //
    //
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

    // reset any open filter fieldsets
    setTimeout(() => {
      document.querySelectorAll(".filter fieldset").forEach(el => {
        el.classList.remove("item_checked")
      })
      document.querySelector(".filter").classList.remove("checked_items")

      selected_checkboxs.forEach(el => {
        document.getElementById(el).checked = true
        document
          .getElementById(el)
          .parentNode.parentNode.parentNode.parentNode.parentNode.classList.add(
            "item_checked"
          )
      })
      // console.log("selected_checkboxs", selected_checkboxs.length)
      if (selected_checkboxs.length)
        document.querySelector(".filter").classList.add("checked_items")
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
  let sortProducts = sort_by_value => e => {
    switch (sort_by_value) {
      case "Newest":
        let newList = productList.sort(function (a, b) {
          var c = new Date(a.updatedAt)
          var d = new Date(b.updatedAt)
          return d - c
        })
        setProductList([...newList])
        break
      case "Oldest":
        newList = productList.sort(function (a, b) {
          var c = new Date(a.updatedAt)
          var d = new Date(b.updatedAt)
          return c - d
        })
        setProductList([...newList])
        break
      case "Price_Ascending":
        newList = productList.sort(function (a, b) {
          var c = a.price
          var d = b.price
          return c - d
        })
        setProductList([...newList])
        break
      case "Price_Descending":
        newList = productList.sort(function (a, b) {
          var c = a.price
          var d = b.price
          return d - c
        })
        setProductList([...newList])
        break
      default:
        break
    }

    // style sort by buttons
    let clicked_button = e.target
    if (window.innerWidth < 768) {
      clicked_button.parentNode.classList.toggle("open")
    }
    clicked_button.parentNode.childNodes.forEach(el => {
      el.classList.remove("selected")
    })
    clicked_button.classList.add("selected")
  }
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
    // console.log("productList", productList)
  }, [productList])

  let show_filters_btn = e => {
    // This button should only be visible for mobile menu layout
    //
    // Calculate the total height of the child elements of filter
    // Animate open/close of menu via calculating style.height since
    // the menu height will vary due to its contents
    let el_filter = document.querySelector(".filter")
    let el_filter_children = el_filter.childNodes
    let el_filter_children_total_height = 0
    el_filter_children.forEach(el => {
      el_filter_children_total_height += el.offsetHeight
    })
    el_filter_children_total_height += "px"

    // Manually set height of filter to this so annimation can slide open
    if (el_filter.style.height === "0px") {
      // open menu
      el_filter.style.height = el_filter_children_total_height
    } else {
      // close menu
      // Set height to what ever height it currenly is
      // before setting it to 0 so the css transition will work
      el_filter.style.height = el_filter.offsetHeight + "px"
      setTimeout(() => {
        el_filter.style.height = "0px"
      }, 100)
      setTimeout(() => {
        document.querySelectorAll(".filter_menu_open").forEach(el => {
          el.classList.remove("filter_menu_open")
        })
      }, 400)
    }
    // Clear the height after the menu opening transition to allow the sub
    // menus to open and be visible
    setTimeout(() => {
      if (el_filter.style.height === el_filter_children_total_height)
        el_filter.style.height = ""
    }, 500)

    // style button
    e.target.classList.toggle("show_filters_btn_open")

    setTimeout(() => {
      if (
        Array.from(
          document.querySelector(".show_filters_btn").classList
        ).indexOf("show_filters_btn_open") > -1
      ) {
        e.target.scrollIntoView({
          behavior: "smooth",
        })
      }
    }, 100)
  }

  const style_number_of_menu_items_for_gemstone = {
    "--number-of-menu-items": filters_for_gemstone.length,
  }
  const style_number_of_menu_items_for_stoneCut = {
    "--number-of-menu-items": filters_for_stoneCut.length,
  }
  const style_number_of_menu_items_for_metal = {
    "--number-of-menu-items": filters_for_metal.length,
  }
  const style_number_of_menu_items_for_stoneColour = {
    "--number-of-menu-items": filters_for_stoneColour.length,
  }

  return (
    <>
      <SEO
        // title={`${pageContext.category} - ${pageContext.product_type}`}
        title={`${String(pageContext.category)
          .slice(0, 1)
          .toUpperCase()}${String(pageContext.category).slice(1)} ${String(
          pageContext.product_type
        )
          .slice(0, 1)
          .toUpperCase()}${String(pageContext.product_type).slice(1)} Category`}
        description={String(subTitleText).slice(
          String(subTitleText).indexOf(">") + 1,
          String(subTitleText).indexOf("</")
        )}
      />

      <Div__productsPage className="productsPageContainer">
        <Styled_SiteContainer>
          <Div__pageHeader className="productsPageHeaeder">
            {/* <p className="subTitle">A mutual promise</p> */}
            <h1 className="pageTitle">
              <span className="pageTitleAttributeValue">
                {replaceAll(pageContext.product_attributeValue, "_", " ")}
              </span>
              {capitalizeWords(
                `${pageContext.category} ${pageContext.product_type}`
              )}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: subTitleText,
              }}
            ></div>
            <button className="show_filters_btn" onClick={show_filters_btn}>
              <span className="show_filters_btn_text_show">Show</span>
              <span className="show_filters_btn_text_hide">Hide</span> Filters
            </button>
          </Div__pageHeader>
          <Div__filter className="filter" style={{ height: "0px" }}>
            <fieldset>
              <legend>
                Gem{" "}
                <span className="filter_legend_amount">
                  ({filters_for_gemstone.length})
                </span>
              </legend>
              <div
                className="filter_list_container"
                style={style_number_of_menu_items_for_gemstone}
              >
                <ul
                  style={
                    filters_for_gemstone.length > 4
                      ? { overflowY: "scroll" }
                      : { padding: "0" }
                  }
                >
                  {filters_for_gemstone.map((el, index) => (
                    <li onClick={create_filter_object}>
                      <Product_filter_checkbox
                        filterCategory={"gemstone"}
                        filterName={el}
                        filterAmount={occurances_gemstone[index]}
                        index={index}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Shape{" "}
                <span className="filter_legend_amount">
                  ({filters_for_stoneCut.length})
                </span>
              </legend>
              <div
                className="filter_list_container"
                style={style_number_of_menu_items_for_stoneCut}
              >
                <ul
                  style={
                    filters_for_stoneCut.length > 4
                      ? { overflowY: "scroll" }
                      : { padding: "0" }
                  }
                >
                  {filters_for_stoneCut.map((el, index) => (
                    <li onClick={create_filter_object}>
                      <Product_filter_checkbox
                        filterCategory={"stoneCut"}
                        filterName={el}
                        filterAmount={occurances_stoneCut[index]}
                        index={index}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Metal{" "}
                <span className="filter_legend_amount">
                  ({filters_for_metal.length})
                </span>
              </legend>
              <div
                className="filter_list_container"
                style={style_number_of_menu_items_for_metal}
              >
                <ul
                  style={
                    filters_for_metal.length > 4
                      ? { overflowY: "scroll" }
                      : { padding: "0" }
                  }
                >
                  {filters_for_metal.map((el, index) => (
                    <li onClick={create_filter_object}>
                      <Product_filter_checkbox
                        filterCategory={"metal"}
                        filterName={el}
                        filterAmount={occurances_metal[index]}
                        index={index}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>
            <fieldset>
              <legend>
                Colour{" "}
                <span className="filter_legend_amount">
                  ({filters_for_stoneColour.length})
                </span>
              </legend>
              <div
                className="filter_list_container"
                style={style_number_of_menu_items_for_stoneColour}
              >
                <ul
                  style={
                    filters_for_stoneColour.length > 4
                      ? { overflowY: "scroll" }
                      : { padding: "0" }
                  }
                >
                  {filters_for_stoneColour.map((el, index) => (
                    <li onClick={create_filter_object}>
                      <Product_filter_checkbox
                        filterCategory={"stoneColour"}
                        filterName={el}
                        filterAmount={occurances_stoneColour[index]}
                        index={index}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </fieldset>
          </Div__filter>
          <Div__filter_info className="filter_info">
            <p className="filter_info__showingNumber">
              Showing &nbsp;{productList.length} <span>of</span>{" "}
              {products.length}&nbsp; &nbsp;
              {pageContext.product_attributeValue} {pageContext.category}{" "}
              {pageContext.product_type}.
            </p>
            <div className="sortProducts">
              <span className="sortProducts__container">
                <span className="sortProducts__label">Sort by:</span>
                <span className="sortProducts__list_container">
                  <button onClick={sortProducts("Newest")} className="selected">
                    Newest
                  </button>
                  <button onClick={sortProducts("Oldest")}>Oldest</button>
                  <button onClick={sortProducts("Price_Ascending")}>
                    Price Ascending
                  </button>
                  <button onClick={sortProducts("Price_Descending")}>
                    Price Descending
                  </button>
                </span>
              </span>
            </div>
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

      <Block_every_order_includes />

      <Block_newsletter_signup />

      <Block_bespoke_design_advert />
    </>
  )
}

// Create a 'page query' allowing variables in a gql query
// Define variables for the 'context' values coming from gatsby-node.js
// Use these variables to filter by category and product type e.g. jewellery & rings

export const pageQuery = graphql`
  query ProductListingByStoneColourQuery(
    $category: [GCMS_CategoryType!]
    $product_type: GCMS_ProductType
    $product_attributeValue: GCMS_StoneColour
  ) {
    gcms {
      products(
        orderBy: updatedAt_DESC
        where: {
          categoryType_contains_some: $category
          productType: $product_type
          filter_stoneColour: $product_attributeValue
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
        updatedAt
        image {
          id
          url
          handle
          width
          height
        }
      }
      productListingTexts {
        productType
        categoryType
        text {
          html
        }
      }
    }
  }
`

export default ProductListingByAttribute
