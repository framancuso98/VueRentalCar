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
              <span>{{ errors.errEmail }}</span>
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
              <span>{{ errors.noMatchPass }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputNome">Nome</label>
          <input type="text" class="form-control" id="inputNome" required v-model="nome" />
          <div class="row" v-if="(nome.length > 0) && !checkNome()">
            <div class="col">
              <span>{{ errors.errNome }}</span>
            </div>
          </div>
        </div>
        <div class="form-group col-md-6">
          <label for="inputCognome">Cognome</label>
          <input type="text" class="form-control" id="inputCognome" required v-model="cognome" />
          <div class="row" v-if="(cognome.length > 0) && !checkCognome()">
            <div class="col">
              <span>{{ errors.errCognome }}</span>
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
        <div class="row" v-if="errGen">
          <div class="col-12">
            <span>{{ errGen }}</span>
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
      errors: {
        errEmail: "Formato email non corretto!",
        errGen: "",
        noMatchPass: "Formato password non corretto, minimo 6 caratteri!!",
        errNome: "Nome troppo corto!!",
        errCognome: "Cognome troppo corto!!",
        errData:"Inserisci la data di nascita",
        otherErr: "",
        noUserame: "",
      },
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
            console.log(e.response);
            //console.log(e)
          });
      } else {
        console.log(this.data);
        this.errors.errGen = "Compila Correttamente tutti i campi!!";
      }
    },

    checkUsername: function() {
      return (this.username.match(this.regEmail))
        
    },

    checkNome: function() {
      return (this.nome.match(this.regNomCog))
        
    },

    checkCognome: function() {
      return (this.cognome.match(this.regNomCog))
        
    },

    checkPass: function() {
      return (this.password.match(this.regPass))
        
    },

    checkData: function() {
      return (this.data_nascita != null)   
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