var express = require('express');
var router = express.Router();

//traernos los controladores
const peliculas_controller= require('../controllers/peliculasController')
const generos_controller= require('../controllers/generosController')
const directores_controller= require('../controllers/directoresController')

/* GET listing. */
router.get('/', function(req, res, next) {
  res.send('catalog');
});

// peliculas
router.get('/peliculas', peliculas_controller.peliculas_mostrar)//mostrar todas las pelis
router.post('/peliculas', peliculas_controller.peliculas_buscar)//burcar film
router.get('/peliculas/:id', peliculas_controller.peliculas_detalle)//mostrar film
router.get('/pelicula/create',peliculas_controller.peliculas_create_get)
router.post('/pelicula/create',peliculas_controller.peliculas_create_post)

// generos
router.get('/generos',generos_controller.generos_mostrar)
router.post('/generos',generos_controller.generos_buscar)
router.get('/generos/:id',generos_controller.generos_detalle)
router.post('/generos/crear',generos_controller.generos_crear)

// directores
router.get('/directores',directores_controller.directores_mostrar)
router.post('/directores',directores_controller.directores_buscar)
router.get('/directores/:id',directores_controller.directores_detalle)
router.post('/directores/crear',directores_controller.directores_crear)

module.exports = router;
