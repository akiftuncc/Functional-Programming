import _ from 'lodash';

const users = [
  { id: 1, name: 'Alice', age: 25, active: true },
  { id: 2, name: 'Bob', age: 30, active: false },
  { id: 3, name: 'Charlie', age: 35, active: true },
  { id: 4, name: 'Dave', age: 40, active: true },
  { id: 5, name: 'Eve', age: 45, active: false }
];
const averageAgeOfActiveUsers = _.chain(users)
  .filter('active')
  .map('age')
  .mean()
  .value();

console.log('Average age of active users:', averageAgeOfActiveUsers);

///
const addTax = (price) => price * 1.2;
const formatPrice = (price) => `$${price.toFixed(2)}`;
const discount = (price) => price * 0.9;
const calculateFinalPrice = _.flow([discount, addTax, formatPrice]);
console.log('Final price after discount and tax:', calculateFinalPrice(100));

///
const originalUser = { id: 1, name: 'Alice', settings: { theme: 'light', notifications: true } };
const updatedUser = _.merge({}, originalUser, { 
  settings: { theme: 'dark' } 
});

console.log('Original user:', originalUser);
console.log('Updated user:', updatedUser);

//
const departments = [
  { 
    name: 'Engineering',
    employees: [
      { name: 'Alice', salary: 100000 },
      { name: 'Bob', salary: 90000 }
    ]
  },
  { 
    name: 'Marketing',
    employees: [
      { name: 'Akif', salary: 80000 },
      { name: 'Mike', salary: 85000 }
    ]
  }
];
const salaryByDepartment = _.map(departments, dept => ({
  department: dept.name,
  totalSalary: _.sumBy(dept.employees, 'salary'),
  averageSalary: _.meanBy(dept.employees, 'salary')
}));
console.log('Salary by department:', salaryByDepartment);