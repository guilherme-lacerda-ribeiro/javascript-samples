const produtos = [
  { nome: "Caneta", preco: 5 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caderno", preco: 25 },
  { nome: "Celular", preco: 1500 },
];

// Filtre somente os produtos que custam entre R$ 10 e R$ 1000.
// Ordene esses produtos do mais barato para o mais caro.
// Transforme esse array em um novo, onde cada objeto tem o seguinte formato:
// { descricao: "Produto: <nome>, Preço: R$ <preco_formatado>" }
// Exiba o resultado no console.

const produtosEntreDezEMil = produtos.filter(({ preco }) => preco >= 10 && preco <= 1000);
// console.log(produtosEntreDezEMil);

const produtosPrecoCrescente = produtosEntreDezEMil.sort((a, b) => a.preco - b.preco);
// console.log(produtosPrecoCrescente);

const produtosFormatoDescritivo = produtosPrecoCrescente.map(({ nome, preco }) => {
  return {
    descricao: `Produto: ${nome}, Preço: ${new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(preco)}`,
  };
});
console.log(produtosFormatoDescritivo);
