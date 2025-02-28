// Em JavaScript, a função de comparação no sort deve retornar um número (-1, 0 ou 1).
// A comparação a.nome > b.nome retorna true ou false, e o sort não entende isso corretamente.

const produtos = [
  { nome: "Caneta", preco: 5 },
  { nome: "Mochila", preco: 120 },
  { nome: "Caderno", preco: 25 },
  { nome: "Celular", preco: 1500 },
];

// Exemplo com sort (Ordenação Crescente)
// Ordenar os produtos do mais barato para o mais caro:
const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);
console.log(produtosOrdenados);

// Exemplo com reverse (Inverter Ordem)
// Se já tivermos um array ordenado, podemos inverter a ordem:
const produtosInvertidos = [...produtosOrdenados].reverse();
console.log(produtosInvertidos);

// Ex. 1
// Ordene o array produtos do mais caro para o mais barato.
const produtosOrdemPrecoDecrescente = [...produtos].sort((a, b) => b.preco - a.preco);
console.log("produtos ordenados decrescente", produtosOrdemPrecoDecrescente);

// Ordene o array produtos alfabeticamente pelo nome.
const produtosOrdemAlfabetica = [...produtos].sort((a, b) => a.nome.localeCompare(b.nome));
console.log("ordem alfabetica", produtosOrdemAlfabetica);

// localeCompare compara duas strings seguindo as regras do idioma.
// a.nome.localeCompare(b.nome) retorna:
//  -1 se a.nome vem antes de b.nome
//  1 se a.nome vem depois de b.nome
//  0 se forem iguais.

const produtosOrdemAlfabeticaDecrescente = [...produtos].sort((a, b) => b.nome.localeCompare(a.nome));
console.log("ordem alfabetica decrescente", produtosOrdemAlfabeticaDecrescente);
