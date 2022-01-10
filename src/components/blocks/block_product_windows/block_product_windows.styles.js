import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"
import Link from "gatsby-plugin-transition-link"

export const Section_product_windows = styled.section`
  padding: 20px 0 0;

  ${css_breakpoints.min_desktop} {
    padding: 0;
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
    padding: 90px 0 80px;
    display: flex;
    flex-wrap: wrap;
  }
`

export const A_productItem = styled(Link)`
  position: relative;
  display: block;
  flex: 1 1 calc(50% - 10px);
  /* height: 300px; */
  margin-bottom: 15px;
  overflow: hidden;

  ${css_breakpoints.min_tablet} {
    height: 40vh;

    &:nth-child(odd) {
      margin-right: 10px;
    }

    &:nth-child(even) {
      margin-left: 10px;
    }
  }

  .graphcms-image-outer-wrapper {
    left: -0.75%;
    top: -1%;
    width: 101.5%;
    height: 102%;
  }

  .graphcms-image-wrapper {
    height: 100%;
  }

  &:hover img {
    left: -3% !important;
    top: -3% !important;
    width: 106% !important;
    height: 106% !important;
  }

  img {
    /* object-fit: contain !important; */
    transition: all ease-in-out 0.55s !important;
  }
`

export const Div_product_name = styled.div`
  padding: 10px 20px 16px;
  background: hsl(0deg 0% 100% / 55%);
  backdrop-filter: blur(5px);
  font-family: "Playfair Display", serif;
  text-align: center;
  text-transform: capitalize;
  transition: all ease-in-out 0.5s;

  ${css_breakpoints.min_tablet} {
    position: absolute;
    bottom: -50%;
    width: 100%;
    padding: 20px;
    z-index: 1;
  }

  &:before,
  &:after {
    content: " ";
    position: absolute;
    top: -1px;
    left: -0.5%;
    width: 50.5%;
    height: calc(100% + 2px);
    background-color: hsl(0deg 0% 100% / 100%);
    clip-path: inset(0% 0% 0% 100%);
    opacity: 0;
    z-index: -1;
    transition: all ease-in-out 0.45s;
  }
  &:after {
    left: 49.99%;
    clip-path: inset(0% 100% 0% 0%);
  }

  :hover {
    /* background: hsl(0deg 0% 100% / 80%); */
    color: #977121;

    &:before,
    &:after {
      opacity: 1;
      background-color: hsl(0deg 0% 100% / 55%);
    }
    &:before {
      clip-path: inset(0% 0% 0% 0%);
    }
    &:after {
      width: 51%;
      clip-path: inset(0% 0% 0% 0%);
    }
  }

  ${A_productItem}:hover & {
    bottom: 0;
  }
`
