import AdminDatatable from "../components/AdminDatatable"
import AdminNavbar from "../components/AdminNavbar"
import AdminSidebar from "../components/AdminSidebar"

import "../styles/adminList.scss"
import "../styles/adminDark.scss";
import { useThemeContext } from "../context/themeContext";

const AdminList = () => {
  const {isDark} = useThemeContext();

  return (
    <div className={isDark ? "admin-list dark" : "admin-list"}>
        <AdminSidebar />
        <div className="list-container">
            <AdminNavbar />
            <AdminDatatable />
        </div>
    </div>
  )
}

export default AdminList