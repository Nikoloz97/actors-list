<template>
  <div id="App">
    <ul>
      <li v-for="actor in actors" v-bind:key="actor">{{actor}}</li>
    </ul>
  </div>
  
</template>

<script>
import actorService from '../services/ActorService.js'
// TODO: create filter function for actors list (step 3 in plan)
export default {
  name: 'actorsList',
  data() {
    
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
