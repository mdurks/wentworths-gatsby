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
    width: 100%;
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
  margin: 50px auto;
  padding: 15px 20px;
  width: 75%;
  background-color: #aba157;
  color: #ffffff;
  border: none;
  border-radius: 200px;
  font-family: "Playfair Display", serif;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
  /* box-shadow: inset 0px 7px 11px 0px rgba(0, 0, 0, 0.3); */

  @media (min-width: 768px) {
    display: inline-block;
    margin: 40px 20px 0 0;
    padding: 15px 20px 17px;
    width: 210px;
    cursor: pointer;
    font-size: 25px;

    &:hover {
      /* background-color: #8d8547; */
      box-shadow: none;
    }
  }

  ${props =>
    props.printBtn &&
    css`
      @media (max-width: 767px) {
        display: none;
      }
    `};

  ${props =>
    props.btn_sml &&
    css`
      margin: 10px auto 30px;
      background-color: #a09d83;
      @media (min-width: 768px) {
        width: 160px;
        font-size: 16px;
      }
    `};
`

const Styled_ProductInfoDisplay = styled.div`
  @media (min-width: 768px) {
    display: flex;
    margin: 50px 0;

    > div:first-child {
      flex: 1 0 55%;
    }

    > div:last-child {
      padding-left: 40px;
    }
  }
`

const DetailsPage = ({
  data: {
    gcms: { product },
  },
  pageContext,
}) => {
  return (
    <>
      <Styled_SiteContainer>
        <Styled_Title>{product.name}</Styled_Title>
        <p>{product.description}</p>

        <Styled_ProductInfoDisplay>
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

            <p style={{ textAlign: "center", marginTop: "50px" }}>
              If you have a questions you can always call{" "}
              <a
                href="tel:080012341234"
                style={{ textDecoration: "underline", display: "inline-block" }}
              >
                0800 1234 1234
              </a>{" "}
              and speak to an advisor.
            </p>
            <p style={{ textAlign: "center" }}>
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
            <p style={{ textAlign: "center" }}>
              <Styled_btn
                btn_sml
                onClick={() => {
                  document.documentElement.classList.remove("showViewing")
                  document.documentElement.classList.toggle("showEnquire")
                  document.documentElement.classList.toggle("pageNoScrollY")
                }}
              >
                Enquire
              </Styled_btn>
              <Styled_btn
                btn_sml
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
          </Styled_CMScontent>
        </Styled_ProductInfoDisplay>

        <Form_Enquire product={product.name} pageURL={pageContext.pageURL} />
        <Form_Viewing product={product.name} pageURL={pageContext.pageURL} />
      </Styled_SiteContainer>
    </>
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
