<template>
<nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark ">
  <a class="navbar-brand">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <router-link  className="nav-link" to="/admin">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link to="/allUtenti" className="nav-link">Lista Utenti</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/addUtente" className="nav-link">Aggiungi Utente</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/allAuto" className="nav-link">Lista Auto</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/addAuto" className="nav-link">Aggiungi Auto</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/allPrenotazioni" className="nav-link"> Lista Prenotazioni </router-link>
      </li>
      
      <button type="button" class="btn btn-dark" >Logout</button>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'NavBar',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav {
    background-color:slategrey;
}
</style>