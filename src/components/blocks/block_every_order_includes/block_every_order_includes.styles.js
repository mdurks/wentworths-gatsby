import styled, { css } from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

const section_vertical_padding = "10vh"
const section_horizontal_padding = "50px"
const section_content_max_width = "1800px"

export const Block_every_order_includesWrapper = styled.div`
  margin: 5px 0 -50px;
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
      width: 100%;
      padding: 60px 50px 50px;
    }

    h2 {
      margin: 0 0 25px;
      font-size: 34px;
      text-transform: uppercase;
      line-height: 36px;

      ${css_breakpoints.min_desktop} {
        margin: 10px 0 35px;
      }
    }

    ul {
      list-style-type: circle;
      list-style-type: disc;
      margin-left: 22px;
    }

    li {
      margin: 0 0 3px 0;
      padding: 0 0 0 3px;

      &:last-of-type {
        margin: 0;
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
