// 1
console.log('1)')
const ex1 = (x, y) => console.log(`soma: ${x + y}
subtração: ${x - y}
multiplicação: ${x * y}
divisão: ${x / y}`)

ex1(2, 3)
console.log(' ')

// 2
console.log('2)')
const ex2 = (a, b, c) => {
    if(a == b && b == c) {
        return 'Equilátero'
    } else if(a == b || b == c || a == c){
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(ex2(1, 1, 1))
console.log(ex2(1, 1, 2))
console.log(ex2(1, 2, 3))
console.log(' ')

// 3
console.log('3)')
const ex3 = (base, expoente) => base ** expoente

console.log(ex3(2, 3))
console.log(' ')

// 4
console.log('4)')
const ex4 = (dividendo, divisor) => {
    console.log(`divisão: ${Math.floor(dividendo / divisor)}
resto: ${dividendo % divisor}`)
}

ex4(3, 2)
console.log(' ')

// 5
console.log('5)')
const ex5 = valor => {
    const reais = Math.floor(valor)
    const centavos = (valor - reais).toFixed(2) * 100

    return `R$${reais},${centavos}`
}

console.log(ex5(0.30000000000000004))
console.log(' ')

// 6
console.log('6)')
const ex6Simples = (capital, juros, meses) => capital + capital * juros * meses

const ex6Composto = (capital, juros, meses) => {
    let montante = capital
    for(let i = 0; i < meses; i++) {
        montante += montante * juros
    }
    
    return montante
}

console.log(ex6Simples(1000, 0.005, 12))
console.log(ex6Composto(1000, 0.005, 12))
console.log(' ')

// 7
console.log('7)')
const ex7 = (a, b, c) => {
    const delta = b ** 2 - 4 * a * c

    if (delta < 0) {
        return 'delta negativo'
    }

    const x1 = (-b + delta ** (1/2)) / 2 * a
    const x2 = (-b - delta ** (1/2)) / 2 * a

    return [x1, x2]
}

console.log(ex7(3, -5, 12))
console.log(' ')

// 8
console.log('8)')
const ex8 = lista => {
    const pontuacoes = lista.split(' ')
    let maior = pontuacoes[0]
    let menor = [pontuacoes[0], 0]
    let contador = 0

    for(let i = 0; i < pontuacoes.length; i++) {
        if(Number(pontuacoes[i]) > maior) {
            maior = pontuacoes[i]
            contador++
        } else if(pontuacoes[i] < menor[0]) {
            menor[0] = pontuacoes[i]
            menor[1] = i + 1
        }
    }

    return [contador, menor[1]]
}

console.log(ex8('10 20 20 8 25 3 0 30 1'))
console.log(' ')

// 9
console.log('9)')
const ex9 = nota => {
    if(nota < 0 || nota > 100){
        return ['Nota Inválida', nota]
    }

    if(nota < 38) {
        return ['Reprovado', nota]
    }

    switch (nota % 5) {
        case 3:
            nota += 2
            break
        case 4:
            nota += 1
    }

    return ['Aprovado', nota]
}

console.log(ex9(-4))
console.log(ex9(102))
console.log(ex9(26))
console.log(ex9(38))
console.log(ex9(82))
console.log(ex9(84))
console.log(' ')

// 10
console.log('10)')
const ex10 = num => {
    if(num % 3 == 0) {
        return true
    }
    return false
}

console.log(ex10(18))
console.log(ex10(16))
console.log(' ')

// 11
console.log('11)')
const ex11 = ano => {
    if (ano % 400 == 0) {
        return true
    } else if (ano % 100 == 0) {
        return false
    } else if (ano % 4 == 0) {
        return true
    }
    return false
}

console.log(ex11(2016))
console.log(ex11(2100))
console.log(ex11(2400))
console.log(' ')

// 12
console.log('12)')
const ex12 = num => {
    if(num == 0)
        return 1
    if(num > 1)
        return num * ex12(num-1)
    return num
}

console.log(ex12(6))
console.log(' ')

// 13
console.log('13)')
const ex13 = dia => {
    switch (dia) {
        case 1: case 7:
            return 'fim de semana'
        case 2: case 3: case 4: case 5: case 6:
            return 'dia útil'
        default:
            return 'dia inválido'
    }
}

console.log(ex13(1))
console.log(ex13(4))
console.log(ex13(8))
console.log(' ')

// 14
console.log('14)')
const ex14 = fruta => {
    switch (fruta) {
        case "maçã":
            return "Não vendemos esta fruta aqui"
        case "kiwi":
            return "Estamos com escassez de kiwis"
        case "melancia":
            return "Aqui está, são 3 reais o quilo"
        default:
            return "erro"
    }
}

console.log(ex14('maçã'))
console.log(ex14('kiwi'))
console.log(ex14('melancia'))
console.log(ex14('pera'))
console.log(' ')

//15
console.log('15)')
const ex15 = categoria => {
    switch(categoria) {
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'Tem certeza que não prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(ex15('hatch'))
console.log(ex15('sedan'))
console.log(ex15('motocicleta'))
console.log(ex15('caminhonete'))
console.log(ex15('triciculo'))
console.log(' ')

// 16
console.log('16)')
const ex16 = (x, y, op) => {
    switch(op) {
        case '+':
            return x + y
        case '-':
            return x - y
        case '*':
            return x * y
        case '/':
            return x / y
        default:
            return 'operador inválido'
    }
}

console.log(ex16(4, 2, '+'))
console.log(ex16(4, 2, '-'))
console.log(ex16(4, 2, '*'))
console.log(ex16(4, 2, '/'))
console.log(' ')

// 17
console.log('17)')
const ex17 = (plano, salario) => {
    switch (plano) {
        case 'A':
            return salario + salario * 0.1
        case 'B':
            return salario + salario * 0.15
        case 'C':
            return salario + salario * 0.2
        default:
            return 'plano inválido'
    }
}

console.log(ex17('A', 1000))
console.log(ex17('B', 1000))
console.log(ex17('C', 1000))
console.log(ex17('D', 1000))
console.log(' ')