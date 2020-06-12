<template>
<div >
    <NavBar />
  <h1>Aggiungi Auto</h1>
  <div class="form">
  <div class="form-row">
    <div class="form-group col-md-6 ">
      <label for="inputCostruttore">Costruttore</label>
      <input 
        type="text" 
        class="form-control" 
        id="inputCostruttore"
        required
        v-model="costruttore">
    </div>
    <div class="form-group col-md-6">
      <label for="inputModello">Modello</label>
      <input 
        type="text" 
        class="form-control" 
        id="inputModello"
        required
        v-model="modello">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputAnno">Data di Immatricolazione</label>
      <input 
        type="date" 
        class="form-control" 
        id="inputAnno"
        required
        v-model="anno">
    </div>
    <div class="form-group col-md-6">
      <label for="inputTarga">Targa</label>
      <input 
        type="text" 
        class="form-control" 
        id="inputTarga"
        required
        v-model="targa">
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
  <button type="submit" class="btn btn-primary" @click="salvaAuto">Salva</button>
</div>
  </div>
</template>

<script>
import NavBar from './NavBar';
import AutoDataService from '../services/auto.service';
import router from '../router/index';

export default {
  name: 'AggiungiAuto',
  data() {
    return {
      costruttore: "",
      modello: "",
      anno: "0000-00-00",
      targa: "",
      categoriumId: 1,
    };
  },
    components: {
      NavBar
    },
    methods:{
      salvaAuto(){
        const data = {
          costruttore:this.costruttore,
          modello:this.modello,
          anno:this.anno,
          targa:this.targa,
          categoriumId:this.categoriumId,
        };
        console.log(data)
        AutoDataService.create(data)
        .then(response => {
          console.log(response);
          router.push("/allAuto");
        })
        .catch(e => {
          console.log(e);
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
