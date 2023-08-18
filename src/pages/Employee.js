import React from 'react'
import SortableTable from '../components/SortableTable';
import store from '../store';
import { Link } from 'react-router-dom';

export default function Employee () {
  
  return (
    <div className='mainFrame'>
      <h1 className='mainTitle'>Employee</h1>
      <Link to="/" className='textLink hover-shine'>Add new Employee 📜</Link>
      <SortableTable data={store.getEmployees()} />
    </div>
  )
}
