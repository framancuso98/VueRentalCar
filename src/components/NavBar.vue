<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/allUtenti">Lista Utenti</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/allAuto">Lista Auto</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="/allPrenotazioni">Lista Prenotazioni <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/addUtente">Aggiungi Utente</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="/addAuto">Agiungi Auto</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn btn-dark my-2 my-sm-0" type="submit" >Logout</button>
    </form>
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