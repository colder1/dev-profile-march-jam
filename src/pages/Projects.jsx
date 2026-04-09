import { Link } from "react-router";
import "./Projects.css";

const Projects = () => {
  return (
    <>
     <div className="projects-container">

      <h1 className="title">PROJECTS</h1>

      <div className="projects-grid">
        
        <div className="project-card">
          <h2>SKILIAIR</h2>
          <p className="project-desc">
            Real-time air quality monitoring system using IoT devices.
          </p>

          <p className="project-tech">
            Raspberry Pi • MariaDB • IoT Sensors
          </p>

          <ul>
            <li>Real-time PM2.5 data collection</li>
            <li>Relational database design</li>
            <li>Automated alert system</li>
          </ul>

          <div className="project-buttons">
            <button className="btn">View Code</button>
          </div>
        </div>

        <div className="project-card">
          <h2>SOCA Clothing</h2>
          <p className="project-desc">
            Frontend improvements for e-commerce platform.
          </p>

          <p className="project-tech">
            React • TypeScript • Tailwind
          </p>

          <ul>
            <li>Mobile-first UI refactor</li>
            <li>Routing improvements</li>
            <li>Git collaboration workflows</li>
          </ul>

          <div className="project-buttons">
            <button className="btn">View Code</button>
          </div>
        </div>


        <div className="project-card">
          <h2>Graph Connectivity Analyzer</h2>
          <p className="project-desc">
            Graph analysis tool for Eulerian path detection.
          </p>

          <p className="project-tech">
            C++ • DFS • Data Structures
          </p>

          <ul>
            <li>Adjacency list implementation</li>
            <li>DFS connectivity analysis</li>
            <li>Eulerian path validation</li>
          </ul>

          <div className="project-buttons">
            <button className="btn">View Code</button>
          </div>
        </div>

        <div className="project-card">
          <h2>StreamBox</h2>
          <p className="project-desc">
            Console-based streaming content manager.
          </p>

          <p className="project-tech">
            C++ • OOP • File I/O
          </p>

          <ul>
            <li>Inheritance & polymorphism</li>
            <li>Persistent file storage</li>
            <li>Dynamic filtering system</li>
          </ul>

          <div className="project-buttons">
            <button className="btn">View Code</button>
          </div>
        </div>

      </div>

    <br />
      <p className="links">
        <Link to="/">Go back</Link>
      </p>

    </div>
    </>
  );
};

export default Projects;