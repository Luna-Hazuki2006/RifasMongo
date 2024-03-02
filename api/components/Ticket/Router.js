import { validarCuerpo, validarId } from "./Validaciones.js";
import { TicketControlador } from "./Controlador.js";

const TicketRouter = (app) => {

    const controlador = new TicketControlador()

    app.get('/Ticket', controlador.Listar);
    
    app.get('/Ticket/:id', validarId, controlador.Consultar)
    
    app.post('/Ticket', validarCuerpo, controlador.Crear);
    
    app.put('/Ticket/:id', validarId, validarCuerpo, controlador.Modificar)
    
    app.delete('/Ticket/:id', validarId, controlador.Eliminar)
    
}

export default TicketRouter;