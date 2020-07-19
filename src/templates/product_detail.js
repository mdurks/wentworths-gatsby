import React from "react"
import { graphql } from "gatsby"
import GraphImg from "graphcms-image"

import Layout from "../components/layout"

import Form_Enquire from "../components/Form-Enquire"
import Form_Viewing from "../components/Form-Viewing"

// import Snipcart from "../components/snipcart"

import styled, { css } from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

const Styled_Img = styled.div`
  @media (min-width: 768px) {
    width: 50%;
    margin: 0 auto 25px;
  }
`

const Styled_Title = styled.h2`
  @media (min-width: 768px) {
    text-align: center;
  }
`

const Styled_CMScontent = styled.div`
  img {
    height: auto;
  }
`

const Styled_btn = styled.button`
  display: block;
  margin: 25px auto 0;
  padding: 15px 20px;
  width: 75%;

  @media (min-width: 768px) {
    display: inline-block;
    margin: 0 20px 0 0;
    padding: 15px 20px;
    width: 150px;
    cursor: pointer;
  }

  ${props =>
    props.printBtn &&
    css`
      @media (max-width: 767px) {
        display: none;
      }
    `};
`

const DetailsPage = ({
  data: {
    gcms: { product },
  },
  pageContext,
}) => {
  return (
    <Layout>
      <Styled_SiteContainer>
        <Styled_Title>{product.name}</Styled_Title>
        <p>{product.description}</p>
        <Styled_Img>
          <GraphImg
            image={product.image[0]}
            transforms={["quality=value:80"]}
            maxWidth={500}
          />
        </Styled_Img>
        <Styled_CMScontent>
          <div
            dangerouslySetInnerHTML={{
              __html: product.detailedDescription.html,
            }}
          ></div>
          <p>£{product.price}</p>
          <p>
            <Styled_btn
              className="snipcart-add-item"
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-url={pageContext.pageURL}
              data-item-description={product.description}
              data-item-image={product.image[0].url}
              data-item-name={product.name}
            >
              Add to cart
            </Styled_btn>
          </p>
        </Styled_CMScontent>

        <p>
          If you have a questions you can always call{" "}
          <a href="tel:080012341234" style={{ textDecoration: "underline" }}>
            0800 1234 1234
          </a>{" "}
          and speak to an advisor.
        </p>
        <p>
          <Styled_btn
            onClick={() => {
              document.documentElement.classList.remove("showViewing")
              document.documentElement.classList.toggle("showEnquire")
              document.documentElement.classList.toggle("pageNoScrollY")
            }}
          >
            Enquire
          </Styled_btn>
          <Styled_btn
            onClick={() => {
              document.documentElement.classList.remove("showEnquire")
              document.documentElement.classList.toggle("showViewing")
              document.documentElement.classList.toggle("pageNoScrollY")
            }}
          >
            Book a viewing
          </Styled_btn>
          {/* <Styled_btn printBtn onClick={window.print}>
            Print
          </Styled_btn> */}
        </p>
        <Form_Enquire product={product.name} />
        <Form_Viewing product={product.name} />
      </Styled_SiteContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProductPageQuery($id: ID!) {
    gcms {
      product(where: { id: $id }) {
        id
        name
        price
        description
        productType
        createdAt
        detailedDescription {
          html
        }
        image {
          id
          url
          handle
          width
          height
        }
      }
    }
  }
`

export default DetailsPage
