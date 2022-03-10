import styled, { css } from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

const section_vertical_padding = "10vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

export const Block_every_order_includesWrapper = styled.div`
  overflow: hidden;
  margin: 0 0 -50px;
  padding: 15px 0 0;
  background: #fff;

  ${css_breakpoints.min_desktop} {
    margin: 0;
    padding: 110px 0 117px;
  }

  .Block_every_order_includes__img {
    overflow: hidden;
    height: 300px;
    width: 100%;
    max-width: 985px;

    ${css_breakpoints.min_desktop} {
      height: 472px;
    }

    > div {
      top: 50%;
      transform: translateY(-50%);
    }

    div {
      height: 100%;
    }
  }

  .Block_every_order_includes__text {
    position: relative;
    top: -100px;
    left: 50%;
    transform: translate(-50%, 0);
    width: calc(100% - 40px);
    max-width: 586px;
    padding: 35px;
    background: #e5e3de;

    ${css_breakpoints.min_desktop} {
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
      padding: 50px;
      border: 20px solid #ddd8ce;
    }

    h2 {
      margin: 0 0 25px;
      font-size: 32px;
      line-height: 36px;
      text-transform: uppercase;
      text-align: center;

      ${css_breakpoints.min_desktop} {
        margin: 0 0 35px;
      }
    }

    ul {
      margin: auto;
      padding: 0 0 0 25px;

      ${css_breakpoints.min_desktop} {
        padding: 0;
        width: max-content;
      }
    }

    li {
      position: relative;
      margin: 0 0 5px 0;
      padding: 0 0 0 3px;

      &:last-of-type {
        margin: 0;
      }

      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 5px;
        left: -30px;
        color: #b3924c;
        width: 20px;
        height: 20px;
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'><path fill='%23b3924c' d='M27 55 6 33l3-4 17 12 29-29 4 4z'/></svg>");
      }
    }

    /* .Block_every_order_includes__textBar {
      position: absolute;
      top: 0;
      right: 0;
      width: 12px;
      height: 100%;
      background: #5aaad3;
    } */
  }
`
