import React from "react"
import SEO from "../../components/layout/seo"

import BlockImageTextBox from "../../components/blocks/block_image_text_box/block_image_text_box"
import Block_bespoke_design_advert from "../../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"
import { Styled_SiteContainer } from "../../styles/commonStyles"

// import Layout from "../components/layout"

const FairTradeGoldPage = () => {
  return (
    <>
      <SEO
        title="FAQ"
        description="FAQ description"
        // image={product.image[0].url}
      />
      <Styled_SiteContainer>
        <br />
        <h1>FAQ</h1>
        <br />
        <p>Work in progress - Content needed!</p>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          tincidunt sagittis blandit. Morbi dignissim, eros nec sodales
          eleifend, massa odio semper augue, et faucibus eros nibh sollicitudin
          mi. Pellentesque varius nunc neque, a consectetur justo iaculis in.
          Quisque sit amet scelerisque magna. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Etiam
          cursus arcu id urna ullamcorper, eu iaculis augue pharetra. Aenean nec
          enim eu justo tempor cursus.
        </p>
        <br />
      </Styled_SiteContainer>
      <Block_bespoke_design_advert />
    </>
  )
}
export default FairTradeGoldPage
