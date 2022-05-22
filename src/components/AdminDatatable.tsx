import { DataGrid, GridColDef } from "@mui/x-data-grid";
import "../styles/adminDatatable.scss";
import { userRows, userColumns } from "../datatableUsers";
import { Link, useLocation } from "react-router-dom";

const actionColumn: GridColDef[] = [
  {
    field: "action",
    headerName: "اکشن",
    width: 200,
    renderCell: () => {
      return (
        <div className="cell-action">
          <Link to="/admin/users/test">
            <div className="view-button">مشاهده</div>
          </Link>
          <div className="delete-button">حذف</div>
        </div>
      );
    },
  },
];
const AdminDatatable = () => {
  const location = useLocation();
  let loc = location.pathname.split("/")[2];

  return (
    <div className="admin-datatable">
      <div className="top">
        <h3 className="title">{loc === "users" ? "کاربرها" : "محصول ها"}</h3>
        <Link className="link" to="new">اضافه کردن {loc === "users" ? "کاربر" : "محصول"} جدید</Link>
      </div>
      <DataGrid
      className="dataGrid"
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default AdminDatatable;
