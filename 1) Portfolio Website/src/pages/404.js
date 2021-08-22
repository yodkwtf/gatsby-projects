import React from "react"
import { Link } from "gatsby"
import Seo from "../components/Seo"

const Error = () => {
  return (
    <>
      <Seo title="Not Found" />

      <main className="error-page">
        <div className="error-container">
          <h1>OOPS! This page doesn't exist!</h1>
          <Link to="/" className="btn">
            back home
          </Link>
        </div>
      </main>
    </>
  )
}

export default Error
