<template>
  <section>
    <label>Genero</label>
    <input type="text" v-model="genero" placeholder="Añadir genero..." />
    <button @click="CrearGenero()">Añadir genero</button>
    <label>Director</label>
    <input type="text" v-model="director" placeholder="Añadir director.." />
    <button @click="CrearDirector()">Añadir director</button>
  </section>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            genero:'',
            director:''
        }
    },
    methods:{
        CrearDirector(){
            axios.post('http://localhost:3000/api/catalog/directores/crear',{
            director:this.director
            })
            .then((response)=>{
            console.log(response)
            })
        },
        CrearGenero(){
            axios.post('http://localhost:3000/api/catalog/generos/crear',{
            genero:this.genero}).then((response)=>{
            console.log(response)
        })
        }

    }
}
</script>

<style></style>
