import React, { useEffect, useState } from 'react';
import { fetchEmployee } from '../services/api';
import EmployeeTable from './EmployeeTable';

function List() {
  const [employees, setEmployees] = useState([]);

  //this effect runs onces when the component is mounted
  useEffect(() => {
    //Fetch Employees from the API
    const getEmployee = async () => {
      try {
        const response = await fetchEmployee();
        //update the state with employee data
        setEmployees(response.data);
      } catch (error) {
        console.error('Error fetching employees', error);
      }
    };
    getEmployee();
  }, []);

  return (
    <div className='container d-flex flex-column align-items-center mt-4 bg-success text-light'>
      <h2 className='mb-4 mt-4 '>Employee List</h2>
      <EmployeeTable employees={employees}/>
    </div>
  );
}

export default List;
