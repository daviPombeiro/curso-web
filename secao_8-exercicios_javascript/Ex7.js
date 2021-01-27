const estaEntre = (numero, maximo, minimo, inclusivo = false) => {
    switch (inclusivo) {
        case true:
            return numero >= minimo && numero <= maximo
        case false:
            return numero > minimo && numero < maximo
        default:
            return 'valor do parâmetro inclusivo inválido'
    }
}

console.log(estaEntre(10, 100, 50))
console.log(estaEntre(10, 100, 0))
console.log(estaEntre(10, 100, 10))
console.log(estaEntre(10, 100, 10, true))