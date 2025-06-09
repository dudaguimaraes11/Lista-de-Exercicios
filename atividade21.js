//  21 – Filtrar itens acima do estoque mínimo

let estoque = [
  { produto: "Teclado", quantidade: 5 },
  { produto: "Mouse", quantidade: 12 },
  { produto: "Monitor", quantidade: 3 },
  { produto: "Notebook", quantidade: 18 },
  { produto: "Impressora", quantidade: 9 },
  { produto: "Webcam", quantidade: 20 }
];

let acimaDoMinimo = estoque.filter (item => item.quantidade > 10); 

console.log (`Lista dos itens com mais de 10 unidades disponíveis:` , acimaDoMinimo)