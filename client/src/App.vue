<template>
<section class="container">
  <nav>
    <router-link to="/">VideoClub Local</router-link>
    <router-link to="/catalog/peliculas">Peliculas</router-link>
    <router-link to="/catalog/generos">Generos</router-link>
    <router-link to="/catalog/directores">Directores</router-link>
    <router-link to="/prestamos">Prestamos</router-link>
    <router-link to="/catalog/pelicula/create">Añadir Pelicula</router-link>
    <router-link to="/catalog/crear">Añadir genero/director</router-link>
    <router-link to='/clientes'>Zona Clientes</router-link>
  </nav>
  <router-view/>
</section>
  
</template>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box
  font-family: 'Poppins', sans-serif
  text-decoration: none
.container
  display: flex
  flex-direction: row
  align-items: flex-start
  justify-content: flex-start
  nav
    background: lightgray
    width: 30vh
    height: 80vh
    margin: 1rem
    padding: 1rem
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: flex-start
    font-weight: 500
    a
      color: black


</style>
