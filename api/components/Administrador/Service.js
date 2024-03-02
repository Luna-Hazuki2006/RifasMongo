import { Administradores } from "../modelo.js"

class AdministradorServicio {
    async Crear(nombre, biografía, foto) {
        try {
            return await Administradores.create({
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
            return await Administradores.update({
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
            return await Administradores.destroy({where: {"id": id}})
        } catch (error) {
            throw error
        }
    }

    async Consultar(id) {
        try {
            return await Administradores.findOne({where: {"id": id}, include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }

    async ConsultarMultiples(ids) {
        try {
            return await Administradores.findAll({where: {"id": {in: ids}}, include: [{ all: true }]})
        } catch (error) {
            
        }
    }

    async Listar() {
        try {
            return await Administradores.findAll({include: [{ all: true }]})
        } catch (error) {
            throw error
        }
    }
}

export {AdministradorServicio}