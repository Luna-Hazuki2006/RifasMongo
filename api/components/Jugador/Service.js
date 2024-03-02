import { Jugadores } from "../modelo.js"

class JugadorServicio {
    async Crear(nombre, biografía, foto) {
        try {
            return await Jugadores.create({
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
            return await Jugadores.update({
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
            return await Jugadores.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Jugadores.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async ConsultarMultiples(ids) {
        try {
            return await Jugadores.findAll({where: {"id": {in: ids}}, include: [{ all: true }]})
        } catch (error) {
            
        }
    }

    async Listar() {
        try {
            return await Jugadores.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {JugadorServicio}