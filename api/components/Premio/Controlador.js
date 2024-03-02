import { PremioServicio } from "./Service.js";

class PremioControlador {
    async Crear(request, response) {
        try { 
            const servicio = new PremioServicio();
            const {nombre, biografía, foto} = request.body;
            const Premio = await servicio.Crear(nombre, biografía, foto);
            
            if (Premio) {
                response.status(200).json({data: Premio});
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
            const servicio = new PremioServicio();
            const {nombre, biografía, foto} = request.body;
            const id = request.params.id
            const Premio = await servicio.Modificar(id, nombre, biografía, foto);
            
            if (Premio) {
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
            const servicio = new PremioServicio();
            const id = request.params.id
            const Premio = await servicio.Eliminar(id);
            
            if (Premio) {
                response.status(200).json({data: "Se eliminó con éxito el Premio"});
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
            const servicio = new PremioServicio();
            const id = request.params.id
            const Premio = await servicio.Consultar(id);
            
            if (Premio) {
                response.status(200).json({data: Premio});
            }
            else {
                response.status(400).send('No se encuentra el Premio');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new PremioServicio();
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

export {PremioControlador}