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
        <tr v-for="utente of lista" v-bind:key="utente.id">
          <td>{{utente.id}}</td>
          <td>{{utente.username}}</td>
          <td>{{utente.nome}}</td>
          <td>{{utente.cognome}}</td>
          <td>{{utente.data_nascita}}</td>
          <td>{{utente.ruoloId}}</td>
          <td>
            <button type="button" class="btn btn-outline-danger" @click="elimina(utente.id)">
              <svg
                class="bi bi-trash"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>Elimina
            </button>
          </td>
          <td>
            <button
              type="button"
              class="btn btn-outline-warning war"
              data-toggle="modal"
              data-target="#exampleModal"
              data-whatever="@mdo"
              @click="caricaUtente(utente.id)"
            >
              <svg
                class="bi bi-pencil"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                />
                <path
                  fill-rule="evenodd"
                  d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"
                />
              </svg>Modifica
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Modifica Utente</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <form>
                      <div class="form-group">
                        <label for="recipient-name" class="col-form-label">Username:</label>
                        <input type="text" class="form-control" id="recipient-name" v-model="username" />
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6">
                          <label for="recipient-name" class="col-form-label">Nome:</label>
                          <input type="text" class="form-control" id="recipient-name" v-model="nome"/>
                        </div>
                        <div class="form-group col-md-6">
                          <label for="recipient-name" class="col-form-label">Cognome:</label>
                          <input type="text" class="form-control" id="recipient-name" v-model="cognome" />
                        </div>
                      </div>
                      <div class="row">
                        <div class="form-group col-md-6">
                          <label for="inputData" class="col-form-label">Data di Nascita</label>
                          <input
                            type="date"
                            class="form-control"
                            id="inputData"
                            required
                            v-model="data_nascita"
                          />
                        </div>
                        <div class="form-group col-md-6">
                          <label for="inputRuolo" class="col-form-label">Ruolo</label>
                          <select id="inputRuolo" class="form-control" v-model="ruoloId">
                            <option value="2">USER</option>
                            <option value="1">ADMIN</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" @click="modificaUtente">Salva Modifica</button>
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import UtenteDataService from "../services/utente.service";
import NavBar from "./NavBar";
import router from "../router/index";

export default {
  name: "listaUtenti",
  data() {
    return {
      lista: [],
      errors: [],
      id: 0,
      username: "",
      nome: "",
      cognome: "",
      data_nascita: "0000-00-00",
      ruoloId: 0,
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
          console.log(response);
          console.log(id);
          router.go(0); // push("/allUtenti")
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    caricaUtente(id){
      UtenteDataService.findOne(id)
      .then(response => {
        console.log(response.data)
        this.id = response.data.id;
        this.username = response.data.username;
        this.nome = response.data.nome;
        this.cognome = response.data.cognome;
        this.data_nascita = response.data.data_nascita;
        this.ruoloId = response.data.ruoloId;
      })
      .catch(e => {
        console.log(e)
      })
    },
     
    modificaUtente() {
      const data = {
        username: this.username,
        nome: this.nome,
        cognome: this.cognome,
        data_nascita: this.data_nascita,
        ruoloId: this.ruoloId,
        };
        UtenteDataService.update(this.id, data)
        .then(response => {
          console.log(response);
          router.go(0)
        })
        .catch(e => {
          console.log(e)
        })
    }
  },

  mounted() {
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
.col-form-label{
  color: black;
}
h5{
  color: black;
}
</style>