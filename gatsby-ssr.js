/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
export const onRenderBody = (
  { setHeadComponents, setPostBodyComponents },
  pluginOptions
) => {
  setHeadComponents([
    <link rel="preconnect" href="https://fonts.gstatic.com/" />,
    // <link rel="preconnect" href="https://app.snipcart.com" />,
    // <link rel="preconnect" href="https://cdn.snipcart.com" />,
    // <link
    //   href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@400;500&display=swap"
    //   rel="stylesheet"
    // ></link>,
  ])

  setPostBodyComponents([
    // <div
    //   hidden
    //   id="snipcart"
    //   data-api-key="YmJkMDViNmYtYjg2MC00YTc0LTkwNDMtNGUzZGYwYTkyN2JjNjM3MzAzMTM2MDgxMjQzNzc0"
    //   data-currency="gbp"
    // ></div>,
    // <link
    //   rel="stylesheet"
    //   href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css"
    // />,
    // <link
    //   rel="stylesheet"
    //   href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css"
    // />,
    // <script
    //   async
    //   src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"
    // ></script>,
    // <script>
    //   var snipcartCSS = document.createElement("link"); snipcartCSS.rel =
    //   "stylesheet"; snipcartCSS.href =
    //   "https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css";
    //   document.head.appendChild(snipcartCSS); var snipcartScript =
    //   document.createElement("script"); snipcartScript.src =
    //   "https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js";
    //   document.body.appendChild(snipcartScript);
    // </script>,
  ])
}
