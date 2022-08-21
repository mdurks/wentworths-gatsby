import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Layout from "../components/layout"

const RingResizingPage = () => {
  return (
    <>
      <SEO
        title="Ring Resizing"
        description="Ring Resizing description"
        // image={product.image[0].url}
      />
      <BlockImageTextBox
        title="Ring Resizing"
        bodyText="<p>To re-size any ring is a fine art, and a skill that takes many years to prefect! We will ask you to make an appointment to see our jeweller and have your finger measured so that the ring will fit your finger correctly.</p>"
      />
      <Block_bespoke_design_advert />
    </>
  )
}
export default RingResizingPage
