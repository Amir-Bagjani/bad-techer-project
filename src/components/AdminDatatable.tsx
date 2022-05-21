import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import "../styles/adminDatatable.scss";
import { userRows, userColumns } from "../datatableUsers";


const actionColumn: GridColDef[] = [
  {
    field: "action",
    headerName: "اکشن",
    width: 200,
    renderCell: () => {
      return (
        <div className="cell-action">
          <div className="view-button">مشاهده</div>
          <div className="delete-button">حذف</div>
        </div>
      );
    },
  },
];
const AdminDatatable = () => {
  return (
    <div className="admin-datatable">
      <DataGrid
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
