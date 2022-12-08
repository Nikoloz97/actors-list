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
export default {
name: 'App',
components: {ActorsList},

created() {
  ActorService.getCageId().then((response) => {
    const Cage = response.data.find(actor => actor.name == "Nicolas Cage")
    console.log(Cage.actorId);
}),
  ActorService.getReevesId().then((response) => {
    const Reeves = response.data.find(actor => actor.name == "Keanu Reeves")
    console.log(Reeves.actorId);
})

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
