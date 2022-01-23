import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

export const Styled_BlogLatestArticles = styled.div`
  background: #e5e3de;
`
export const Styled_BlogLatestArticlesWrapper = styled.div`
  padding: 20px 0;

  ${css_breakpoints.min_desktop} {
    display: flex;
    flex-wrap: wrap;
    padding: 75px 0 100px;
  }

  h2 {
    flex: 1 0 100%;
    margin: 0 0 25px;
    text-align: center;
    color: #a98029;

    ${css_breakpoints.max_mobile} {
      font-size: 40px;
      line-height: 44px;
    }

    ${css_breakpoints.min_desktop} {
      margin: 0 0 50px;
      font-size: 60px;
    }
  }

  h3 {
    padding: 0 20px 10px;
    color: #a98029;
    line-height: 31px;
    transition: all ease 0.3s;

    ${css_breakpoints.min_desktop} {
      padding: 0 20px 20px;
    }
  }

  .blogLatestArticleItem {
    display: block;
    position: relative;
    top: 0;
    margin: 30px 0;
    text-align: center;
    transition: all ease 0.3s;
    border: 2px solid #dbdbdb;
    background: white;

    ${css_breakpoints.min_desktop} {
      /* margin: 10px; */
      flex: 0 0 calc(33.3% - 40px);
      margin: 20px;
      border: 1px solid #dbdbdb;
      border-bottom: 8px solid #b3924c;
      border-radius: 3px;

      &:hover {
        top: -5px;

        h3 {
          color: black;
        }
      }
    }
  }

  .blogLatestArticleImg {
    height: 200px;
    margin: 0 0 10px;
    overflow: hidden;

    ${css_breakpoints.min_desktop} {
      margin: 0 0 20px;
    }

    div {
      width: 100%;
      height: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .blogLatestArticleReadMore {
    display: block;
    flex: 1 0 100%;
    margin: 50px 0 40px;
    text-align: center;
    color: #836830;

    ${css_breakpoints.min_desktop} {
      margin: 50px 0 5px;

      &:hover {
        color: black;
      }
    }

    span {
      margin: 0 0 6px;
      padding: 0 0 6px;
      border-bottom: 2px dotted #b3924c;
      transition: all ease 0.3s;
    }
  }
`
