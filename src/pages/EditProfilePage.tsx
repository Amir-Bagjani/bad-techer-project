import { Link } from "react-router-dom"
import Heading from "../components/Heading"
import InputBox from "../components/InputBox";
import Section from "../components/Section"
import "../styles/editProfilePage.scss";

const EditProfilePage = () => {
  return (
    <Section id="edit-profile-page">
    <Heading>
      <h2>جزئیات حساب کاربری</h2>
    </Heading>
    <div className="edit-profile-container">
      <nav className="edit-profile-container-sidebar">
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
      <div className="edit-profile-container-content">
          <form>
            <InputBox as="input"  label="شماره موبایل *" type="number" required />
            <InputBox as="input"  label="نام *" type="text" required />
            <InputBox as="input"  label="نام خانوادگی *" type="text" required />
            <InputBox as="input"  label="نام نمایشی *" type="text" required />
            <button type="submit" className="btn">ذخیره تغییرات</button>
          </form>
      </div>
    </div>
  </Section>
  )
}

export default EditProfilePage