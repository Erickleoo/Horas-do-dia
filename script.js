function carregar() {
    var msg = window.document.getElementById('msg') // criando uma variavel e atribuindo a ela a div com o id msg.
    var img = window.document.getElementById('imagem') // criando uma variavel e atribuindo a ela a id img que está dentro da div.
    var data = new Date() // criando uma variavel data e mostrando a data atual de forma bruta.
    var hora = data.getHours() // criando uma variavel hora e retornando a hora local.
    msg.innerHTML = `Agora são ${hora} horas.` // adcionando conteúdo a div msg e chamando a hora atual.
    if(hora>= 0 && hora < 12) { // se a hora for maior ou igual 0 e menor que 12 vai vim o aviso de bom dia e a cor mudará.
        // bom dia
        img.src = 'Bomdia.png'
        document.body.style.background = '#ffe06b'
    } else if (hora >= 12 && hora <= 18) { // se a hora maior ou igual a 12 e menor ou igual a 18 vai vim o aviso de boa tarde e a cor mudará.
        // boa tarde
        img.src = 'Boatarde.png'
        document.body.style.background = '#b95a18'
    } else { // se for diferente que qualquer um desses anteriores ou seja maior que 18 e menor que 0 virá o aviso de boa noite
        // boa noite!
        img.src = 'Boanoite.png'
        document.body.style.background = '#0f1219' 
    }
}