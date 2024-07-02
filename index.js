let lastIndex = 0

let imagens = document.querySelectorAll('.container img')

imagens.forEach((item,index) => {
    document.querySelectorAll('.bullet-single')[index].addEventListener('click', () => {
       let lastImagem = document.querySelectorAll('.container img')[lastIndex]
       let actualImagem = document.querySelectorAll('.container img')[index]
       
       document.querySelectorAll('.bullet-single')[lastIndex].classList.remove('active-bullet')

       document.querySelectorAll('.bullet-single')[index].classList.add('active-bullet')

       lastImagem.style.opacity = 0;
       actualImagem.style.opacity = 1;
       
       lastIndex = index
    })
})