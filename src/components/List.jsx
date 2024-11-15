import React, {useEffect, useState} from 'react';
import {fetchEmployee} from '../services/api';
import EmployeeTable from './EmployeeTable';

function List(){
    return(
        <div>
            <h2>Employee List</h2>
        </div>
    );
}

export default List;