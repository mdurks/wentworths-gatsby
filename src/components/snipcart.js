import React from "react"
import styled from "styled-components"
import css_breakpoints from "../common/css_breakpoints"

import ShoppingBagIcon from "../images/shopping-bag-icon.png"
import ShoppingBagIcon_hover from "../images/shopping-bag-icon-hover.png"
import LoadingSpinner from "../images/loading-spinner-sml.gif"

const Styled_CartButton = styled.button`
  position: relative;
  top: calc(50% - 5px);
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  margin: 0 10px;
  text-align: center;
  font-weight: bold;
  background-color: transparent;
  border: none;
  z-index: 15;

  img {
    margin: 4px 0 0;
    width: 16px;
    height: 16px;
  }

  ${css_breakpoints.min_desktop} {
    &:hover .cartIcon {
      background-image: url(${ShoppingBagIcon_hover});
      color: #fff;
    }
  }

  .snipcart-items-count {
    margin: 2px 0 0;
    display: block;
  }

  .cartIcon {
    width: 45px;
    height: 40px;
    padding: 12px 0 0;
    background-image: url(${ShoppingBagIcon});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;
  }

  .cartDesc {
    margin: 6px 0 0 5px;
    width: 55px;
    text-align: left;
    font-size: 16px;
    line-height: 15px;
    color: black;
  }
`

class Snipcart extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     var snipcartCSS = document.createElement("link")
  //     snipcartCSS.rel = "stylesheet"
  //     snipcartCSS.href =
  //       "https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css"
  //     document.head.appendChild(snipcartCSS)

  //     var snipcartScript = document.createElement("script")
  //     snipcartScript.src =
  //       "https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"
  //     document.body.appendChild(snipcartScript)
  //   }, 4000)
  // }
  render() {
    return (
      <>
        {/* <div
          hidden
          id="snipcart"
          data-api-key="YmJkMDViNmYtYjg2MC00YTc0LTkwNDMtNGUzZGYwYTkyN2JjNjM3MzAzMTM2MDgxMjQzNzc0"
          data-currency="gbp"
        ></div> */}
        <Styled_CartButton className="snipcart-checkout">
          <div className="cartIcon">
            <span className="snipcart-items-count">
              {/* <img src={LoadingSpinner} alt="Loading cart" /> */}
            </span>
          </div>
          <div className="cartDesc">My Basket</div>
        </Styled_CartButton>
      </>
    )
  }
}

export default Snipcart
