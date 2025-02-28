const produtos = [
  { nome: "Caneta", preco: 5 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caderno", preco: 25 },
  { nome: "Celular", preco: 1500 },
];

// Filtre apenas os produtos que custam mais de R$ 50.
// Ordene os produtos filtrados do mais barato para o mais caro.
const produtosMaisQueCinquenta = produtos.filter(({ preco }) => preco > 50);
console.log("produtos mais que 50", produtosMaisQueCinquenta);

const produtosMaisQueCinquentaPrecoCrescente = [...produtosMaisQueCinquenta].sort((a, b) => a.preco - b.preco);
console.log("produtos mais que 50 ordem crescente", produtosMaisQueCinquentaPrecoCrescente);

const produtosMaisQueCinquentaPrecoDecrescente = produtosMaisQueCinquentaPrecoCrescente.reverse();
console.log("produtos mais que 50 preco ordem decrescente", produtosMaisQueCinquentaPrecoDecrescente);
