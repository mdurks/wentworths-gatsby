import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"
import Link from "gatsby-plugin-transition-link"

export const Section_product_windows = styled.section`
  h1 {
    position: relative;
    margin: 50px 0 50px;
    font-size: clamp(54px, 6vw, 98px);
    font-family: "Amalfi Coast", serif;
    color: #c1a260;
  }
`

export const Div_productWrapper = styled.div`
  margin: 0 -15px -15px;
  padding: 150px 0 0;

  ${css_breakpoints.min_tablet} {
    margin: 0;
    padding: 340px 0 80px;
    display: flex;
    flex-wrap: wrap;
  }
`

export const A_productItem = styled(Link)`
  position: relative;
  display: block;
  /* flex: 1 1 calc(50% - 10px); */
  flex: 0 1 calc(25% - 10px);
  /* height: 300px; */
  overflow: hidden;

  ${css_breakpoints.min_tablet} {
    /* height: 40vh; */
    margin: 0 5px 10px;

    /* &:nth-child(odd) {
      margin-right: 10px;
    } */

    /* &:nth-child(even) {
      margin-left: 10px;
    } */
  }

  .graphcms-image-outer-wrapper {
    left: -2.5%;
    top: -2.5%;
    width: 105%;
    height: 105%;
  }

  .graphcms-image-wrapper {
    height: 100%;
    padding: 50px 0;
  }

  &:hover img {
    left: -5% !important;
    top: -5% !important;
    width: 110% !important;
    height: 110% !important;
  }

  img {
    /* object-fit: contain !important; */
    transition: all ease-in-out 0.55s !important;
  }
`

export const Div_product_name = styled.div`
  position: relative;
  width: 100%;
  height: 75%;
  padding: 10px 20px 16px;
  background: hsl(0deg 0% 100% / 50%);
  /* backdrop-filter: blur(5px); */
  font-family: "Playfair Display", serif;
  text-align: center;
  text-transform: capitalize;
  transition: all ease-in-out 0.4s;

  ${css_breakpoints.min_tablet} {
    position: absolute;
    top: 100%;
    padding: 15px 20px;
    z-index: 1;
  }

  span {
    position: relative;
    display: inline-block;
    font-family: "Raleway", sans-serif;
    font-size: 16px;

    :before {
      content: " ";
      position: absolute;
      bottom: -4px;
      left: 50%;
      height: 2px;
      width: 0;
      transform: translateX(-50%);
      background: #c1a260;
      transition: all ease-in-out 0.4s;

      ${A_productItem}:hover & {
        width: 100%;
      }
    }
  }

  ${A_productItem}:hover & {
    top: 71%;
    color: #a57c27;
    background: white;
  }
`
