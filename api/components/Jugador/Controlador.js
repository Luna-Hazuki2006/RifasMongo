import { JugadorServicio } from "./Service.js";

class JugadorControlador {
    async Crear(request, response) {
        try { 
            const servicio = new JugadorServicio();
            const {nombre, biografía, foto} = request.body;
            const Jugador = await servicio.Crear(nombre, biografía, foto);
            
            if (Jugador) {
                response.status(200).json({data: Jugador});
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
            const servicio = new JugadorServicio();
            const {nombre, biografía, foto} = request.body;
            const id = request.params.id
            const Jugador = await servicio.Modificar(id, nombre, biografía, foto);
            
            if (Jugador) {
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
            const servicio = new JugadorServicio();
            const id = request.params.id
            const Jugador = await servicio.Eliminar(id);
            
            if (Jugador) {
                response.status(200).json({data: "Se eliminó con éxito el Jugador"});
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
            const servicio = new JugadorServicio();
            const id = request.params.id
            const Jugador = await servicio.Consultar(id);
            
            if (Jugador) {
                response.status(200).json({data: Jugador});
            }
            else {
                response.status(400).send('No se encuentra el Jugador');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new JugadorServicio();
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

export {JugadorControlador}