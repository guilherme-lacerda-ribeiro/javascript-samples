// 4️⃣ Criando um Carrinho de Compras
// Dado um array de produtos com quantidade e preço, calcule o valor total do carrinho.

const cart = [
  { item: "Teclado", price: 200, quantity: 2 },
  { item: "Mouse", price: 100, quantity: 1 },
  { item: "Monitor", price: 1000, quantity: 1 }
];

const cartTotal = cart.reduce(
  (acc, {price, quantity}) =>  acc + (price * quantity)
, 0)
console.log('✅ efficient and clean - cart\'s total')
console.log('> ', cartTotal)
