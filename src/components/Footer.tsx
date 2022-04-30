import { Link } from "react-router-dom";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer-header">
          <img src="images/user.svg" alt="bad-teacher-logo" />
          <div className="networks">
            <a>
              <i className="fab fa-telegram-plane"></i>
            </a>
            <a>
              <i className="fab fa-instagram"></i>
            </a>
            <a>
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        <div className="footer-content">
          <div className="box about">
            <h3>درباره من</h3>
            <p>
              Bad Teacher یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح
              ایران است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات
              و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد.
            </p>
          </div>
          <div className="box contact">
            <h3>تماس</h3>
            <div className="info">
              <i className="fas fa-phone"></i>
              <p>
                +123-456-789 <br /> +111-222-3333
              </p>
            </div>
            <div className="info">
              <i className="fas fa-envelope"></i>
              <p>
                amirbagjani@gmial.com <br /> amirbagjani@gmial.com
              </p>
            </div>
          </div>
          <div className="box links">
                <h3>بخش های سایت</h3>
                <Link to="/">صفحه اصلی</Link>
                <Link to="/about-me">درباره من</Link>
                <Link to="/courses">دوره ها</Link>
            </div>
        </div>

        <p className="credit">
          کليه حقوق محصولات و محتوای اين سایت متعلق به Bad Teacher می باشد و هر
          گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
