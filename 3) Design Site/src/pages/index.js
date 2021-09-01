import React from 'react'
import { graphql } from 'gatsby'
import {
  Layout,
  Hero,
  About,
  // Projects,
  Seo,
  Survey,
  Slider,
  GridProjects,
} from '../components'

const HomePage = ({ data }) => {
  // get data from query
  const {
    allAirtable: { nodes: projects },
    customers: { nodes: customers },
  } = data

  return (
    <>
      <Seo title="Home" />
      <Layout>
        <Hero />
        <About />
        <GridProjects projects={projects} title="latest projects" />
        <Survey />
        <Slider customers={customers} />
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 4
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        data {
          name
          date
          type
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
        }
        id
      }
    }

    customers: allAirtable(filter: { table: { eq: "Customers" } }) {
      nodes {
        id
        data {
          name
          quote
          title
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  placeholder: BLURRED
                  width: 150
                  height: 150
                )
              }
            }
          }
        }
      }
    }
  }
`

export default HomePage
