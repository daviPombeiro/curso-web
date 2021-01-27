const removerPropriedade = (objeto, prop) => {
    const copia = Object.assign({}, objeto)

    delete copia[prop]

    return copia
}

obj = {a: 1, b: 2}

console.log(removerPropriedade(obj, 'a'))
console.log(Object.is(removerPropriedade(obj, 'a'), obj))