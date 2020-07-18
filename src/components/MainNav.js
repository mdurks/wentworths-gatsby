import React from "react"
import { Link } from "gatsby"

const MainNav = () => (
  <nav>
    <Link to="/">Home</Link> | <Link to="/products/">Products</Link> |{" "}
    <Link to="/about/">About</Link>
  </nav>
)

export default MainNav
