import employees from './employees';
import states from './states';

const store = {
  states,
  departments: [
    { name: 'Sales' },
    { name: 'Marketing' },
    { name: 'Engineering' },
    { name: 'Human Resources' },
    { name: 'Legal' }
  ],
  employees,

  initStore() {
    // Charger les données depuis le localStorage lors de l'initialisation
    const storedData = localStorage.getItem('appData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      this.states = parsedData.states;
      this.departments = parsedData.departments;
      this.employees = parsedData.employees;
    }
  },

  saveStoreToLocalStorage() {
    // Sauvegarder les données dans le localStorage
    const dataToStore = {
      states: this.states,
      departments: this.departments,
      employees: this.employees
    };
    localStorage.setItem('appData', JSON.stringify(dataToStore));
  },

  getStates() {
    return this.states;
  },
  getDepartments() {
    return this.departments;
  },
  getEmployees() {
    return this.employees;
  },
  addEmployee(payload) {
    this.employees.push(payload);
    this.saveStoreToLocalStorage(); // Mettre à jour le localStorage après ajout
  },
  saveEmployee({
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
    console.log(firstName);
    console.log(lastName);
    console.log(dateOfBirth);
    console.log(startDate);
    console.log(department);
    console.log(street);
    console.log(city);
    console.log(state);
    console.log(zipCode);
  }
};

store.initStore(); // Charger les données depuis le localStorage à l'initialisation

export default store;
