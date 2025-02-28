// 3️⃣ Removendo Duplicatas Sem Set
// Remova os valores duplicados de um array sem usar Set().
const nums = [1, 2, 3, 1, 2, 4, 5, 6, 4];


const numsDistinct = [...new Set(nums)];
console.log('✅ numbers no duplicates - direct, easy and straight')
console.log('> ', numsDistinct)


const numsUnique = nums
  .reduce((acc, n) => {
    if (!acc) acc = []
    if (acc.indexOf(n) === -1) acc.push(n)
    return acc
  },[])
console.log('⚠️ numbers no duplicates - more code, same result')
console.log('> ', numsUnique)


const numsUniqueRefactored = nums
  .reduce((acc, n) => (
    (acc??[]),
    (acc.indexOf(n) === -1) ? acc.push(n) : acc,
    acc
  ),[])
console.log('⚠️ numbers no duplicates - less code, unusual, hard to understand and maintain')
console.log('> ', numsUniqueRefactored)
