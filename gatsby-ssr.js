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
    <meta name="robots" content="noindex, nofollow" />,
    // <link rel="preconnect" href="https://fonts.gstatic.com/" />,
    <link rel="preconnect" href="https://media.graphassets.com/" />,
    <link rel="preconnect" href="https://app.snipcart.com" />,
    <link rel="preconnect" href="https://cdn.snipcart.com" />,
    // <link
    //   href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Raleway:wght@400;500&display=swap"
    //   rel="stylesheet"
    // ></link>,
    // <link
    //   rel="preload"
    //   href="https://wentworths-gatsby.netlify.app/static/Playfair-Display-Regular-2309aaf8b332d5e280c088afca29ed55.woff2"
    //   as="font"
    //   type="font/woff2"
    //   crossOrigin="true"
    // ></link>,
    // <link
    //   rel="preload"
    //   href="https://wentworths-gatsby.netlify.app/static/Raleway-Regular-c514c0792d32c2c5bf75842ec72bebc6.woff2"
    //   as="font"
    //   type="font/woff2"
    //   crossOrigin="true"
    // ></link>,
    // <link
    //   rel="preload"
    //   href="https://wentworths-gatsby.netlify.app/static/Amalfi-Coast-c72f889e92703c68010e503b801a1df6.woff2"
    //   as="font"
    //   type="font/woff2"
    //   crossOrigin="true"
    // ></link>,
  ])

  setPostBodyComponents([
    <script
      async
      src="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.js"
    ></script>,
    <div
      hidden
      id="snipcart"
      data-api-key="YmJkMDViNmYtYjg2MC00YTc0LTkwNDMtNGUzZGYwYTkyN2JjNjM3MzAzMTM2MDgxMjQzNzc0"
      data-currency="gbp"
      data-config-modal-style="side"
    ></div>,
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
    <link
      rel="stylesheet"
      href="https://cdn.snipcart.com/themes/v3.3.1/default/snipcart.css"
    />,
    <script
      src="https://chimpstatic.com/mcjs-connected/js/users/d5846f86c03e5c2c5a3e185f8/02028c8b0af713f275541bbbb.js"
      defer
    ></script>,
    <script
      defer
      src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js"
    ></script>,
  ])
}
