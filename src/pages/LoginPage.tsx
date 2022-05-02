import InputBox from "../components/InputBox";
import { Link } from "react-router-dom";
import "../styles/loginPage.scss";

const LoginPage = () => {
  return (
    <main id="login-page">

        <header className="login-header">
          {/* <Link to="/"><img src="/images/logo-hero.svg" alt="bad-teacher-logo" /></Link> */}
        </header>

        <div className="login-wrapper">

            <form className="form">
              <h1>ورود به آکادمی Bad Teacher</h1>
              <InputBox as="input" label="ایمیل" type="email" required />
              <InputBox as="input" className="input-password" label="رمز ورود" type="password" required />
              <div className="links">
                <label>
                  <input type="checkbox" defaultChecked />
                  مرا بخاطر داشته باش
                </label>
                <a className="forget-password" href="#">فراموشی رمز؟</a>
              </div>
              <input type="submit" value="ورود به سایت" className="btn btn-submit" />

              <a className="create-account" href="#">اکانت جدید بسازید</a>

              <button className="google-btn">
                <img src="/images/google.svg" alt="google-image" />
                ورود با اکانت گوگل
              </button>
            </form>

        </div>

        <footer className="login-footer">
          <h3>
            کليه حقوق محصولات و محتوای اين سایت متعلق به Bad Teacher می باشد و هر
            گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.
          </h3>
        </footer>
    </main>
  );
};

export default LoginPage;
