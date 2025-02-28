const produtos = [
  { nome: "Caneta", preco: 5 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caderno", preco: 25 },
  { nome: "Celular", preco: 1500 },
];

// Transforme o objeto grupoDeValores em um array no seguinte formato:
// [
//   { categoria: "baratos", produtos: ["Caneta", "Caderno"] },
//   { categoria: "médios", produtos: ["Mochila"] },
//   { categoria: "caros", produtos: ["Celular"] }
// ]

const grupoDeValores = produtos.reduce(
  (acc, { nome, preco }) => {
    if (preco <= 50) acc.baratos.push({ nome, preco });
    else if (preco <= 500) acc.medios.push({ nome, preco });
    else acc.caros.push({ nome, preco });
    return acc;
  },
  { baratos: [], medios: [], caros: [] }
);
console.log("grupoDeValores", grupoDeValores);
// console.log("type grupoDeValores", typeof(grupoDeValores));
// console.log("type Object.entries(grupoDeValores)", typeof(Object.entries(grupoDeValores)));
// console.log("type Object.entries(grupoDeValores)", Object.entries(grupoDeValores));

const grupoDeValoresFormatado = Object.entries(grupoDeValores).map(e => (
  {
    categoria: e[0],
    produtos: e[1].map((p) => p.nome)
  }
  // console.log(e[1])
))
console.log(grupoDeValoresFormatado)