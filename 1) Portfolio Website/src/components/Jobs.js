import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJob(sort: { fields: created_at, order: DESC }) {
      nodes {
        company
        position
        date
        description {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  // get data from query
  const {
    allStrapiJob: { nodes: jobs },
  } = useStaticQuery(query)

  // state for tabs
  const [value, setValue] = React.useState(0)

  // get data from single job
  const { company, position, date, description } = jobs[value]

  // jsx
  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        {/* btns */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? "active-btn job-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
        </div>

        {/* info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {description.map(item => (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon" />
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>

      <Link to="/about" className="btn center-btn">
        know more
      </Link>
    </section>
  )
}

export default Jobs
