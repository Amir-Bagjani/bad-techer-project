import AdminChart from "../components/AdminChart";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import AdminTable from "../components/AdminTable";
import "../styles/adminListDetail.scss";

const AdminListDetail = () => {
  return (
    <div className="admin-list-detail">
      <AdminSidebar />
      <div className="list-detail-container">
        <AdminNavbar />
        <div className="top">
          <div className="left">
            <button className="edit-btn">ویرایش</button>
            <h2 className="title">اطلاعات</h2>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="item-image"
              />
            <div className="item-detail">
                <h3 className="item-title">معصومه خدری</h3>
                <div className="content">
                    <span className="item-key">ایمیل : </span>
                    <span className="item-value">masum-khedri@gmail.com</span>
                </div>
                <div className="content">
                    <span className="item-key">موبایل : </span>
                    <span className="item-value">09301010848</span>
                </div>
                <div className="content">
                    <span className="item-key">آدرس : </span>
                    <span className="item-value">تهران - در قرمز رنگ</span>
                </div>
                <div className="content">
                    <span className="item-key">کشور : </span>
                    <span className="item-value"> ایران</span>
                </div>
            </div>
            </div>
          </div>
          <div className="right">
              <AdminChart aspect={4 / 1} title="خرید 6 ماه گذشته" />
          </div>
        </div>
        <div className="bottom">
            <p className="title">خریدهای کاربر</p>
            <AdminTable />
        </div>
      </div>
    </div>
  );
};

export default AdminListDetail;
