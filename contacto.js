window.addEventListener('load', () => {
    var form = document.querySelector('#formulario');
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var telefono = document.getElementById('telefono');
    var mensaje = document.getElementById('mensaje');
    
    //establcemos el evento submit para el form y prevenimos el envio 
     form.addEventListener('submit', (e) => {
         e.preventDefault()
         validaCampos()
     })
        
//metodo para validad los campos
let validaCampos = () => {
        //capturar los valores ingresados por el usuario
        let nombreValor = nombre.value.trim()
        let correoValor = correo.value.trim()
        let telefonoValor = telefono.value.trim()
        let mensajeValor = mensaje.value.trim()


        if (!nombreValor) {
            validaFalla(nombre, 'campo vacio')

        } else {
            validaOk(nombre)
        }
        //validando campo email
        if (!correoValor) {
            validaFalla(correo, 'campo vacio')
        } else if (!validaCorreo(correoValor)) {
            validaFalla(correo, 'El E-mail no es valido')
        } else {
            validaOk(correo)
        }

        let er = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6.18}$/
        //validando campo telefono
        if (!telefonoValor) {
            validaFalla(telefono, 'campo vacio')

        } else {
            validaOk(telefono)
        }
        //validando campo mensaje
        if (!mensajeValor) {
            validaFalla(mensaje, 'campo vacio')

        } else {
            validaOk(mensaje)
        }

    }
    //metodo si los campos no son llenados o son llenados incorrectamente
    let validaFalla = (input, msje) => {
        let formControl = input.parentElement
        let aviso = formControl.querySelector('p')
        aviso.innerText = msje
        formControl.className = 'form-control falla'

    }
    //metodo si los campos son llenados correctamente
    let validaOk = (input, msje) => {
        let formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    let validaCorreo = (correo) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo);
    }



    var inputs = document.getElementsByClassName('formularioInput');
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('keyup', function () {
            if (this.value.length >= 1) {
                this.nextElementSibling.classList.add('fijar')
            } else {
                this.nextElementSibling.classList.remove('fijar')
            }
        });
    }
})


