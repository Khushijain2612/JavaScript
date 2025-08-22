let students = [
  { name: "Khushi", marks: 78 },
  { name: "Riya", marks: 92 },
  { name: "Amit", marks: 35 },
  { name: "Rahul", marks: 55 }
];
let updatedStudents = students.map(student => {
    let { name, marks } = student; // destructuring
    return { name, marks: marks + 5 }; // return new object
});
console.log(updatedStudents);
let PassedStudents= updatedStudents.filter(student=>student.marks>=40)
console.log(PassedStudents);
let NameStudents= PassedStudents.map(PS=>PS.name);
console.log(NameStudents);
let total= PassedStudents.reduce((Sum,student)=>{
    return Sum+student.marks
},0);
console.log(total);