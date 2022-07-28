import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

export const Styled_BlogLatestArticles = styled.div`
  background: #e5e3de;
`
export const Styled_BlogLatestArticlesWrapper = styled.div`
  margin: 0 -15px;
  padding: 20px 0;

  ${css_breakpoints.min_desktop} {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 75px 0 100px;
  }

  h2 {
    flex: 1 0 100%;
    margin: 25px 0 65px;
    text-align: center;
    color: #a98029;

    ${css_breakpoints.max_mobile} {
      font-size: 40px;
      line-height: 44px;
    }

    ${css_breakpoints.min_desktop} {
      margin: 0 0 50px;
      font-size: 65px;
    }
  }

  h3 {
    padding: 0 20px 10px;
    color: black;
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
    margin: 15px 0;
    text-align: center;
    transition: all ease 0.3s;
    background: white;

    ${css_breakpoints.min_desktop} {
      /* margin: 10px; */
      flex: 0 0 calc(33.3% - 40px);
      margin: 20px;
      border-bottom: 8px solid #fff;

      &:hover {
        top: -5px;
        border-bottom: 8px solid #b3924c;

        .blogLatestArticleImg > div {
          transform: scale(1.035) translate(-50%, -50%);
        }

        h3 {
          color: #a98029;
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
      /* top: 50%;
      transform: translateY(-50%); */
    }

    > div {
      overflow: hidden;
      top: 50%;
      left: 50%;
      transform: scale(1) translate(-50%, -50%);
      transition: all ease 0.75s;
    }
  }

  .blogLatestArticleReadMore {
    display: block;
    flex: 1 0 100%;
    margin: 50px 0 40px;
    text-align: center;
    color: black;

    ${css_breakpoints.min_desktop} {
      margin: 50px 0 5px;
    }

    span {
      margin: 0 0 2px;
      padding: 0 0 2px;
      border-bottom: 1px solid #000;
      transition: all ease 0.3s;

      &:hover {
        color: #936400;
        border-bottom: 1px solid #936400;
      }
    }
  }
`
