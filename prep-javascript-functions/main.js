function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(2, 2);
console.log('addTwoNumbers exercise:', sum);

function convertHoursToMinutes(hours) {
  return 60 * hours;
}

var hours = convertHoursToMinutes(2);
console.log('convertHoursToMinutes exercise:', hours);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var greetingName = getGreeting('World');
console.log('getGreeting exercise:', greetingName);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var result = addAndMultiplyBy5(10, 5);
console.log('addAndMultiplyBy5 exercise:', result);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var answer = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5 exercise:', answer);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers exercise:', difference);

function getCircleCircumference(radius) {
  return (radius * 2) * Math.PI;
}

var circumference = getCircleCircumference(5);
console.log('getCircleCircumference exercise:', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('getFullName exercise:', fullName);

function cube(number) {
  return number * number * number;
}

var cubed = cube(5);
console.log('cube exercise:', cubed);
