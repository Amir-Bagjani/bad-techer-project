import AdminDatatable from "../components/AdminDatatable"
import AdminNavbar from "../components/AdminNavbar"
import AdminSidebar from "../components/AdminSidebar"

import "../styles/adminList.scss"

const AdminList = () => {
  return (
    <div className="admin-list">
        <AdminSidebar />
        <div className="list-container">
            <AdminNavbar />
            <AdminDatatable />
        </div>
    </div>
  )
}

export default AdminList