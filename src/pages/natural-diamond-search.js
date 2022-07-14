import React from "react"

import Block_bespoke_design_advert from "../components/blocks/block_bespoke_design_advert/block_bespoke_design_advert"

// import Layout from "../components/layout"
import { Styled_SiteContainer } from "../styles/commonStyles"

const GiftsPage = () => {
  return (
    <>
      <Styled_SiteContainer>
        <h1 style={{ margin: "100px 0 50px", textAlign: "center" }}>
          Natural Diamond Search
        </h1>
        <iframe
          src="https://plugin.diazoom.com/docplugin/141e92ee0ecf2067acebfeaa31967d85"
          title="Embeded Code"
          height="100%"
          width="100%"
          style={{
            border: "1px solid #d5d5d5",
            margin: "0 0 100px",
            height: "70vh",
          }}
        ></iframe>
      </Styled_SiteContainer>
      <Block_bespoke_design_advert />
    </>
  )
}
export default GiftsPage
