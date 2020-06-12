<template>
  <div class="signIn">
    <div class="container">
      <div class="row">
        <div class=" col-12">
          <h1>REGISTRATI</h1>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Email</label>
          <input type="email" class="form-control" id="inputUsername4" required name="username" v-model="username" />
        </div>
        <div class="form-group col-md-6">
          <label>Password</label>
          <input type="password" class="form-control" id="inputPassword4" required name="password" v-model="password" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label>Nome</label>
          <input type="text" class="form-control" id="inputNome" required name="nome" v-model="nome" />
        </div>
        <div class="form-group col-md-6">
          <label>Cognome</label>
          <input type="text" class="form-control" id="inputCognome" required name="cognome" v-model="cognome" />
        </div>
      </div>
      <div class="form-row"></div>
      <div class="form-group col-md-6">
        <label>Data di nascita</label>
        <input type="date" class="form-control" id="inputDataNascita" required name="data_nascita" v-model="data_nascita" />
      </div>
      <div class="form-row">
        <div class="col-lg-12">
          <button type="submit" class="btn btn-primary" @click="salvaUtente">
            <i class="fa fa-floppy-o" aria-hidden="true">Sign in</i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthDataService from "../services/authService";

export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: "",
      nome: "",
      cognome: "",
      data_nascita: "",
      ruoloId: 2
    };
  },

  methods: {
    salvaUtente() {
      const data = {
        username: this.username,
        password: this.password,
        nome: this.nome,
        cognome: this.cognome,
        data_nascita: this.data_nascita,
        ruoloId: this.ruoloId,   
      };
      AuthDataService.signIn(data)
      .then(response => {
          console.log(response.data),
          console.log("REGISTRAZIONE AVVENUTA")
      })
      .catch(e => {
          console.log(e)
      })
      console.log(data);
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
  color: darkorange;
  background-color: darkred;
}
</style>
