import { useState } from "react";
import DataTable from "react-data-table-component"
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";

const UserTable = () => {
  const [error, setError] = useState(null)
  const paginationOptions = { noRowsPerPage: true };

  const columns = [
    {
      name: "SL",
      selector: (row, index) => (index + 1),
      width: "60px"
    },
    {
      name: "Name",
      selector: row => row.name,
      width: "150px"
    },
    {
      name: "Email",
      selector: row => row.email,
      width: "150px"
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
      width: "150px"
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
      width: "150px"
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
      width: "150px"
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
      width: "150px"
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
      width: "150px"
    },
    {
      name: "Status",
      selector: row => row === false ? <button style={{ backgroundColor: "red", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Hold</button> : <button style={{ backgroundColor: "green", padding: "5px 20px", color: "white", borderRadius: "0px" }}>Active</button>
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <button className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></button>
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></button>
        <button className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
        <button className="btn btn-outline-dark rounded-0 btn-sm"><FaCheck /></button>
      </div>,
      width: "200px"
    }
  ];

  const data = [
    {
      id: 1,
      name: 'sabbir hosain',
      email: 'sabbir@gmail.com',
      phone: '1234567890',

    },
    {
      id: 1,
      name: 'sabbir hosain',
      email: 'sabbir@gmail.com',
      phone: '1234567890',

    },
    {
      id: 1,
      name: 'sabbir hosain',
      email: 'sabbir@gmail.com',
      phone: '1234567890',

    },
  ]

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <>
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationServer
          paginationComponentOptions={paginationOptions}
        />
      </>
    )
  }
}

export default UserTable