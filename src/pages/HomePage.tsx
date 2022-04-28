import { Link } from 'react-router-dom'
import CurseBox from '../components/CurseBox'
import Heading from '../components/Heading'
import Section from '../components/Section'
import "../styles/homePage.scss"
const HomePage = () => {
  return (
    <>
        <Section id="hero">
            <div className="hero">
                <div className="hero-image">
                    <img src="images/logo-hero.svg" alt="bad-teacher-hero" />
                </div>
                <div className="hero-content">
                    <h5>زبان انگلیسی با سینا</h5>
                    <p>این جا یاد میگیرید چطوری برنامه نویس خوبی بشید نه اینکه فقط برنامه بنویسید</p>
                    <a href="#courses" className="btn">مشاهده دوره ها  <i className="fas fa-arrow-down"></i></a>
                </div>
            </div>
        </Section>

        <Section id="courses">
            <Heading>
                <h2>چرا آکادمی Bad Teacher؟</h2>
                <p>آکادمی آموزشی Bad Teacher یک آکادمی خصوصی است</p>
            </Heading>

            <div className="features-container">

                <div className="feature-image">
                    <img src="images/online-learning.svg" alt="online-learning" />
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

        <Section id="more-about-me">
        <Heading>
            <h2>با من بیشتر آشنا بشید</h2>
        </Heading>

        <div className="about-me">
            <p>سلام، من سینا پدر احمدی هستم برنامه نویس ارشد در شرکت HousingAnywhere
                در کشور هلند. تکنولوژی های اصلی که در طی روز باهاشون کار میکنم
                React, Node.js, Docker, GCP, Go, Git, Typscript و یه چندتا دیگس اما
                قبلا چیزایی مثل Angular, MongoDB, MySQL, AWS, React-Native رو تجربه
                کردم و پروژه های خوبی باهاشون انجام دادم. تو ایران شرکت خودم رو
                داشتم و کار میکردم (البته هنوز هم فعاله و کار میکنه) پروژه های
                مختلفی انجام دادم چندتایی شون تو الان چندصد هزار کاربره شدن و هنوز
                دارن روی کدهایی که نوشتیم خیلی خوب عمل میکنن. چند سالی مالزی بودم و
                نرم افزارهای بانکی مینوشتیم.
                <br />
                <br />
                <br />
                <span>داستان این سایت اینه که:</span>
                <br />
                  برای دوستای
                خودم چندتا ویدیو آموزشی ضبط کردم که برنامه نویسی رو شروع کنن بعد
                گفتم بذارمشون توی تلگرام و یوتوب که بقیه هم استفاده کنن بیشتر از
                چیزی که فکر میکردم توجه جلب کرد منم دیدم که داره به یه سری آدم کمک
                میکنه گفتم یه سایت بزنم که هم شما راحت باشید هم من :) خلاصه برنامه
                ای پشتش نبود</p>        
            <div><img src="images/photo-owner.jpeg" alt="bad-teacher-owner" /></div>

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