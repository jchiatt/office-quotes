import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Inner from "./Inner"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Inner>
        <main>{children}</main>
      </Inner>
      <Footer />
    </>
  )
}

export default Layout
