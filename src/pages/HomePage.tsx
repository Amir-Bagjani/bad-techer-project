import { Link } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import CurseBox from '../components/CurseBox'
import Heading from '../components/Heading'
import Section from '../components/Section'
import "../styles/homePage.scss"

const blogs = [
    {id: 1, img: "/images/blog-1.webp", title: 'طراحان سایت هنگام طراحی قالب', body: "سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند."},
    {id: 2, img: "/images/blog-2.jpg", title: 'طراحان سایت هنگام طراحی قالب', body: "سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند."},
    {id: 3, img: "/images/blog-3.webp", title: 'طراحان سایت هنگام طراحی قالب', body: "سایت معمولا با این موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست. در نتیجه طرح کلی دید درستی به کار فرما نمیدهد. اگر طراح بخواهد دنبال متن های مرتبط بگردد تمرکزش از روی کار اصلی برداشته میشود و اینکار زمان بر خواهد بود. همچنین طراح به دنبال این است که پس از ارایه کار نظر دیگران را در مورد طراحی جویا شود و نمی‌خواهد افراد روی متن های موجود تمرکز کنند."},
]

const HomePage = () => {
  return (
    <>
        <Section id="hero">
            <div className="hero-content">
                <h1><span> آکادمی زبان </span> <br /> BAD TEACHER</h1>
                <p>این جا یاد میگیرید چطوری برنامه نویس خوبی بشید نه اینکه فقط برنامه بنویسید</p>
                <a href="#courses" className="">مشاهده دوره ها </a>
            </div>
        </Section>

        <Section id="courses">
            <Heading>
                <h2>چرا آکادمی Bad Teacher؟</h2>
                <p>آکادمی آموزشی Bad Teacher یک آکادمی خصوصی است</p>
            </Heading>

            <div className="features-container">

                <div className="feature-image">
                    <img src="/images/online-learning.svg" alt="online-learning" />
                </div>

                <div className="features-content">
                    <div className="box">
                        <i className="far fa-copyright"></i>
                        <div className="content">
                            <h3>دوره های اختصاصی</h3>
                            <p>آکادمی Bad Teacher دوره های خودش رو با پشتیبانی و کیفیت بالا ارائه میده!</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className="far fa-gem"></i>
                        <div className="content">
                            <h3>دوره پولی و رایگان</h3>
                            <p>فرقی نمکینه دوره پولی باشه یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره ارائه میدم</p>
                        </div>
                    </div>
                    <div className="box">
                        <i className="fas fa-crown"></i>
                        <div className="content">
                            <h3>اهمیت به زبان آموز</h3>
                            <p> اولویت اول و آخر این آکادمی آموزش و رفع مشکلات دانشجوهاست.</p>
                        </div>
                    </div>
                </div>

            </div>

            <Heading>
                <h2>دوره ها</h2>
                <p>سکوی پرتاپ شما به سمت موفقیت</p>
            </Heading>

            <div className="courses-container">
                <CurseBox />               
                <CurseBox />               
                <CurseBox />                             
            </div>
            <div className="courses-btn"><Link to="/courses" className="btn">همه دوره ها</Link></div>
        </Section>

        <Section id="blog">
            <Heading>
                <h2> مقالات تخصصی</h2>
            </Heading>

            <div className="box-container">

            {blogs.map(blog => (
                <BlogCard key={blog.id} blog={blog} />
            ))}

            </div>
        </Section>

        <Section id="newsletter">
            <h3>اشتراک در خبر نامه</h3>
            <p>برای اطلاع از آخرین دوره ها و آموزش های رایگان در خبرنامه آکادمی <span>Bad Teacher</span> عضو شوید.</p>

            <form>
                <input type="email" placeholder="ایمیل خود را وارد کنید" />
                <input type="submit" value="ارسال" />
            </form>
        </Section>

    </>
  )
}

export default HomePage