import React from "react"
import styled from "styled-components"

import ShoppingBagIcon from "../images/shopping-bag-icon.png"
import ShoppingBagIcon_hover from "../images/shopping-bag-icon-hover.png"
import LoadingSpinner from "../images/loading-spinner-sml.gif"

const Styled_CartButton = styled.button`
  position: absolute;
  top: 11px;
  left: -7px;
  width: 45px;
  height: 40px;
  padding: 12px 0 0;
  text-align: center;
  font-weight: bold;
  background-image: url(${ShoppingBagIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  background-color: transparent;
  border: none;
  z-index: 5;

  img {
    margin: 4px 0 0;
    width: 16px;
    height: 16px;
  }

  @media (min-width: 768px) {
    top: 11px;
    right: 10px;
    left: auto;

    &:hover {
      background-image: url(${ShoppingBagIcon_hover});
      color: #fff;
    }
  }
`

const Styled_CartDesc = styled.div`
  display: none;
  position: absolute;
  top: 57px;
  right: -8px;
  width: 80px;
  text-align: center;

  ${Styled_CartButton}:hover & {
    display: block !important;
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
          <span className="snipcart-items-count">
            <img src={LoadingSpinner} alt="Loading cart" />
          </span>
        </Styled_CartButton>
        <Styled_CartDesc>View Cart</Styled_CartDesc>
      </>
    )
  }
}

export default Snipcart
