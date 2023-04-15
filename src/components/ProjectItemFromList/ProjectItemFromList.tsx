import React, { useState } from 'react'
import './ProjectItemFromList.css'
import { ProjectsDataType } from '../../data/projectsData/projectsData'
import ProjectModalWindow from '../ProjectModalWindow/ProjectModalWindow'

const ProjectItemFromList = ({
  id,
  title,
  description,
  technologyStack,
  demoLink,
  gitRepoLink,
  img,
}: ProjectsDataType): JSX.Element => {
  const [openModal, setOpenModal] = useState(false)

  const closeModal = (): void => {
    setOpenModal(false)
  }

  return (
    <>
      <div
        className="projects-list-item"
        onClick={() => {
          setOpenModal(true)
        }}
      >
        <h4>{title}</h4>
        <img src={img} alt={title} className="projects-list-item-img" />
      </div>
      {openModal ? (
        <ProjectModalWindow
          id={id}
          title={title}
          description={description}
          technologyStack={technologyStack}
          demoLink={demoLink}
          gitRepoLink={gitRepoLink}
          img={img}
          closeModalProps={closeModal}
        />
      ) : null}
    </>
  )
}

export default ProjectItemFromList
