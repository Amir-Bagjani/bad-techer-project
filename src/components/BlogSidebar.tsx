import Heading from "./Heading";
import { Link } from "react-router-dom";

interface Data {
  id: number;
  image: string;
  title: string;
  body: string;
}

interface BlogSidebarProp {
  datas: Data[];
}

const BlogSidebar = ({ datas }: BlogSidebarProp) => {
  return (
    <>
      <div className="side-course-container">
        <Heading>
          <h2>محبوب ترین دوره ها</h2>
        </Heading>
        {datas
          .filter((i) => i.id <= 3)
          .map((data) => (
            <div className="box" key={data.id}>
              <img src={data.image} alt="bad-teacher-courses" />
              <h3>{data.title}</h3>
            </div>
          ))}
      </div>

      <div className="side-quick-links">
        <Heading>
          <h2>دسترسی سریع</h2>
        </Heading>
        <Link to="/">
          <i className="fas fa-home"></i> صفحه اصلی
        </Link>
        <Link to="/about-me">
          <i className="fas fa-crown"></i> درباره من
        </Link>
        <Link to="/courses/34">
          <i className="fab fa-youtube"></i> کانال یوتیوب
        </Link>
        <Link to="/courses">
          <i className="fas fa-graduation-cap"></i> دوره ها
        </Link>
      </div>

      <a className="network whatsapp">
        0912-111-4567
        <i className="fab fa-whatsapp"></i>
      </a>

      <a className="network instagram">اینستاگرام ما را دنبال کنید</a>

      <a className="network youtube">یوتیب ما را دنبال کنید</a>
    </>
  );
};

export default BlogSidebar;
