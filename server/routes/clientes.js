var express = require('express');
var router = express.Router();
const pool = require('../database')
const { v4: uuidv4 } = require('uuid')

/* GET clientes page. */
router.get('/', async function(req, res, next) {
  const [clientes]= await pool.query('SELECT * FROM clientes')
  res.json({
    clientes})
});
/*guardar cliente*/
router.post('/', async function(req, res, next) {
  const {nombre}=req.body
  console.log({nombre})
  await pool.query('INSERT INTO clientes VALUES(?,?)',[uuidv4(), nombre])
  res.sendStatus(200)
});
router.get('/delete/:id', async function(req, res, next) {
  const {id}=req.params
  console.log(id)
  await pool.query('DELETE FROM clientes WHERE id=?',[id])
  res.sendStatus(200)
});

module.exports = router;