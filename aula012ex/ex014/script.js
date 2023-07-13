function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora =data.getHours()
    msg.innerHTML = `Agora são ${hora} horas. `
    if ( hora >= 0 && hora < 12){
        document.body.className+='dia'
        msg.innerHTML += 'Bom dia!'
        img.src = 'imagens/ftmanha.png'
        //Bom dia
    }else if (hora >= 12 && hora <18){
        document.body.className+='tarde'
        msg.innerHTML += 'Boa tarde!'
        img.src='imagens/fttarde.png'
        //Boa tarde
    }else{
        document.body.className+='noite'
        msg.innerHTML += 'Boa noite!'
        img.src="imagens/ftnoite.png"
        //Boa noite
    }
}