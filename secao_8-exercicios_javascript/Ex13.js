const filtrarNumeros = lista => lista.filter(item => typeof item === 'number')

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20]))
console.log(filtrarNumeros(["c", "a"]))