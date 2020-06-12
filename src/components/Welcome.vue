<template>
  <div class="welcome">
    <div class="jumbotron">
      <h1>Welcome in</h1>
      <h2>Rental Car</h2>
    </div>
    <div class="grid grid-pad">
      <div class="row">
        <div class="col-12 col-md-6">
            <button class="col-md-8 button module">
              <router-link to="/login"><h4>LOGIN</h4></router-link>
            </button>
        </div>
        <div class="col-12 col-md-6">
            <button class="col-md-8 button module">
              <router-link to="/signIn"><h4>REGISTRATI</h4></router-link>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>