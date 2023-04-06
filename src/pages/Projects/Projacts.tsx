import React, { useState } from 'react'
import './Projects.css'
import { BiGridAlt, BiSquare } from 'react-icons/bi'

const Projects = (): JSX.Element => {
  const [viewProjects, setViewProjects] = useState(true)

  return (
    <div className="main-page">
      <div className="change-project-count">
        <BiSquare
          className="change-project-view"
          onClick={() => {
            setViewProjects(true)
          }}
        />
        <BiGridAlt
          className="change-project-view"
          onClick={() => {
            setViewProjects(false)
          }}
        />
      </div>
      {viewProjects ? (
        <div className="slider">
          <div className="arrow arrow-left ">
            <div className="arrow-top arrow-left-top"></div>
            <div className="arrow-bottom arrow-left-bottom"></div>
          </div>
          <div>Первый вариант</div>
          <div className="arrow arrow-right">
            <div className="arrow-top arrow-right-top"></div>
            <div className="arrow-bottom arrow-right-bottom"></div>
          </div>
        </div>
      ) : (
        <div className="list">ВТРОЙ ВАРИАНТ</div>
      )}
    </div>
  )
}

export default Projects
