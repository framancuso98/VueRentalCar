<template>
  <div>
    <NavBar />
    <h1>Benvenuto {{ username }}</h1>


  </div>
</template>

<script>
import NavBar from "./NavBar";
export default {
  name: "Home",
  data() {
    
    return {
      username: localStorage.getItem("username")
    };
  },
  components: {
    NavBar
  },

  methods: {
  },

  mounted() {}
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
a {
  color: #42b983;
}
</style>
