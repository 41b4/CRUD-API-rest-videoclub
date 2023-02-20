const pool = require('../database')
const { v4: uuidv4 } = require('uuid')

exports.directores_mostrar= async (req, res)=>{
    const [results]= await pool.query('SELECT * FROM directores')
    res.json({results})
}

exports.directores_buscar= async (req, res)=>{
    const {titulo}=req.body
    console.log({titulo})
    const [results]= await pool.query('SELECT * FROM peliculas P JOIN directores D ON D.id=P.id_director WHERE D.nombre=?',[titulo])
    console.log(results)
    res.json(results)
    // res.redirect(`peliculas/${results[0].id}`)
}

exports.directores_detalle= async (req, res)=>{
    const {id}=req.params
    console.log(id)
    const [results]= await pool.query('SELECT P.titulo, P.resumen, P.copias, G.nombre as genero, D.nombre as director FROM peliculas P JOIN generos G ON P.id_genero=G.id JOIN directores D ON P.id_director=D.id WHERE D.id=?',[id])
    console.log(results)
    res.json(results)
    //res.redirect(`api/catalog/peliculas/${results[0].id}`)
}

exports.directores_crear=async(req, res)=>{
    const {director}=req.body
    const [response]=await pool.query('INSERT INTO directores VALUES(?,?)',[uuidv4(), director])
    res.json(response)
}