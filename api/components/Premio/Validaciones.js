import { ValidarCuerpoEntero } from "../../funciones/Validaciones.js"

const validarId = (request, response, next) => {
    if (!request.params.id) {
        next(new Error('Debe ingresar la id'));
    }
    if (isNaN(request.params.id)) {
        next(new Error('La id debe ser de tipo numérico'))
    }
    next()
} 

const validarCuerpo = (request, response, next) => {
    const lista = []
    ValidarCuerpoEntero(request, lista)
    next()
} 

export {validarCuerpo, validarId}