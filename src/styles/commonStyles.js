import styled, { css } from "styled-components"
import css_breakpoints from "../common/css_breakpoints"
import { breakpoints } from "../common/globalVars"

export const Styled_SiteContainer = styled.section`
  position: relative;
  display: block;
  width: calc(100% - 30px);
  max-width: ${breakpoints.maxDesktop}px;
  margin: auto;
  padding: 15px;

  ${props =>
    props.noPadding &&
    css`
      padding: 0;
    `};

  ${props =>
    props.noPaddingX &&
    css`
      padding-left: 0;
      padding-right: 0;
    `};

  ${props =>
    props.height100 &&
    css`
      height: 100%;
    `};

  ${props =>
    props.textCenter &&
    css`
      text-align: center;
    `};

  ${props =>
    props.mainFooter &&
    css`
      margin-bottom: 10px;
      padding-bottom: 100px;
    `};

  ${props =>
    props.productDetailFirstBlock &&
    css`
      ${css_breakpoints.min_desktop} {
        height: calc(100vh - 191px);
      }
    `};

  ${props =>
    props.productFlexList &&
    css`
      display: flex;
      flex-flow: row wrap;

      > a:hover {
        text-decoration: none;
      }

      ${css_breakpoints.min_desktop} {
        > a {
          display: inline-block;
          width: calc(50% - 20px);
          margin-top: 20px;
          margin-bottom: 20px;
          padding: 10px 20px;
          background-color: hsla(0, 0%, 98%, 1);

          :hover {
            background-color: hsla(0, 0%, 93%, 1);
          }

          :nth-child(odd) {
            margin-right: 20px;
          }
          :nth-child(even) {
            margin-left: 20px;
          }
        }
      }
    `};
`

export const Styled_btn = styled.button`
  display: block;
  margin: 25px auto;
  padding: 15px 20px;
  width: 100%;
  color: #a77711;
  background-color: transparent;
  border: 1px solid #b3924c;
  border-radius: 200px;
  font-family: "Playfair Display", serif;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  transition: all ease-in-out 0.3s;
  /* opacity: 0; */
  /* box-shadow: inset 0px 7px 11px 0px rgba(0, 0, 0, 0.3); */

  ${css_breakpoints.min_tablet} {
    margin: 0 0 15px;
    padding: 7px 36px;
    width: auto;
    font-size: 15px;
    cursor: pointer;

    &:hover {
      color: #fff;
      /* background-color: #b6926d;
      box-shadow: none; */
      /* transform: scale(1.05) !important; */

      &:before {
        opacity: 1;
        clip-path: inset(0% 0% 0% 0%);
        border-radius: 100px 0 0 100px;
      }
      &:after {
        width: 51%;
        opacity: 1;
        clip-path: inset(0% 0% 0% 0%);
        border-radius: 0 100px 100px 0;
      }
    }
  }

  &:before,
  &:after {
    content: " ";
    position: absolute;
    top: -1px;
    left: -0.5%;
    width: 50.5%;
    height: calc(100% + 2px);
    background: #b3924c;
    clip-path: inset(0% 0% 0% 100%);
    border-radius: 0 0 0 0;
    opacity: 0;
    z-index: -1;
    transition: all ease-in-out 0.45s;
  }
  &:after {
    left: 49.75%;
    clip-path: inset(0% 100% 0% 0%);
  }

  ${props =>
    props.btn_selected &&
    css`
      color: #fff;
      background-color: #b3924c;
    `};
`
