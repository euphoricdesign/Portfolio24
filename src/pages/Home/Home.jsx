import Hero from '../../components/Hero/Hero'
import TechStack from '../../components/TechStack/TechStack'
import './Home.css'

const Home = () => {
  return (
    <>
      <section className="hero">
          <div className="container">
            <div className="content">
              <Hero />
              <TechStack />
            </div>
          </div>
      </section>
    </>
  )
}

export default Home