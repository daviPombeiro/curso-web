const inverso = valor => {
    switch(typeof valor){
        case 'boolean':
            return !valor
        case 'number':
            return valor * -1
        default:
            return`booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
}

console.log(inverso(true))
console.log(inverso(5))
console.log(inverso(-3.72))
console.log(inverso('a'))