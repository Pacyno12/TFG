require('./config/conexion');

const express = require('express');
const port = (process.env.port || 3000);

// express
const app = express();
app.use(express.json())

// config
app.set('port', port);

// rutas
app.use('/', require('./rutas'))

// iniciar express
app.listen(app.get('port'), (error)=>{
    if (error) {
        console.log('Error al iniciar el servidor: ' + error)
    }
    else{
        console.log('Servidor iniciado correctamente en el puerto: ' + port)
    }
});