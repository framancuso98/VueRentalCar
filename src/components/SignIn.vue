<template>
  <div class="container">
    <h1>REGISTRATI</h1>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputEmail">Email</label>
        <input type="email" class="form-control" id="inputEmail" required v-model="username" />

        <div class="row" v-if="!(username.length < 2) && !checkUsername()">
          <div class="col">
            <span>{{ emailErr }}</span>
          </div>
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="inputPassword">Password</label>
        <input type="password" class="form-control" id="inputPassword" required v-model="password" />

        <div class="row" v-if="!(password.length < 1) && !checkPass()">
          <div class="col">
            <span>Password troppo corta, minimo 6 caratteri!!</span>
          </div>
        </div>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputNome">Nome</label>
        <input type="text" class="form-control" id="inputNome" required v-model="nome" />

        <div class="row" v-if="(nome.length > 1) && !checkNome()">
          <div class="col">
            <span>Nome troppo corto!!</span>
          </div>
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="inputCognome">Cognome</label>
        <input type="text" class="form-control" id="inputCognome" required v-model="cognome" />

        <div class="row" v-if="(cognome.length > 1) && !checkCognome()">
          <div class="col">
            <span>Cognome troppo corto!!</span>
          </div>
        </div>
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="inputData">Data di Nascita</label>
        <input type="date" class="form-control" id="inputData" required v-model="data_nascita" />

        <div class="row" v-if="checkData()">
          <div class="col">
            <span>Inserisci la data di nascita</span>
          </div>
        </div>
      </div>
    </div>
    <button type="button" class="btn btn-primary" @click="salvaUtente">Sign in</button>
    <div class="row" v-if="errgen">
      <div class="col-md-6 col-md-offset-3">
        <span>{{ errgen }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import AuthDataService from "../services/authService";
import router from "../router/index";

export default {
  name: "SignIn",
  data() {
    return {
      username: "",
      password: "",
      nome: "",
      cognome: "",
      data_nascita: null,
      ruoloId: 2,
      errgen: null,
      /*eslint-disable */
      regEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      regPass: /[A-Za-z0-9\.\+\%&$]{6,}/,
      regNomCog:/[A-Za-z+/ +/]{4,}/,
      /*eslint-enable */
      passOk: Boolean,
      emailOk: Boolean
    };
  },

  methods: {
    salvaUtente() {
      if (
        this.checkUsername() &&
        this.checkNome() &&
        this.checkCognome() &&
        this.checkPass() &&
        this.checkData()
      ) {
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
      } else {
        this.errgen = "Compila Correttamente tutti i campi!!";
      }
    },

    checkUsername: function() {
      if (this.username.match(this.regEmail)) {
        console.log(" username true");
        this.emailErr = "";
        return true;
      } else {
        this.emailErr = "formato email non valido!!";
        return false;
      }
    },

    checkNome: function() {
      if (this.nome.match(this.regNomCog)) {
        console.log("nome true");
        return true;
      } else {
        return false;
      }
    },

    checkCognome: function() {
      if (this.cognome.match(this.regNomCog)) {
        console.log("cognome true");
        return true;
      } else {
        
        return false;
      }
    },

    checkPass: function() {
      if (this.password.match(this.regPass)) {
        console.log("password true");
        return true;
      } else {
        
        return false;
      }
    },

    checkData: function() {
      if (this.data_nascita != null) {
        console.log("data true");
        return true;
      } else {
        return false;
      }
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
.form {
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}
span {
  color: red;
}
</style>
