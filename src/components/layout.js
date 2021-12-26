/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { AppProvider } from "../store/AppContext"

import SEO from "./seo"
import Header from "./header"
import MainNav from "./MainNav"
import Footer from "./Footer"

import Form_Enquire from "./Form-Enquire"
import Form_Viewing from "./Form-Viewing"

import Form_contact from "./form_contact"
import Form_viewing from "./form_viewing"

import "../styles/style.css"

const Layout = ({ children }) => {
  // const Layout = props => {
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
      <AppProvider>
        <SEO title="Home" />
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        <MainNav />
        <main>{children}</main>
        {/* <main>{props.children({ ...props })}</main> */}
        <Footer />
        <Form_Enquire />
        <Form_Viewing />

        <Form_contact />
        <Form_viewing />
      </AppProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
