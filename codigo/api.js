function salvarCadastro() {
    let cadastro = montarCadastro();
    let cadastros = localStorage.getItem("cadastros")

    if (cadastros != null) {
        cadastros = cadastros.slice(0, -1) + "," + cadastro + ']'
    } else {
        cadastros = '[' + cadastro + ']';
    }
    
    const eventoCadastro = new CustomEvent('cadastroBemSucedido');
    window.dispatchEvent(eventoCadastro);
    localStorage.removeItem("cadastros")
    localStorage.setItem("cadastros", cadastros)
}

function montarCadastro() {
    let nome = document.getElementById('nome').value;
    let Sobrenome = document.getElementById('Sobrenome').value;
    let rua = document.getElementById('rua').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let cep = document.getElementById('cep').value;
    let dtnasci = document.getElementById('dtnasci').value;
    let genero = document.getElementById('genero').value;
    //let corFavorita = document.getElementById('corFavorita').value;
    let email = document.getElementById('email').value;
    let celular = document.getElementById('celular').value;
    let password = document.getElementById('password').value;

    return `{"nome": "` + nome + `",
        "sobrenome": "` + Sobrenome + `",
        "rua": "` + rua + `",
        "bairro": "` + bairro + `",
        "cidade": "` + cidade + `",
        "estado": "` + estado + `",
        "cep": "` + cep + `",
        "dtnasci": "` + dtnasci + `",
        "genero": "` + genero + `",
        "email": "` + email + `",
        "celular": "` + celular + `",
        "password": "` + password + `"}`
}

function logar() {
    let email = document.getElementById('email').value;
    let senha = document.getElementById('password').value;

    const cadastros = JSON.parse(localStorage.getItem("cadastros"))

    let cadastroValido = null;
    cadastros.forEach((c) => {
        if (c.email === email && c.password === senha) {
            cadastroValido = c;
        }
    });
    return cadastroValido;
}