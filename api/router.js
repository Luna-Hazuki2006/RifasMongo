import { JugadorRouter } from "../api/components/Jugador/Router.js";
import { PremioRouter } from "../api/components/Premio/Router.js";
import { AdministradorRouter } from "../api/components/Administrador/Router.js";
import { RifaRouter } from "../api/components/Rifa/Router.js";
import { TicketRouter } from "../api/components/Ticket/Router.js";

const router = (app) => {
    JugadorRouter(app)
    PremioRouter(app)
    AdministradorRouter(app)
    RifaRouter(app)
    TicketRouter(app)
}

export {router}