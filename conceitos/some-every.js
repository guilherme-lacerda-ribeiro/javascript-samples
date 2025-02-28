// some → Verifica se pelo menos um elemento atende a uma condição.

const produtos = [
  { nome: "Caneta", preco: 5 },
  { nome: "Caderno", preco: 25 },
  { nome: "Mochila", preco: 120 },
  { nome: "Celular", preco: 1500 },
];

const temProdutoCaro = produtos.some(({ preco }) => preco > 1000);
console.log(temProdutoCaro); // true

const todosSaoBaratos = produtos.every(({ preco }) => preco < 2000);
console.log(todosSaoBaratos); // true

// Ex.1
// Verifique se há algum produto mais barato que R$ 10 usando some.

const menosQueDez = produtos.some(({ preco }) => preco < 10);
console.log("menos que 10 reais", menosQueDez);

// Verifique se todos os produtos custam pelo menos R$ 5 usando every.
const todosMaisQueCinco = produtos.every(({ preco }) => preco >= 5);
console.log("todos valem mais que cinco", todosMaisQueCinco);