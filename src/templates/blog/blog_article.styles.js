import styled, { css } from "styled-components"
import css_breakpoints from "../../common/css_breakpoints"

const section_vertical_height = "100vh"
const section_vertical_padding = "5vh"

export const Div__detail_hero_block = styled.div`
  position: relative;
  overflow: hidden;

  ${css_breakpoints.min_desktop} {
    height: 450px;
  }

  > section {
    padding: 100px 0 0;

    ${css_breakpoints.min_desktop} {
      padding: 300px 0 0;
    }
  }
`

export const Styled_Img = styled.div`
  height: 300px;

  ${css_breakpoints.min_desktop} {
    height: 450px;
  }

  div {
    height: 100%;
    width: 100%;
  }
`

export const Styled_BlogContent = styled.div`
  margin: 0 -5px;
  padding: 10px 0 0;

  ${css_breakpoints.min_tablet} {
    margin: 0;
    padding: 60px 0 0 25%;
  }

  ${css_breakpoints.min_desktop} {
    padding: 60px 0 0 32%;
  }

  .publishPlusSocialShareWrapper {
    margin: 0 0 10px;
    padding: 20px 0 10px;
    border-bottom: 1px dotted grey;

    ${css_breakpoints.min_desktop} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 25px 0 15px;
    }
  }

  .articlePublishDate {
    margin: 0;
  }

  .socialShareGroup {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin: 30px 0 10px;
    padding: 10px 0 10px;
    border-top: 1px dotted grey;
    text-align: center;

    ${css_breakpoints.min_desktop} {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      margin-top: 75px;
    }

    p {
      margin: 5px 0 0;

      ${css_breakpoints.min_desktop} {
        margin: 0 10px 0 0;
      }
    }

    a {
      position: relative;
      top: 0;
      display: inline-block;
      margin: 5px;
      padding: 12px;
      width: 50px;
      height: 50px;
      border-radius: 3px;
      transition: all ease 0.3s;

      &:last-of-type {
        margin-right: 0;
      }

      ${css_breakpoints.min_desktop} {
        &:hover {
          top: -4px;
        }
      }
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .blogContent {
    padding: 0;

    ${css_breakpoints.min_desktop} {
      padding: 20px 0 0;
    }

    p:empty {
      margin: 0;
      padding: 0;
    }

    img {
      height: auto;
      max-height: 600px;
      min-width: calc(100% + 50px);
      max-width: calc(100% + 50px);
      width: auto;
      margin: 10px -25px 15px;

      ${css_breakpoints.min_desktop} {
        margin: 12px 0 27px;
        min-width: auto;
        max-width: 100%;
      }
    }
  }

  h2 {
    margin: 25px 0 18px;
    line-height: 33px;

    ${css_breakpoints.min_desktop} {
      margin: 50px 0 25px;
      font-size: 36px;
      line-height: normal;
    }
  }

  p {
    margin-bottom: 20px;

    ${css_breakpoints.max_mobile} {
      line-height: 26px;
    }
  }
`
