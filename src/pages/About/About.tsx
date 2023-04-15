import React from 'react'
import './About.css'

const About = (): JSX.Element => {
  return (
    <div className="about">
      <div className="about-info">
        <p className="about-title">CV:</p>
        <a
          href="https://drive.google.com/file/d/1Kp0HGdxi35BgftmnCBZGwSodRWNb58DS/view?usp=share_link"
          target="_blank"
        >
          Maroz Vadzim
        </a>
        <br />
        <br />
        <p className="about-title">Contacts:</p>
        <p className="about-description">E-mail:</p>
        &nbsp;
        <a href="marozvadzimpl@gmail.com" target="_blank">
          marozvadzimpl@gmail.com
        </a>
        <br />
        <p className="about-description">Phone:</p>
        &nbsp;
        <a href="tel:+48571995680">+48 571 995 680</a>
        <br />
        <br />
        <p className="about-title">Profiles:</p>
        <p className="about-description">Github:</p>
        &nbsp;
        <a href="https://github.com/gomunkool" target="_blank">
          https://github.com/gomunkool
        </a>
        <br />
        <p className="about-description">Linkedin:</p>
        &nbsp;
        <a href="https://www.linkedin.com/in/marozvadzim/" target="_blank">
          https://www.linkedin.com/in/marozvadzim/
        </a>
        <br />
        <p className="about-description">Сodewars:</p>
        &nbsp;
        <a
          href="https://www.codewars.com/users/rsschool_2fb5c794da1924e2"
          target="_blank"
        >
          https://www.codewars.com/users/gomunkool
        </a>
      </div>
      <div className="about-skills">
        <p className="about-title">Skills:</p>
        <p>
          JavaScript, React, Redux, Redux-Toolkit, TypeScript, Node.js, Jest,
          SCSS, CSS, HTML, MUI, GIT
        </p>
        <br />
        <p className="about-title">Education:</p>
        <div className="about-education-count">
          <div className="about-education">
            <p>RS School JavaScript/Front-end 2021Q3</p>
            <a
              href="https://app.rs.school/certificate/enpa8exb"
              target="_blank"
            >
              <img src="./images/js.jpg" alt="js" className="education-img" />
            </a>
          </div>
          <div className="about-education">
            <p>RS School React 2022 Q1</p>
            <a
              href="https://app.rs.school/certificate/5n8sreqm"
              target="_blank"
            >
              <img
                src="./images/react.jpg"
                alt="react"
                className="education-img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
