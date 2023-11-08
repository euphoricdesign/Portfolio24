import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div>
        <h1 className='logo'>MERLINA V.</h1>
      </div>

      <ul className='sections'>
        <li>projects</li>
        <li>about</li>
      </ul>

      <button className='available'>Available for freelance</button>
    </nav>
  )
}

export default Navbar