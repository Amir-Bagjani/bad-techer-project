import { useState, useEffect, useRef } from "react";
import CourseBoxNew from "../components/CourseBoxNew";
import Section from "../components/Section";
import "../styles/courseDetailPage.scss";

const popularCourse = {
  id: 1,
  image: "/images/course-img1.gif",
  title: "دوره Node.js نود جی اس",
  body: " آموزش کاربردی نود جی اس در این دوره به آموزش پیاده سازی نود جی اس و پیاده سازی یک نرم افزار تحت وب کامل میپرداز آموزش کاربردی نود جی اس در این دوره به آموزش پیاده سازی نود جی اس و پیاده سازی یک نرم افزار تحت وب کامل میپرداز آموزش کاربردی نود جی اس در این دوره به آموزش پیاده سازی نود جی اس و پیاده سازی یک نرم افزار تحت وب کامل میپرداز آموزش کاربردی نود جی اس در این دوره به آموزش پیاده سازی نود جی اس و پیاده سازی یک نرم افزار تحت وب کامل میپردازیم",
};

const CourseDetailPage = () => { 
  const [showList, setShowList] = useState(false);
  const width = useRef<number>(0);

  const handleShowList = () => {
    if(width.current <= 1000) setShowList(prev => !prev);
  }

  useEffect(() => {
    window.addEventListener('resize',() => width.current = window.innerWidth);

    return () =>window.removeEventListener('resize', () => width.current = window.innerWidth);
  }, [])

  return (
    <Section id="course-detail-page">
      <header className="course-detail-page-header">
        <CourseBoxNew
          data={popularCourse}
          h4="این دوره مجموعا 24 ساعت آموزش برنامه نبیسی است"
        />
      </header>

      <div className="course-detail-page">

        <div className="course-detail-page-sidebar">
          <div className="course-detail-page-sidebar-price">
            <div>
              <h3>مبلغ: 2900000</h3>
              <i className="fas fa-money-bill-wave"></i>
            </div>
            <button>ثبت نام در دوره</button>
            <p>این دوره شامل 10 ویدئو میباشد</p>
          </div>
          <div className="course-detail-page-sidebar-video-list">
            <h3 onClick={handleShowList}>لیست ویدئو ها</h3>
            <i className={`fas fa-caret-down ${showList ? "active" : null}`} id="collaps"></i>
            <ul className={showList ? "active" : ""}>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
              <li> <span>1</span><i className="fab fa-youtube"></i> ویدئو شماره یک <button>35 : 12</button> <i className="fas fa-lock"></i></li>
             
            </ul>
          </div>
        </div>

        <div className="course-detail-page-content">
          <video controls width="100%">
          </video>
        </div>
      </div>
    </Section>
  );
};

export default CourseDetailPage;
