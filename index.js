let eMail = document.getElementById('email');
let btn = document.getElementById('btn');
let senha = document.getElementById('senha');
let campos = document.querySelectorAll('input')
let spans = document.querySelectorAll('span')
var emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

function setErros(index) {
    campos[index].style.border = '2px solid #e63636'
    spans[index].style.display = "block"
    senha.style.color = "#e63636"
    eMail.style.color = "#e63636"
}

function removeErros(index) {
    campos[index].style.border = ''
    spans[index].style.display = "none"
    senha.style.color = "#fff"
    eMail.style.color = "#fff"
}


function emailvalidate(){
    if(emailRegex.test(campos[0].value)) {
        removeErros(0)
    } else {
        setErros(0)
    }
}

function senhaValidade(){
    if(campos[1].value.length < 4){
        setErros(1)
    } else {
        removeErros(1)
    }
}

btn.addEventListener('click', function(){
    if(senhaValidade == setErros || emailvalidate == setErros) {
        alert('Ta dando certo!')
    }
})