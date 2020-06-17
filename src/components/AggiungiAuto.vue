<template>
  <div>
    <NavBar />
    <h1>Aggiungi Auto</h1>
    <div class="form">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCostruttore">Costruttore</label>
          <input
            type="text"
            class="form-control"
            id="inputCostruttore"
            required
            v-model="costruttore"
          />
          <div class="row" v-if="!(costruttore.length < 2) && !checkCostruttore()">
            <div class="col">
              <span>Formato costruttore non corretto!</span>
            </div>
          </div>
        </div>
        <div class="form-group col-md-6">
          <label for="inputModello">Modello</label>
          <input type="text" class="form-control" id="inputModello" required v-model="modello" />
          <div class="row" v-if="!(modello.length < 2) && !checkModello()">
            <div class="col">
              <span>Formato modello non corretto!</span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputAnno">Data di Immatricolazione</label>
          <input type="date" class="form-control" id="inputAnno" required v-model="anno" />
          <div class="row" v-if="!checkData()">
            <div class="col">
              <span>Inserisci la data di IMMATRICOLAZIONE</span>
            </div>
          </div>
        </div>
        <div class="form-group col-md-6">
          <label for="inputTarga">Targa</label>
          <input type="text" class="form-control" id="inputTarga" required v-model="targa" />
          <div class="row" v-if="!(targa.length < 2) && !checkTarga()">
            <div class="col">
              <span>Formato targa non corretto!</span>
            </div>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group col-md-4">
          <label for="inputCategoria">Categoria</label>
          <select id="inputState" class="form-control" v-model="categoriumId">
            <option value="1">City Car</option>
            <option value="2">SUV</option>
            <option value="3">Monovolume</option>
          </select>
        </div>
      </div>
      <div class="row" v-if="errgen">
          <div class="col-12">
            <span>{{ errgen }}</span>
          </div>
        </div>
      <button type="submit" class="btn btn-primary" @click="salvaAuto">Salva</button>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar";
import AutoDataService from "../services/auto.service";
import router from "../router/index";

export default {
  name: "AggiungiAuto",
  data() {
    return {
      costruttore: "",
      modello: "",
      anno: null,
      targa: "",
      categoriumId: 1,
      errgen: null,
      /*eslint-disable */
      regCostr: /[A-Za-z+/ +/]{3,}/,
      regModel: /[A-Za-z0-9+/ +/]{4,}/,
      regTarga: /[A-Za-z]{2}[0-9]{3}[a-zA-Z]{2}/
      /*eslint-enable */
    };
  },
  components: {
    NavBar
  },
  methods: {
    salvaAuto() {
      if (
        this.checkCostruttore() &&
        this.checkModello() &&
        this.checkData() &&
        this.checkTarga()
      ) {
      const data = {
        costruttore: this.costruttore,
        modello: this.modello,
        anno: this.anno,
        targa: this.targa,
        categoriumId: this.categoriumId
      };
      console.log(data);
      AutoDataService.create(data)
        .then(response => {
          console.log(response);
          router.push("/allAuto");
        })
        .catch(e => {
          console.log(e);
        });
         } else {
        this.errgen = "Compila Correttamente tutti i campi!!";
      }
    },

    checkCostruttore: function() {
      if (this.costruttore.match(this.regCostr)) {
        console.log("ok");
        return true;
      } else {
        return false;
      }
    },

    checkModello: function() {
      if (this.modello.match(this.regModel)) {
        console.log("ok");
        return true;
      } else {
        return false;
      }
    },

    checkData: function() {
      if (this.anno != null) {
        return true;
      } else {
        console.log("ok");
        return false;
      }
    },

    checkTarga: function() {
      if (this.targa.match(this.regTarga)) {
        console.log("ok");
        return true;
      } else {
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
