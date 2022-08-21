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
        title="Terms And Conditions"
        description="Terms And Conditions description"
        // image={product.image[0].url}
      />
      <Styled_SiteContainer>
        <br />
        <h1>Terms And Conditions</h1>
        <br />
        <p>Work in progress - Content needed!</p>
        <br />
        <h2>Conditions of Sale</h2>
        <br />
        <p>
          Conditions of Sale We will gladly exchange or offer a store credit to
          the amount of the item(s) purchased within 30 days from the purchase
          date. Item (s) must be in the original condition as purchased. No
          refund shall be given on change of mind purchases.
        </p>
        <br />
        <p>
          Deposit for special makes cannot be refunded. Installment payments
          must be paid and paid in full upon completion of the jewellery
          item(s).
        </p>
        <br />
        <p>
          Credit vouchers and gift certificates cannot be redeemed for cash.
          Unless stated otherwise the credit voucher and gift certificate can
          only be used off the RRP. No further discount will apply.
        </p>
        <br />
        <h2>Jewellery Manufacture and Repairs</h2>
        <br />
        <p>
          We guarantee against any manufacturing faults or defects on any piece
          of jewellery we make or sell. On the rare occasion that you find a
          defect upon purchasing your piece, please do not hesitate to send it
          back to us to inspect and evaluate.
        </p>
        <br />
        <p>
          We cannot guarantee your jewellery against the natural wear and tear
          from use.
        </p>
        <br />
        <p>
          Please note: Slight irregularities and variations in craftsmanship or
          natural characteristics, or internal inclusions, visible or otherwise,
          in coloured gemstones are unique and individual to each item. These
          characteristics are considered as part of the character of the item,
          and should not be considered a defect.
        </p>
        <br />
      </Styled_SiteContainer>
      <Block_bespoke_design_advert />
    </>
  )
}
export default FairTradeGoldPage
