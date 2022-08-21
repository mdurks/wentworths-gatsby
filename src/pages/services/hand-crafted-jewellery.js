import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Layout from "../components/layout"

const HandCraftedJewelleryPage = () => {
  return (
    <>
      <SEO
        title="Hand Crafted Jewellery"
        description="Hand Crafted Jewellery description"
        // image={product.image[0].url}
      />
      <BlockImageTextBox
        title="Hand Crafted Jewellery"
        bodyText="<p>Peter is a trained Goldsmith, qualifying at the London Metropolitan University (Sir John Cass College) under the retired Crown jewellers of Garrards. Classic Jewellery pieces that have stood the test of time and risen to the forefront of popularity with movie stars, celebrities and fashion icons are re-created under Peters hand.</p>"
      />
      <Block_bespoke_design_advert />
    </>
  )
}
export default HandCraftedJewelleryPage
