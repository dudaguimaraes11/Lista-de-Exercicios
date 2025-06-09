// 16 – Substituição de matérias na grade

let gradeCurricular = [
  "Matemática",
  "Português",
  "Biologia",
  "Física",
  "História",
  "Educação Física",
  "Inglês"
];


gradeCurricular.splice (2,2, "Programação", "Robótica"); 
console.log (`Grade curricular atualizada`, gradeCurricular)