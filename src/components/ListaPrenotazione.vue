<template>
  <div>
    <h1>Lista Prenotazioni</h1>
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>COSTRUTTORE</th>
          <th>MODELLO</th>
          <th>TARGA</th>
          <th>ANNO DI IMMATRICOLAZIONE</th>
          <th>USERNAME</th>
          <th>NOME</th>
          <th>COGNOME</th>
          <th>DATA DI NASCITA</th>
          <th>STATO</th>
          <th>ACCETTA</th>
          <th>RIFIUTA</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="prenotazione of lista" v-bind:key="prenotazione.id">
          <td>{{prenotazione.id}}</td>
          <td>{{prenotazione.auto.costruttore}}</td>
          <td>{{prenotazione.auto.modello}}</td>
          <td>{{prenotazione.auto.modello}}</td>
          <td>{{prenotazione.auto.anno}}</td>
          <td>{{prenotazione.utente.username}}</td>
          <td>{{prenotazione.utente.nome}}</td>
          <td>{{prenotazione.utente.cognome}}</td>
          <td>{{prenotazione.utente.data_nascita}}</td>
          <td>{{prenotazione.stato}}</td>
          <td>
            <button type="button" class="btn btn-success">Accetta</button>
          </td>
          <td>
            <button type="button" class="btn btn-danger">Rifiuta</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import PrenotazioneDataService from "../services/prenotazione.service";

export default {
  name: "listaPrenotazione",
  data() {
    return {
      lista: [],
      errors: []
    };
  },

  methods: {
    riceviPrenotazione() {
      PrenotazioneDataService.getAll()
        .then(response => {
          this.lista = response.data;
          console.log(response.data);
        })
        .catch(e => {
          this.errors.push(e);
          console.log(e);
        });
    }
  },

  mounted() {
    this.riceviPrenotazione();
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