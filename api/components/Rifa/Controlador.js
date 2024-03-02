import { RifaServicio } from "./Service.js";

class RifaControlador {
    async Crear(request, response) {
        try { 
            const servicio = new RifaServicio();
            const {nombre, biografía, foto} = request.body;
            const Rifa = await servicio.Crear(nombre, biografía, foto);
            
            if (Rifa) {
                response.status(200).json({data: Rifa});
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
            const servicio = new RifaServicio();
            const {nombre, biografía, foto} = request.body;
            const id = request.params.id
            const Rifa = await servicio.Modificar(id, nombre, biografía, foto);
            
            if (Rifa) {
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
            const servicio = new RifaServicio();
            const id = request.params.id
            const Rifa = await servicio.Eliminar(id);
            
            if (Rifa) {
                response.status(200).json({data: "Se eliminó con éxito el Rifa"});
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
            const servicio = new RifaServicio();
            const id = request.params.id
            const Rifa = await servicio.Consultar(id);
            
            if (Rifa) {
                response.status(200).json({data: Rifa});
            }
            else {
                response.status(400).send('No se encuentra el Rifa');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new RifaServicio();
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

export {RifaControlador}