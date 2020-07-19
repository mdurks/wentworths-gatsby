/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "./seo"
import Header from "./header"
import MainNav from "./MainNav"
import Footer from "./Footer"
import "../styles/style.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Header siteTitle={data.site.siteMetadata.title} />
      <MainNav />
      <main>{children}</main>
      <Footer />
      <link
        rel="stylesheet"
        href="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.css"
      />
      <div
        hidden
        id="snipcart"
        data-api-key="YmJkMDViNmYtYjg2MC00YTc0LTkwNDMtNGUzZGYwYTkyN2JjNjM3MzAzMTM2MDgxMjQzNzc0"
        data-currency="gbp"
      ></div>
      <script src="https://cdn.snipcart.com/themes/v3.0.17/default/snipcart.js"></script>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
