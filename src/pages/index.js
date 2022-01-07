import React from "react"
import { useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"

// import Layout from "../components/layout"
// import Snipcart from "../components/snipcart"
// import Image_text_box from "../components/image_text_box"
// import Block_one_row_jewellery from "../components/blocks/block_one_row_jewellery/block_one_row_jewellery"

import Block_hero_images from "../components/blocks/block_hero_images/block_hero_images"
import Block_single_image_text from "../components/blocks/block_single_image_text/block_single_image_text"
import Block_gradient_row_link from "../components/blocks/block_gradient_row_link/block_gradient_row_link"
import Block_best_seller from "../components/blocks/block_best_seller/block_best_seller"
import Block_full_size_image from "../components/blocks/block_full_size_image/block_full_size_image"
import Block_bespoke_design_advert from "../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

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
    }
  }
`

const IndexPage = () => {
  const {
    gcms: { blockGradientRowLinks, products },
  } = useStaticQuery(pageQuery)
  // console.log("products", products)
  useEffect(() => {
    document.body.style.backgroundColor = "#fff"
    document.body.classList = "mainNav--normal"
  }, [])

  return (
    <>
      <Block_hero_images />

      <Block_single_image_text />

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

      {/* <Block_one_row_jewellery /> */}

      <Block_best_seller
        categoryTitle="Engagement Rings"
        category="engagement"
        products={products}
      />

      <Block_full_size_image />

      <Block_bespoke_design_advert />
    </>
  )
}

export default IndexPage
