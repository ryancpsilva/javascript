let amigo = {nome: 'José', 
sex: 'M',
peso: 85.4,
engordar(p=0) {
    console.log('Engordou')
    this.peso += p
}
}
console.log(`${amigo.nome} pesa ${amigo.peso} Kg`)