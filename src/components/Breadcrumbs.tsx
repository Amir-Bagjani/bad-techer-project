import { Link, useParams } from "react-router-dom";

const Breadcrumbs = () => {
  const params = useParams();
  const { blogSlug } = params;

  return (
    <ul className="breadcrumbs">
      <li>
        <Link to="/">صفحه اصلی</Link>
      </li>
      <li>
        <Link to="/blogs">بلاگ</Link>
      </li>
      {blogSlug && (
        <li>
          <Link to={blogSlug}>{blogSlug}</Link>
        </li>
      )}
    </ul>
  );
};

export default Breadcrumbs;
