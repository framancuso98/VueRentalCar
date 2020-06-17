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
        <input name="email" type="email" class="form-control" required v-model="username"/>
      </div>
    </div>
    <div class="row" v-if="!(username.length < 1) && !checkUsername()">
      <div class="col-md-6 col-md-offset-3">
        <span>{{ emailErr }}</span>
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
      </div>
    </div>
    <div class="row" v-if="!(password.length < 1) && !checkPassword()">
      <div class="col-md-6 col-md-offset-3">
        <span>{{ passErr }}</span>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3" >
        <button type="button" class="btn btn-primary" @click="login">Login</button>
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
      errors: [],
      passErr: "",
      emailErr: "",
      /*eslint-disable */
      regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      regPass: /[A-Za-z0-9\.\+\%&$]{6,}/,
      /*eslint-enable */
      passOk: Boolean,
      emailOk: Boolean,
      
    };
  },

  methods: {
    login() {
      if(this.checkPassword() && this.checkUsername()){
        this.passOk= false;
        this.emailOk= false;
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
          console.log(e);
        });
      } else {
        this.passOk= true;
        this.emailOk= true;
      }
    },

    checkPassword : function(){
      if(this.password.match(this.regPass)){
        this.passErr="";
        console.log("ciaooo")
        console.log(this.password.length)
        return true;
      } else {
        
        this.passErr= "Password troppo corta!!!"
        return false;
      }
    },


     checkUsername : function(){
      if(this.username.match(this.regEmail)){
        console.log("ok")
        this.emailErr="";
        return true;
      } else {
        this.emailErr="formato email non valido!!"
        return false;
      }
    },

    
    
    
  },

  mounted() {
  },

};
</script>

<style scoped>
h1 {
  color: darkorange;
  background-color: darkred;
}
span{
  color: red;
}


</style>
