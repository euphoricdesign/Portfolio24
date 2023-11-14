import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <h1 className='logo'>MERLINA V.</h1>
      </div>

      <ul className='sections'>
        <li><button className="button-li">projects</button></li>
        <li><button className="button-li">about</button></li>
      </ul>

      <button className="button">Available for freelance</button>
    </nav>
  )
}

export default Navbar