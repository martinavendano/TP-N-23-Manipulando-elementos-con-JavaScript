window.addEventListener('load',() => {              // load carga el HTML y despues el Js

    console.log('Documento vinculad con exito')


    let $ = (e) => document.querySelector(e)

    let body =$('body')
    let h1 = $('h1')

    let modoOscuro = confirm('Desea colocar un fondo de pantalla')

    if (modoOscuro) {

        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList')
    }

    h1.innerHTML = 'LISTADO DE PELÍCULAS'
    h1.style.color = 'white'
    h1.style.backgroundColor = 'teal'
    h1.style.padding = '20px'
})