import fotoCv from '../../assets/foto-cv.png'
import { PiLinkedinLogoDuotone, PiGithubLogoDuotone } from 'react-icons/pi';


const Hero = () => {
  return (
    <div className="hero-main">
      <div className="hero-text">
        <h1>Front-End React Developer</h1>
        <p className="introduction">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit aperiam commodi ipsa consectetur veniam vitae?</p>
        <ul className="logos">
          <li>
            <PiLinkedinLogoDuotone className='icon' />
          </li>
          <li>
            <PiGithubLogoDuotone className='icon' />
          </li>
        </ul>
      </div>
      <img className='hero-img' src={fotoCv} alt="" />
  </div>
  )
}

export default Hero