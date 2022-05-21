import "../styles/adminNew.scss";
import AdminNavbar from "../components/AdminNavbar";
import AdminSidebar from "../components/AdminSidebar";
import { MdDriveFolderUpload } from "react-icons/md";
import type { Inputs } from "../formSource";
import { useState } from "react";

interface AdminNewProps {
  inputs: Inputs[];
  title: string;
}

const AdminNew = ({ inputs, title }: AdminNewProps) => {
    const [img,setImg] = useState<File | null>(null);

    const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImg(null);
        const image= e.target.files?.[0];

        if(!image){
            alert("لطفا یک تصویر انتخاب کنید");
            return
        }
        if(!image.type.includes("image")){
            alert("فایل انتخابی باید عکس باشد")
            return
        }
        setImg(image)
    }    

  return (
    <div className="admin-new">
      <AdminSidebar />
      <div className="new-container">
        <AdminNavbar />
        <div className="top">
          <h2 className="title">{title}</h2>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={img ? URL.createObjectURL(img) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"}
              alt="user"
              className="image"
            />
          </div>
          <div className="right">
            <form>
              <div className="form-input">
                <label htmlFor="file">
                  تصویر
                  <MdDriveFolderUpload className="admin-icon" />
                </label>
                <input type="file" onChange={handleImgChange} id="file" style={{ display: `none` }} />
              </div>
              {inputs.map((input: Inputs) => (
                <div className="form-input" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}
              <button>ایجاد</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminNew;
