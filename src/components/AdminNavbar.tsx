import React from "react";
import {
  MdNotificationsNone,
  MdOutlineChat,
  MdOutlineDarkMode,
  MdList,
  MdOutlineLanguage,
  MdOutlineSearch,
} from "react-icons/md";
import "../styles/adminNavbar.scss";

const AdminNavbar = () => {
  return (
    <div className="admin-navbar">
      <div className="admin-wrapper">
        <div className="items">
          <div className="item">
            <img src="/images/photo-owner.jpeg" alt="user-avatar" className="avatar" />
          </div>
          <div className="item">
            <MdOutlineDarkMode className="admin-icon" />
          </div>
          <div className="item">
            <MdNotificationsNone className="admin-icon" />
            <span className="counter">1</span>
          </div>
          <div className="item">
            <MdOutlineChat className="admin-icon"/>
            <span className="counter">2</span>
          </div>
          <div className="item">
            <MdList className="admin-icon"/>
          </div>
          <div className="item">
            <MdOutlineLanguage className="admin-icon"/>
            English
          </div>
        </div>

        <div className="search">
          <MdOutlineSearch className="admin-icon" />
          <input type="search" placeholder="کلید واژه را وارد کنید" />
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
