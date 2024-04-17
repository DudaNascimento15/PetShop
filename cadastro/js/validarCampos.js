
function validarFormulario() {
    var campos = document.querySelectorAll('.form-control');
    var formularioValido = true;

    campos.forEach(function(campo) {
        if (campo.value.trim() === '') {
            formularioValido = false;
            campo.classList.add('campo-invalido'); 
        } else {
            campo.classList.remove('campo-invalido');
        }
    });

    if (formularioValido) {
        alert('Formulário preenchido corretamente!');
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.'); 
    } 
}


function validaRadio() {
    var radio = document.querySelectorAll('input[type="radio"][name="genero"]');
    var checked = false;

    for (var i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            checked = true;
            break;
        }
    }

    if (!checked) {
        alert("Selecione um gênero!");
        return false;
    }
    return true; 
}
