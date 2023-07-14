let i = "gustavo"
let a = ['Ryan','Marcos','Yasmim', 'Gustavo']

function verificar(str, arr) {
    for (let j in a){
        if(str == arr[j]) {
            if (str === arr[j]) {
                return console.log("Sim")
            } else {
                return console.log("Sim, porém há um problema de digitação")
            }
        }
    }
    return console.log('Não')
}
verificar(i,a)