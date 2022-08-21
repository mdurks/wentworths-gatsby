import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Layout from "../components/layout"

const PearlStringingPage = () => {
  return (
    <>
      <SEO
        title="Pearl Stringing"
        description="Pearl Stringing description"
        // image={product.image[0].url}
      />
      <BlockImageTextBox
        title="Pearl Stringing"
        bodyText="<p>We recommend your pearls to be re-strung every 12 months as the pure silk stretches and weakens over time and use. Wentworth's offers a re-stringing service; we take great care in this service as each pearl is a gift from mother nature and must be respected.</p>"
      />
      <Block_bespoke_design_advert />
    </>
  )
}
export default PearlStringingPage
