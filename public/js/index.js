window.addEventListener('load',() => {              // load carga el HTML y despues el Js

    console.log('Documento vinculad con exito')

    let $ = (e) => document.querySelector(e)

    let main = $('main')
    let h2 = $('h2')
    let a = $('a')
    let p = document.querySelectorAll('p')


    let respuesta = prompt('Ingrese su nombre')
    console.log(respuesta)

    main.style.display = 'block'

    if (respuesta === '') {
        h2.innerHTML += 'Invitado'
    }else{
        h2.innerHTML += respuesta
    }

    h2.style.textTransform = 'uppercase'

    a.style.color = '#E51B3E'

    let fondo = confirm('Desea colocar un fondo de pantalla')
    console.log(fondo)

    if (fondo) {
        $('body').classList.add('fondo')
        
    }

    console.log(p);

    for (let i = 0; i < p.length; i++) {

        if (i % 2 === 0) {
            p[i].classList.add('destacadoPar')
        }else{
            p[i].classList.add('destacadoImpar')
        }
        
    }


})

