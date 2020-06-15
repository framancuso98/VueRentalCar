<template>
  <div class="container">
      <h1>REGISTRATI</h1>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" required v-model="username" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            required
            v-model="password"
          />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputNome">Nome</label>
          <input type="text" class="form-control" id="inputNome" required v-model="nome" />
        </div>
        <div class="form-group col-md-6">
          <label for="inputCognome">Cognome</label>
          <input type="text" class="form-control" id="inputCognome" required v-model="cognome" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputData">Data di Nascita</label>
          <input type="date" class="form-control" id="inputData" required v-model="data_nascita" />
        </div>
      </div>
      <button type="submit" class="btn btn-primary" @click="salvaUtente">Sign in</button>
    
  </div>
</template>

<script>
import AuthDataService from "../services/authService";
import router from '../router/index';

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
        ruoloId: this.ruoloId
      };
      AuthDataService.signIn(data)
        .then(response => {
          console.log(response.data), console.log("REGISTRAZIONE AVVENUTA");
          router.push("/login");
        })
        .catch(e => {
          console.log(e);
        });
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
.form{
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}
</style>
