import { validarCuerpo, validarId } from "./Validaciones.js";
import { AdministradorControlador } from "./Controlador.js";

const AdministradorRouter = (app) => {

    const controlador = new AdministradorControlador()

    app.get('/Administrador', controlador.Listar);
    
    app.get('/Administrador/:id', validarId, controlador.Consultar)
    
    app.post('/Administrador', validarCuerpo, controlador.Crear);
    
    app.put('/Administrador/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/Administrador/:id', validarId, controlador.Eliminar)
    
}

export default AdministradorRouter;