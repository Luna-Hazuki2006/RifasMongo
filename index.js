import parser from 'body-parser'
import express from 'express';

import { router } from './api/router.js'
import { mongo } from './api/config/coneccion.js';

const app = express();
// y también le hice los cambios que me dijo de nombres de los archivos
// ¿¿¿???
app.use(parser.json())

const routerExpress = express.Router();

router(routerExpress)

app.use(routerExpress)

const port = 9000;
// :v profe... ¿y ahora qué hice? :'v
mongo
.connect()
.then(() => {
    console.log("Conección exitosa");
})
.then(() => {
    console.log("Documentos sincronizados");
    app.listen(port, () => {
        console.log(`Server listen on http://localhost:${port}`);
    })
})
.catch((error) => {
    console.log("Conección fallida", error);
})
// .authenticate()
// .then(() => {
//     console.log('Connection success');
//     return mongo.sync();
// })
// .then(() => {
//     console.log('Sync models');
//     app.listen(port, () => {
//         console.log(`Server listen on http://localhost:${port}`);
//     });
// })
// .catch((error) => {
//     console.error('Connection fail', error);
// });