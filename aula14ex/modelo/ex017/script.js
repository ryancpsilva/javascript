function tabuada(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}
function bora() {
    let btn = document.getElementById('btn')
    btn.setAttribute('value', 'Bora')
}
function tchau() {
    let btn = document.getElementById('btn')
    btn.setAttribute('value', 'Gerar Tabuada')
}