import styled from "styled-components"
import css_breakpoints from "../common/css_breakpoints"

export const BlogPageWrapper = styled.div`
  background: #e5e3de;

  h1 {
    margin: 50px 0 10px;
    text-align: center;
    color: #a98029;
    font-size: 38px;

    ${css_breakpoints.min_desktop} {
      margin: 100px 0 60px 15px;
      font-size: 60px;
    }
  }
`

export const Styled_BlogLatestArticlesWrapper = styled.div`
  padding: 20px 0;

  ${css_breakpoints.min_desktop} {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 0 0 100px;
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
    padding: 0 20px 2px;
    color: black;
    line-height: 31px;
    transition: all ease 0.3s;

    ${css_breakpoints.min_desktop} {
      padding: 40px 20px 7px 340px;
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
      flex: 0 0 calc(33.3% - 40px);
      margin: 20px 20px 10px;
      text-align: left;
      border-bottom: 8px solid #e5e3de;

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
    position: relative;
    height: 200px;
    margin: 0 0 15px;
    overflow: hidden;

    ${css_breakpoints.min_desktop} {
      height: 152px;
      width: 274px;
      margin: 0;
      float: left;
    }

    div {
      width: 100%;
      height: 100%;
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
      margin: 0 0 6px;
      padding: 0 0 6px;
      border-bottom: 2px solid #e5e3de;
      transition: all ease 0.3s;

      &:hover {
        color: #836830;

        border-bottom: 2px solid #b3924c;
      }
    }
  }

  .articlePublishDate {
    margin: auto 0 10px;
    padding: 0 0 18px;

    ${css_breakpoints.min_desktop} {
      padding: 0px 20px 0 340px;
    }
  }
`
