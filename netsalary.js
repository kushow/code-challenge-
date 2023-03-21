// Get inputs from user
const basicSalary = parseFloat(prompt("Enter your basic salary:"));
const benefits = parseFloat(prompt("Enter your benefits:"));

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate PAYE (tax)
let paye = 0;
if (grossSalary <= 24000) {
  paye = 0;
} else if (grossSalary <= 40160) {
  paye = (grossSalary - 24000) * 0.1;
} else if (grossSalary <= 57760) {
  paye = 1616 + (grossSalary - 40160) * 0.15;
} else if (grossSalary <= 84400) {
  paye = 4196 + (grossSalary - 57760) * 0.2;
} else if (grossSalary <= 114400) {
  paye = 8492 + (grossSalary - 84400) * 0.25;
} else if (grossSalary <= 146400) {
  paye = 13798 + (grossSalary - 114400) * 0.3;
} else if (grossSalary <= 181920) {
  paye = 22498 + (grossSalary - 146400) * 0.35;
} else {
  paye = 31808 + (grossSalary - 181920) * 0.4;
}

// Calculate NHIF deduction
let nhif = 0;
if (grossSalary <= 5999) {
  nhif = 150;
} else if (grossSalary <= 7999) {
  nhif = 300;
} else if (grossSalary <= 11999) {
  nhif = 400;
} else if (grossSalary <= 14999) {
  nhif = 500;
} else if (grossSalary <= 19999) {
  nhif = 600;
} else if (grossSalary <= 24999) {
  nhif = 750;
} else if (grossSalary <= 29999) {
  nhif = 850;
} else if (grossSalary <= 34999) {
  nhif = 900;
} else if (grossSalary <= 39999) {
  nhif = 950;
} else if (grossSalary <= 44999) {
  nhif = 1000;
} else if (grossSalary <= 49999) {
  nhif = 1100;
} else if (grossSalary <= 59999) {
  nhif = 1200;
} else if (grossSalary <= 69999) {
  nhif = 1300;
} else if (grossSalary <= 79999) {
  nhif = 1400;
} else if (grossSalary <= 89999) {
  nhif = 1500;
} else if (grossSalary <= 99999) {
  nhif = 1600;
} else {
  nhif = 1700;
}

// Calculate total deductions
const totalDeductions = paye + nhif;

// Calculate net salary
const netSalary = grossSalary - totalDeductions;

// Print results to console
console.log(`Gross Salary: ${grossSalary}`);
console.log(`PAYE (Tax): ${paye}`);
console.log(`NHIF Deduction: ${nhif}`);
console.log(`Total Deductions: ${totalDeductions}`);
console.log(`Net Salary: ${netSalary}`);