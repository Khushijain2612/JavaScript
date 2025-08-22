let students = [
  { name: "Khushi", marks: 78 },
  { name: "Riya", marks: 92 },
  { name: "Amit", marks: 35 },
  { name: "Rahul", marks: 55 }
];
let UpdatedStudents= students.map(student =>{
    return{
        name: student.name,
        marks: student.marks+10
    };
});
console.log(UpdatedStudents);
let PassedStudents= UpdatedStudents.filter(student=>student.marks>=40)
console.log(PassedStudents);
let NameStudents= PassedStudents.map(PS=>PS.name);
console.log(NameStudents);
let Sum= PassedStudents.reduce((Sum1,student)=>{
    return Sum1+student.marks;
},0);
console.log(Sum);