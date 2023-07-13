function verificar(){
    var data= new Date()
    var ano= data.getFullYear()
    var fano=document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value>ano){
        window.alert('Verifique os dados e tente novamente')
    }else{
        var fsex=document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img= document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            genero = 'um homem'
            if (idade>=0 && idade <10){
                //criança
                img.setAttribute('src','imagens/imgbebemsc.jpg')
            }else if (idade<21){
                //jovem
                img.setAttribute('src', 'imagens/imgjovemmsc.jpg')
            }else if (idade<50){
                //adulto
                img.setAttribute('src', 'imagens/imgadultomsc.jpg')
            }else{
                //idoso
                img.setAttribute('src','imagens/imgidosomsc.jpg')
            }
        }else{
            genero='uma mulher'
            if (idade>=0 && idade <10){
                img.setAttribute('src','imagens/imgbebefem.jpg')
                //criança
            }else if (idade<21){
                img.setAttribute('src','imagens/imgjovemfem.jpg')
                //jovem
            }else if (idade<50){
                img.setAttribute('src','imagens/imgadultofem.jpg')
                //adulto
            }else{
                img.setAttribute('src','imagens/imgidosofem.jpg')
                //idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} de ${idade} anos <br>`
        res.appendChild(img)
    }
}