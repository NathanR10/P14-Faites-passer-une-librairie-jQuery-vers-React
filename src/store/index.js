import states from './states'
// sinon go contex / provider
const store = {
  states,

  getStates () {
    return this.states
  },
  saveEmployee ({
    firstName,
    lastName,
    dateOfBirth,
    startDate,
    department,
    street,
    city,
    state,
    zipCode
  }) {
    console.log(firstName)
    console.log(lastName)
    console.log(dateOfBirth)
    console.log(startDate)
    console.log(department)
    console.log(street)
    console.log(city)
    console.log(state)
    console.log(zipCode)
  }
}

export default store
