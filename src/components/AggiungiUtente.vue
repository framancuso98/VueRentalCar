<template>
<div>
    <NavBar />
  <h1>Aggiungi Utente</h1>
  <div class="form">
  <div class="form-row">
    <div class="form-group col-md-6 ">
      <label for="inputEmail">Email</label>
      <input 
        type="email" 
        class="form-control" 
        id="inputEmail"
        required
        v-model="username">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword">Password</label>
      <input 
        type="password" 
        class="form-control" 
        id="inputPassword"
        required
        v-model="password">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputNome">Nome</label>
      <input 
        type="text" 
        class="form-control" 
        id="inputNome"
        required
        v-model="nome">
    </div>
    <div class="form-group col-md-6">
      <label for="inputCognome">Cognome</label>
      <input 
        type="text" 
        class="form-control" 
        id="inputCognome"
        required
        v-model="cognome">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputData">Data di Nascita</label>
      <input 
        type="date" 
        class="form-control" 
        id="inputData"
        required
        v-model="data_nascita">
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">Ruolo</label>
      <select id="inputState" class="form-control" v-model="ruoloId">
        <option value="2">USER</option>
        <option value="1">ADMIN</option>
      </select>
    </div>
  </div>
  <button  class="btn btn-primary" @click="salvaUtente">Salva</button>
</div>
  </div>
</template>

<script>
import NavBar from './NavBar';
import UtenteDataService from '../services/utente.service';
import router from '../router/index';

export default {
  name: 'AggiungiUtente',
  data() {
    return {
      username: "",
      password: "",
      nome: "",
      cognome: "",
      data_nascita: "0000-00-00",
      ruoloId: 2,
    };
  },
    components: {
        NavBar
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
        console.log(data)
        UtenteDataService.create(data)
        .then(response => {
          console.log(response)
          router.push("/allUtenti")
        })
        .catch(e => {
          console.log(e)
        })
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form{
  margin-left: auto;
  margin-right: auto;
  width: 800px;
}
</style>