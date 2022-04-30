import CourseBoxNew from "../components/CourseBoxNew";
import Heading from "../components/Heading";
import Section from "../components/Section";
import "../styles/coursesPage.scss";

const popularCourse = { id: 1, image: "images/course-img1.gif", title: "دوره Node.js نود جی اس", body: "آموزش کاربردی نود جی اس در این دوره به آموزش پیاده سازی نود جی اس و پیاده سازی یک نرم افزار تحت وب کامل میپردازیم" }

const data = [
    {id: 1, image: "images/course-img2.jpg", title: "آموزش کامل ری اکت react و Redux", body: "آموزش ری اکت و ریداکس از صفر این آموزش برای افرادی است که میخواهند شروع به برنامه نویسی فرانت اند (Front-End) کنند و آماده بازار کار شوند."},
    {id: 2, image: "images/course-img3.jpeg", title: "دیپلوی Node.jsلینوکس با استفاده از NGINX" ,body: "در دوره دیپلوی Node.js روی لینوکس با استفاده از NGINX یاد میگیریم که چگونه اپلیکیشن های نود جی اسی را روی لینوکس دپلوی کنیم و ساز و کار NGINX به چه صورت میباشد." },
    {id: 3, image: "images/course-img4.png", title: "دوره سوکت Socket.io", body: "امروزه در خیلی از وبسایت ها و اپ ها میبینیم که کاربران با پشتیبانی یا یکدیگر بصورت تکی یا گروهی صحبت (چت) میکنند و در تماس هستند و یا وبسایت هایی را میبینیم که بصورت زنده نتایج مسابقات، ارز و... را نشان میدهند."},
    {id: 4, image: "images/course-img5.jpeg", title: "آموزش نصب و راه اندازی Visual Studio Code",body: "Visual Studio Code که به اختصار VSCode یک نرم افزار ادیت کد میباشد که توسط شرکت مایکروسافت ساخته شده است و برای برنامه نویسی تحت وب، اندروید و آی او اس و... استفاده میشود."},
    {id: 5, image: "images/course-img6.jpg", title: "دوره CSS",body: "ما در دوره مقدماتی Cascading Style Sheets ( به اختصار CSS) به آموزش مباحث پایه CSS میپردازیم. دوره CSS این امکان را میدهد تا به سطح مناسبی از CSS برسید."},
    {id: 6, image: "images/course-img7.png", title: "آموزش افزایش پرفورمنس Node.js",body: "در آموزش یاد میگیریم که چگونه پرفورمنس Node.JS را افزایش دهیم و از تمام منابع سرور با Cluster استفاده کنیم. با ما همراه باشید"},
    {id: 7, image: "images/course-img8.jpg", title: "پوشه بندی در react",body: "برنامه نویسان در ری اکت معمولا بخاطر آزادی عملی که وجود دارد به مشکل شلختگی فایل ها بر میخورند از طرفی ساختار پوشه های ارائه شده گنگ است. در این ویدیو به مقایسه ساختار های رایج پوشه بندی در ری اکت بپردازیم"},
]

const CoursesPage = () => {
  return (
    <Section id="courses-page">
      <Heading><h2> دوره های آموزشی</h2></Heading>

      <div className="courses-popular">
          <div className="boxx">
              <div className="image">
                  <img src="images/course-img1.gif" alt="course" />
              </div>
              <div className="content">
                  <h3>دوره Node.js نود جی اس</h3>
                  <p>آموزش کاربردی نود جی اس در این دوره به آموزش پیاده سازی نود جی اس و پیاده سازی یک نرم افزار تحت وب کامل میپردازیم</p>
                  <button className="content-btn">بیشتر</button>
              </div>
          </div>
      </div>

      <div className="courses-container">
        <CourseBoxNew items={data} />       
      </div>

    </Section>
  )
}

export default CoursesPage