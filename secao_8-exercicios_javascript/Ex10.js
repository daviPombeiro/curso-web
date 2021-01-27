const simboloMais = qntd => {
    if (qntd === 0) return ''

    return qntd === 1 ? '+' : '+' + simboloMais(qntd-1)
}

console.log(simboloMais(3))