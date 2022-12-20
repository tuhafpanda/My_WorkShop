let salary = Number(prompt("Enter you salary :"));

if (salary <= 5500) {
  salary = salary * 1.5;
} else {
  salary = salary * 1.1;
}
console.log(`your new salary is ${salary} TL`);
