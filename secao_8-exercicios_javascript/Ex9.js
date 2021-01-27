const repetir = (valor, repetidor) => {
    let lista = []

    for (let i = 0; i < repetidor; i++) {
        lista.push(valor)
    }

    return lista
}

console.log(repetir('a', 3))