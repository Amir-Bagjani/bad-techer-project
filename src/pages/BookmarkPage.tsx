import { Link } from "react-router-dom";
import CourseBoxNew from "../components/CourseBoxNew";
import Heading from "../components/Heading";
import Section from "../components/Section";
import "../styles/bookmarkPage.scss";

const datas = [
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

const BookmarkPage = () => {
  return (
    <Section id="bookmark-page">
      <Heading>
        <h2>پست های ذخیره شده</h2>
      </Heading>
      <div className="bookmark-container">
        <nav className="bookmark-container-sidebar">
          <h3>سلام Amir عزیز !</h3>
          <ul>
          <li>
              <Link to="/profile">
                <i className="fas fa-chess-rook"></i> حساب کاربری
              </Link>
            </li>
            <li>
              <Link to="/profile/purchased-courses">
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
        <div className="bookmark-container-content">
          {datas.map((data) => (
            <Link to={`/blogs/${data.title}`} key={data.id}>
              <CourseBoxNew data={data} />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default BookmarkPage;
