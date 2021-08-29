import React from 'react'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'
import { graphql } from 'gatsby'

const IndexPage = ({ data }) => {
  // get data from query
  const {
    allMdx: { nodes: posts },
  } = data

  // jsx
  return (
    <Layout>
      <Hero showPerson />
      <Posts posts={posts} title="recently published" />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          author
          category
          slug
          readTime
          date(formatString: "MMMM, Do YYYY")
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED)
            }
          }
        }
        excerpt
        body
      }
    }
  }
`

export default IndexPage
