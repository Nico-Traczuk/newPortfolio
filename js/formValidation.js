const form = document.querySelector('#form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
const asunto = document.querySelector('#asunto')
const message = document.querySelector('#mensaje')

const Swal = require('sweetalert2')

form.addEventListener('submit', e => {
    e.preventDefault()
    validateInputs()
})



function validateInputs() {
    
    if(name.value === '' || email.value === '' || asunto.value === '' || mensaje.value === '') {

    }
    else {
        divAlerta('exito', 'Mensaje enviado correctamente')

    }
        
}

function divAlerta( tipo, mensaje ) {
    const divAlerta = document.createElement('div')
    if (tipo === 'error') {
        divAlerta.classList.add('bg-red-400', 'text-white', 'p-4', 'rounded', 'font-bold')
    } else if (tipo === 'exito') {
        divAlerta.classList.add('bg-green-400', 'text-white', 'p-4', 'rounded', 'font-bold')
    }
    divAlerta.textContent = mensaje
    form.appendChild(divAlerta)
    setTimeout(() => {
        name.value = ''
        email.value = ''
        asunto.value = ''
        message.value = ''
        divAlerta.remove()
    }, 2000);
}
