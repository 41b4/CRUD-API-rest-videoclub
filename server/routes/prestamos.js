var express = require('express');
var router = express.Router();
const pool = require('../database')

/* GET prestamos page. */
router.get('/', async function(req, res, next) {
  const [results]= await pool.query('SELECT R.*, P.titulo, C.nombre as cliente FROM prestamos R JOIN peliculas P ON P.id=R.pelicula_id JOIN clientes C ON C.id=R.cliente_id')
  const [clientes]= await pool.query('SELECT * FROM clientes')
  const [peliculas]= await pool.query('SELECT * FROM peliculas')
  res.json({
    results,
    peliculas,
    clientes})
});
router.post('/', async function(req, res, next) {
  const {cliente,titulo}=req.body
  console.log({cliente,titulo})
  const [disponible]= await pool.query('SELECT copias FROM peliculas WHERE id=?',[titulo])
  console.log(disponible[0].copias)
  if (disponible[0].copias<1){
    return res.json({respuesta:'No hay copias disponibles'})
  }
  await pool.query('INSERT INTO prestamos VALUES(NULL,Now(),CURDATE() + INTERVAL 3 DAY, ?, ?)',[titulo, cliente])
  await pool.query('UPDATE peliculas SET copias=copias-1 WHERE id=?',[titulo])
  res.status(200)
});
router.get('/delete/:id', async function(req, res, next) {
  const {id}=req.params
  console.log(id)
  await pool.query('UPDATE peliculas AS P JOIN prestamos AS R ON R.pelicula_id=P.id SET P.copias=P.copias+1  WHERE R.id=?',[id])
  await pool.query('DELETE FROM prestamos WHERE id=?',[id])
  
  res.status(200)
});

module.exports = router;