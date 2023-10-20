//program to find the grade of a student during his academic year
const prompt = require('prompt-sync')()
console.log("Enter the respective marks scored by the student as below. ");
let writtenTest =parseFloat(prompt("Written test: "));
let labExams=parseFloat(prompt("Lab exams: "));
let Assignments=parseFloat(prompt("Assignments: "));

let grade = ((writtenTest*70)/100 + (labExams*20)/100 + (Assignments*10)/100);
console.log("Grade of the student is: "+grade);