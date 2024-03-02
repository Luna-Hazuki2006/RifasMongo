import { Rifas } from "../modelo.js"

class RifaServicio {
    async Crear(nombre, biografía, foto) {
        try {
            return await Rifas.create({
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
            return await Rifas.update({
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
            return await Rifas.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Rifas.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async ConsultarMultiples(ids) {
        try {
            return await Rifas.findAll({where: {"id": {in: ids}}, include: [{ all: true }]})
        } catch (error) {
            
        }
    }

    async Listar() {
        try {
            return await Rifas.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {RifaServicio}