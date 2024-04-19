/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            textAlign: 'center',
            marginTop: `var(--space-6)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          {/* © {new Date().getFullYear()} &middot; HRJ London */}
          <p class="footer-small">DreamBit s.r.o. | IČO: 56 124 635 | Karpatská 1916/28A, 900 31 Stupava</p>
        </footer>
      </div>
    </>
  )
}

export default Layout

