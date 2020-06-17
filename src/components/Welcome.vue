<template>
  <div class="welcome">
    <div class="jumbotron">
      <h1 class="tit">Welcome in</h1>
      <h2 class="tit">Rental Car</h2>
    </div>
    <div class="grid grid-pad">
      <div class="row">
        <div class="col-12 col-md-6">
            <button type="button" class="btn btn-secondary col-md-8" @click="login">
              <h4>LOGIN</h4>
            </button>
        </div>
        <div class="col-12 col-md-6">
            <button type="button" class="btn btn-secondary col-md-8" @click="signIn">
              <h4>REGISTRATI</h4>
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '../router/index';

export default {
  name: "Welcome",

  methods: {
    login() {
      router.push("/login")
    },
    signIn() {
      router.push("/signIn")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
  background-color: darkorange;
}
.tit{
  color: darkred;
}

</style>