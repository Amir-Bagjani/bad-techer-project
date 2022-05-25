import { useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import "../styles/notFoundPage.scss";

const NotFound = () => {
  const numberRef = useRef({} as HTMLImageElement);

  const move = useCallback((e: MouseEvent) => {
    let x = (window.innerWidth / 2 - e.pageX) / 50;
    let y = (window.innerHeight / 2 - e.pageY) / 50;
    numberRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <Section id="not-found-page">
      <div  className="container">
        <div className="content">
          <h3 className="text">صفحه مورد نظر پیدا نشد</h3>
          <Link to="/">صفحه اصلی</Link>
          <Link to="/courses">مشاهده دورها </Link>
        </div>
        <img ref={numberRef} src="/images/logo.svg" alt="bad-teacher-logo" />
      </div>
    </Section>
  );
};

export default NotFound;
