import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import "../styles/navbar.scss"

const Navbar = () => {
  const location = useLocation()
  const [menuState,setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState(prev => !prev)
  }
  const conditionCloseMenu = (e: React.MouseEvent<HTMLElement>) => {
    if(e.target === e.currentTarget) toggleMenu();
  }

  useEffect(() => {
    if(window.innerWidth <= 768) setMenuState(false);
  }, [location.pathname])

  return (
    <header className='header'>

      <i className={`fas ${menuState ? `fa-times`:`fa-bars`} menu-bar`} onClick={toggleMenu}></i>

        <nav className={menuState ? 'navbar active' : 'navbar'} onClick={conditionCloseMenu}>
            {/* <i className="fas fa-times" id="close-menu" onClick={closeMenu}></i> */}
            {/* <img src="images/logo.jpeg" alt="bad-teacher-logo" className="img-logo" /> */}
            <ul>
                <li><Link to="/auth" id='register'>ثبت نام</Link></li>
                <li><Link to="/auth">ورود</Link></li>
                <li><Link to="/courses">دوره ها</Link></li>
                <li><Link to="/pricing">تعرفه ها</Link></li>
                <li><Link to="/aboutus">درباره ما</Link></li>
            </ul>
        </nav>

        <Link to='/' className='logo'>BAD <span>TEACHER</span></Link>
    </header>
  )
}

export default Navbar