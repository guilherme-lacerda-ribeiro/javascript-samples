// 1️⃣ Agrupando Elementos por Categoria
const products = [
  { name: "Notebook", category: "Eletrônicos" },
  { name: "TV", category: "Eletrônicos" },
  { name: "Camisa", category: "Roupas" },
  { name: "Calça", category: "Roupas" },
  { name: "Café", category: "Alimentos" },
];


const productsCategorizedOption1 = products.reduce((acc, { name, category }) => {
  if (!acc[category]) acc[category] = []
  acc[category].push(name)
  return acc
}, {});
console.log("✅ productsCategorizedOption1 - easy to read and maintain", productsCategorizedOption1);


const productsCategorizedOption2 = products.reduce((acc, { name, category }) => 
  (
    acc[category] = (acc[category]??[]),
    acc[category].push(name),
    acc
  )
, {})
console.log('⚠️ productsCategorizedOption2 - uncommon, hard maintenance', productsCategorizedOption2)