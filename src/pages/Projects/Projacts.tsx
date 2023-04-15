import React, { useState } from 'react'
import './Projects.css'
import { BiGridAlt, BiSquare } from 'react-icons/bi'
import {
  projectsData,
  ProjectsDataType,
} from '../../data/projectsData/projectsData'
import ProjectItemFromList from '../../components/ProjectItemFromList/ProjectItemFromList'
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider'

const Projects = (): JSX.Element => {
  const [viewProjects, setViewProjects] = useState(true)

  const showAllProjects = () => {
    return projectsData.map(
      ({
        id,
        title,
        description,
        technologyStack,
        demoLink,
        gitRepoLink,
        img,
      }: ProjectsDataType): JSX.Element => {
        return (
          <ProjectItemFromList
            key={id}
            id={id}
            title={title}
            description={description}
            technologyStack={technologyStack}
            demoLink={demoLink}
            gitRepoLink={gitRepoLink}
            img={img}
          />
        )
      }
    )
  }

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
        <ProjectSlider />
      ) : (
        <div className="project-list-count">{showAllProjects()}</div>
      )}
    </div>
  )
}

export default Projects
