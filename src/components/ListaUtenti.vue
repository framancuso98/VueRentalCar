<template>
    <div>
      <NavBar />
      <h1>LISTA UTENTI</h1>
      <table class="table table-hover table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>USERNAME</th>
            <th>NOME</th>
            <th>COGNOME</th>
            <th>DATA DI NASCITA</th>
            <th>RUOLO</th>
            <th>ELIMINA</th>
            <th>MODIFICA</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="utente of lista" v-bind:key="utente.id" >
            <td>{{utente.id}}</td>
            <td>{{utente.username}}</td>
            <td>{{utente.nome}}</td>
            <td>{{utente.cognome}}</td>
            <td>{{utente.data_nascita}}</td>
            <td>{{utente.ruoloId}}</td>
            <td>
              <button type="button" class="btn btn-outline-danger" @click="elimina(utente.id)" >Elimina</button>
            </td>
            <td>
              <button type="button" class="btn btn-outline-warning war"  >Modifica</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import UtenteDataService from "../services/utente.service";
import NavBar from './NavBar';
import router from '../router/index';

export default {
  name: "listaUtenti",
  data() {
    return {
      lista: [],
      errors: [],
      
      
    };
  },
  components: {
    NavBar
  },

  methods: {
    riceviUtenti() {
      UtenteDataService.getAll()
        .then(response => {
          this.lista = response.data;
          console.log(response.data);
        })
        .catch(e => {
          this.errors.push(e);
          console.log(e);
        });
    },

    elimina: function(id) {
      UtenteDataService.delete(id)
      .then(response => {
        console.log(response)
        console.log(id)
        router.push("/allUtenti")
      })
      .catch(e => {
        console.log(e)
      })
      
    }
  },

  mounted(){
    this.riceviUtenti();
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>