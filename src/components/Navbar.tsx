import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import "../styles/navbar.scss"

const Navbar = () => {
  const location = useLocation()
  const [menuState,setMenuState] = useState(false);
  const [theme,setTheme] = useState<"light" | "dark">("light");

  const toggleMenu = () => {
    setMenuState(prev => !prev)
  }
  const conditionCloseMenu = (e: React.MouseEvent<HTMLElement>) => {
    if(e.target === e.currentTarget) toggleMenu();
  }
  const themeHandle = () => {
    if(theme === "light"){
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme('dark');
    }else{
      document.documentElement.removeAttribute('data-theme');
      setTheme('light');
    }
  }
  // const colorHandle = (e: React.MouseEvent<HTMLElement>) => {
  //   document.documentElement.setAttribute('main-color', 'main-color');
  // }

  useEffect(() => {
    if(window.innerWidth <= 768) setMenuState(false);
  }, [location.pathname])

  //system prefer theme
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    if(query.matches){
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme('dark');
    }else{
      document.documentElement.removeAttribute('data-theme');
      setTheme('light');
    }
  }, [])

  return (
    <header className='header'>

      <div className="header-wrapper">
        <i className={`fas ${menuState ? `fa-times`:`fa-bars`} menu-bar`} onClick={toggleMenu}></i>

        <i onClick={themeHandle} className={`far ${theme === 'light' ? "fa-moon" : "fa-sun"} theme`}></i>
        {/* <button onClick={colorHandle}>color</button> */}

          <nav className={menuState ? 'navbar active' : 'navbar'} onClick={conditionCloseMenu}>
              <ul>
                  <li><Link to="/auth" id='register'>ثبت نام / ورود</Link></li>
                  <li><Link to="/courses">دوره ها</Link></li>
                  <li><Link to="/about-me">درباره من</Link></li>
              </ul>
          </nav>

          <Link to='/' className='logo'>
            <img src="images/logo.svg" alt="bad-teacher-logo" />
          </Link>
      </div>

    </header>
  )
}

export default Navbar