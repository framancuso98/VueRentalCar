<template>
  <div class="login">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-md-offset-3">
          <h1>FORM DI LOGIN</h1>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6 col-md-offset-3 ">
          <label>Email</label>
          <input name="email" type="email" class="form-control" required v-model="username" />
        </div>
      </div>
        <div class="form-row ">
        <div class="form-group col-md-6 col-md-offset-3">
          <label>Password</label>
          <input
            name="password"
            type="password"
            class="form-control"
            required
            v-model="password"
            minlength="5"
          />
        </div>
        <ul v-if="errors">
          <ul v-for="error of errors" v-bind:key="error">
            <span class="text-danger">{{ error.message }}</span>
          </ul>
        </ul>
        <div class="form-row col-md-6 col-md-offset-3">
        <button @click="login">Login</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthDataService from "../services/authService";
import router from '../router/index'

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      errors: []
    };
  },

  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password
      };
      AuthDataService.login(data)
        .then(response => {
          console.log(response.data);
          console.log("Login ok");
          localStorage.setItem("utente", JSON.stringify(response.data));
          router.push('/home');
          console.log(localStorage.getItem("utente"))
        })
        .catch(e => {
          //this.errors.push(e),
          console.log(e);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: darkorange;
  background-color: darkred;
}
</style>
