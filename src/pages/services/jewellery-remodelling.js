import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Layout from "../components/layout"

const JewelleryRemodellingPage = () => {
  return (
    <>
      <SEO
        title="Jewellery Remodelling"
        description="Jewellery Remodelling description"
        // image={product.image[0].url}
      />
      <BlockImageTextBox
        title="Jewellery Remodelling"
        bodyText="<p>Do you have a ring you would like to change in some way? Perhaps use the gem in a different ring, necklace, or bracelet? We love working with clients that have their own gemstones. Make an appointment with us and enjoy the excitement in designing your very own piece. A true memory that will be yours forever!</p>"
      />
      <Block_bespoke_design_advert />
    </>
  )
}
export default JewelleryRemodellingPage
