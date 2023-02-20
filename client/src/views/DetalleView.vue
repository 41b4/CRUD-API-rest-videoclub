<template>
  <section>
    <div v-for="data in datas" :key="data">
      <h1>{{data.titulo}}</h1>
      <h3>{{data.director}}</h3>
      <h4>{{data.genero}}</h4>
      <p>{{data.resumen}}</p>
      <div id="copias">
        <p>Copias disponibles: {{data.copias}}</p>
      </div>
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
      datas:[]
    }
  },watch:{
    "$route.params.id"(newId) {
      console.log(newId)
      axios
      .get("http://localhost:3000/api/catalog/peliculas/"+newId).then((response)=>{
        console.log(response.data)
        this.datas=response.data
      })
    },
  },
  async created() {
    await axios
      .get("http://localhost:3000/api/catalog/peliculas/"+this.$route.params.id).then((response)=>{
        console.log(response.data)
        this.datas=response.data
      })
  }
};
</script>
<style lang="sass" scoped>
  section
    margin: 1rem
    #copias
      background: lightgray
      padding: .5rem
</style>