// 22 – Alunos com média acima de 7

let alunos = [
  { nome: "Carlos", media: 6.5 },
  { nome: "Fernanda", media: 7.2 },
  { nome: "Lucas", media: 8.1 },
  { nome: "Marina", media: 5.9 },
  { nome: "João", media: 7.0 },
  { nome: "Aline", media: 9.3 }
];

let alunosAcimaDaMedia = alunos.filter (alunos => alunos.media >= 7.0); 

console.log (`Relatório com os alunos acima da média:` , alunosAcimaDaMedia);