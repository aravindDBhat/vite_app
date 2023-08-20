// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
// import { Root } from "./sample";
// import { Daum } from "./sample";
// import Getdata from "./getdata";
// const columns: GridColDef[] = [
//   {
//     field: "name",
//     headerName: "Name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "phone_no",
//     headerName: "Phone Number",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     type: "number",
//     width: 110,
//     editable: true,
//   },
// ];

// const rows: Root = Getdata.getdata();

// function DataGridDemo() {
//   return (
//     <Box sx={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// }
// export default DataGridDemo;
