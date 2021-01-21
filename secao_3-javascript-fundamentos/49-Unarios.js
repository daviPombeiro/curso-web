let num1 = 1
let num2 = 2

num1++ // executado depois da operação
console.log(num1)
--num1 // executado antes da operação
console.log(num1)

console.log(++num1 === num2--) // num1 foi incrementado antes da comparação e num2 for decrementado depois
console.log(num1 === num2) // num1 vale 2 e num2 vale 1 devido as operações da linha antterior