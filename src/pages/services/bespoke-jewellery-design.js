import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Layout from "../components/layout"

const BespokeJewelleryDesignPage = () => {
  return (
    <>
      <SEO
        title="Bespoke Jewellery Design"
        description="Bespoke Jewellery Design description"
        // image={product.image[0].url}
      />
      <BlockImageTextBox
        title="Bespoke Jewellery Design"
        bodyText="<p>
          At Wentworth's, we know that jewellery can form everlasting memories.
          All our bespoke jewellery is developed especially for you, each piece
          is personally crafted by our qualified jewellers. From start to finish
          we will collaborate with you to make your dreams come true!
        </p>"
      />
      <Block_bespoke_design_advert />
    </>
  )
}
export default BespokeJewelleryDesignPage
