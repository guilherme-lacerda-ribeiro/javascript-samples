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

// 1️⃣ Filtrar os pedidos pendentes, depois extrair apenas os nomes dos clientes desses pedidos.

// 2️⃣ Verificar se há algum pedido no qual um produto tenha sido comprado mais de 5 vezes.

// 3️⃣ Ordenar os pedidos por valor total (do maior para o menor), depois retornar apenas os três pedidos mais caros.

// 4️⃣ Criar um relatório com o total de vendas de cada produto, mas apenas considerando os pedidos enviados.

// 5️⃣ Transformar o array de pedidos em um novo array contendo objetos apenas com o id e a data de cada pedido, removendo o restante das informações.

// 6️⃣ Verificar se todos os pedidos têm pelo menos um produto com preço acima de R$ 200.

// 7️⃣ Encontrar o primeiro pedido que contenha um produto chamado "Monitor".

// 8️⃣ Criar uma string com os nomes de todos os clientes que fizeram pedidos, separados por vírgula.

// 9️⃣ Remover os pedidos cancelados e calcular o valor total de todas as vendas feitas.

// 🔟 Contar quantos pedidos foram feitos por cada cliente, retornando um objeto no formato { "Carlos Silva": 2, "Ana Souza": 1, ... }.
