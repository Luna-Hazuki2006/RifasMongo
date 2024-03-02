import { validarCuerpo, validarId } from "./Validaciones.js";
import { PremioControlador } from "./Controlador.js";

const PremioRouter = (app) => {

    const controlador = new PremioControlador()

    app.get('/Premio', controlador.Listar);
    
    app.get('/Premio/:id', validarId, controlador.Consultar)
    
    app.post('/Premio', validarCuerpo, controlador.Crear);
    
    app.put('/Premio/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/Premio/:id', validarId, controlador.Eliminar)
    
}

export default PremioRouter;