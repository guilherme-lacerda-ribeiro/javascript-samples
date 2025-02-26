// filter → Filtra elementos do array com base em uma condição.
// O método filter é usado para criar um novo array contendo apenas os elementos que passam em um teste (função de callback retorna true).

const idades = [12, 17, 18, 21, 25, 30, 15, 10];
const idadesAdultas = idades.filter((i) => i >= 18);
console.log("maiores de 18", idadesAdultas);
