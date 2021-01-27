const retornaPares = lista => lista.filter((item, indice) => item % 2 === 0 && indice % 2 === 0)

console.log(retornaPares([1, 2, 3, 4]))
console.log(retornaPares([10, 70, 22, 43]))