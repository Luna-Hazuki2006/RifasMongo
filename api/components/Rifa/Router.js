import { validarCuerpo, validarId } from "./Validaciones.js";
import { RifaControlador } from "./Controlador.js";

const RifaRouter = (app) => {

    const controlador = new RifaControlador()

    app.get('/Rifa', controlador.Listar);
    
    app.get('/Rifa/:id', validarId, controlador.Consultar)
    
    app.post('/Rifa', validarCuerpo, controlador.Crear);
    
    app.put('/Rifa/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/Rifa/:id', validarId, controlador.Eliminar)
    
}

export default RifaRouter;