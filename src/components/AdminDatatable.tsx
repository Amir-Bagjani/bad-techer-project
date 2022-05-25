import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "../styles/adminDatatable.scss";
import { userRows, userColumns } from "../datatableUsers";
import { Link, useLocation } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";


const AdminDatatable = () => {
  const [data,setData] = useState(userRows);
  const loc = useLocation();
  let location = loc.pathname.split("/")[2];

  const deleteData = useCallback((id: number) => {
    setData(data.filter(item => item.id !== id))
  }, [data])

  const actionColumn: GridColDef[] = useMemo(() =>[
    {
      field: "action",
      headerName: "اکشن",
      width: 200,
      renderCell: (params: GridValueGetterParams) => {
        return (
          <div className="cell-action">
            <Link to="/admin/users/test">
              <div className="view-button">مشاهده</div>
            </Link>
            <div className="delete-button" onClick={() => deleteData(params.row.id)}>حذف</div>
          </div>
        );
      },
    },
  ], [data]);

  return (
    <div className="admin-datatable">
      <div className="top">
        <h3 className="title">{location === "users" ? "کاربرها" : "محصول ها"}</h3>
        <Link className="link" to="new">اضافه کردن {location === "users" ? "کاربر" : "محصول"} جدید</Link>
      </div>
      <DataGrid
      className="dataGrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default AdminDatatable;
