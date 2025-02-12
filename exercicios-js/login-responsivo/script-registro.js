const nome = document.querySelector("#nome")
const sexo = document.getElementsByName("genero")
const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const botao = document.querySelector('#botao')
const error = document.querySelector('.error')
const aceito = document.querySelector("#aceito")


botao.addEventListener('click', function registrar(event) {
    event.preventDefault()

    const valorNome = nome.value
    const valorEmail = email.value
    const valorSenha = senha.value


    if(!valorNome || (!valorEmail.includes('@' + ".")) || (!valorSenha) || aceito.checked === false) {
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