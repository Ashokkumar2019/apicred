import React, { useState, useEffect } from 'react';
import Datatable from './Datatable';

export default function Fetchdata() {
  const [empdata, setEmpdata] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/employees')
      .then((response) => response.json())
      .then((data) =>setEmpdata(data))
      .catch((error) => console.error('Data is not fetching', error));
  }, []);

  return (
    <div>
      {empdata ? <Datatable edatabase={empdata} /> : <p>Loading...</p>}
    </div>
  );
}
