<template>
  <section>
    <h1>Añadir Pelicula</h1>
    <label>Título</label>
    <input type="text" placeholder="Insertar título"  v-model="titulo"/>
    <label>Resumen</label>
    <textarea cols="30" rows="10" placeholder="Insertar resumen..." v-model="resumen"></textarea>
    <section class="search">
      <p>Genero:</p>
      <input type="text" v-model="genero" />
      <div id="genero">
        <div v-for="genero in searchBarGenero" :key="genero">
          <p @click="addGenero(genero.nombre, genero.id)">{{genero.nombre}}</p>
        </div>
      </div>
    </section>
    <section class="search">
      <p>Director:</p>
      <input type="text" v-model="director" />
      <div id="director">
        <div v-for="director in searchBarDirector" :key="director">
          <p @click="addDirector(director.nombre, director.id)">{{director.nombre}}</p>
        </div>
      </div>
    </section>
    <label>Copias:</label>
    <input type="number" v-model="copias"/>
    <button @click="addPelicula">Añadir Película</button>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
        directores:[],
        generos:[],
        genero:'',
        generoID:'',
        director:'',
        directorID:'',
        titulo:'',
        resumen:'',
        copias:0
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api/catalog/pelicula/create").then((response) => {
      console.log(response.data.directores);
      console.log(response.data.generos);
      this.generos = response.data.generos;
      this.directores = response.data.directores;
    });
  },
  computed: {
    searchBarDirector() {
      return this.directores.filter((director) => {
        return director.nombre.includes(this.director);
      });
    },
    searchBarGenero() {
      return this.generos.filter((genero) => {
        return genero.nombre.includes(this.genero);
      });
    },
  },methods:{
    addGenero(genero,id){
        this.genero=genero
        this.generoID=id
},
    addDirector(director,id){
        this.director=director
        this.directorID=id
    },
    addPelicula(){
        axios.post("http://localhost:3000/api/catalog/pelicula/create",{
            titulo:this.titulo,
            director:this.directorID,
            genero:this.generoID,
            resumen:this.resumen,
            copias:this.copias
        })
        window.location.reload()
    }
  }
};
</script>

<style lang="sass" scoped>
section
    display: flex
    flex-direction: column
</style>
