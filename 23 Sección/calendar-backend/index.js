const express = require('express'); //import '' from '' - No está funcionando en node
require('dotenv').config();
//Creando el servidor
const app = express();

//Directorio publico
//use, funcion que se ejecuta cuando pasa sobre un lugar
app.use(express.static('public'));
app.use( express.json());
//Rutas
//TODO: auth //crear, login
app.use('/api/auth',require('./routes/auth')); //lo del archivo se reconoce en esa ruta

//TODO: CRUD: Eventos



//Escuchar peticiones
//process.env
app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en el puerto: ${4000}`)
})