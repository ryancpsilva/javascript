'use strict'
var nome = window.prompt('Qual é o seu nome?')
document.write(`<br>Olá, <strong>${nome}</strong> <br> Seu nome tem ${nome.length} letras <br>`)
document.write(`Seu nome em maiúsculas é ${nome.toUpperCase()} <br>`)
document.write(`Seu nome em minúsculas é ${nome.toLocaleLowerCase()}`)

const switcher = document.querySelector('.btn');
switcher.addEventListener('click', function(){document.write(`O nome ${nome} `)})

 