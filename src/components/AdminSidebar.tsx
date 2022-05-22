import React, { useState } from "react";
import { BiUser, BiStore } from "react-icons/bi";
import {
  MdClose,
  MdLogout,
  MdMenu,
  MdNotificationsNone,
  MdOutlinePsychology,
  MdSettingsSystemDaydream,
} from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { BsCreditCard } from "react-icons/bs";
import "../styles/adminSidebar.scss";
import { AiOutlineAppstore, AiOutlineSetting } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useThemeContext } from "../context/themeContext";

const AdminSidebar = () => {
  const { darkTheme, lightTheme } = useThemeContext();
  const [menu, setMenu] = useState(false);

  return (
    <div className={menu ? "admin-sidebar active" : "admin-sidebar"}>
      <div className="ham-menu" onClick={() => setMenu(prev => !prev)}>
        {menu ? (
          <MdClose className="admin-icon" />
        ) : (
          <MdMenu className="admin-icon" />
        )}
      </div>
      <div className="top">
        <Link to="/admin">
          <h1 className="logo">BAD TECHER</h1>
        </Link>
      </div>
      <div className="center">
        <ul>
          <p className="title">بخش اصلی</p>
          <li>
            <AiOutlineAppstore className="admin-icon" />
            <Link to="/admin">
              <span>داشبورد</span>
            </Link>
          </li>
          <li>
            <BiUser className="admin-icon" />{" "}
            <Link to="/admin/users">
              <span>کاربرها</span>
            </Link>
          </li>
          <li>
            <BiStore className="admin-icon" />
            <Link to="/admin/products">
              <span>محصولات</span>
            </Link>
          </li>
          <li>
            <MdNotificationsNone className="admin-icon" />
            <span>پیام ها</span>
          </li>
          <li>
            <BsCreditCard className="admin-icon" />
            <span>سفارشات</span>
          </li>
          <p className="title">سیستم</p>
          <li>
            <MdOutlinePsychology className="admin-icon" />
            <span>لاگ</span>
          </li>
          <li>
            <MdSettingsSystemDaydream className="admin-icon" />
            <span>پایداری سیستم</span>
          </li>
          <li>
            <AiOutlineSetting className="admin-icon" />
            <span>تنظیمات</span>
          </li>
          <p className="title">کاربر</p>
          <li>
            <FaRegUserCircle className="admin-icon" />
            <span>پروفایل</span>
          </li>
          <li>
            <MdLogout className="admin-icon" />
            <span>خروج</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <span className="color-option" onClick={lightTheme}></span>
        <span className="color-option" onClick={darkTheme}></span>
      </div>
    </div>
  );
};

export default AdminSidebar;
