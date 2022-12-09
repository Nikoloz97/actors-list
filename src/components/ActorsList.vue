<template>
  <div id="App">
    <ul>
      <h1>Welcome to Actor's List!</h1>
    <h3>Here are a list of actors that have starred in a movie with Nicholas Cage and Keanu Reeves (but not necessarily at the same time):</h3>

        <div v-for="actor in $store.state.ActorNamesArray" v-bind:key="actor">
          <li>{{actor}}</li>
          <img v-show= "actor == 'Giovanni Ribisi'" src="../assets/Ribisi.jpg" alt="Image of Giovanni Ribisi">
          <img v-show= "actor == 'Bridget Fonda'" src="../assets/Fonda.jpg" alt="Image of Giovanni Ribisi">
          <img v-show= "actor == 'James Caan'" src="../assets/Caan.jpg" alt="Image of Giovanni Ribisi">
          <img v-show= "actor == 'Christopher Plummer'" src="../assets/Plummer.jpg" alt="Image of Giovanni Ribisi">
          <img v-show= "actor == 'Charlize Theron'" src="../assets/Theron.jpg" alt="Image of Giovanni Ribisi">
          <img v-show= "actor == 'Laurence Fishburne'" src="../assets/Fishburne.jpg" alt="Image of Giovanni Ribisi">
          <img v-show= "actor == 'Thomas Jane'" src="../assets/Jane.jpg" alt="Image of Giovanni Ribisi">
          <img v-show= "actor == 'Tilda Swinton'" src="../assets/Swinton.jpg" alt="Image of Giovanni Ribisi">
          <img v-show= "actor == 'Willem Dafoe'" src="../assets/Dafoe.jpg" alt="Image of Giovanni Ribisi">
          <img v-show= "actor == 'Dennis Hopper'" src="../assets/Hopper.jpg" alt="Image of Giovanni Ribisi">

        </div>
    </ul>
  </div>
  
</template>

<script>

export default {
  name: 'actorsList',
  data() {
    return {

    }
    
  },
  methods: {
    getActors() {
      
    }
  }


}

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
  display: block;
  margin: 2rem 0 0;

}
a {
  color: #42b983;
}
img {
  height: 10rem;
}
html {
  background-color: rgb(201, 203, 203);
}
h1 {
  text-decoration: underline;
}
</style>
