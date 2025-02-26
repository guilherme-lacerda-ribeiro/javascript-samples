const produtos = [
  { nome: "Caneta", preco: 5 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caderno", preco: 25 },
  { nome: "Celular", preco: 1500 },
];

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
console.log("--------------------------------");

const grupoDeValoresFormatado = Object.entries(grupoDeValores).map((e) => ({
  categoria: e[0],
  produtos: e[1].map((p) => p.nome),
}));
console.log(grupoDeValoresFormatado);
console.log("--------------------------------");

// Transforme grupoDeValoresFormatado em um objeto novamente, mas com a estrutura:
// {
//   baratos: ["Caneta", "Caderno"],
//   medios: ["Mochila"],
//   caros: ["Celular"]
// }
const grupoDeValoresNovaEstrutura = grupoDeValoresFormatado.reduce(
  (acc, { categoria, produtos }) => {
    switch (categoria) {
      case "baratos":
        acc.baratos = produtos;
        break;
      case "medios":
        acc.medios = produtos;
        break;
      case "caros":
        acc.caros = produtos;
        break;
      default:
        break;
    }
    return acc;
  },
  { baratos: [], medios: [], caros: [] }
);
console.log("grupoDeValoresNovaEstrutura", grupoDeValoresNovaEstrutura);

const gruposValoresNovaEstrutura = grupoDeValoresFormatado.reduce((acc, { categoria, produtos }) => {
  acc[categoria] = produtos;
  return acc;
}, {});
console.log("gruposValoresNovaEstrutura", gruposValoresNovaEstrutura);
