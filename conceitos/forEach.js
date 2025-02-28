// forEach → Executa uma função para cada elemento (sem retornar um novo array).
// forEach é usado para iterar sobre os elementos de um array, mas não retorna um novo array. Ele é útil quando você só quer executar uma ação para cada item da lista.

// Exibir os nomes dos produtos no console:
const produtos = [
  { nome: "Caneta", preco: 5 },
  { nome: "Caderno", preco: 25 },
  { nome: "Mochila", preco: 120 },
  { nome: "Celular", preco: 1500 },
];
produtos.forEach(({ nome }) => console.log(nome));

// Ex.1
// Use o forEach para exibir no console a seguinte frase para cada produto: 🛒 "O produto <NOME> custa R$ <PREÇO>"
produtos.forEach(p => console.log(`O produto ${p.nome} custa R$ ${p.preco}`))

// Ex.2
// Formatação elegante
produtos.forEach(({nome, preco}) => {
  const precoFormatado = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: 'BRL' // USD, EUR
  }).format(preco)

  console.log(`O produto ${nome} custa ${precoFormatado}`)
})