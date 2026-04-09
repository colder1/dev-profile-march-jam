import './Hero.css';
import {Link} from "react-router"

const Hero = () => {
  return (
    
    <div>
      <p className="main-text">
        Marcial Becerra
        <p className='secondary-text'>
          Software Engineer
        </p>
      </p>   

      <p className='description-text '>
        Frontend-focused engineer who enjoys building modern, responsive interfaces with React and TypeScript. I like turning ideas into clean, efficient, and scalable solutions, with a strong foundation in data structures and problem-solving.     
      </p>
      
      <div className='btn-container'>
        <button className='btn'> 
            <Link to= "/Projects">View Projects</Link>
        </button>
        <button 
          className='btn'> 
          <a href="/Marcial_Becerra_Resume.pdf"
          target='blank'
          rel="noopener noreferrer">
              View Resume
          </a>
        </button>
        
      </div>
    </div>
  );
};

export default Hero;