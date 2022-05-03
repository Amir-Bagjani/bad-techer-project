import { useEffect, useState, CSSProperties, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const [menuState, setMenuState] = useState(false);
  const [theme, setTheme] = useState("light");
  const [offset, setOffset] = useState(false);

  const toggleMenu = () => {
    setMenuState((prev) => !prev);
  };
  const conditionCloseMenu = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) toggleMenu();
  };
  const themeHandle = useCallback(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      setTheme("light");
    }
  }, [theme])

  useEffect(() => {
    const isTheme = localStorage.getItem(`theme`);
    setTheme(isTheme ? JSON.parse(isTheme) : "light");
  }, []);
  useEffect(() => {
    localStorage.setItem(`theme`, JSON.stringify(theme));
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (window.innerWidth <= 768) setMenuState(false);
    window.scrollTo(0,0)
  }, [location.pathname]);


  //system prefer theme
  // useEffect(() => {
  //   const query = window.matchMedia("(prefers-color-scheme: dark)");
  //   if (query.matches) {
  //     document.documentElement.setAttribute("data-theme", "dark");
  //     setTheme("dark");
  //   } else {
  //     document.documentElement.removeAttribute("data-theme");
  //     setTheme("light");
  //   }
  // }, []);

  //change background of navbar
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setOffset(window.pageYOffset > 85 ? true : false)
    );

    return () =>
      window.removeEventListener("scroll", () =>
        setOffset(window.pageYOffset > 85 ? true : false)
      );
  }, []);

  const checkOpenMenu = (): CSSProperties | undefined => {
    if (menuState) {
      return { backgroundColor: `var(--bg-primary-color)` };
    }
  };

  return (
    <header
      className={
        offset || location.pathname !== "/" || menuState ? "header active" : "header"
      }
      style={checkOpenMenu()}
    >
      <div className="header-wrapper">
        <i
          className={`fas ${menuState ? `fa-times` : `fa-bars`} menu-bar`}
          onClick={toggleMenu}
        ></i>

        <Link to="/auth" id="register">
          ورود <i className="fas fa-user"></i>
        </Link>

        <nav
          className={menuState ? "navbar active" : "navbar"}
          onClick={conditionCloseMenu}
        >
          <ul>
            <li onClick={themeHandle}>
              <div><i className="fas fa-adjust" ></i>  <span>{theme === "light" ? " تم روشن " : " تم تاریک "}</span></div>
            </li>
            <li>
              <Link to="/"><i className="fas fa-home"></i> صفحه اصلی</Link> 
            </li>
            <li>
              <Link to="/about-me"><i className="fas fa-crown"></i> درباره من</Link> 
            </li>
            <li>
              <Link to="/courses/34"><i className="fab fa-youtube"></i> کانال یوتیوب</Link> 
            </li>
            <li>
              <Link to="/courses"><i className="fas fa-graduation-cap"></i> دوره ها</Link> 
            </li>
            <li>
              <Link to="/courses"><i className="fas fa-newspaper"></i> بلاگ</Link> 
            </li>
          </ul>
        </nav>

        <Link to="/" className="logo">
          <img src="/images/logo-navbarr.svg" alt="bad-teacher-logo" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
