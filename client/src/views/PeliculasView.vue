<template>
  <section class="search">
    <h1>Películas</h1>
    <input type="titulo" v-model="titulo" placeholder="Buscar película..." @keyup.enter="Buscar()">
      <!-- <div v-for="(pelicula) in peliculas" :key="pelicula">
      <p>{{pelicula.titulo}}</p>
      <p>{{pelicula.genero}}</p>
      <p>{{pelicula.director}}</p>
      <p>{{pelicula.copias}}</p>
      <button @click="VerPelicula(pelicula.titulo)">Ver película</button>
    </div> -->
    
    <hr>
    <div v-for="(pelicula) in searchBar" :key="pelicula">
      <p>{{pelicula.titulo}}</p>
      <p>{{pelicula.genero}}</p>
      <p>{{pelicula.director}}</p>
      <p>{{pelicula.copias}}</p>
      <button @click="VerPelicula(pelicula.titulo)">Ver película</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  components: {},
  data(){
    return{
      titulo:'',
      peliculas:[]
    }
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/catalog/peliculas")
      .then((response) => {
        console.log(response.data.results)
        this.peliculas=response.data.results
        });
  },
  methods:{
    Buscar(){
      axios.post("http://localhost:3000/api/catalog/peliculas",{
        titulo:this.titulo
      }).then((response)=>{
        console.log(response.data[0].id)
        let id=response.data[0].id
        this.$router.push({name: 'peliculas_detalle', params: {id}})
      })
    },
    VerPelicula(titulo){
      axios.post("http://localhost:3000/api/catalog/peliculas",{
        titulo:titulo
      }).then((response)=>{
        console.log(response.data[0].id)
        let id=response.data[0].id
        this.$router.push({name: 'peliculas_detalle', params: {id}})
      })
    }
    
  },
  computed:{
    searchBar(){
      return this.peliculas.filter((pelicula)=>{
        return pelicula.titulo.includes(this.titulo)})
    }
  }
};
</script>
<style lang="sass" scoped>
  .search
    display: flex
    flex-direction: column
    align-items: center
    justify-content: flex-start
    width: 100%
    height: 100vh
    padding: 2rem 1rem
    input
      width: 90%
      border: none
      border-bottom: 1px solid gray
      outline: none
    div
      display: flex
      flex-direction: row
      align-items: center
      justify-content: space-between
      width: 90%
      border: 1px solid gray
      padding: .5rem
      margin: .5rem 0
      p
        margin: 0 .5rem

</style>
