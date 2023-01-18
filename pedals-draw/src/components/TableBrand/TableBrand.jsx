import React  from "react";
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Aguilar', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Alexander', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Arter', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'BBE', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Biyand', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Black Country Custom/Laney', firstName: null, age: 150 },
    { id: 7, lastName: 'Balckout Effectors', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Boss', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Carl Martin', firstName: 'Harvey', age: 65 },
  ];

  function handleClickTable(i) {
    console.log("date :" + new Date());
  }

  export default function TableBrand() {
    const [message, setMessage] = React.useState('');
    
    const handleRowClick = (params) => {
        setMessage(`Movie "${params.row.lastName}" clicked`);
    };

    return (
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          onRowClick={handleRowClick}
          checkboxSelection
          disableSelectionOnClick
        />
        <br/><br/><br/>
         <div>
            {message}
        </div>
      </div>
     

    );
  }