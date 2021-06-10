const container = document.querySelector('.container')
const output = document.querySelector('.input > input')

let values = ''

container.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.innerText === '='){
        if (values === '') return 
        values = calculator(values)
        output.value = values
        values = ''
        return
    }
    values += event.target.innerText
    output.value = values
  }
})

function calculator(operation) {
  return eval(operation) 
}
