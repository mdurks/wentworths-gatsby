import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Layout from "../components/layout"

const JewelleryValuationsPage = () => {
  return (
    <>
      <SEO
        title="Jewellery Valuations"
        description="Jewellery Valuations description"
        // image={product.image[0].url}
      />
      <BlockImageTextBox
        title="Jewellery Valuations"
        bodyText="<p>Wentworth's is happy to make any valuation for your most precious jewellery. We recommend our clients update their insurance every 12 months, by taking photos of each piece and having valuations carried out every 12 months. We also recommend using a bank vault to store your beautiful pieces.</p>"
      />
      <Block_bespoke_design_advert />
    </>
  )
}
export default JewelleryValuationsPage
