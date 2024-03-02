import { ValidarCuerpoEntero } from "../../funciones/Validaciones.js"

const validarCedula = (request, response, next) => {
    if (!request.params.cedula) {
        next(new Error('Debe ingresar la cédula'));
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    const lista = []
    ValidarCuerpoEntero(request, lista)
    next()
} 

export {validarCuerpo, validarCedula}