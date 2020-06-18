<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>FORM DI LOGIN</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <label>Email</label>
        <input name="email" type="email" class="form-control" required v-model="username" />
      </div>
    </div>
    <div class="row" v-if="!(username.length < 1) && !checkUsername()">
      <div class="col-md-6 col-md-offset-3">
        <span>{{ errors.errEmail}}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <span>{{ errors.userNull }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <label>Password</label>
        <input
          name="password"
          type="password"
          class="form-control"
          required
          v-model.lazy="password"
          minlength="5"
        />
        <div class="row" v-if="!(password.length < 1) && !checkPassword()">
          <div class="col-md-6 col-md-offset-3">
            <span>{{ errors.noMatchPass }}</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 col-md-offset-3">
            <span>{{ errors.errPass }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <button type="button" class="btn btn-primary" @click="login">Login</button>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <span>{{ errors.errGen }}</span>
        <span>{{ errors.otherErr }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import AuthDataService from "../services/authService";
import router from "../router/index";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      errors: {
        userNull: "",
        noMatchPass: "Formato password non valido!!",
        errPass: "",
        errEmail: "formato email non valido!!", 
        errGen: "",
        otherErr: "",
      },
      
      /*eslint-disable */
      regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      regPass: /[A-Za-z0-9\.\+\%&$]{6,}/,
      /*eslint-enable */
    };
  },

  methods: {
    login() {
      if (this.checkPassword() && this.checkUsername()) {
        const data = {
          username: this.username,
          password: this.password
        };
        AuthDataService.login(data)
          .then(response => {
            console.log(response.data);
            console.log("Login ok");
            localStorage.setItem("utente", JSON.stringify(response.data));
            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem(
              "username",
              JSON.stringify(response.data.username)
            );
            console.log(localStorage.getItem("token"));
            router.push("/home");
            console.log(localStorage.getItem("utente"));
          })
          .catch(e => {
            //this.errors.push(e),
            console.log(e.config);
            if (e.response.status == 401) {
              this.errPass = e.response.data.message;
            } else if (e.response.status == 404) {
              this.errors.userNull = e.response.data.message;
            } else if (e.response.status == 500) {
              this.errors.otherErr = e.response.data.message;
            }
          });
      } else {
        this.errors.errGen = "Compila correttamente tutti i campi!"
      }
    },

    checkPassword: function() {
      return (this.password.match(this.regPass))
    },

    checkUsername: function() {
     return (this.username.match(this.regEmail))   
    }
  },

  mounted() {}
};
</script>

<style scoped>
h1 {
  color: darkorange;
  background-color: darkred;
}
span {
  color: red;
}
</style>
