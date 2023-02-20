<template>
  <section>
    <h1>Directores</h1>
    <ul>
      <li v-for="director in directores" :key="director"><button @click="VerPeliculasDelDirector(director.nombre)">{{ director.nombre }}</button> </li>
    </ul>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "DirectoresView",
  data() {
    return {
      directores: [],
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api/catalog/directores").then((response) => {
      console.log(response.data.results);
      this.directores = response.data.results;
    });
  },
  methods: {
    VerPeliculasDelDirector(titulo) {
      axios
        .post("http://localhost:3000/api/catalog/directores", {
          titulo: titulo,
        })
        .then((response) => {
          console.log(response.data[0].id);
          let id = response.data[0].id;
          this.$router.push({ name: "directores_lista", params: { id } });
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
