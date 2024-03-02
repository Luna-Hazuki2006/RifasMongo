import { Premios } from "../modelo.js"

class PremioServicio {
    async Crear(nombre, biografía, foto) {
        try {
            return await Premios.create({
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
            return await Premios.update({
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
            return await Premios.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Premios.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async ConsultarMultiples(ids) {
        try {
            return await Premios.findAll({where: {"id": {in: ids}}, include: [{ all: true }]})
        } catch (error) {
            
        }
    }

    async Listar() {
        try {
            return await Premios.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {PremioServicio}