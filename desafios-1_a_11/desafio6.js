// Em uma única função usando reduce
// Crie uma função formatarProdutos(produtos) que:
//   Filtra produtos entre R$ 10 e R$ 1000
//   Ordena do mais barato para o mais caro
//   Agrupa por faixa de preço (baratos, médios, caros)
//       Até R$ 50 → "baratos"
//       Entre R$ 50 e R$ 500 → "médios"
//       Acima de R$ 500 → "caros"
//   Retorna o objeto no formato final:
//     {
//       baratos: ["Produto A", "Produto B"],
//       medios: ["Produto C"],
//       caros: ["Produto D"]
//     }

const produtos = [
  { nome: "Caneta", preco: 5 },
  { nome: "Caderno", preco: 25 },
  { nome: "Mochila", preco: 120 },
  { nome: "Celular", preco: 1500 },
  { nome: "Fone de Ouvido", preco: 45 },
  { nome: "Teclado", preco: 350 },
];

const formatarProdutos = (produtos) => {
  const filtrado = produtos.filter((p) => p.preco >= 10 && p.preco <= 1000);
  const ordenado = filtrado.sort((a, b) => a.preco - b.preco);
  const agrupado = ordenado.reduce(
    (acc, { nome, preco }) => {
      if (preco <= 50) acc.baratos.push(nome);
      else if (preco <= 500) acc.medios.push(nome);
      else acc.caros.push(nome);
      return acc;
    },
    { baratos: [], medios: [], caros: [] }
  );
  return agrupado;
};

console.log("formatarProdutos", formatarProdutos(produtos));
// formatarProdutos { baratos: [ 'Caderno' ], medios: [ 'Mochila' ], caros: [] }

// Melhorado
// ✔ Mais conciso – Ocupa menos linhas, código mais direto.
// ✔ Menos variáveis desnecessárias – Não cria variáveis intermediárias que não serão reutilizadas.
// ✔ Melhor para código funcional – JavaScript moderno usa muito map(), filter(), reduce() encadeados.
const formatarProdutosMelhorado = (produtos) => {
  return produtos
    .filter((p) => p.preco >= 10 && p.preco <= 1000)
    .sort((a, b) => a.preco - b.preco)
    .reduce(
      (acc, { nome, preco }) => {
        if (preco <= 50) acc.baratos.push(nome);
        else if (preco <= 500) acc.medios.push(nome);
        else acc.caros.push(nome);
        return acc;
      },
      { baratos: [], medios: [], caros: [] }
    );
};
console.log("✔ formatarProdutos", formatarProdutosMelhorado(produtos));
