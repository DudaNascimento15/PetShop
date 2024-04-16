
function validarFormulario() {
    var campos = document.querySelectorAll('.form-control');
    var formularioValido = true;

    campos.forEach(function(campo) {
        if (campo.value.trim() === '') {
            formularioValido = false;
            campo.classList.add('campo-invalido'); // Adiciona uma classe para destacar o campo vazio
        } else {
            campo.classList.remove('campo-invalido'); // Remove a classe de destaque se o campo estiver preenchido
        }
    });

    if (formularioValido) {
        alert('Formulário preenchido corretamente!'); // Ou envie o formulário, dependendo do seu caso
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.'); // Exibe uma mensagem de erro
    } 
}


function validaRadio() {
    var radios = document.querySelectorAll('input[type="radio"][name="genero"]');
    var checkedCount = 0;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            checkedCount++;
        }
    }

    if (checkedCount !== 1) {
        alert("Selecione apenas um gênero!");
        return false;
    }
    
    return true;
}
