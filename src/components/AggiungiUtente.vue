<template>
  <div>
    <NavBar />
    <h1>Aggiungi Utente</h1>
    <div class="form">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail">Email</label>
          <input type="email" class="form-control" id="inputEmail" required v-model="username" />
          <div class="row" v-if="!(username.length < 2) && !checkUsername()">
            <div class="col">
              <span>Formato email non corretto!</span>
            </div>
          </div>
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

          <div class="row" v-if="!checkData()">
            <div class="col">
              <span>Inserisci la data di nascita</span>
            </div>
          </div>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">Ruolo</label>
          <select id="inputState" class="form-control" v-model="ruoloId">
            <option value="2">USER</option>
            <option value="1">ADMIN</option>
          </select>
        </div>
        <div class="row" v-if="errgen">
          <div class="col-12">
            <span>{{ errgen }}</span>
          </div>
        </div>
      </div>
      <button class="btn btn-primary" @click="salvaUtente">Salva</button>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import UtenteDataService from "../services/utente.service";
import router from "../router/index";

export default {
  name: "AggiungiUtente",
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
      regNomCog: /[A-Za-z+/ +/]{4,}/
      /*eslint-enable */
    };
  },
  components: {
    NavBar
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
        console.log(data);
        UtenteDataService.create(data)
          .then(response => {
            console.log(response);
            router.push("/allUtenti");
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        console.log(this.data);
        this.errgen = "Compila Correttamente tutti i campi!!";
      }
    },

    checkUsername: function() {
      if (this.username.match(this.regEmail)) {
        console.log("ok");
        this.emailErr = "";
        return true;
      } else {
        this.emailErr = "formato email non valido!!";
        return false;
      }
    },

    checkNome: function() {
      if (this.nome.match(this.regNomCog)) {
        return true;
      } else {
        console.log("ok");
        return false;
      }
    },

    checkCognome: function() {
      if (this.cognome.match(this.regNomCog)) {
        return true;
      } else {
        console.log("ok");
        return false;
      }
    },

    checkPass: function() {
      if (this.password.match(this.regPass)) {
        return true;
      } else {
        console.log("ok");
        return false;
      }
    },

    checkData: function() {
      if (this.data_nascita != null) {
        return true;
      } else {
        console.log("ok");
        return false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}
span {
  color: red;
}
</style>