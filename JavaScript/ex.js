let span = document.querySelector('.texto span')

span.addEventListener('click', function () {
    let conteudo = document.querySelector('.texto p')

    if (conteudo.classList.contains('mostrar')) {
        span.innerHTML = 'Ver mais!'
        conteudo.classList.remove('mostrar')
    } else {
        span.innerHTML = ' Ocultar'
        conteudo.classList.add('mostrar')
    }
})