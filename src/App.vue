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
  // ***Returns Cage's actor ID (115)***
  ActorService.getAllActors().then((response) => {
    const Cage = response.data.find(actor => actor.name == "Nicolas Cage")
    this.$store.commit("ADD_CAGE_ID", Cage.actorId);
    const Reeves = response.data.find(actor => actor.name == "Keanu Reeves");
    this.$store.commit("ADD_REEVES_ID", Reeves.actorId)

    // Test to seee if Cage ID displays...
    console.log(this.$store.state.CageId)
}),

  //***Returns Reeve's actor ID (206)***
  ActorService.getAllActors().then((response) => {
    const Reeves = response.data.find(actor => actor.name == "Keanu Reeves");
    this.$store.commit("ADD_REEVES_ID", Reeves.actorId)
    // Test to see if Reeves ID displays...
    console.log(this.$store.state.ReevesId);
}),

  // ***Returns unique actor IDs of those that played with Cage AND Reeves***
  MovieService.getAllMovies().then((response) => {

    ActorService.getAllActors().then((response) => {
    const Cage = response.data.find(actor => actor.name == "Nicolas Cage")
    this.$store.commit("ADD_CAGE_ID", Cage.actorId);
    const Reeves = response.data.find(actor => actor.name == "Keanu Reeves");
    this.$store.commit("ADD_REEVES_ID", Reeves.actorId)

    // Test to seee if Cage ID displays...
    console.log(this.$store.state.CageId)
})
    // 1. Create lists of movies that star Cage and Reeves
    const CageMovies = response.data.filter(movie => (movie.actors.includes(this.$store.state.CageId)))
    const ReevesMovies = response.data.filter(movie => (movie.actors.includes(this.$store.state.ReevesId)))

    // 2. Populate CageActorIdsArray 
    // foreach movie starring Cage...
    CageMovies.forEach((cageMovie) => {
      cageMovie.actors.forEach((actorID => {
        // for each actors in movie's actor array, add to CageActorIdsArray (make sure Cage isn't included)
        if (actorID != this.$store.state.CageId) {
          this.$store.commit("ADD_TO_CAGE_ACTOR_IDS_ARRAY", actorID)
        }}
      ))
    })
    //Remove duplicate actor IDs...
    this.$store.commit("REMOVE_DUPLICATES_IN_CAGE_IDS_ARRAY", this.$store.state.CageActorIdsArray)

    // 3. Populate ReevesActorIdsArray
     // foreach movie starring Reeves...
    ReevesMovies.forEach((reeveMovie) => {
      reeveMovie.actors.forEach((actorID => {
        // for each actors in movie's actor array, add to Reeves actorIDs (make sure Reeves isn't included)
        if (actorID != this.$store.state.ReevesId) {
          this.$store.commit("ADD_TO_REEVES_ACTOR_IDS_ARRAY", actorID)
        }}
      ))
    })
    //Remove duplicate actor IDs...
    this.$store.commit("REMOVE_DUPLICATES_IN_REEVES_IDS_ARRAY", this.$store.state.ReevesActorIdsArray)


    // 4. Populate ReevesCageActorIdsArray
    // Filter CageActorIDs array where it matches with ReevesActorIDs array... 
    const ReevesCageActorIDs = this.$store.state.CageActorIdsArray.filter(cageActorID => this.$store.state.ReevesActorIdsArray.includes(cageActorID))
    // Set variable = ReevesCageActorsIDsArray (from store)
    this.$store.commit("CREATE_REEVES_CAGE_ACTORS_IDS_ARRAY", ReevesCageActorIDs)
  })

    // ***Create Actor Names Array (for those starred in movies with Cage and Reeves)***
    ActorService.getAllActors().then((response) => {
    response.data.forEach(actor => {
      if (this.$store.state.ReevesCageActorIdsArray.includes(actor.actorId)) {
        this.$store.commit("ADD_TO_ACTOR_NAMES_ARRAY", actor.name)
      }
        });
        console.log(this.$store.state.ActorNamesArray)

})

// Since lines above = promises (asynchronous behavior), if you run ActorsNamesArray down here, it gives us an array of zero since code above hasn't finished running yet... 
//console.log(this.$store.state.ActorNamesArray)

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
