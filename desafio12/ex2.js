// 2️⃣ Encontrando o Segundo Maior Número
// Dado um array de números, encontre o segundo maior número, sem usar sort().
const numbers = [10, 5, 8, 20, 15];

const numbersOrdered = [...numbers].sort((a,b) => a-b).reverse()
console.log('✅ second bigger number - straight to the point, efficient')
console.log('> ', numbersOrdered[1])

const secondBiggerNumber = numbers => {
  let bigger, secondBigger
  numbers.forEach( n => {
    if (!bigger) bigger = n
    if (n > secondBigger) secondBigger = n
    if (n > bigger) {
      secondBigger = bigger
      bigger = n
    }
  })
  return secondBigger
}
console.log('⚠️ second bigger number - many code, same result, hard to understand and maintain')
console.log('> ', secondBiggerNumber(numbers))