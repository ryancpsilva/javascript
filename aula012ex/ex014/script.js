function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if ( hora >= 0 && hora < 12){
        //Bom dia
    }else if (hora >= 12 && hora <18){
        //Boa tarde
    }else{
        //Boa noite
    }
}