// O Set em JavaScript é uma estrutura de dados que permite armazenar valores únicos de qualquer tipo, seja primitivo ou objeto.

// 📌 Características do Set:
// Valores Únicos: Não permite valores duplicados.
// Iterável: Pode ser percorrido com forEach, for...of ou transformado em array.
// Tamanho Dinâmico: O tamanho do Set pode ser obtido com .size.
// Métodos de Adição, Remoção e Consulta: Possui métodos para adicionar (add), remover (delete), verificar (has) e limpar (clear) valores.

// Quando usar Set?
// Quando precisar armazenar apenas valores únicos.
// Quando a ordem dos elementos não for uma prioridade.
// Para melhorar a performance ao verificar existência de valores (has é mais rápido que includes de um array grande).

const numeros = new Set([1, 2, 3, 4, 4, 5]);
console.log(numeros); // Set { 1, 2, 3, 4, 5 } -> O número 4 duplicado é ignorado

const cores = new Set();
cores.add("vermelho");
cores.add("azul");
cores.add("verde");
cores.add("vermelho"); // Ignorado, pois já existe
console.log(cores); // Set { 'vermelho', 'azul', 'verde' }


cores.delete("azul");
console.log(cores); // Set { 'vermelho', 'verde' }


console.log(cores.has("verde")); // true
console.log(cores.has("azul"));  // false


console.log(cores.size); // 2


cores.clear();
console.log(cores.size); // 0


// ---------------------------------------

const linguagens = new Set(["JavaScript", "Python", "Java"]);

for (const linguagem of linguagens) {
    console.log(linguagem);
}
// Saída:
// JavaScript
// Python
// Java


linguagens.forEach(ling => console.log(ling));


