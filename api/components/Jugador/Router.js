import { validarCuerpo, validarCedula } from "./Validaciones.js";
import { JugadorControlador } from "./Controlador.js";

const JugadorRouter = (app) => {

    const controlador = new JugadorControlador()

    app.get('/Jugador', controlador.Listar);
    
    app.get('/Jugador/:cedula', validarCedula, controlador.Consultar)
    
    app.post('/Jugador', validarCuerpo, controlador.Crear);
    
    app.put('/Jugador/:cedula', validarCedula, validarCuerpo, controlador.Modificar)
    
    app.delete('/Jugador/:cedula', validarCedula, controlador.Eliminar)
    
}

export default JugadorRouter;