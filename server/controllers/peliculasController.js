const pool = require('../database')
const { v4: uuidv4 } = require('uuid')

exports.peliculas_mostrar= async (req, res)=>{
    const [results]= await pool.query('SELECT P.titulo, P.copias, G.nombre as genero, D.nombre as director FROM peliculas P JOIN generos G ON P.id_genero=G.id JOIN directores D ON P.id_director=D.id')
    res.json({results})
}

exports.peliculas_buscar= async (req, res)=>{
    const {titulo}=req.body
    console.log({titulo})
    const [results]= await pool.query('SELECT id FROM peliculas WHERE titulo=?',[titulo])
    console.log(results)
    res.json(results)
    // res.redirect(`peliculas/${results[0].id}`)
}

exports.peliculas_detalle= async (req, res)=>{
    const {id}=req.params
    console.log(id)
    const [results]= await pool.query('SELECT P.titulo, P.resumen, P.copias, G.nombre as genero, D.nombre as director FROM peliculas P JOIN generos G ON P.id_genero=G.id JOIN directores D ON P.id_director=D.id WHERE P.id=?',[id])
    console.log(results)
    res.json(results)
    //res.redirect(`api/catalog/peliculas/${results[0].id}`)
}
exports.peliculas_create_get=async(req, res)=>{
    const [directores]= await pool.query('SELECT * FROM directores')
    const [generos]= await pool.query('SELECT * FROM generos')
    res.json({
        directores,
        generos
    })
}
exports.peliculas_create_post=async(req, res)=>{
    console.log(req.body)
    const{titulo,director,genero,resumen,copias}=req.body
    const [insert]= await pool.query('INSERT INTO peliculas VALUES( ?,?,?,?,?,?)',[uuidv4(), titulo, director, genero, resumen, copias])
    console.log(insert)
    res.status(200)
}