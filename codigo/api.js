function salvarCadastro() {
    let cadastro = montarCadastro();
    const cadastros = localStorage.getItem("cadastros")

    if (cadastros != null) {
        cadastros = cadastros.slice(0, -1) + "," + cadastro + ']'
    } else {
        cadastros = '[' + cadastro + ']';
    }

    localStorage.removeItem("cadastros")
    localStorage.setItem("cadastros", cadastros)
}

function montarCadastro() {
    /*let nome = document.getElementById('nome');
    let endereco = document.getElementById('endereco');
    let nascimento = document.getElementById('nascimento');
    let sexo = document.getElementById('sexo');
    let corFavorita = document.getElementById('corFavorita');
    let email = document.getElementById('email');
    let telefone = document.getElementById('telefone');
    let senha = document.getElementById('senha');

    return cadastro = {
        nome: nome,
        endereco: endereco,
        nascimento: nascimento,
        sexo: sexo,
        corFavorita: corFavorita,
        email: email,
        telefone: telefone,
        senha: senha
    }*/

    return `{"nome": "Maria",
        "endereco": "Rua Harry Brehmer, 110",
        "nascimento": "19/02/2005",
        "sexo": "Feminino",
        "corFavorita": "Verde lebisco",
        "email": "mariaclaraperon@gmail.com",
        "telefone": "47123456789",
        "senha": "teste123"}`
}

function logar() {
    let email = "mariaclaraperon@gmail.com" //document.getElementById('email');
    let senha = "teste123" //document.getElementById('senha');

    const cadastros = JSON.parse(localStorage.getItem("cadastros"))

    let cadastroValido = null;
    cadastros.forEach((c) => {
        if (c.email === email && c.senha === senha) {
            cadastroValido = c;
        }
    });
    
    document.getElementById('conteudo').innerHTML = JSON.stringify(cadastroValido);
    return cadastroValido;
}