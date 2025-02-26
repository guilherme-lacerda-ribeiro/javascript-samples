// map → Transforma cada elemento do array e retorna um novo array.

// ✍️ Exercício 1
// Dado o array de preços abaixo, use o map para aplicar um desconto de 10% a cada preço e exiba o novo array.

const precos = [100, 200, 300, 400, 500];
const precosComDesconto = precos.map((p) => p * 0.9);
console.log("precos com desconto", precosComDesconto);
