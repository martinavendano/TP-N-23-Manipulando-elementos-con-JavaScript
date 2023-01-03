window.addEventListener('load',() => {              // load carga el HTML y despues el Js

    console.log('Documento vinculad con exito')

    let $ = (e) => document.querySelector(e)


    let  h1 = $('h1')
    let section  = $('section')
    let article = $('article')

    h1.innerHTML += 'AGREGAR PELÍCULAS'
    h1.classList.add('titulo')
    article.classList.add('fondoTransparente')
    section.classList.add('fondoCRUD')


})