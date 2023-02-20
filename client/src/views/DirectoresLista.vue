<template>
  <section>
    <h1>{{director}}</h1>
    <div v-for="data in datas" :key="data">
      <button @click="VerPelicula(data.titulo)">{{data.titulo}}</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "GenerosListaView",
  data() {
    return {
      datas: [],
      director:''
    };
  },watch:{
    "$route.params.id"(newId) {
      console.log(newId)
      axios
      .get("http://localhost:3000/api/catalog/directores/"+newId).then((response)=>{
        console.log(response.data)
        this.datas=response.data
        this.director=response.data[0].director
      })
    },
  },
  async created() {
    await axios
      .get("http://localhost:3000/api/catalog/directores/"+this.$route.params.id).then((response)=>{
        console.log(response.data)
        this.datas=response.data
        this.director=response.data[0].director
      })
  },methods:{
    VerPelicula(titulo){
      axios.post("http://localhost:3000/api/catalog/peliculas",{
        titulo:titulo
      }).then((response)=>{
        console.log(response.data[0].id)
        let id=response.data[0].id
        this.$router.push({name: 'peliculas_detalle', params: {id}})
      })
    }
  }
};
</script>

<style>

</style>