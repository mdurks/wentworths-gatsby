import styled, { css } from "styled-components"
import css_breakpoints from "../common/css_breakpoints"

const bp_desktop_max = "1400px"

export const Styled_SiteContainer = styled.section`
  /* position: relative; */
  display: block;
  width: calc(100% - 30px);
  max-width: ${bp_desktop_max};
  margin: auto;
  padding: 15px;

  ${props =>
    props.noPadding &&
    css`
      padding: 0;
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
  color: #9c7043;
  background-color: transparent;
  border: 1px solid #b6926d;
  border-radius: 200px;
  font-family: "Playfair Display", serif;
  font-family: "Raleway", sans-serif;
  font-size: 18px;
  transition: all ease 0.4s;
  opacity: 0;
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

      &:before {
        opacity: 1;
        clip-path: inset(0% 0% 0% 0%);
        border-radius: 100px 0 0 100px;
      }
      &:after {
        width: 52%;
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
    left: -1%;
    width: 51%;
    height: calc(100% + 1px);
    background: #b6926d;
    clip-path: inset(0% 0% 0% 100%);
    border-radius: 0 0 0 0;
    opacity: 0;
    z-index: -1;
    transition: all ease 0.3s;
  }
  &:after {
    left: 49%;
    clip-path: inset(0% 100% 0% 0%);
  }

  ${props =>
    props.btn_selected &&
    css`
      color: #fff;
      background-color: #b6926d;
    `};
`
