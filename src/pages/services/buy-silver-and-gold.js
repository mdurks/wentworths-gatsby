import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Layout from "../components/layout"

const WebuySilverandGoldPage = () => {
  return (
    <>
      <SEO
        title="We buy Silver and Gold"
        description="We buy Silver and Gold description"
        // image={product.image[0].url}
      />
      <BlockImageTextBox
        title="We buy Silver and Gold"
        bodyText="<p>We will buy your gold or silver, whether it is scrap or old jewellery. Please bring photo identification as it is required by law.</p>"
      />
      <Block_bespoke_design_advert />
    </>
  )
}
export default WebuySilverandGoldPage
