import { validarCuerpo, validarId } from "./Validaciones.js";
import { JugadorControlador } from "./Controlador.js";

const JugadorRouter = (app) => {

    const controlador = new JugadorControlador()

    app.get('/Jugador', controlador.Listar);
    
    app.get('/Jugador/:id', validarId, controlador.Consultar)
    
    app.post('/Jugador', validarCuerpo, controlador.Crear);
    
    app.put('/Jugador/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/Jugador/:id', validarId, controlador.Eliminar)
    
}

export default JugadorRouter;