let nome = document.getElementById('nome')
let sobrenome = document.getElementById('sobrenome')
let email = document.getElementById('email')
let password = document.getElementById('password')
let submit = document.getElementById('submit')
let lnome = document.getElementById('lnome')
let lsobrenome = document.getElementById('lsobrenome')
let lemail = document.getElementById('lemail')
let lemail2 = document.getElementById('lemail2')
let lpassword = document.getElementById('lpassword')

function validaEmail(email){
        var res = /\S+@\S+\.\S+/; //expressão regular
        return res.test(email); //testa se email combina coma  expressão regular
}


function erro(num){
    switch (num){
        case 0:
            nome.style.border= "thin solid hsl(0, 100%, 74%)"
            lnome.style.display= "inline";
          break;
        case 1:
            sobrenome.style.border= "thin solid hsl(0, 100%, 74%)";
            lsobrenome.style.display= "inline";
          break;
        case 2:
            email.style.border= "thin solid hsl(0, 100%, 74%)";
            lemail.style.display= "inline"; 
            lemail2.style.display= "none";      
          break;
        case 3:
            email.value = ''
            email.placeholder = 'email@example.com'
            email.classList.add('classe')
            email.style.border= "thin solid hsl(0, 100%, 74%)";
            lemail.style.display= "none";
            lemail2.style.display= "inline";
          break;
        case 4:
            password.style.border= "thin solid hsl(0, 100%, 74%)";
            lpassword.style.display= "inline";
        break;
        default:
            alert("erro")
    }
}

function enviar(){
    //email.classList.add('classe')
    let ok = true;
    if(nome.value == ''){
        erro(0)
        ok = false
    }else{
        lnome.style.display= "none";
        nome.style.border= "thin solid #ccc";
    }
    if(sobrenome.value == ''){;
        erro(1)
        ok = false
    }else{
        lsobrenome.style.display= "none";
        sobrenome.style.border= "thin solid #ccc";
    }
    if(email.value == ''){ 
        erro(2)
        ok = false
    }else if(validaEmail(email.value) == false){
        erro(3)
        ok = false
    }else{
        lemail.style.display= "none";
        lemail2.style.display= "none";
        email.style.border= "thin solid #ccc";
    }
    if(password.value == ''){
        erro(4)
        ok = false
    }else{
        lpassword.style.display= "none";
        password.style.border= "thin solid #ccc";
    }
    if(ok == true){
        alert('Dados enviados com sucesso!')
    }
    
}

//Escutadores---------------------------------------------------------------------------
function escutadores(){
    submit.addEventListener('click', enviar)

}
//--------------------------------------------------------------------------------------

//inicialização
window.addEventListener("load", escutadores)