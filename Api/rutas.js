const rutas = require('express').Router()
const conexion = require('./config/conexion')

module.exports = rutas;
rutas.get('/empleados', function(req, res){
    let sql = 'select * from empleados order by idEncargado asc'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});
/*
rutas.get('/cajas1', function(req, res){
    let sql = 'SELECT COUNT(*) FROM linea1 WHERE idEmpleado = ?'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});
rutas.get('/cajas2', function(req, res){
    let sql = 'SELECT COUNT(*) FROM linea2 WHERE idEmpleado = ?'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});
*/
rutas.get('/empleados/:idEncargado', function(req, res){
    const {idEncargado} = req.params
    let sql = 'select * from empleados where idEncargado = ?'
    conexion.query(sql,[idEncargado], (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

rutas.get('/linea1', function(req, res){
    let sql = 'select * from linea1 order by idEmpleado asc'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

rutas.get('/linea2', function(req, res){
    let sql = 'select * from linea2 order by idEmpleado asc'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

rutas.get('/fichajes', function(req, res){
    let sql = 'select * from fichajes order by idEmpleado asc'
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err;
        else{
            res.json(rows)
        }
    })
});

// agregar empleados
rutas.post('/empleados', (req, res)=>{
    const{nombre, apellido1, apellido2} = req.body

    let sql = `insert into empleados(nombre, apellido1, apellido2) values('${nombre}','${apellido1}','${apellido2}')`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Empleado agregado'})
        }
    })
});

// eliminar empleados
rutas.delete('/empleados/:idEncargado', (req, res)=>{
    const{idEncargado}=req.params

    let sql = `delete from empleados where idEncargado = '${idEncargado}'`
    conexion.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Empleado eliminado'})
        }
    })
});

/*
// modificar empleado
rutas.put('/empleados/:idEncargado', (req, res)=>{
const{idEncargado}=req.params
const{nombre, apellido1, apellido2} = req.body

let sql = `update empleados set nombre = '${nombre}', apellido1 = '${apellido1}', apellido2 = '${apellido2}' where idEncargado = '${idEncargado}'`
conexion.query(sql, (err, rows, fields)=>{
    if(err) throw err
    else{
        res.json({status: 'Empleado actualizado'})
    }
})
});
*/