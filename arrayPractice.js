let marks = [25, 42, 18, 55, 38, 60];
let  doubled= marks.map(mark=>mark*2);
console.log(doubled);
let pass= marks.filter(num=>num>=40);
console.log(pass);
let total= marks.reduce((total,num)=>total+num,0);
console.log(total);