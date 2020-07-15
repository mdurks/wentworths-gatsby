import React from "react"

class Snipcart extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      var snipcartCSS = document.createElement("link")
      snipcartCSS.rel = "stylesheet"
      snipcartCSS.href =
        "https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css"
      document.head.appendChild(snipcartCSS)

      var snipcartScript = document.createElement("script")
      snipcartScript.src =
        "https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"
      document.body.appendChild(snipcartScript)
    }, 4000)
  }
  render() {
    return (
      <>
        <div
          hidden
          id="snipcart"
          data-api-key="YmJkMDViNmYtYjg2MC00YTc0LTkwNDMtNGUzZGYwYTkyN2JjNjM3MzAzMTM2MDgxMjQzNzc0"
          data-currency="gbp"
        ></div>
        <button className="snipcart-checkout">
          Cart (<span className="snipcart-items-count"></span>)
        </button>
      </>
    )
  }
}

export default Snipcart
