const pedidos = [
  {
    id: 1,
    cliente: "Carlos Silva",
    produtos: [
      { nome: "Notebook", quantidade: 1, preco: 3500 },
      { nome: "Mouse", quantidade: 2, preco: 100 },
    ],
    status: "pendente",
    data: "2024-02-01T14:30:00Z",
  },
  {
    id: 2,
    cliente: "Ana Souza",
    produtos: [{ nome: "Teclado Mecânico", quantidade: 1, preco: 500 }],
    status: "enviado",
    data: "2024-01-25T09:15:00Z",
  },
  {
    id: 3,
    cliente: "Mariana Oliveira",
    produtos: [
      { nome: "Monitor", quantidade: 2, preco: 1200 },
      { nome: "Cadeira Gamer", quantidade: 1, preco: 1500 },
    ],
    status: "pendente",
    data: "2024-02-10T18:45:00Z",
  },
  {
    id: 4,
    cliente: "João Pereira",
    produtos: [
      { nome: "Mouse", quantidade: 1, preco: 50 },
      { nome: "Mousepad", quantidade: 1, preco: 50 },
      { nome: "Headset", quantidade: 1, preco: 250 },
    ],
    status: "cancelado",
    data: "2024-01-28T12:00:00Z",
  },
];

// 1 - Listar pedidos pendentes
const pedidosPendentes = pedidos.filter(({ status }) => status === "pendente");
console.log("pedidosPendentes", pedidosPendentes);
console.log("--------------------------")

// 2 - Calcular o total de cada pedido
const totalDosPedidos = pedidos.map(pedido => (
  {
    ...pedido,
    total: pedido.produtos.reduce((acc, {quantidade, preco}) => acc + (quantidade * preco), 0)
  }
))
console.log('totalDosPedidos', totalDosPedidos)
console.log("--------------------------")

// 3 - Verificar se há algum pedido com valor acima de R$ 5000
console.log('há pedidos acima de 5000 ', totalDosPedidos.some(({total}) => total>5000 ))
console.log("--------------------------")

// 4 - Garantir que todos os pedidos pendentes tenham pelo menos um produto
console.log('pelo menos um produto', pedidosPendentes.every(({produtos}) => produtos.length > 0))
console.log("--------------------------")

// 5 - Ordenar pedidos por data (do mais recente para o mais antigo)
console.log('ordenado por data', [...pedidos].sort((a,b) => new Date(b.data) - new Date(a.data)))
console.log("--------------------------")

// 6 - Encontrar o primeiro pedido de um cliente específico (ex: "Mariana Oliveira")
console.log('primeiro pedido da Mariana Oliveira', pedidos.find(({cliente}) => cliente === 'Mariana Oliveira'))
console.log("--------------------------")

// 7 - Gerar um relatório de produtos vendidos - quantidade total vendida de cada produto
const produtos = pedidos
  .filter(({status}) => status !== 'cancelado')
  .reduce((acc, {produtos}) => {

  produtos.forEach(p => {
    acc[p.nome] ? acc[p.nome] += p.quantidade : acc[p.nome] = p.quantidade
  })
  return acc

}, {})
console.log('qtd total vendida de cada produto', produtos)
console.log("--------------------------")
