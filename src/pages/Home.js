import React, { useState } from 'react'
import '../styles/home.css'
import { Link } from 'react-router-dom'
import store from '../store'

export default function Home () {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: store.states[0].name,
    street: '',
    city: '',
    state: 'Sales',
    zipCode: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    store.saveEmployee(formData)
  }

  return (
    <>
      <div>
        <h1>HRnet</h1>
      </div>
      <div>
        <Link to="/Employee">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first-name">First Name</label>
          <input
            required
            type="text"
            id="first-name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <label htmlFor="last-name">Last Name</label>
          <input
            required
            type="text"
            id="last-name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            required
            id="date-of-birth"
            type="text"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          <label htmlFor="start-date">Start Date</label>
          <input
            required
            id="start-date"
            type="text"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
          />
          <fieldset>
            <legend>Address</legend>
            <label htmlFor="street">Street</label>
            <input
              required
              id="street"
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
            <label htmlFor="city">City</label>
            <input
              required
              id="city"
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
            <label htmlFor="state">State</label>
            <select
              required
              name="state"
              id="state"
              value={formData.state}
              onChange={handleChange}
            >
              {store.states.map((state, index) => (
              <option key={index} value={state.name}>
                {state.name}
              </option>
              ))}
            </select>
            <label htmlFor="zip-code">Zip Code</label>
            <input
              required
              id="zip-code"
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </fieldset>
          <label htmlFor="department">Department</label>
          <select
            required
            name="department"
            id="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
          <button type="submit">Save</button>
        </form>
      </div>
      <div>Employee Created!</div>
    </>
  )
}
