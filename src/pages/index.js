import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { gsap, ScrollTrigger } from "gsap/all"

// import Layout from "../components/layout"
// import Snipcart from "../components/snipcart"
// import Image_text_box from "../components/image_text_box"
// import Block_one_row_jewellery from "../components/blocks/block_one_row_jewellery/block_one_row_jewellery"

import SEO from "../components/layout/seo"

import Block_hero_images from "../components/blocks/block_hero_images/block_hero_images"
import Block_product_windows from "../components/blocks/block_product_windows/block_product_windows"
import Block_single_image_text from "../components/blocks/block_single_image_text/block_single_image_text"
import Block_gradient_row_link from "../components/blocks/block_gradient_row_link/block_gradient_row_link"
import Block_best_seller from "../components/blocks/block_best_seller/block_best_seller"
import Block_full_size_image from "../components/blocks/block_full_size_image/block_full_size_image"
import Block_bespoke_design_advert from "../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"
import Block_every_order_includes from "../components/blocks/block_every_order_includes/block_every_order_includes"
import Block_blog_latest_articles from "../components/blocks/block_blog_latest_articles/block_blog_latest_articles"
import Block_newsletter_signup from "../components/blocks/block_newsletter_signup/block_newsletter_signup"

gsap.registerPlugin(ScrollTrigger)
gsap.core.globals("ScrollTrigger", ScrollTrigger)

const pageQuery = graphql`
  {
    gcms {
      blockGradientRowLinks {
        preTitle
        title
        tintColour
        imageAlignment
        hyperlink
        image {
          id
          url
          handle
          height
          width
        }
      }
      products(
        orderBy: updatedAt_DESC
        where: {
          categoryType_contains_some: engagement
          AND: { productType: rings }
        }
      ) {
        id
        name
        slug
        productType
        price
        image {
          id
          url
          handle
          width
          height
        }
        bestSeller
      }
      welcomes {
        products(where: { NOT: { productWindowImage: null } }) {
          name
          categoryType
          productType
          slug
          id
          productWindowImage {
            id
            url
            handle
            width
            height
          }
        }
      }
      blogs(orderBy: createdAt_DESC, stage: PUBLISHED, first: 3) {
        id
        articleTitle
        slug
        createdAt
        articleImage {
          id
          url
          width
          height
          handle
        }
      }
    }
  }
`

const IndexPage = () => {
  const {
    gcms: { blockGradientRowLinks, products, welcomes, blogs },
  } = useStaticQuery(pageQuery)
  // console.log("products", products)
  // console.log("welcomes", welcomes[0].products)
  useEffect(() => {
    // document.body.style.backgroundColor = "#fff"
    document.body.classList = "mainNav--normal"

    ScrollTrigger.refresh()
  }, [])

  return (
    <>
      <SEO title="Homepage" />

      <Block_hero_images />

      <Block_product_windows products={welcomes[0].products} />

      {blockGradientRowLinks.map(el => (
        <Block_gradient_row_link
          pre_title={el.preTitle}
          title={el.title}
          tint_colour={el.tintColour}
          img_alignment={el.imageAlignment}
          hyperlink={el.hyperlink}
          image={el.image}
        />
      ))}

      <Block_best_seller
        categoryTitle="Engagement Rings"
        category="engagement"
        products={products}
      />

      <Block_single_image_text />

      <Block_full_size_image />

      {/* <Block_one_row_jewellery /> */}

      <Block_bespoke_design_advert />

      <Block_every_order_includes />

      <Block_newsletter_signup />

      <Block_blog_latest_articles blogs={blogs} />
    </>
  )
}

export default IndexPage
