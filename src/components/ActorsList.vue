<template>
  <div id="App">
    <ul>

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
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
  height: 5rem;
}
* {
  background-color: azure;
}
</style>
