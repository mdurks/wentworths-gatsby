import styled, { css } from "styled-components"

const bp_desktop_max = "1400px"

export const Styled_SiteContainer = styled.section`
  /* position: relative; */
  display: block;
  width: calc(100% - 30px);
  max-width: ${bp_desktop_max};
  margin: auto;

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
      @media (min-width: 768px) {
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

      @media (min-width: 768px) {
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

export default Styled_SiteContainer
