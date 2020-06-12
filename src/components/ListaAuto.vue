<template>
  <div>
    <NavBar />
    <h1>LISTA AUTO</h1>
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          <th>#</th>
          <th>COSTRUTTORE</th>
          <th>MODELLO</th>
          <th>TARGA</th>
          <th>ANNO DI IMMATRICOLAZIONE</th>
          <th>CATEGORIA</th>
          <th>ELIMINA</th>
          <th>MODIFICA</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="auto of lista" v-bind:key="auto.id">
          <td>{{auto.id}}</td>
          <td>{{auto.costruttore}}</td>
          <td>{{auto.modello}}</td>
          <td>{{auto.targa}}</td>
          <td>{{auto.anno}}</td>
          <td>{{auto.categoriumId}}</td>
          <td>
            <button type="button" class="btn btn-outline-danger">Elimina</button>
          </td>
          <td>
            <button type="button" class="btn btn-outline-warning">Modifica</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AutoDataService from "../services/auto.service";
import NavBar from './NavBar';

export default {
  name: "listaAuto",
  data() {
    return {
      lista: [],
      errors: []
    };
  },
  components: {
    NavBar
  },

  methods: {
    riceviAuto() {
      AutoDataService.getAll()
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
    this.riceviAuto();
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