import React from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import { Link } from "gatsby"

const Project = ({
  index,
  title,
  slug,
  description,
  github,
  url,
  image,
  stack,
}) => {
  // jsx
  return (
    <article className="project">
      <GatsbyImage
        image={getImage(image.localFile)}
        className="project-img"
        alt={title}
      />

      <div className="project-info">
        <span className="project-number">{index + 1}.</span>
        <Link to={`/projects/${slug}`} className="project-slug">
          <h3>{title}</h3>
        </Link>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => (
            <span key={item.id}>{item.title}</span>
          ))}
        </div>
        <div className="project-links">
          <a href={github} target="_blank" rel="noreferrer">
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank" rel="noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
