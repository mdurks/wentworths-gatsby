import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"
import Link from "gatsby-plugin-transition-link"

export const Section_product_windows = styled.section`
  ${css_breakpoints.min_desktop} {
  }

  h1 {
    position: relative;
    margin: 50px 0 50px;
    font-size: clamp(54px, 6vw, 98px);
    font-family: "Amalfi Coast", serif;
    color: #c1a260;
  }
`

export const Div_productWrapper = styled.div`
  ${css_breakpoints.min_tablet} {
    padding: 70px 0 60px;
    display: flex;
    flex-wrap: wrap;
  }
`

export const A_productItem = styled(Link)`
  position: relative;
  display: block;
  flex: 1 1 calc(50% - 5px);
  /* height: 680px; */
  margin-bottom: 10px;
  overflow: hidden;

  ${css_breakpoints.min_tablet} {
    height: 40vh;

    &:nth-child(odd) {
      margin-right: 5px;
    }

    &:nth-child(even) {
      margin-left: 5px;
    }
  }

  .graphcms-image-outer-wrapper,
  .graphcms-image-wrapper {
    height: 300px;
    ${css_breakpoints.min_tablet} {
      height: 100%;
    }
  }

  &:hover img {
    left: -2.5% !important;
    top: -2.5% !important;
    width: 105% !important;
    height: 105% !important;
  }

  img {
    /* object-fit: contain !important; */
    transition: all ease-in-out 0.66s !important;
  }
`

export const Div_product_name = styled.div`
  padding: 10px 20px 16px;
  background: hsl(0deg 0% 100% / 75%);
  backdrop-filter: blur(5px);
  text-align: center;
  text-transform: capitalize;
  line-height: 37px;
  transition: all ease-in-out 0.5s;

  span {
    padding-bottom: 5px;
    border-bottom: 1px dashed #a1a1a1;
  }

  ${css_breakpoints.min_tablet} {
    position: absolute;
    bottom: -50%;
    width: 100%;
    padding: 20px;
    z-index: 1;
  }

  ${A_productItem}:hover & {
    bottom: 0;
  }
`
