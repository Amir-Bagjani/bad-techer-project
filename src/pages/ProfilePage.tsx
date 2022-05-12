import { Link } from "react-router-dom";
import Section from "../components/Section";
import "../styles/profilePage.scss";

const data = [
  {
    id: 1,
    image: "/images/course-img2.jpg",
    title: "آموزش کامل ری اکت react و Redux",
    body: "آموزش ری اکت و ریداکس از صفر این آموزش برای افرادی است که میخواهند شروع به برنامه نویسی فرانت اند (Front-End) کنند و آماده بازار کار شوند.",
  },
  {
    id: 2,
    image: "/images/course-img3.jpeg",
    title: "دیپلوی Node.jsلینوکس با استفاده از NGINX",
    body: "در دوره دیپلوی Node.js روی لینوکس با استفاده از NGINX یاد میگیریم که چگونه اپلیکیشن های نود جی اسی را روی لینوکس دپلوی کنیم و ساز و کار NGINX به چه صورت میباشد.",
  },
  {
    id: 3,
    image: "/images/course-img4.png",
    title: "دوره سوکت Socket.io",
    body: "امروزه در خیلی از وبسایت ها و اپ ها میبینیم که کاربران با پشتیبانی یا یکدیگر بصورت تکی یا گروهی صحبت (چت) میکنند و در تماس هستند و یا وبسایت هایی را میبینیم که بصورت زنده نتایج مسابقات، ارز و... را نشان میدهند.",
  },
  {
    id: 4,
    image: "/images/course-img5.jpeg",
    title: "آموزش نصب و راه اندازی Visual Studio Code",
    body: "Visual Studio Code که به اختصار VSCode یک نرم افزار ادیت کد میباشد که توسط شرکت مایکروسافت ساخته شده است و برای برنامه نویسی تحت وب، اندروید و آی او اس و... استفاده میشود.",
  },
  {
    id: 5,
    image: "/images/course-img6.jpg",
    title: "دوره CSS",
    body: "ما در دوره مقدماتی Cascading Style Sheets ( به اختصار CSS) به آموزش مباحث پایه CSS میپردازیم. دوره CSS این امکان را میدهد تا به سطح مناسبی از CSS برسید.",
  },
  {
    id: 6,
    image: "/images/course-img7.png",
    title: "آموزش افزایش پرفورمنس Node.js",
    body: "در آموزش یاد میگیریم که چگونه پرفورمنس Node.JS را افزایش دهیم و از تمام منابع سرور با Cluster استفاده کنیم. با ما همراه باشید",
  },
  {
    id: 7,
    image: "/images/course-img8.jpg",
    title: "پوشه بندی در react",
    body: "برنامه نویسان در ری اکت معمولا بخاطر آزادی عملی که وجود دارد به مشکل شلختگی فایل ها بر میخورند از طرفی ساختار پوشه های ارائه شده گنگ است. در این ویدیو به مقایسه ساختار های رایج پوشه بندی در ری اکت بپردازیم",
  },
];

const ProfilePage = () => {
  return (
    <Section id="profile-page">
      <div className="profile-container">
        <nav className="profile-container-sidebar">
          <h3>سلام Amir عزیز !</h3>
          <ul>
            <li>
              <Link to="/profile">
                <i className="fas fa-chess-rook"></i> حساب کاربری
              </Link>
            </li>
            <li>
              <Link to="/profile/purchased-products">
                <i className="fas fa-graduation-cap"></i>دوره های خریداری شده
              </Link>
            </li>
            <li>
              <Link to="/profile/bookmark">
                <i className="fas fa-heart"></i>علاقه مندی ها
              </Link>
            </li>
            <li>
              <Link to="/profile/edit-profile">
                <i className="fas fa-user-edit"></i>جزئیات حساب کاربری
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="fas fa-sign-out-alt"></i>خروج از حساب کاربری
              </Link>
            </li>
          </ul>
        </nav>
        <div className="profile-container-content">
          <div className="tutorials">
            <div className="box">
              <i className="fas fa-graduation-cap"></i>
              <div className="content">
                <h4>32 دوره</h4>
                <p>موجود در سایت</p>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-user-graduate"></i>
              <div className="content">
                <h4>5 دوره</h4>
                <p>ثبت نام کرده اید</p>
              </div>
            </div>
            <div className="box">
              <i className="fas fa-cart-plus"></i>
              <div className="content">
                <h4>0 دوره</h4>
                <p>در انتظار پرداخت</p>
              </div>
            </div>
          </div>

          <div className="networks">
            <h4>مارا در شبکه های اجتماعی دنبال کنید</h4>
            <div className="links">
              <a href="#">
                <i className="fab fa-instagram"></i>اینستاگرام
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>کانال یوتیوب
              </a>
            </div>
          </div>

          <div className="notifications">
            <i className="fas fa-bell"></i>
            <details>
              <summary>پشتیبانی دوره ها <span>در تاریخ:  {new Date().toLocaleDateString("fa-IR")}</span></summary>
              <p>بعد از اینکه هر دوره را خریداری کردید، بصورت مادام العمر میتوانید از پبعد از اینکه هر دوره را خریداری کردید، بصورت مادام العمر میتوانید از پ بعد از اینکه هر دوره را خریداری کردید، بصورت مادام العمر میتوانید از پبعد از اینکه هر دوره را خریداری کردید، بصورت مادام العمر میتوانید از پشتیبانی برخوردار شوید</p>
            </details>
            <details>
              <summary>آپدیت دوره ها<span>در تاریخ:  {new Date().toLocaleDateString("fa-IR")}</span></summary>
              <p> همه دوره ها دارای آپدیت هستند.</p>
            </details>
          </div>

          <div className="articles">
            <i className="fas fa-book"></i>
            {data.map(i => (
              <div className="box" key={i.id}>
                <span><i className="fas fa-calendar-alt"></i>  {new Date().toLocaleDateString("fa-IR")}</span>
                <Link to={`/blogs/${i.title}`}>{i.title}</Link>
                <p>{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ProfilePage;
