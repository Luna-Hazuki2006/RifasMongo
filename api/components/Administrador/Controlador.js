import { AdministradorServicio } from "./Service.js";

class AdministradorControlador {
    async Crear(request, response) {
        try { 
            const servicio = new AdministradorServicio();
            const {nombre, biografía, foto} = request.body;
            const Administrador = await servicio.Crear(nombre, biografía, foto);
            
            if (Administrador) {
                response.status(200).json({data: Administrador});
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
            const servicio = new AdministradorServicio();
            const {nombre, biografía, foto} = request.body;
            const id = request.params.id
            const Administrador = await servicio.Modificar(id, nombre, biografía, foto);
            
            if (Administrador) {
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
            const servicio = new AdministradorServicio();
            const id = request.params.id
            const Administrador = await servicio.Eliminar(id);
            
            if (Administrador) {
                response.status(200).json({data: "Se eliminó con éxito el Administrador"});
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
            const servicio = new AdministradorServicio();
            const id = request.params.id
            const Administrador = await servicio.Consultar(id);
            
            if (Administrador) {
                response.status(200).json({data: Administrador});
            }
            else {
                response.status(400).send('No se encuentra el Administrador');
            }
        }
        catch(error) {
            response.status(400).send(error)
        }
    }

    async Listar(request, response) {
        try {
            const servicio = new AdministradorServicio();
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

export {AdministradorControlador}