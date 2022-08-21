import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Layout from "../components/layout"

const FairTradeGoldPage = () => {
  return (
    <>
      <SEO
        title="Ethical And Sustainable Practices"
        description="Ethical And Sustainable Practices description"
        // image={product.image[0].url}
      />
      <BlockImageTextBox
        title="Ethical And Sustainable Practices"
        bodyText="<p>We are committed to ensuring that every stone we sell is of sound provenance through our Zero Tolerance Policy towards conflict diamonds. In compliance with the Kimberley Process Certification Scheme, every diamond we sell is certified and guaranteed conflict free.</p><br><p>We guarantee this by maintaining partnerships with only the leading cutting houses that source their rough diamonds from carefully selected mines in South Africa, Canada, and Australia. Every diamond we sell comes with a warranty from our suppliers certifying it is conflict free.</p>"
      />
      <Block_bespoke_design_advert />
    </>
  )
}
export default FairTradeGoldPage
