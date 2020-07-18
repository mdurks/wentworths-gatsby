import styled, { css } from "styled-components";

export const Styled_SiteContainer = styled.section`
  position: relative;
  display: block;
  width: calc(100% - 30px);
  max-width: 1060px;
  margin: auto;
  padding: 15px;

  ${(props) =>
    props.mainNav &&
    css`
      padding: 0 0 30px;
    `};

  ${(props) =>
    props.textCenter &&
    css`
      text-align: center;
    `};

  ${(props) =>
    props.mainFooter &&
    css`
      margin-bottom: 10px;
      padding-bottom: 100px;
    `};

  ${(props) =>
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
`;

export default Styled_SiteContainer;
