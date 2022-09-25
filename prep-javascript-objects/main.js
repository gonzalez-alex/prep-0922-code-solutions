const person = {
  firstName: 'Ryan',
  lastName: 'Clark',
  hobby: 'basketball'
};
console.log(person);

const fullName = "The person's name is " + person.firstName + ' ' + person.lastName;
console.log(fullName);
person.job = 'Accountant';
console.log("The person's current job is", person.job);
person.previousJob = 'Bartender';
console.log("The person's previous job is", person.previousJob);
console.log(person);
