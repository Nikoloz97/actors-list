<template>
  <div id="App">
    <ul>
    <h1>Welcome to the Reeves Cage Gameshow</h1>
    <h3>A defining test to see if you have what it takes to correctly guess the actors that starred in a movie with Nicolas Cage and Keanu Reeves</h3>
    <!-- For each actor item in names array...  -->
        <div v-for="actor in $store.state.ActorNamesArray" v-bind:key="actor">
          <!-- Display the actor name... -->
          <li>{{actor}}</li>
          <!-- And display image only if the name matches the respected string -->
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

    <button class="btn btn-success">Yo</button>






    <!-- **Test to see if portal-vue works... -->
    <Design-Container>
    <Design-Panel color="green" text="Source">
      <p>
        The content below this paragraph is
        rendered in the right/bottom (red) container by PortalVue
      </p>
      <Portal to="right-basic">
        <p class="red">
          This is content from the left/top container (green).
          The cool part is, it works across components,
          so you can send your content anywhere!
        </p>
      </Portal>
    </Design-Panel>
    <Design-Panel color="red" text="Target" left>
      <PortalTarget name="right-basic"></PortalTarget>
    </Design-Panel>
  </Design-Container>
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
