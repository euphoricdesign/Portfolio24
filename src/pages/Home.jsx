import Hero from "../components/Hero/Hero"
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
            </div>
            <div className="hero-img"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home