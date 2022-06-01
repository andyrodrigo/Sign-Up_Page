let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')
let email = document.getElementById('email')
let password = document.getElementById('password')
let submit = document.getElementById('submit')
let lnome = document.getElementById('lnome')
let lsobrenome = document.getElementById('lsobrenome')
let lemail = document.getElementById('lemail')
let lpassword = document.getElementById('lpassword')

function erro(num){
    switch (num) {
        case 0: 
            lnome.style.display= "inline";
          break;
        case 1: 
            lsobrenome.style.display= "inline";
          break;
        case 2: 
            lemail.style.display= "inline";       
          break;
        case 3:
            lpassword.style.display= "inline";
          break;
        default:
            alert("erro")
    }
}

function enviar(){
    let ok = true;
    if(nome.value == ''){
        nome.style.border= "thin solid hsl(0, 100%, 74%)";
        erro(0)
        ok = false
    }else{
        lnome.style.display= "none";
        nome.style.border= "thin solid #ccc";
    }
    if(sobrenome.value == ''){
        sobrenome.style.border= "thin solid hsl(0, 100%, 74%)";
        erro(1)
        ok = false
    }else{
        lsobrenome.style.display= "none";
        sobrenome.style.border= "thin solid #ccc";
    }
    if(email.value == ''){
        email.style.border= "thin solid hsl(0, 100%, 74%)";
        erro(2)
        ok = false
    }else{
        lemail.style.display= "none";
        email.style.border= "thin solid #ccc";
    }
    if(password.value == ''){
        password.style.border= "thin solid hsl(0, 100%, 74%)";
        erro(3)
        ok = false
    }else{
        lpassword.style.display= "none";
        password.style.border= "thin solid #ccc";
    }
    if(ok == true){
        alert('envia')
    }
    
}

//Escutadores---------------------------------------------------------------------------
function escutadores(){
    submit.addEventListener('click', enviar)

}
//--------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores)