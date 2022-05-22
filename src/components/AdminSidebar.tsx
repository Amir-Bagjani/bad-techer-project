import React from "react";
import { BiUser, BiStore } from "react-icons/bi";
import {
  MdLogout,
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
  const {darkTheme, lightTheme} = useThemeContext();

  return (
    <div className="admin-sidebar">
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
            <Link to="/admin"><span>داشبورد</span></Link>
          </li>
          <li>
            <BiUser className="admin-icon" /> <Link to="/admin/users"><span>کاربرها</span></Link>
          </li>
          <li>
            <BiStore className="admin-icon" />
            <Link to="/admin/products"><span>محصولات</span></Link>
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
        <div className="color-option" onClick={lightTheme}></div>
        <div className="color-option" onClick={darkTheme}></div>
      </div>
    </div>
  );
};

export default AdminSidebar;
