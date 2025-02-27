// reduce → Reduz o array a um único valor (como soma, multiplicação, etc.).
// reduce é usado quando queremos reduzir um array a um único valor, como uma soma total, média, produto, etc.
// Quando queremos acumular ou combinar os elementos do array de forma customizada, geralmente resultando em um único valor ou um array modificado.

// Somar todos os números de um array:
const numeros = [10, 20, 30, 40];
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(soma); // 100
// 🔹 O primeiro argumento da callback (acumulador) acumula os valores ao longo das iterações.
// 🔹 O segundo argumento (0) é o valor inicial do acumulador.

// Ex.1
// use reduce para calcular o preço total de todos os produtos.
const produtos = [
  { nome: "Caneta", preco: 5 },
  { nome: "Caderno", preco: 25 },
  { nome: "Mochila", preco: 120 },
  { nome: "Celular", preco: 1500 },
];

// const valorTotalDosProdutos = produtos.reduce((total, { preco }) => (total += preco), 0);
// += já é implícito, não precisa...
// (total += preco), mas isso pode ser simplificado para total + preco, já que o retorno da função já é atribuído ao acumulador (total).
const valorTotalDosProdutos = produtos.reduce((total, { preco }) => (total + preco), 0);
console.log("valor total", valorTotalDosProdutos);
// valor total 1650

