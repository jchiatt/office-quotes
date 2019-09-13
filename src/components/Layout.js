import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Inner from "./Inner"

const Layout = ({ page, children }) => {
  return (
    <>
      <Header hero={page === "/"} />
      <Inner>
        <main>{children}</main>
      </Inner>
      <Footer />
    </>
  )
}

export default Layout
