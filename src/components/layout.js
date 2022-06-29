/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import { AppProvider } from "../store/AppContext"

import SEO from "./layout/seo"
// import Header from "./layout/header"
import MainNav from "./layout/MainNav/MainNav"
import Footer from "./layout/footer/Footer"

// import Form_Enquire from "./forms/Form-Enquire"
// import Form_Viewing from "./forms/Form-Viewing"
// import Form_contact from "./forms/form_contact"

import Form_viewing from "./forms/form_viewing/form_viewing"

import "../styles/style.css"

const Layout = ({ children }) => {
  // const Layout = props => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  // const setDocHeight = () => {
  //   document.documentElement.style.setProperty(
  //     "--vh",
  //     document.querySelector(".heightCheck").offsetHeight + "px"
  //   )
  // }

  // useEffect(() => {
  //   setDocHeight()

  //   window.addEventListener("resize", setDocHeight())
  //   window.addEventListener("orientationchange", setDocHeight())
  // })

  return (
    <>
      <AppProvider>
        {/* <SEO title="Home" /> */}
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <MainNav />
        <main>{children}</main>
        {/* <main>{props.children({ ...props })}</main> */}
        <Footer />
        <Form_viewing />
        <div className="heightCheck"></div>
      </AppProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
