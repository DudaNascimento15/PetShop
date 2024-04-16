let cep = document.getElementById("cep");
let rua = document.getElementById("rua");
let bairro = document.getElementById("bairro");
let cidade = document.getElementById("cidade");
let estado = document.getElementById("estado");

cep.addEventListener("blur", function (e) {
  let cepValue = e.target.value;
  let script = document.createElement("script");
  script.src =
    "https://viacep.com.br/ws/" + cepValue + "/json/?callback=popularForm";
  document.body.appendChild(script);
});

function popularForm(pCEP) {
  if ("erro" in pCEP) {
    alert("CEP não encontrado");
    return;
  }
  /*console.log(pCEP); */
  rua.value = pCEP.logradouro;
  bairro.value = pCEP.bairro;
  cidade.value = pCEP.localidade;
  estado.value = pCEP.uf;
}
