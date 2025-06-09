// 19 – Códigos de produtos formatados

let codigos = [
  "abc123",
  "def456",
  "ghi789",
  "jkl012",
  "mno345",
  "pqr678",
  "stu901",
  "vwx234"
];

let maiuscula = codigos.map(codigos => codigos.toUpperCase());

console.log(`Códigos em letras maiúsculas: ${maiuscula.join(', ')}`);