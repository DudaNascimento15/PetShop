function validarPWD(){
    var senha = document.getElementById("password").value;
    var confSenha = document.getElementById("ConfirmPassaword").value; 
    console.log(senha,confSenha);
    
    var mensagem; 

    if(senha.length  != 0){
        if(senha !== confSenha){
           mensagem = 'Senha incorreta'; 
           alert(mensagem); 
        }
    }
    else{
        mensagem = 'Preencha os campos da senha';  
        alert(mensagem); 
    }
}

var state = false; 
function mostrarEsconder(){
    if(state){
        document.getElementById("password").setAttribute("type","password");
        document.getElementById("olho-senha").style.color = '#0a7273'; 
        state = false; 
    } else {
        document.getElementById('password').setAttribute("type","text");
        document.getElementById("olho-senha").style.color = '#333'; 
        state = true; 
    }
}

var state1 = false; 
function mostrarEsconderConfirm() {    
    if(state1) {
        document.getElementById("ConfirmPassaword").setAttribute("type", "password");
        document.getElementById("olho-senha-senha").style.color = '#0a7273'; 
        state1 = false;
    } else {
        document.getElementById('ConfirmPassaword').setAttribute("type", "text");
        document.getElementById("olho-senha-senha").style.color = '#333'; 
        state1 = true; 
    }
}




