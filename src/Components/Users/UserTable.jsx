import { useState } from "react";
import DataTable from "react-data-table-component"
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";

const UserTable = () => {
  const [error, setError] = useState(null)
  const paginationOptions = { noRowsPerPage: true };

  const columns = [
    {
      name: "Serial No.",
      selector: (row, index) => (index + 1),
    },
    {
      name: "Name",
      selector: row => row.name,
    },
    {
      name: "Email",
      selector: row => row.email,
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
    },
    {
      name: "Phone Number",
      selector: row => row.phone,
    },
    {
      name: "Action",
      cell: row => <div className="d-flex align-items-center gap-2">
        <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btn-outline-success rounded-0 btn-sm"><BiEditAlt /></button>
        <button className="btn btn-outline-danger rounded-0 btn-sm"><BiTrash /></button>
        {/* <button className="btn btn-outline-primary rounded-0 btn-sm"><BsEyeFill /></button> */}
      </div>

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