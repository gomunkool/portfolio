import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom'
import Projects from './pages/Projects/Projacts'
import About from './pages/About/About'

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header-count">
          <div>
            <h1>Vadzim Maroz</h1>
            <h3>Frontend / React developer</h3>
          </div>

          <nav>
            <ul className="navigation">
              <li>
                <NavLink to="/" className="border-button">
                  My Projects
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="border-button">
                  About me
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
