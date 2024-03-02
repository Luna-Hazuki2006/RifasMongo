import { TicketServicio } from "./Service.js";

class TicketControlador {
    async Crear(request, response) {
        try { 
            const servicio = new TicketServicio();
            const {nombre, biografía, foto} = request.body;
            const Ticket = await servicio.Crear(nombre, biografía, foto);
            
            if (Ticket) {
                response.status(200).json({data: Ticket});
            }
            else {
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Modificar(request, response) {
        try { 
            const servicio = new TicketServicio();
            const {nombre, biografía, foto} = request.body;
            const id = request.params.id
            const Ticket = await servicio.Modificar(id, nombre, biografía, foto);
            
            if (Ticket) {
                response.status(200).json({data: "Se modificó con éxito :D"});
            }
            else {
                response.status(400).send('Hubo un problema al modificar');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Eliminar(request, response) {
        try { 
            const servicio = new TicketServicio();
            const id = request.params.id
            const Ticket = await servicio.Eliminar(id);
            
            if (Ticket) {
                response.status(200).json({data: "Se eliminó con éxito el Ticket"});
            }
            else {
                response.status(400).send('no hay datos u otro mensaje');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Consultar(request, response) {
        try { 
            const servicio = new TicketServicio();
            const id = request.params.id
            const Ticket = await servicio.Consultar(id);
            
            if (Ticket) {
                response.status(200).json({data: Ticket});
            }
            else {
                response.status(400).send('No se encuentra el Ticket');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new TicketServicio();
            const data = await servicio.Listar()
            if (data) {
                response.status(200).json({"data": data})
            } else {
                response.status(400).send("no hay datos y otro mensaje")
            }
        } catch (error) {
            response.status(400).send(error)
        }
    }
}

export {TicketControlador}