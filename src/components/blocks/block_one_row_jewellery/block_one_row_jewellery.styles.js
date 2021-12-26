import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

const section_vertical_height = "100vh"
const section_vertical_padding = "0vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

export const Div__block_one_row_jewellery = styled.div`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 25px 0 70px;
  align-items: center;
  text-align: center;
  background-color: #e5e3de;

  ${css_breakpoints.min_desktop} {
    min-height: calc(${section_vertical_height} + ${section_vertical_padding});
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
    font-size: clamp(16px, 4vw, 25px);
    text-transform: uppercase;
    font-family: "Playfair Display", serif;

    ${css_breakpoints.min_desktop} {
      top: 70px;
      margin-top: 0;
    }

    > span {
      opacity: 0;
    }

    > div {
      position: relative;
      top: -5px;
      opacity: 0;
      font-size: clamp(21px, 4vw, 50px);

      ${css_breakpoints.min_desktop} {
        top: auto;
        margin-top: 10px;
      }
    }
  }

  h2 {
    position: relative;
    left: -13px;
    top: -53px;
    margin-bottom: -20px;
    text-align: center;
    font-family: "Amalfi Coast", serif;
    font-size: clamp(44px,7vw,115px);
    letter-spacing: -1px;
    color: #ba9b7c;
    opacity: 0;

    ${css_breakpoints.min_desktop} {
      transform: translateX(0);
      left: -40px;
      top: -45px;
      margin-bottom: -60px;
    }
  }

  img {
    width: auto;
  }

  .productItem {
    position: relative;
    padding: 30px 0;
    text-decoration: none;
    color: #90836b;

    ${css_breakpoints.min_desktop} {
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

    ${css_breakpoints.min_desktop} {
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

    /* ${css_breakpoints.min_desktop} {
      opacity: 0;
    } */
  }
`

export const Div__productRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${css_breakpoints.min_desktop} {
    margin: 40px 0 0;
  }
`
