import React from 'react'
import Layout from '../components/Layout'

const NewsLetter = () => {
  return (
    <Layout>
      <section className="newsletter-page">
        <div className="page-center">
          <h2>Get all the latest stories to your inbox!</h2>
          <h4>I write to my digital friends every few weeks.</h4>

          <form
            className="contact-form"
            name="mdx-contact-form"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
            action="/success"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="mdx-contact-form" />

            <input
              type="text"
              name="Name"
              placeholder="Your name"
              className="form-control"
            />
            <input
              type="email"
              name="Email"
              placeholder="Your email"
              className="form-control"
            />
            <button type="submit" className="btn form-control submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default NewsLetter
