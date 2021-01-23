function criarProduto (nome, preco) {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Coca', 3.5))
console.log(criarProduto('agua', 2.0))