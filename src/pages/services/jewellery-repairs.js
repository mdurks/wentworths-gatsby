import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Layout from "../components/layout"

const JewelleryRepairsPage = () => {
  return (
    <>
      <SEO
        title="Jewellery Repairs"
        description="Jewellery Repairs description"
        // image={product.image[0].url}
      />
      <BlockImageTextBox
        title="Jewellery Repairs"
        bodyText="<p>Our jewellers are highly trained to repair any piece, that needs special attention, and we love seeing the old masters work, that might just need a polish to bring a great piece back to life. We take time on every single piece and have great respect for your 'pre-loved' pieces. If there are stones missing from a piece you have, they can be replaced at a very reasonable price. We are more than happy to repair other pieces of jewellery from other jewellery houses</p>"
      />
      <Block_bespoke_design_advert />
    </>
  )
}
export default JewelleryRepairsPage
