import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/aboutPage.scss";

const AboutPage = () => {
    const[showMenu,setShowMenu] = useState(false);
    const[scrollTop,setScrollTop] = useState(false);
    const handleMenu = () => {
        setShowMenu(prev => !prev)
    }
    useEffect(() => {
        window.addEventListener("scroll", () =>{
        setScrollTop(window.pageYOffset > 85 ? true : false)
        setShowMenu(false);
        });
    
        return () =>
          window.removeEventListener("scroll", () =>{
          setScrollTop(window.pageYOffset > 85 ? true : false)
          setShowMenu(false);
          });
    }, []);
  return (
    <main id="about-me-page" className="light">
      <header className={showMenu ? "about-header toggle" : "about-header"}>

        <div className="user">
            <img src="/images/photo-owner.jpeg" alt="bag-teacher" />
            <h3 className="name">Sina Baba Ahmadi</h3>
            <p className="post">English Instructor</p>
        </div>

        <nav className="navbar">
            <ul>
                <li><a href="#home">home</a></li>
                <li><a href="#about">about</a></li>
                <li><a href="#education">education</a></li>
                <li><a href="#contact">contact</a></li>
                <li><Link to="/">go to main page</Link></li>
            </ul>
        </nav>

      </header>

      <div id="menu" className={showMenu ? "fas fa-times" :"fas fa-bars"} onClick={handleMenu}></div>

      <section className="home" id="home">

          <h3>HI THERE !</h3>
          <h1>I'M <span>Sina Baba Ahmadi</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt aspernatur fugiat minus enim ullam repudiandae sint sed magnam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, at.
          </p>
          <a href="#about"><button className="button">About me <i className="fas fa-user"></i></button></a>

      </section>

      <section className="about" id="about">

        <h1 className="about-heading"> <span>about</span> me </h1>

        <div className="row">

            <div className="info">
                <h3> <span> name : </span> Sina Baba Ahmadi </h3>
                <h3> <span> age : </span> 20 </h3>
                <h3> <span> qualification : </span> BMS </h3>
                <h3> <span> post : </span> English Instructor </h3>
                <a href="#"><button className="button"> download CV <i className="fas fa-download"></i> </button></a>
            </div>

            <div className="counter">

                <div className="box">
                    <span>10+</span>
                    <h3>years of experience</h3>
                </div>

                <div className="box">
                    <span>100+</span>
                    <h3>porject completed</h3>
                </div>

                <div className="box">
                    <span>2500+</span>
                    <h3>happy students</h3>
                </div>

                <div className="box">
                    <span>12+</span>
                    <h3>awards won</h3>
                </div>

            </div>

        </div>

      </section>

      <section className="education" id="education">

        <h1 className="about-heading"> my <span>education</span> </h1>

        <div className="box-container">

            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>2016</span>
                <h3>front end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
            </div>

            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>2017</span>
                <h3>front end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
            </div>

            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>2018</span>
                <h3>front end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
            </div>

            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>2019</span>
                <h3>front end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
            </div>

            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>2020</span>
                <h3>front end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
            </div>

            <div className="box">
                <i className="fas fa-graduation-cap"></i>
                <span>2021</span>
                <h3>front end development</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quos alias praesentium. Id autem provident laborum quae, distinctio eaque temporibus!</p>
            </div>

        </div>

      </section>

      
      <section className="contact" id="contact">

            <h1 className="about-heading"> <span>contact</span> me </h1>

            <div className="row">

                <div className="content">

                    <h3 className="title">contact info</h3>

                    <div className="info">
                        <h3> <i className="fas fa-envelope"></i> sina@gmail.com </h3>
                        <h3> <i className="fas fa-phone"></i> +123-456-7890 </h3>
                        <h3> <i className="fas fa-phone"></i> +111-222-3333 </h3>
                        <h3> <i className="fas fa-map-marker-alt"></i> Tehran, Iran - 400104. </h3>
                    </div>

                </div>

                <form>

                    <input type="text" placeholder="name" className="box" />
                    <input type="email" placeholder="email" className="box" />
                    <input type="text" placeholder="project" className="box" />
                    <textarea name="" id="" cols={30} rows={10} className="box message" placeholder="message" />
                    <button type="submit" className="button"> send <i className="fas fa-paper-plane"></i> </button>

                </form>

            </div>

      </section>


        {scrollTop && <a href="#home" className="top">
            <img src="/images/scroll-top-img.png" />
        </a>}

    </main>
  );
};

export default AboutPage;
