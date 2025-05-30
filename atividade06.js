// 6 – Primeira mensagem indevida
let mensagens = [
  "Propaganda indevida",
  "Bom dia, posso ajudar?",
  "Preciso de suporte técnico",
  "Claro, qual o problema?",
  "Erro ao acessar conta"
];

let primeiraMensagemRemovida = mensagens.shift();

console.log("Mensagens após remover a mensagem enviada por engano:", mensagens);

console.log("Primeira mensagem removida:", primeiraMensagemRemovida);