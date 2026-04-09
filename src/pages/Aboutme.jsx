import { Link } from "react-router";
import "./Aboutme.css";


const Aboutme = () =>{
    return(
        <>
        <div className="text-container">
            <h1 className="title">About Me</h1>

            <p className="description-text">
            I enjoy building user-focused applications and turning ideas into clean, scalable solutions. My main focus is frontend development, where I work with React and TypeScript to create modern, responsive interfaces.
            </p>

            <p className="description-text">
            I also have a strong foundation in data structures, algorithms, and object-oriented programming, allowing me to approach problems from both a technical and practical perspective.
            </p>

            <p className="description-text">
            I’m especially interested in projects that combine software with real-world data, such as IoT systems, and I’m constantly improving my skills to build efficient, real-world solutions.
            </p>
            <div className="grid">
                <div className="block">
                    <h3>Focus</h3>
                    <p>Frontend Development • Data-driven systems • IoT integration</p>
                </div>
                <div className="block">
                    <h3>Tech Stack</h3>
                    <p>React • TypeScript • C++ • SQL • Tailwind CSS</p>
                </div>
                <div className="block">
                    <h3>Interests</h3>
                    <p>Building scalable applications • Problem solving • Hardware-software integration</p>
                </div>
            </div>
            <p className="links">
                <Link to="/"> Go back</Link>
            </p>
        </div>
        </>
    );
};

export default Aboutme;