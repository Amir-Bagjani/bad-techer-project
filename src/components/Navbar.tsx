import {
  MdOutlineShoppingCart,
  MdMenu,
  MdOutlinePlayLesson,
  MdOutlineWbSunny,
  MdOutlineDarkMode,
  MdClose,
  MdOutlineArticle,
  MdLogout,
} from "react-icons/md";
import { BiUser, BiHomeSmile } from "react-icons/bi";
import {
  AiOutlineCrown,
  AiOutlineYoutube,
  AiOutlineHeart,
  AiOutlineBank,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { useEffect, useState, useCallback, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.scss";

const Navbar = () => {
  const [user, setUser] = useState(true);
  const [menuState, setMenuState] = useState("");
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  const closeMenuState = useCallback(() => {
    setMenuState("");
  }, []);

  const conditionCloseMenu = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) closeMenuState();
  }, []);

  const themeHandle = useCallback((theme: string) => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      setTheme("light");
    }
    localStorage.setItem(`theme`, JSON.stringify(theme));
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
    <header className={location.pathname === "/" ? "header" : "header active"}>
      <Link to="/" className="logo">
        {/*[TODO] remove onClick on production mode*/}
        <img
          src="/images/logo-2.svg"
          alt="bad-teacher-logo"
          onClick={() => setUser((u) => !u)}
        />
      </Link>

      <MdMenu
        className="icon"
        id="menu-button"
        onClick={() => setMenuState("navbar")}
      />

      <nav
        className={menuState === "navbar" ? "navbar active" : "navbar"}
        onClick={conditionCloseMenu}
      >
        <ul>
          <li className="navbar-close" onClick={closeMenuState}>
            <MdClose className="icon" />
          </li>
          <li className="navbar-logo">
            <div className="img">
              <img src="/images/logo.svg" alt="bad-teacher-logo" />
            </div>
            <div className="icons">
              <a href="#">
                <AiOutlineInstagram className="icon" />
              </a>
              <a href="#">
                <AiOutlineWhatsApp className="icon" />
              </a>
              <a href="#">
                <AiOutlineYoutube className="icon" />
              </a>
            </div>
            <p>آکادمی Bad Teacher</p>
          </li>
          <li className="navbar-cart">
            <Link to="/cart">
              <MdOutlineShoppingCart className="icon" /> سبد خرید
            </Link>
          </li>
          <li>
            <Link to="/">
              <BiHomeSmile className="icon" /> صفحه اصلی
            </Link>
          </li>
          <li>
            <Link to="/about-me">
              <AiOutlineCrown className="icon" /> درباره من
            </Link>
          </li>
          <li>
            <Link to="/admin">
              <AiOutlineCrown className="icon" /> ادمین پنل
            </Link>
          </li>
          <li>
            <Link to="/courses/34">
              <AiOutlineYoutube className="icon" /> کانال یوتیوب
            </Link>
          </li>
          <li>
            <Link to="/courses">
              <MdOutlinePlayLesson className="icon" /> دوره ها
            </Link>
          </li>
          <li>
            <Link to="/blogs">
              <MdOutlineArticle className="icon" /> بلاگ
            </Link>
          </li>
          {theme === "dark" ? (
            <li className="navbar-theme" onClick={() => themeHandle("light")}>
              <a>
                <MdOutlineWbSunny className="icon" />
                تم روشن
              </a>
            </li>
          ) : (
            <li className="navbar-theme" onClick={() => themeHandle("dark")}>
              <a>
                <MdOutlineDarkMode className="icon" />
                تم تاریک
              </a>
            </li>
          )}
        </ul>
      </nav>

      {menuState === "user-box" && (
        <div className="drop-user-content" onClick={conditionCloseMenu}>
          <ul onClick={closeMenuState}>
            <li>
              <BiUser className="icon" />{" "}
              <span>
                سینا پدر احمدی <br /> 09391111234
              </span>
            </li>
            <li>
              <Link to="/profile">
                <AiOutlineBank className="icon" /> <span>حساب کاربری</span>
              </Link>
            </li>
            <li>
              <Link to="/profile/bookmark">
                <AiOutlineHeart className="icon" /> <span>علاقه مندی ها</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <MdLogout className="icon" /> <span>خروج از حساب کاربری</span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {!user && (
        <>
          <Link to="/login" className="navbar-login">
            ورود / ثبت نام
          </Link>
          <Link to="/login" className="navbar-login-mobile">
            <BiUser className="icon" />
          </Link>
        </>
      )}

      {user && (
        <div className="icons">
          <ul>
            {theme === "dark" ? (
              <li onClick={() => themeHandle("light")}>
                <MdOutlineWbSunny className="icon" />
              </li>
            ) : (
              <li onClick={() => themeHandle("dark")}>
                <MdOutlineDarkMode className="icon" />
              </li>
            )}
            <li>
              <Link to="/cart">
                <MdOutlineShoppingCart className="icon" />
              </Link>
            </li>
            <li
              className="navbar-user"
              onClick={() => setMenuState("user-box")}
            >
              <BiUser className="icon" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
