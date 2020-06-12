import React from "react"
import styled from "styled-components"

import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Main = styled.main``

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
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>{children}</Main>
      <footer>
        {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a> */}
      </footer>
    </>
  )
}

export default Layout
