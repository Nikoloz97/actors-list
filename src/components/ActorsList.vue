<template>
  <div id="App">
    <ul>
        <li v-for="actor in $store.state.ActorNamesArray" v-bind:key="actor">{{actor}}<br/></li>
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
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
