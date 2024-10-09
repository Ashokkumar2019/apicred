import React from 'react';
import { Link } from 'react-router-dom';

export default function Datatable({ edatabase }) {
  return (
    <div>
      {edatabase && edatabase.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {edatabase.map((edata) => (
              <tr key={edata.id}>
                <td>{edata.id}</td>
                <td>{edata.name}</td>
                <td>{edata.designation}</td>
                <td>{edata.salary}</td>
                <td>
                <Link to={`/edit/${edata.id}`}>Edit</Link> |{' '}
                  <Link to={`/delete/${edata.id}`}>Delete</Link>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan={5} align='center'><Link to="/addnew">Add new Item</Link></td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p>Data is fetching...</p>
      )}
    </div>
  );
}
