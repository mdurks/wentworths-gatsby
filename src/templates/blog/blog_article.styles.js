import styled, { css } from "styled-components"
import css_breakpoints from "../../common/css_breakpoints"

const section_vertical_height = "100vh"
const section_vertical_padding = "5vh"

export const Div__detail_hero_block = styled.div`
  position: relative;

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
  padding: 20px 0 0;

  ${css_breakpoints.min_tablet} {
    padding: 60px 0 0 25%;
  }

  ${css_breakpoints.min_desktop} {
    padding: 60px 0 0 32%;
  }

  .publishPlusSocialShareWrapper {
    padding: 15px 0 10px;
    border-bottom: 1px dotted grey;

    ${css_breakpoints.min_desktop} {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
    }
  }

  .articlePublishDate {
    margin: 0;
  }

  .socialShareGroup {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 50px 0 35px;
    padding: 10px 0 10px;
    border-top: 1px dotted grey;

    ${css_breakpoints.min_desktop} {
      flex-direction: row;
      align-items: center;
      margin-top: 75px;
    }

    p {
      margin: 5px 0 0;
      order: 1;

      ${css_breakpoints.min_desktop} {
        margin: 0 10px 0 0;
        order: 0;
      }
    }

    a {
      display: inline-block;
      width: 50px;
      height: 50px;
      margin: 0 4px;
      border-radius: 3px;
      padding: 12px;

      &:last-of-type {
        margin-right: 0;
      }
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

  .blogContent {
    padding: 20px 0 0;

    ${css_breakpoints.min_desktop} {
      padding: 40px 0 0;
    }
  }

  h2 {
    margin: 25px 0 12px;

    ${css_breakpoints.min_desktop} {
      margin: 50px 0 25px;
    }
  }

  p {
    margin-bottom: 20px;
  }
`
