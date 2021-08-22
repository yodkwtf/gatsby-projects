import React from "react"
import { FaLaptopCode, FaKeyboard, FaCode } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaLaptopCode className="service-icon" />,
    title: "web designer",
    text: `I am designing websites via HTML/CSS and Javascript for quite some now. I can design even the most complex designs easily.`,
  },
  {
    id: 2,
    icon: <FaKeyboard className="service-icon" />,
    title: "content writer",
    text: `I do freelance content writing time to time. I like writing about general issues faced by our modern society.`,
  },
  {
    id: 3,
    icon: <FaCode className="service-icon" />,
    title: "web developer",
    text: `I am learning new languages one by one. I aspire to learn most of the front as well as back end languages by the time I graduate.`,
  },
]

export default services
