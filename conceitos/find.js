// find → Retorna o primeiro elemento que satisfaz uma condição.
// O método find retorna o primeiro elemento do array que satisfaz uma condição. Diferente do filter, que retorna um array com vários elementos, find retorna apenas um único valor.
// Se nenhum elemento atender à condição, find retorna undefined.

// Exemplo:
// Encontrar o primeiro número par de um array:
const numeros = [1, 3, 7, 8, 10, 12];
const primeiroPar = numeros.find((num) => num % 2 === 0);
console.log(primeiroPar); // 8

// _______________________________________________
// Ex.1
// primeiro produto que custa mais de 100 reais.
const produtos = [
  { nome: "Caneta", preco: 5 },
  { nome: "Caderno", preco: 25 },
  { nome: "Mochila", preco: 120 },
  { nome: "Celular", preco: 1500 },
];
const primeiroProdutoMaiorQueCem = produtos.find((produto) => produto.preco > 100);
console.log("primeiro maior que 100", primeiroProdutoMaiorQueCem);
// primeiro maior que 100 { nome: 'Mochila', preco: 120 }

// _______________________________________________
// Ex.2
// primeiro produto que custa mais de 100 reais com desestruturação de objetos
const primeiroProdutoMaiorQueCemDesestruturacao = produtos.find(({ preco }) => preco > 100);
console.log("primeiro maior que 100 (desestruturacao)", primeiroProdutoMaiorQueCemDesestruturacao);
// primeiro maior que 100 (desestruturacao) { nome: 'Mochila', preco: 120 }