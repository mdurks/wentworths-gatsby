import styled from "styled-components"
import css_breakpoints from "../../../common/css_breakpoints"

export const Div__gradient_row_link = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 0 10px;

  ${css_breakpoints.min_desktop} {
    margin: 10px 0;
  }

  .wrapper {
    position: relative;
    // below positioning for when animating left to right
    /* transform: translateY(
      ${props => (props.img_alignment === "right" ? "-100%" : "100%")}
    ); */
    transform: translateY(100%);
    height: 110px;
    overflow: hidden;
    // take the CMS colour value and apply background gradient
    background: linear-gradient(
      to ${props => props.img_alignment},
      #f9f6ee 49.99%,
      hsl(${props => props.tint_colour}deg 100% 88%) 50%
    );

    /* ${css_breakpoints.min_tablet} {
      &:before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        left: ${props => (props.img_alignment === "right" ? "50%" : "0")};
        height: 100%;
        width: 50%;
        background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAPFBMVEUAAAD////////////////////////////////////////////////////////////////////////////YSWgTAAAAE3RSTlMA90v6fh+ZEw5WThpalJKMhXVoqNyq9wAAARdJREFUSMec1FEOhCAMBNAiqwgICNz/rgtxzWTTRKjzR5OX+aGlp+haNb3MUluW9xZabqHlVpeioYU2E2VokVWfnWj/KGihhRZacz2MTDv0otsJ7GkwMOe0tlVXlbqFTqoN7aSN/n/o45Q+ug23hQ5dHxN2W4ll3aCHVq4ts0zbsZVrB/uk3cBKNP5zaPZRh/ufcxs9DeLjpblN3HKdmF6wC6OYE5rt7yDYb3Y3xsFtYb3i7m41eue6ddc/m2HndL50bSkkTunuW3od0AAAwzAM48/aIAzg0vVvbVKH69rzYPNVMyQznrMYs5ITBhNDE4ATvRP6UzdTdFOxU+6DFQM0g1IDcYOPA66DzAnrrwkvKK9GL2WlgwB6HCGhU6TCrAAAAABJRU5ErkJggg==);
        opacity: 0.3;
        z-index: 1;
      }
    } */

    ${css_breakpoints.min_desktop} {
      height: 200px;
    }
  }

  .link_block {
    position: relative;
    display: block;
    height: 110px;
    background: linear-gradient(
      to ${props => props.img_alignment},
      #f9f6ee 50%,
      hsl(${props => props.tint_colour}deg 100% 88%) 100%
    );

    ${css_breakpoints.min_desktop} {
      height: 200px;
    }

    @media (hover: hover) {
      :hover {
        .text-title {
          text-shadow: 0px 4px 0px rgb(0 0 0 / 1%);
          color: hsl(${props => props.tint_colour}deg 50% 50%);
          left: ${props =>
            props.img_alignment === "right" ? "35px" : "-35px"};

          span:before {
            left: 0;
          }
        }
        ${css_breakpoints.min_desktop} {
          .img > div {
            top: -20px;
            width: 75%;
          }
        }
      }
    }
  }

  .text {
    position: absolute;
    left: ${props =>
      props.img_alignment === "right" ? "-5px" : "calc(40% + 10px)"};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 62%;
    text-align: ${props =>
      props.img_alignment === "right" ? "right" : "left"};
    z-index: 2;

    ${css_breakpoints.min_desktop} {
      width: 50%;
      left: ${props => (props.img_alignment === "right" ? "0" : "50%")};
    }

    > p {
      width: 100%;
      line-height: 17px;

      ${css_breakpoints.min_desktop} {
        line-height: 30px;
      }
    }

    &-pre-title {
      display: block;
      height: 20px;
      overflow: hidden;
      font-size: 18px;
      text-transform: capitalize;

      ${css_breakpoints.min_desktop} {
        height: 30px;
        font-size: 21px;
      }

      span {
        position: relative;
        top: 20px;

        ${css_breakpoints.min_desktop} {
          top: 35px;
        }
      }
    }

    &-title {
      position: relative;
      left: 0;
      display: block;
      overflow: hidden;
      height: 20px;
      font-size: 21px;
      font-family: "Playfair Display", serif;
      /* text-shadow: 0px 2px 3px rgb(0 0 0 / 30%); */
      text-transform: uppercase;
      line-height: 20px;
      transition: all ease-in-out 0.5s;

      ${css_breakpoints.min_desktop} {
        height: 60px;
        line-height: 30px;
        font-size: 44px;
        /* text-shadow: 0px 4px 4px rgb(0 0 0 / 40%); */
      }

      span {
        position: relative;
        top: -20px;
        display: inline-block;
        height: 60px;
        overflow: hidden;

        &:before {
          content: " ";
          position: absolute;
          top: 41px;
          left: ${props =>
            props.img_alignment === "right" ? "100%" : "-100%"};
          width: 100%;
          height: 1px;
          border-bottom: 1px dashed
            hsl(${props => props.tint_colour}deg 50% 50%);
          transition: all ease-in-out 0.6s;
        }

        ${css_breakpoints.min_desktop} {
          top: -45px;
        }
      }
    }
  }

  .img {
    position: absolute;
    width: 33.33%;
    top: 20px;
    left: ${props => (props.img_alignment === "right" ? "66.66%" : "0%")};
    opacity: 0;
    z-index: 2;

    ${css_breakpoints.min_desktop} {
      width: 50%;
      left: ${props => (props.img_alignment === "right" ? "50%" : "0%")};
    }

    > div {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 130%;

      ${css_breakpoints.min_desktop} {
        top: 0;
        width: 60%;
        transition: all ease-in-out 0.4s;
      }
    }
  }
`
