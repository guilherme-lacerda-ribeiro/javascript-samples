// Exercício 1: Normalização de Nomes
// Dado um array de nomes com letras maiúsculas e minúsculas misturadas, normalize os nomes para que todos comecem com a primeira letra maiúscula e o restante minúsculo.
const names = ["joHN", "aNA", "pEdRo", "marIa"];
console.log('normalizado',
  names.map(nome => `${nome.slice(0,1).toUpperCase()}${nome.slice(1).toLowerCase()}`)
)
console.log('normalizado refatorado',
  names.map(nome => `${nome.charAt(0).toUpperCase()}${nome.slice(1).toLowerCase()}`)
)
// Nível: Pleno (se usasse regex, demonstraria nível sênior) ❓



// Exercício 2: Filtrando Produtos Disponíveis
// Dado um array de objetos representando produtos, retorne apenas os que estão em estoque.
const products = [
  { name: "Notebook", price: 2500, inStock: true },
  { name: "Mouse", price: 150, inStock: false },
  { name: "Teclado", price: 300, inStock: true },
  { name: "Monitor", price: 1200, inStock: false }
];
console.log('em estoque', 
  products.filter(({inStock}) => inStock)
)



// Exercício 3: Encontrando um Cliente
// Dado um array de objetos representando clientes, encontre o cliente cujo email seja "cliente3@email.com".
const clients = [
  { id: 1, name: "Cliente 1", email: "cliente1@email.com" },
  { id: 2, name: "Cliente 2", email: "cliente2@email.com" },
  { id: 3, name: "Cliente 3", email: "cliente3@email.com" }
];
console.log('cliente3 - filter (junior)',
  clients.filter(({email}) => email === 'cliente3@email.com')
)
console.log('cliente3 - pleno',
  clients.find(({email}) => email === 'cliente3@email.com')
)




// Exercício 4: Soma dos Salários
// Dado um array de funcionários, calcule a soma total dos salários.
const employees = [
  { name: "Carlos", salary: 3000 },
  { name: "Ana", salary: 4500 },
  { name: "Marcos", salary: 5000 },
  { name: "Julia", salary: 4000 }
];
console.log('soma dos salarios',
  employees.reduce((acc, {salary}) => acc + salary , 0)
)
console.log('soma dos salarios - senior',
  employees.reduce((acc, {salary}) => acc + salary??0 , 0)
)
// Nível: Pleno (para ser sênior, poderia incluir validações)




// Exercício 5: Ordenação de Datas
// Dado um array de strings representando datas no formato "YYYY-MM-DD", ordene-as da mais antiga para a mais recente.
const dates = ["2023-05-15", "2021-12-30", "2024-01-01", "2022-08-10"];
console.log('datas ordenadas asc',
  dates.sort((a,b) => new Date(a) - new Date(b))
)
console.log('datas ordenadas asc - senior',
  [...dates].sort((a,b) => new Date(a) - new Date(b))
)




// Exercício 6: Verificação de Idade
// Dado um array de idades, verifique se todos os valores são maiores ou iguais a 18.
const ages = [22, 34, 18, 40, 29, 17];
console.log('apenas maiores de 18',
  ages.every(idade => idade >= 18)
)





// Exercício 7: Transformando Objetos
// Dado um array de objetos representando pedidos, transforme os objetos para conter apenas id e total.
const orders = [
  { id: 1, item: "Mouse", quantity: 2, price: 50 },
  { id: 2, item: "Teclado", quantity: 1, price: 250 },
  { id: 3, item: "Monitor", quantity: 1, price: 1200 }
];
console.log('obj transformado',
  orders.map(({id, quantity, price}) => (
    {id, total: quantity * price}
  ))
)




// Exercício 8: Contando Ocorrências 👌
// Dado um array de palavras, conte quantas vezes cada palavra aparece.
const words = ["banana", "maçã", "banana", "uva", "maçã", "banana"];
console.log('contagem de palavras',
  words.reduce((acc, word) => {
    if (!acc[word]) acc[word] = 0
    acc[word] +=1 
    return acc
  }, {})
)

console.log('contagem de palavras - Refatorado',
  words.reduce((acc, word) => (acc[word] = (acc[word] ?? 0) + 1, acc), {})
)

console.log('contagem de palavras - outra alternativa',
  Object.fromEntries(
    words.map(  word => [word, words.filter(w => w === word).length]  )
  )
)


// Exercício 9: Invertendo um Array 👌
// Dado um array de números, inverta a ordem dos elementos sem usar reverse().
const numbers = [1, 2, 3, 4, 5];
console.log('inverter ordem - reverse', [...numbers].reverse())

console.log('inverter ordem sem usar reverse - sort - NAO RECOMENDADA',
  [...numbers].sort((a,b) => b-a)
)

console.log('inverter ordem sem usar reverse - reduce',
  numbers
    .reduce((acc, num, indice, numbers) => {
      acc[indice] = numbers[numbers.length-1 - indice]
      return acc
    },[])
)

console.log('inverter ordem sem usar reverse - reduce - refatorado',
  numbers
    .reduce((acc, num, indice, numbers) => (
      acc[indice] = numbers[numbers.length-1 - indice], acc
    ),[])
)




// Exercício 10: Encontrando o Primeiro Número Par
// Dado um array de números, encontre o primeiro número par.
const nums = [1, 3, 7, 9, 10, 15];
console.log('primeiro num par',
  nums.find(n => n%2 === 0)
);
