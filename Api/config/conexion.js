const mysql = require('mysql');
const conexion = mysql.createConnection({
host: 'localhost',
user: 'root',
password:  '',
database: 'tfc'
});

module.exports = conexion;
conexion.connect((err)=>{
    if(err){
        console.log("Ha ocurrido el error: " + err)
    }
    else{
        console.log("Conexión correcta a la base de datos")
    }
});