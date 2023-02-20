const pool = require('../database')
const { v4: uuidv4 } = require('uuid')

exports.generos_mostrar= async (req, res)=>{
    const [results]= await pool.query('SELECT * FROM generos')
    res.json({results})
}

exports.generos_buscar= async (req, res)=>{
    const {titulo}=req.body
    console.log({titulo})
    const [results]= await pool.query('SELECT * FROM peliculas P JOIN generos G ON G.id=P.id_genero WHERE G.nombre=?',[titulo])
    console.log(results)
    res.json(results)
    // res.redirect(`peliculas/${results[0].id}`)
}

exports.generos_detalle= async (req, res)=>{
    const {id}=req.params
    console.log(id)
    const [results]= await pool.query('SELECT P.titulo, P.resumen, P.copias, G.nombre as genero, D.nombre as director FROM peliculas P JOIN generos G ON P.id_genero=G.id JOIN directores D ON P.id_director=D.id WHERE G.id=?',[id])
    console.log(results)
    res.json(results)
    //res.redirect(`api/catalog/peliculas/${results[0].id}`)
}

exports.generos_crear=async(req, res)=>{
    const {genero}=req.body
    console.log(genero)
    const [results]=await pool.query('INSERT INTO generos VALUES(?,?)',[uuidv4(), genero])
    res.json(results)
}