import AdminChart from "../components/AdminChart";
import AdminFeatured from "../components/AdminFeatured";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminTable from "../components/AdminTable";
import AdminWidget from "../components/AdminWidget";
import { useThemeContext } from "../context/themeContext";
import "../styles/admin.scss";
import "../styles/adminDark.scss";

const Admin = () => {
  const {isDark} = useThemeContext();

  return (
    <div className={isDark ? "admin-home dark" : "admin-home"}>
      <AdminSidebar />
      <div className="home-container">
        <AdminNavbar />
        <div className="widgets">
          <AdminWidget type="user" />
          <AdminWidget type="order" />
          <AdminWidget type="earning" />
          <AdminWidget type="balance" />
        </div>
        <div className="charts">
          <AdminFeatured />
          <AdminChart aspect={2 / 1} title="درآمد 6 ماه گذشته" />
        </div>
        <div className="list-container">
          <p className="list-title">آخرین تراکنشها</p>
          <AdminTable />
        </div>
      </div>
    </div>
  );
};

export default Admin;