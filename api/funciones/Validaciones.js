import { DATE, INTEGER, STRING, json } from "sequelize";

function ValidarCuerpoEntero(request, validables) {
    const lista = json(validables)['conditions']
    let nombres = Object.keys(lista)
    console.log(nombres);
    nombres = nombres.filter((e) => e != 'createdAt' && e != 'updatedAt' && e != 'id')
    console.log(nombres);
    if (!request?.body) {
        return 'Debe ingresar el body de la request'
    }
    console.log(request.body);
    for (const propiedad of nombres) {
        if (!request.body[propiedad]) {
            return `Debe ingresar la propiedad \"${propiedad}\"`
        }
        if (lista[propiedad]['type'] instanceof INTEGER) {
            if (!Number.isInteger(request.body[propiedad])) {
                return `La propiedad \"${propiedad}\" debe ser de tipo numérico`
            }
        } else if (lista[propiedad]['type'] instanceof STRING) {
            if (typeof request.body[propiedad] == "string") {
                if (request.body[propiedad].trim() == '') {
                    return `La propiedad \"${propiedad}\" no puede estar vacía`
                }
            } else {
                return `La propiedad \"${propiedad}\" debe ser de tipo string`
            }
        } else if (lista[propiedad]['type'] instanceof DATE) {
            if (isNaN(Date.parse(request.body[propiedad]))) {
                return `La propiedad \"${propiedad}\" debe ser de tipo date`
            } 
        }
    }
    return false
}

export {ValidarCuerpoEntero}