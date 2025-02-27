const pedidos = [
  {
    id: 1,
    cliente: "Carlos Silva",
    produtos: [
      { nome: "Notebook", quantidade: 12, preco: 3500 },
      { nome: "Mouse", quantidade: 2, preco: 100 }
    ],
    status: "pendente",
    data: "2024-02-01T14:30:00Z"
  },
  {
    id: 2,
    cliente: "Ana Souza",
    produtos: [
      { nome: "Teclado Mecânico", quantidade: 1, preco: 500 },
      { nome: "Teclado Mecânico", quantidade: 1, preco: 500 }
    ],
    status: "enviado",
    data: "2024-01-25T09:15:00Z"
  },
  {
    id: 3,
    cliente: "Mariana Oliveira",
    produtos: [
      { nome: "Monitor", quantidade: 2, preco: 1200 },
      { nome: "Cadeira Gamer", quantidade: 1, preco: 1500 }
    ],
    status: "pendente",
    data: "2024-02-10T18:45:00Z"
  },
  {
    id: 4,
    cliente: "João Pereira",
    produtos: [
      { nome: "Mousepad", quantidade: 1, preco: 50 },
      { nome: "Headset", quantidade: 1, preco: 250 }
    ],
    status: "cancelado",
    data: "2024-01-28T12:00:00Z"
  },
  {
    id: 5,
    cliente: "Luciana Almeida",
    produtos: [
      { nome: "Impressora", quantidade: 1, preco: 1200 },
      { nome: "Cartucho de Tinta", quantidade: 2, preco: 150 }
    ],
    status: "enviado",
    data: "2024-02-05T10:00:00Z"
  },
  {
    id: 6,
    cliente: "Roberto Lima",
    produtos: [
      { nome: "Cadeira Gamer", quantidade: 1, preco: 1500 }
    ],
    status: "cancelado",
    data: "2024-01-29T14:00:00Z"
  },
  {
    id: 7,
    cliente: "Fernanda Costa",
    produtos: [
      { nome: "SSD 1TB", quantidade: 1, preco: 600 },
      { nome: "Placa de Vídeo", quantidade: 1, preco: 2500 }
    ],
    status: "pendente",
    data: "2024-02-12T11:15:00Z"
  },
  {
    id: 8,
    cliente: "Thiago Nunes",
    produtos: [
      { nome: "Processador Ryzen 9", quantidade: 1, preco: 3200 }
    ],
    status: "enviado",
    data: "2024-02-07T09:30:00Z"
  },
  {
    id: 9,
    cliente: "Isabela Martins",
    produtos: [
      { nome: "Teclado Mecânico", quantidade: 2, preco: 500 },
      { nome: "Mouse Gamer", quantidade: 1, preco: 200 }
    ],
    status: "pendente",
    data: "2024-02-15T17:45:00Z"
  },
  {
    id: 10,
    cliente: "Eduardo Ferreira",
    produtos: [
      { nome: "Monitor", quantidade: 1, preco: 1200 },
      { nome: "Fone Bluetooth", quantidade: 1, preco: 300 }
    ],
    status: "enviado",
    data: "2024-02-09T08:20:00Z"
  },
  {
    id: 11,
    cliente: "Camila Rocha",
    produtos: [
      { nome: "Gabinete Gamer", quantidade: 1, preco: 800 }
    ],
    status: "pendente",
    data: "2024-02-14T16:00:00Z"
  },
  {
    id: 12,
    cliente: "Gustavo Alves",
    produtos: [
      { nome: "Teclado Mecânico", quantidade: 1, preco: 500 },
      { nome: "Mousepad", quantidade: 1, preco: 50 }
    ],
    status: "cancelado",
    data: "2024-02-10T12:30:00Z"
  },
  {
    id: 13,
    cliente: "Vanessa Mendes",
    produtos: [
      { nome: "Mouse Gamer", quantidade: 3, preco: 200 }
    ],
    status: "pendente",
    data: "2024-02-16T19:00:00Z"
  },
  {
    id: 14,
    cliente: "Daniel Teixeira",
    produtos: [
      { nome: "Processador Ryzen 7", quantidade: 1, preco: 2500 },
      { nome: "Placa Mãe", quantidade: 1, preco: 1500 }
    ],
    status: "pendente",
    data: "2024-02-11T14:00:00Z"
  },
  {
    id: 15,
    cliente: "Bruno Ribeiro",
    produtos: [
      { nome: "Webcam Full HD", quantidade: 1, preco: 400 },
      { nome: "Fone Bluetooth", quantidade: 2, preco: 300 }
    ],
    status: "enviado",
    data: "2024-02-13T13:45:00Z"
  }
];

const exibeResultado = (titulo, resposta) => {
  console.log(`_______${titulo}_______`)
  console.log(resposta)
}

// 1️⃣ Filtrar os pedidos pendentes, depois extrair apenas os nomes dos clientes desses pedidos.
exibeResultado('pedidos pendentes', pedidos
  .filter(({status}) => status === 'pendente')
  .map(({cliente}) => cliente)
  .sort()
)

// 2️⃣ Verificar se há algum pedido no qual um produto tenha sido comprado mais de 5 vezes.
exibeResultado('há produtos com mais de 5 qtdes no pedido?', pedidos
  .some(({produtos}) =>
    produtos.some(({quantidade}) => quantidade > 5)
  )
)

// 3️⃣ Ordenar os pedidos por valor total (do maior para o menor), depois retornar apenas os três pedidos mais caros.
exibeResultado('3 pedidos mais caros', pedidos
  .map(pedido =>(
    {
      ...pedido,
      valorTotal: pedido.produtos.reduce((acc, {quantidade, preco}) => {
        return acc + (quantidade * preco)
      }, 0)
    }
  ))
  .sort((a,b) => b.valorTotal - a.valorTotal)
  .slice(0,3)
)

// 4️⃣ Criar um relatório com o total de vendas de cada produto, mas apenas considerando os pedidos enviados.
const totalVendas = pedidos
  .filter(({status}) => status === 'enviado')
  .reduce((acc, pedido) => {
    pedido.produtos.forEach(({nome, quantidade}) => {
      if (!acc[nome]) acc[nome] = 0
      acc[nome] += quantidade
    })
    return acc
  }, {})

exibeResultado('pedidos enviados, qtd total de produtos', totalVendas)
exibeResultado('pedidos enviados, qtd total de produtos',
  Object.entries(totalVendas).map(
    ([nome, quantidade]) => `${nome}: ${quantidade} enviados`
  )
  // .join(', ')
)

// 5️⃣ Transformar o array de pedidos em um novo array contendo objetos apenas com o id e a data de cada pedido, removendo o restante das informações.
exibeResultado('pedidos e datas',
  pedidos.map(  ({id, data}) => ({id, data})  )
)

// 6️⃣ Verificar se todos os pedidos têm pelo menos um produto com preço acima de R$ 200.
exibeResultado('todos pedidos com produtos caros',
  pedidos.every(pedido => 
    pedido.produtos.some(({preco}) => preco > 200)
  )
)

const pedidoTemProdutoCaro = pedido => pedido.produtos.some(({preco}) => preco > 200)
const todosPedidosTemProdutoCaro = pedidos.every(pedidoTemProdutoCaro)
exibeResultado('todos pedidos com produtos caros - refatorado', todosPedidosTemProdutoCaro)

// 7️⃣ Encontrar o primeiro pedido que contenha um produto chamado "Monitor".

// 8️⃣ Criar uma string com os nomes de todos os clientes que fizeram pedidos, separados por vírgula.

// 9️⃣ Remover os pedidos cancelados e calcular o valor total de todas as vendas feitas.

// 🔟 Contar quantos pedidos foram feitos por cada cliente, retornando um objeto no formato { "Carlos Silva": 2, "Ana Souza": 1, ... }.
