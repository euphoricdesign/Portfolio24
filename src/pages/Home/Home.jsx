import fotoCv from '../../assets/foto-cv.png'
import html from '../../assets/logos/html-5.png'
import css from '../../assets/logos/css-3.png'
import js from '../../assets/logos/js.png'
import react from '../../assets/logos/react.svg'
import next from '../../assets/logos/next.png'
import redux from '../../assets/logos/redux.svg'
import tailwind from '../../assets/logos/tailwind.png'
import sass from '../../assets/logos/sass.svg'

import { PiLinkedinLogoDuotone, PiGithubLogoDuotone } from 'react-icons/pi';

import './Home.css'

const Home = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="content">
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
          <div className='techstack'>
            <p>Tech Stack</p>
            <div>
              <ul>
                <li>
                  <img className='logo-stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                  <img className='logo-stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                </li>
                <li>
                  <img className='logo-stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                  <img className='logo-stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                </li>
                <li>
                  <img className='logo-stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
                  <img className='logo-stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
                </li>
                <li>
                  <img className='logo-stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
                  <img className='logo-stack' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home