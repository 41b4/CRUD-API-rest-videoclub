<template>
  <section>
    <h1>Géneros</h1>
    <ul>
      <li v-for="genero in generos" :key="genero"><button @click="VerPeliculasDelGenero(genero.nombre)">{{ genero.nombre }}</button> </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "GenerosView",
  data() {
    return {
      generos: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api/catalog/generos").then((response) => {
      console.log(response.data.results);
      this.generos = response.data.results;
    });
  },
  methods: {
    VerPeliculasDelGenero(titulo) {
      axios
        .post("http://localhost:3000/api/catalog/generos", {
          titulo: titulo,
        })
        .then((response) => {
          console.log(response.data[0].id);
          let id = response.data[0].id;
          this.$router.push({ name: "generos_lista", params: { id } });
        });
    },
  },
};
</script>

<style lang="sass" scoped>
section
    margin: 1rem
    ul
        li
            
            button
                border: none
                background: none
                &:hover
                    border-bottom: 1px solid black
</style>
