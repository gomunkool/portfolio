import React from 'react'
import './ProjectModalWindow.css'
import { ProjectsDataType } from '../../data/projectsData/projectsData'
import { BiXCircle } from 'react-icons/bi'
import { prependListener, prependOnceListener } from 'process'

type IProjectModalWindowType = ProjectsDataType & {
  closeModalProps: () => void
}

const ProjectModalWindow = ({
  id,
  title,
  description,
  technologyStack,
  demoLink,
  gitRepoLink,
  img,
  closeModalProps,
}: IProjectModalWindowType): JSX.Element => {
  return (
    <div
      className="modal-window"
      onClick={() => {
        closeModalProps()
      }}
    >
      <div className="modal-count">
        <BiXCircle
          className="modal-close"
          onClick={() => {
            closeModalProps()
          }}
        />
        <div
          className="modal-wrapper"
          onClick={(e) => {
            e.stopPropagation()
          }}
        >
          <img src={img} alt={title} className="project-modal-img" />
          <div>
            <h3>{title}</h3>
            <p className="modal-titles">Description:</p>
            <p>{description}</p>
            <br />
            <p className="modal-titles">Technology stack:</p>
            <p>{technologyStack}</p>
          </div>
        </div>
        <p className="modal-titles">
          GITHub:
          <a href={gitRepoLink} target="_blank">
            {gitRepoLink}
          </a>
        </p>

        <br />
        <p className="modal-titles">
          Demo:
          <a href={demoLink} target="_blank">
            {demoLink}
          </a>
        </p>
      </div>
    </div>
  )
}

export default ProjectModalWindow
