import { validarCuerpo, validarCedula } from "./Validaciones.js";
import { AdministradorControlador } from "./Controlador.js";

const AdministradorRouter = (app) => {

    const controlador = new AdministradorControlador()

    app.get('/Administrador', controlador.Listar);
    
    app.get('/Administrador/:cedula', validarCedula, controlador.Consultar)
    
    app.post('/Administrador', validarCuerpo, controlador.Crear);
    
    app.put('/Administrador/:cedula', validarCedula, validarCuerpo, controlador.Modificar)
    
    app.delete('/Administrador/:cedula', validarCedula, controlador.Eliminar)
    
}

export default AdministradorRouter;