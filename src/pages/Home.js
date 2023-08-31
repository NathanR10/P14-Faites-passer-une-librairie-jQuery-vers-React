import React, { lazy, useState } from 'react'
import { Link } from 'react-router-dom'
import store from '../store'
import LabeledInput from '../components/LabeledInput';
const Modal = lazy(() => import('lightest-modal'));


export default function Home () {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: store.getStates()[0].name,
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
    setShowModal(true)
    store.addEmployee(formData)
  }

  return (
    <div className='mainFrame'>
      <h1 className='mainTitle'>HRnet</h1>
      <div className='formMainFrame'>
        <Link to="/Employee" className='textLink hover-shine'>View Current Employees 📋</Link>
        <h2>Create Employee</h2>
        <form onSubmit={handleSubmit} className='formFrame'>
          <div className='horizontalFlex'>
            <div>
              <LabeledInput label={'First Name'} value={formData.firstName} onChange={handleChange} name={'firstName'} required />
              <LabeledInput label={'Last Name'} value={formData.lastName} onChange={handleChange} name={'lastName'} required />
              <LabeledInput label={'Date of Birth'} value={formData.dateOfBirth} onChange={handleChange} name={'dateOfBirth'} required />
              <LabeledInput label={'Start Date'} value={formData.startDate} onChange={handleChange} name={'startDate'} required />
              <LabeledInput label={'Department'} value={formData.department} data={store.getDepartments()} onChange={handleChange} name={'department'} type='select' required />
            </div>
            <div className='verticalSpacer'></div>
            <div className='addressFrame'>
              <legend className='addressTitle'>Address</legend>
              <LabeledInput label={'Street'} value={formData.street} onChange={handleChange} name={'street'} required />
              <LabeledInput label={'City'} value={formData.city} onChange={handleChange} name={'city'} required />
              <LabeledInput label={'State'} value={formData.state} data={store.getStates()} onChange={handleChange} name={'state'} type='select' required />
              <LabeledInput label={'Zip Code'} value={formData.zipCode} onChange={handleChange} name={'zipCode'} required />
            </div>
          </div>
          <button type="submit" className='validButton hover-shine'>Save</button>
        </form>
      </div>
      <Modal
        showModal={showModal}
        closeModal={() => {setShowModal(false)}}
        label={'Employee Created!'}
      />
    </div>
  )
}
