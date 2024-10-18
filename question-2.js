const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let result = students.map((pass) => pass.score > 50 ? pass.score+(pass.score/10) :null).reduce((acc,cur) => acc+cur,0)
result = "Total score is " + result

console.log(result)