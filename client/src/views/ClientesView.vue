<template>
  <section>
    <div>
      <h1>Ver clientes</h1>
      <input type="text" placeholder="Buscar cliente..." />
      <div>
        <div v-for="cliente in clientes" :key="cliente">
          <p>{{ cliente.nombre }}</p>
          <button @click="borrarCliente(cliente.id)">Borrar cliente</button>
        </div>
      </div>
    </div>
    <div>
      <h1>Crear Clientes</h1>
      <input type="text" placeholder="Nombre del cliente" v-model="nombre" />
      <button @click="guardarCliente">Guardar cliente</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      clientes: [],
      nombre: "",
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api/clientes").then((response) => {
      console.log(response.data.clientes);
      this.clientes = response.data.clientes;
    });
  },
  methods: {
    guardarCliente() {
      axios.post("http://localhost:3000/api/clientes", {
        nombre: this.nombre,
      });
      window.location.reload()
    },
    borrarCliente(id) {
      axios
        .get("http://localhost:3000/api/clientes/delete/" + id)
        .then((response) => {
          console.log(response);
        });
        window.location.reload()
    },
  },
};
</script>

<style></style>
