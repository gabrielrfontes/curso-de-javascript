const email = document.querySelector('#email')
const senha = document.querySelector('#senha')
const error = document.querySelector('.error')
const botao = document.querySelector('#botao')


botao.addEventListener('click', function entrar(event){
    event.preventDefault()
    const emailValor = email.value

    if (!emailValor || (!emailValor.includes('@'))) {
        error.textContent = "Preencha os campos corretamente"
        error.style.display = 'block'
        setTimeout(() => {
            error.textContent = ''
        }, 5000);
        return
    } else {
        error.textContent = `Bem-vindo, R${emailValor}!`
        error.style.display = "block"
        setTimeout(() => {
            error.textContent = ''
        }, 5000);
    }
})