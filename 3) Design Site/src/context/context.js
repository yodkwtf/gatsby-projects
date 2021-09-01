import React, { useState } from 'react'
import sublinks from '../constants/links'

const GatsbyContext = React.createContext()

const GatsbyProvider = ({ children }) => {
  // setup states
  const [links] = useState(sublinks)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  // toggle Sidebar functions
  const showSidebar = () => {
    setIsSidebarOpen(true)
  }
  const hideSidebar = () => {
    setIsSidebarOpen(false)
  }

  // return
  return (
    <GatsbyContext.Provider
      value={{ links, isSidebarOpen, showSidebar, hideSidebar }}
    >
      {children}
    </GatsbyContext.Provider>
  )
}

export { GatsbyContext, GatsbyProvider }
