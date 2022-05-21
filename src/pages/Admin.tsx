import AdminChart from "../components/AdminChart";
import AdminFeatured from "../components/AdminFeatured";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminTable from "../components/AdminTable";
import AdminWidget from "../components/AdminWidget";
import "../styles/admin.scss";

const Admin = () => {
  return (
    <div className="admin-home">
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
          <AdminChart />
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