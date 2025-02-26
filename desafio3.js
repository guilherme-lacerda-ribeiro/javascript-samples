const produtos = [
  { nome: "Caneta", preco: 5 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caderno", preco: 25 },
  { nome: "Celular", preco: 1500 },
];

// Agrupe os produtos por faixa de preço:
// Até R$ 50 → "baratos"
// Entre R$ 50 e R$ 500 → "médios"
// Acima de R$ 500 → "caros"

// O resultado deve ser um objeto com as categorias como chaves e os produtos correspondentes como valores.
const grupoDeProdutos = produtos.reduce(
  (acc, { nome, preco }) => {
    if (preco <= 50) acc.baratos.push({nome, preco});
    else if (preco <= 500) acc.medios.push({nome, preco});
    else acc.caros.push({nome, preco});
    return acc;
  },
  { baratos: [], medios: [], caros: [] }
);
console.log("produtos agrupados", grupoDeProdutos);

