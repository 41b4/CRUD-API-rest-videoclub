<template>
  <section>
    <div>
      <p>titulo</p>
      <p>fecha_prestamo</p>
      <p>fecha devolucion</p>
      <p>cliente</p>
      <p>Devolucion</p>
    </div>
    <div v-for="prestamo in prestamos" :key="prestamo">
      <p>{{ prestamo.titulo }}</p>
      <p>{{ prestamo.fecha_prestamo }}</p>
      <p>{{ prestamo.fecha_devolcion }}</p>
      <p>{{ prestamo.cliente }}</p>
      <button @click="devolver(prestamo.id)">Devolver</button>
    </div>
    <hr />
    <div class="prestamo">
      <p>Nuevo préstamo</p>

      <section class="search">
        <p>Cliente:</p>
        <input type="text" v-model="cliente"/>
        <div id="cliente">
          <div v-for="cliente in searchBarClientes" :key="cliente">
            <p @click="addCliente(cliente.nombre, cliente.id)">{{cliente.nombre}}</p>
          </div>
        </div>
      </section>
      <section class="search">
        <p>Titulo:</p>
        <input type="text" v-model="titulo" />
        <div id="pelicula">
          <div v-for="pelicula in searchBar" :key="pelicula">
            <p @click="addPelicula(pelicula.titulo, pelicula.id)">{{ pelicula.titulo }}</p>
          </div>
        </div>
      </section>
      <section>
        Prestamo:
        <p>Cliente: {{cliente}}</p>
        <p>Película: {{titulo}}</p>
        <button @click="addPrestamo()">Añadir préstamo</button>
      </section>
      
    </div>

    <div></div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      prestamos: [],
      clientes: [],
      peliculas: [],
      titulo: "",
      cliente: "",
      clienteID:'',
      peliculaID:''
    };
  },
  mounted() {
    axios.get("http://localhost:3000/api/prestamos").then((response) => {
      console.log(response.data.results);
      console.log(response.data.peliculas);
      console.log(response.data.clientes);
      this.prestamos = response.data.results;
      this.clientes = response.data.clientes;
      this.peliculas = response.data.peliculas;
    })
  },
  methods: {
    devolver(id) {
      axios.get("http://localhost:3000/api/prestamos/delete/" + id);
      window.location.reload();
    },
    addCliente(cliente,id){
        this.cliente=cliente
        this.clienteID=id
},
    addPelicula(pelicula,id){
        this.titulo=pelicula
        this.peliculaID=id
    },
    addPrestamo(){
        axios.post("http://localhost:3000/api/prestamos",{
            cliente:this.clienteID,
            titulo:this.peliculaID
        })
        window.location.reload()
    }
  },
  computed: {
    searchBar() {
      return this.peliculas.filter((pelicula) => {
        return pelicula.titulo.includes(this.titulo);
      });
    },
    searchBarClientes() {
      return this.clientes.filter((cliente) => {
        return cliente.nombre.includes(this.cliente);
      });
    },
  },
};
</script>

<style lang="sass" scoped>
section
    display: flex
    flex-direction: column
    margin: 1rem
    width: 100%
    div
        width: 90%
        display: flex
        flex-direction: row
        align-items: center
        justify-content: space-between
    .prestamo
        align-items: flex-start
        border: 1px solid gray
        #cliente, #pelicula
            height: 100%
            border: 1px solid gray
            display: flex
            flex-direction: column
            overflow: hidden
            overflow-y: scroll
            max-height: 5rem
            div
                &:hover
                    background: lightgray
</style>
