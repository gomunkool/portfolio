import React, { useState } from 'react'
import './ProjectSlider.css'
import {
  projectsData,
  ProjectsDataType,
} from '../../data/projectsData/projectsData'

const ProjectSlider = (): JSX.Element => {
  const [currentProject, setCurrentProject] = useState(0)
  const [movementSlider, setMovementSlider] = useState('')

  const {
    id,
    title,
    description,
    technologyStack,
    demoLink,
    gitRepoLink,
    img,
  } = projectsData[currentProject]

  const changeSlide = (numberSlide: number): void => {
    setTimeout(() => {
      if (numberSlide < 0) {
        setCurrentProject(projectsData.length - 1)
      } else if (numberSlide > projectsData.length - 1) {
        setCurrentProject(0)
      } else {
        setCurrentProject(numberSlide)
      }
    }, 300)
  }

  return (
    <div className="slider">
      <div
        className="arrow arrow-left"
        onClick={() => {
          changeSlide(currentProject - 1)
          setMovementSlider('slider-count--movement-left')
          setTimeout(() => {
            setMovementSlider('')
          }, 600)
        }}
      >
        <div className="arrow-top arrow-left-top"></div>
        <div className="arrow-bottom arrow-left-bottom"></div>
      </div>
      <div className={`slider-count ${movementSlider}`}>
        <h2>{title}</h2>
        <div className="slider-wrapper">
          <img className="slider-img" src={img} alt={title} />
          <div className="slider-info">
            <p className="slider-titles">Technology stack:</p>
            <p>{technologyStack}</p>
            <br />
            <p className="slider-titles">Description:</p>
            <p>{description}</p>
            <br />
            <p className="slider-titles">GITHub:</p>
            <a href={gitRepoLink} target="_blank">
              {gitRepoLink}
            </a>
            <br />
            <br />
            <p className="slider-titles">Demo:</p>
            <a href={demoLink} target="_blank">
              {demoLink}
            </a>
          </div>
        </div>
      </div>
      <div
        className="arrow arrow-right"
        onClick={() => {
          changeSlide(currentProject + 1)
          setMovementSlider('slider-count--movement-right')
          setTimeout(() => {
            setMovementSlider('')
          }, 600)
        }}
      >
        <div className="arrow-top arrow-right-top"></div>
        <div className="arrow-bottom arrow-right-bottom"></div>
      </div>
    </div>
  )
}

export default ProjectSlider
