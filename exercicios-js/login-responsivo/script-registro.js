const nome = document.querySelector("#nome")
const sexo = document.getElementsByName("genero")
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const botao = document.querySelector('#botao')
const error = document.querySelector('.error')
var checagem = function checar(n) {

    if (document.getElementById("#aceito").checked) {
        return n = 1   
    } else {return n = 0}
}

botao.addEventListener('click', function registrar(event) {
    event.preventDefault()

    const valorNome = nome.value
    const valorEmail = email.value
    const valorSenha = senha.value


    if(!valorNome || (!valorEmail.includes('@' + ".")) || (!valorSenha) || checagem === 0) {
        error.textContent = "Preencha os campos corretamente"
        error.style.color= "red"
        setTimeout(() => {
            error.textContent = ""
        }, 4000);
    } else {
        error.textContent = `Cadastrado com sucesso!`
        error.style.color = "green"
    } 

})