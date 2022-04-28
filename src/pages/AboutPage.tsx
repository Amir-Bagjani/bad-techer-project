import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Section from "../components/Section";
import "../styles/aboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <Section id="more-about-me">
        <Heading>
          <h2>با من بیشتر آشنا بشید</h2>
        </Heading>
        <div className="about-me">
          <p className="text">
            سلام، من سینا پدر احمدی هستم برنامه نویس ارشد در شرکت
            HousingAnywhere در کشور هلند. تکنولوژی های اصلی که در طی روز باهاشون
            کار میکنم React, Node.js, Docker, GCP, Go, Git, Typscript و یه چندتا
            دیگس اما قبلا چیزایی مثل Angular, MongoDB, MySQL, AWS, React-Native
            رو تجربه کردم و پروژه های خوبی باهاشون انجام دادم. تو ایران شرکت
            خودم رو داشتم و کار میکردم (البته هنوز هم فعاله و کار میکنه) پروژه
            های مختلفی انجام دادم چندتایی شون تو الان چندصد هزار کاربره شدن و
            هنوز دارن روی کدهایی که نوشتیم خیلی خوب عمل میکنن. چند سالی مالزی
            بودم و نرم افزارهای بانکی مینوشتیم.
            <br />
            <br />
            <span>داستان این سایت اینه که:</span>
            <br />
            برای دوستای خودم چندتا ویدیو آموزشی ضبط کردم که برنامه نویسی رو شروع
            کنن بعد گفتم بذارمشون توی تلگرام و یوتوب که بقیه هم استفاده کنن
            بیشتر از چیزی که فکر میکردم توجه جلب کرد منم دیدم که داره به یه سری
            آدم کمک میکنه گفتم یه سایت بزنم که هم شما راحت باشید هم من :) خلاصه
            برنامه ای پشتش نبود
          </p>

          <form>
                <Heading>
                    <h2>ارتباط با من</h2>
                </Heading>

                <InputBox as="input" label="نام" type="text" required />
                <InputBox as="input" label="ایمیل" type="email" required />
                <InputBox as="input" label="تلفن" type="number" required />
                <InputBox as="textarea" label="پیام" required />

                <input type="submit" value="ارسال پیام" className="btn" />
            </form>
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
