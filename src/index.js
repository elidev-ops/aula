function somar(a, b) {
  return a + b
}

console.log('Adição: ', somar(9, 8))

function subt(a, b) {
  return a - b
}

console.log('Subtração: ', subt(10, 5))

function multi(a, b){
  return a * b
}

console.log('Multiplicação: ', multi(7, 7))

function divi(a, b) {
  return a / b
}

console.log('Divisão: ', divi(81, 9))

function operation(opr) {
  return opr
}

const sum = operation(10 + 5)
const sub = operation(10 - 5)
const div = operation(10 / 5)
const mult = operation(10 * 5)

const arr = []

arr.push(sum, sub, div, mult)

console.log(arr)

arr.forEach((value, index) => {
  console.log(`O número ${value} está na posição ${index}`)
})

const aoQuad = arr.map( value => {
  return value * 2
})

console.log(aoQuad)

const filtro = aoQuad.filter(value => {
  return value >= 6
})

console.log(filtro)

console.log(`Números dentro do filtro: ${aoQuad.join('/')}`)
