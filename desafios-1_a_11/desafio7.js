const pedidos = [
  { id: 1, cliente: "Ana", valor: 150, entregue: true },
  { id: 2, cliente: "Bruno", valor: 300, entregue: false },
  { id: 3, cliente: "Carla", valor: 50, entregue: true },
  { id: 4, cliente: "Daniel", valor: 400, entregue: true },
  { id: 5, cliente: "Eduarda", valor: 250, entregue: false },
  { id: 6, cliente: "Fernando", valor: 600, entregue: true },
];

// Filtrar apenas os pedidos entregues.
// Criar um novo array que mapeia os pedidos entregues para um formato mais amigável:
//   { descricao: "Pedido #1 - Cliente Ana - Valor: R$ 150" }
// Calcular o faturamento total desses pedidos.
// Retornar um objeto com o seguinte formato:
//   {
//     pedidosFormatados: [ ... ], // array de pedidos formatados
//     faturamentoTotal: 1200 // soma dos pedidos entregues
//   }

const pedidosEstruturados = (pedidos) => {
  return pedidos
    .filter(({ entregue }) => entregue)
    .map(({ id, cliente, valor }) => {
      
      const valorFormatado = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(valor);
      
      return {
        descricao: `Pedido #${id} - Cliente ${cliente} - Valor: ${valorFormatado}`,
        valor
      };
    })
    .reduce((acc, {descricao, valor}) => {
      acc.pedidosFormatados.push(descricao)
      acc.faturamentoTotal += valor
      return acc
    }, {pedidosFormatados: [], faturamentoTotal: 0})
};

console.log(pedidosEstruturados(pedidos));


// const pedidosEstruturadosEnxugado = (pedidos) => 
//   pedidos
//     .filter(({ entregue }) => entregue)
//     .map(({ id, cliente, valor }) => 
//       `Pedido #${id} - Cliente ${cliente} - Valor: ${new Intl.NumberFormat("pt-BR", {
//         style: "currency",
//         currency: "BRL",
//       }).format(valor)}`
//     )
//     .reduce((acc, uneeded, i, array) => ({
//       pedidosFormatados: array,
//       faturamentoTotal: acc.faturamentoTotal + pedidos[i].valor // errado porque esta pegando pedidos original e nao filtrado entao dara valor diferente
//     }), { pedidosFormatados: [], faturamentoTotal: 0 });

// console.log(pedidosEstruturadosEnxugado(pedidos));
