import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Layout from "../components/layout"

const FairTradeGoldPage = () => {
  return (
    <>
      <SEO
        title="Fair Trade Gold"
        description="Fair Trade Gold description"
        // image={product.image[0].url}
      />
      <BlockImageTextBox
        title="Fair Trade Gold"
        bodyText="<p>Wentworth's prefer to use Fair trade gold from our sources around the world. Our suppliers follow ethical practices and do not use harsh chemicals to extract the metal. We also like to use 'pre-loved' pieces from clients that would prefer us to re-work the gold, silver, and platinum they no longer want, to make something new.</p>"
      />
      <Block_bespoke_design_advert />
    </>
  )
}
export default FairTradeGoldPage
