import React from "react"
import styled from "styled-components"
import { Styled_SiteContainer } from "../styles/commonStyles"

import img_product_ring_silver_round_blue_diamond from "../images/products/ring/product-ring-silver-round-blue-diamond.png"

const bp_min_desktop = "@media (min-width: 1024px)"
const bp_max_desktop = "@media (max-width: 1024px)"
const bp_desktop_max = "1400px"

const section_vertical_padding = "12vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

const Div__block_one_row_jewellery = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 25px 0 70px;
  align-items: center;
  text-align: center;
  background-color: #e5e3de;

  ${bp_min_desktop} {
    min-height: calc(100vh + ${section_vertical_padding});
    padding: 75px 0;
  }

  > section {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .entryHeading {
    position: relative;
    margin-top: 30px;
    letter-spacing: -1px;
    font-size: clamp(18px, 4vw, 25px);
    text-transform: uppercase;
    font-family: "Playfair Display", serif;

    ${bp_min_desktop} {
      top: 70px;
      margin-top: 0;
    }

    > div {
      font-size: clamp(25px, 4vw, 50px);

      ${bp_min_desktop} {
        margin-top: 10px;
      }
    }
  }

  h2 {
    position: relative;
    margin-bottom: 20px;
    text-align: center;
    font-family: "Alex Brush", serif;
    font-size: clamp(78px, 14vw, 235px);
    letter-spacing: -1px;
    color: #ba9b7c;

    ${bp_min_desktop} {
      left: -50px;
      margin-bottom: 0;
    }
  }

  img {
    width: auto;
  }

  .productRow {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    ${bp_min_desktop} {
      margin: 40px 0 0;
    }
  }

  .productItem {
    position: relative;
    padding: 30px 0;
    text-decoration: none;
    color: #90836b;

    ${bp_min_desktop} {
      padding: 30px 0 100px;

      &:nth-child(even) {
        display: block;
        padding: 100px 0 30px;

        .productImg {
          top: 103px;
        }

        .productStage {
          top: 187px;
        }
      }
    }

    ${bp_min_desktop} {
      &:hover {
        .productImg {
          top: -33px;
          left: calc(50% + 3px);
          width: 175px;
          height: 245px;
        }

        .productStage {
          top: 127px;
          width: 194px;
          height: 93px;
        }

        .productDesc {
          top: 20px;
          color: #000;
        }
      }

      &:nth-child(even):hover {
        .productImg {
          top: 36px;
        }

        .productStage {
          top: 197px;
        }
      }
    }
  }

  .productImg {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 110px;
    height: 154px;
    z-index: 1;
    transition: all ease 0.5s;
  }

  .productStage {
    position: absolute;
    top: 115px;
    left: 50%;
    transform: translateX(-50%);
    width: 213px;
    height: 85px;
    background-color: white;
    border-radius: 100%;
    box-shadow: 0px 5px 4px 0px rgba(0, 0, 0, 0.2),
      inset 0px 0px 20px 10px rgba(0, 0, 0, 0.08);
    transition: all ease 0.5s;
  }

  .productDesc {
    position: relative;
    top: 0;
    width: 60%;
    margin: 200px auto 0;
    line-height: 25px;
    color: #a59985;
    transition: all ease 0.5s;
  }
`

const Block_one_row_jewellery = () => {
  return (
    <>
      <Div__block_one_row_jewellery>
        <Styled_SiteContainer>
          <p className="entryHeading">
            A mutual promise <div>Wentworth Jewels</div>
          </p>
          <h2>Engagement</h2>
          <div className="productRow">
            <a href="/" className="productItem">
              <img
                className="productImg"
                src={img_product_ring_silver_round_blue_diamond}
                alt=""
              />
              <div className="productStage"></div>
              <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
            </a>

            <a href="/" className="productItem">
              <img
                className="productImg"
                src={img_product_ring_silver_round_blue_diamond}
                alt=""
              />
              <div className="productStage"></div>
              <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
            </a>

            <a href="/" className="productItem">
              <img
                className="productImg"
                src={img_product_ring_silver_round_blue_diamond}
                alt=""
              />
              <div className="productStage"></div>
              <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
            </a>

            <a href="/" className="productItem">
              <img
                className="productImg"
                src={img_product_ring_silver_round_blue_diamond}
                alt=""
              />
              <div className="productStage"></div>
              <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
            </a>

            <a href="/" className="productItem">
              <img
                className="productImg"
                src={img_product_ring_silver_round_blue_diamond}
                alt=""
              />
              <div className="productStage"></div>
              <p className="productDesc">Silver 1.2ct Round Blue Diamond</p>
            </a>
          </div>
        </Styled_SiteContainer>
      </Div__block_one_row_jewellery>
    </>
  )
}

export default Block_one_row_jewellery