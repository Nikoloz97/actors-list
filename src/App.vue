<template>
  <div id="app">
    <h1>Welcome to Actor's List!</h1>
    <p>Here are a list of actors starring Nicholas Cage and Keanu Reeves:</p>
    <actors-list/>

  </div>
</template>

<script>
import ActorsList from './components/ActorsList.vue'
import ActorService from './services/ActorService'
import MovieService from './services/MovieService'

export default {
name: 'App',
components: {ActorsList},

created() {
  ActorService.getActorsList().then((response) => {
    const Cage = response.data.find(actor => actor.name == "Nicolas Cage")
    // Test to seee if Cage ID displays...
    // console.log(Cage.actorId);
    return Cage.actorId
}),

  ActorService.getActorsList().then((response) => {
    const Reeves = response.data.find(actor => actor.name == "Keanu Reeves")
    // Test to see if Reeves ID displays...
    // console.log(Reeves.actorId);
    return Reeves.actorId
}),


}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
