import { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
  const location = useLocation();
  const [menuState, setMenuState] = useState("");

  const closeMenuState = useCallback(() => {
    setMenuState("");
  }, []);

  const conditionCloseMenu = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) closeMenuState();
  }, []);

  const themeHandle = useCallback((theme: string) => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem(`theme`, JSON.stringify(theme));
    closeMenuState();
  }, []);

  //system prefer theme
  const handlePreferTheme = useCallback(() => {
    const query = window.matchMedia("(prefers-color-scheme: dark)");
    if (query.matches) {
      themeHandle("dark");
    } else {
      themeHandle("light");
    }
  }, []);

  //get theme from local storage for first render
  useEffect(() => {
    const isTheme = localStorage.getItem(`theme`);
    if (isTheme) {
      themeHandle(JSON.parse(isTheme));
    } else {
      themeHandle("light");
    }
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 768) closeMenuState();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  //close menu navbar
  useEffect(() => {
    window.addEventListener("scroll", () => closeMenuState());
    return () => window.addEventListener("scroll", () => closeMenuState());
  }, []);

  return (
    <header
      className={
        location.pathname === "/" ? "header" : "header active"
      }
    >
      <div className="icons">
        <i className="fas fa-bars" onClick={() => setMenuState("navbar")}></i>

        <Link to="/auth" id="register" className="fas fa-user">
        </Link>

        <Link to="/cart" id="cart" className="fas fa-shopping-cart">
          <span>2</span>
        </Link>

        <i className="fas fa-adjust" onClick={() => setMenuState("theme")}></i>
      </div>

      <nav
        className={menuState === "navbar" ? "navbar active" : "navbar"}
        onClick={conditionCloseMenu}
      >
        <ul onClick={closeMenuState}>
          <li>
            <Link to="/">
              <i className="fas fa-home"></i> صفحه اصلی
            </Link>
          </li>
          <li>
            <Link to="/about-me">
              <i className="fas fa-crown"></i> درباره من
            </Link>
          </li>
          <li>
            <Link to="/courses/34">
              <i className="fab fa-youtube"></i> کانال یوتیوب
            </Link>
          </li>
          <li>
            <Link to="/courses">
              <i className="fas fa-graduation-cap"></i> دوره ها
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <i className="fas fa-newspaper"></i> بلاگ
            </Link>
          </li>
        </ul>
      </nav>

      <Link to="/" className="logo">
        <h1>
          Bad Teacher
          <span>Academy</span>
        </h1>
        {/* <img src="/images/logo-1.svg" alt="bad-teacher-logo" /> */}
        <img src="/images/logo.svg" alt="bad-teacher-logo" />
      </Link>

      <div
        className={menuState === "theme" ? "theme-box active" : "theme-box"}
        onClick={conditionCloseMenu}
      >
        <ul>
          <li onClick={() => themeHandle("dark")}>
            <i className="fas fa-moon"></i> <span>تم تاریک</span>
          </li>
          <li onClick={() => themeHandle("light")}>
            <i className="fas fa-sun"></i> <span>تم روشن</span>
          </li>
          <li onClick={handlePreferTheme}>
            <i className="fas fa-adjust"></i>
            <span>سیستم</span>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
