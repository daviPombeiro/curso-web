const maiorOuIgual = (num1, num2) => num1 >= num2 && typeof num1 == 'number' && typeof num2 == 'number'

console.log(maiorOuIgual(0, 0))
console.log(maiorOuIgual(0, '0'))
console.log(maiorOuIgual(5, 1))