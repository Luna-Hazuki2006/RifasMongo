import { Tickets } from "../modelo.js"

class TicketServicio {
    async Crear(nombre, biografía, foto) {
        try {
            return await Tickets.create({
                nombre,
                biografía, 
                foto
              });
        }
        catch(error) {
            throw error
        }
    }
// ok
    async Modificar(id, nombre, biografía, foto) {
        try {
            return await Tickets.update({
                nombre, 
                biografía, 
                foto
            }, {where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Eliminar(id) {
        try {
            return await Tickets.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Tickets.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async ConsultarMultiples(ids) {
        try {
            return await Tickets.findAll({where: {"id": {in: ids}}, include: [{ all: true }]})
        } catch (error) {
            
        }
    }

    async Listar() {
        try {
            return await Tickets.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {TicketServicio}