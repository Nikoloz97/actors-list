<template>
  <div id="app">
    <h1>Welcome to Actor's List!</h1>
    <p>Here are a list of actors that have starred in a movie with Nicholas Cage and Keanu Reeves (but not necessarily at the same time):</p>
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
  
  let ActorNamesArray = [];
  ActorService.getAllActors().then((actor) => {
    const CageObj = actor.data.find(actor => actor.name == "Nicolas Cage")
    // this.$store.commit("ADD_CAGE_ID", Cage.actorId);
    const CageId = CageObj.actorId
    const ReevesObj = actor.data.find(actor => actor.name == "Keanu Reeves");
    // this.$store.commit("ADD_REEVES_ID", Reeves.actorId)
    const ReevesId = ReevesObj.actorId;

    // Test to seee if Cage ID displays...
    // console.log(this.$store.state.CageId)

    MovieService.getAllMovies().then((movie) => {
      // Create lists of movies that star Cage 
    let CageMovies = movie.data.filter(movie => (movie.actors.includes(CageId)))
     // Create lists of movies that star Reeves 
    let ReevesMovies = movie.data.filter(movie => (movie.actors.includes(ReevesId)))

    let CageActorIDs = []
    CageMovies.forEach((cageMovie) => {
      cageMovie.actors.forEach((actorID => {
        // for each actors in movie's actor array, add to CageActorIdsArray (make sure Cage isn't included)
        if (actorID != CageId) {
          CageActorIDs.push(actorID)
        }}
      ))
    })

 //Remove duplicate actor IDs...
 CageActorIDs = [...new Set(CageActorIDs)]
    
    let ReevesActorIDs = []
    ReevesMovies.forEach((reeveMovie) => {
      reeveMovie.actors.forEach((actorID => {
        // for each actors in movie's actor array, add to Reeves actorIDs (make sure Reeves isn't included)
        if (actorID != ReevesId) {
          ReevesActorIDs.push(actorID)
        }}
      ))
    })

//Remove duplicate actor IDs...
ReevesActorIDs = [...new Set(ReevesActorIDs)]
    // 4. Populate ReevesCageActorIdsArray
    // Filter CageActorIDs array where it matches with ReevesActorIDs array... 
    const ReevesCageActorIDs = CageActorIDs.filter(cageActorID => ReevesActorIDs.includes(cageActorID))

     // ***Create Actor Names Array (for those starred in movies with Cage and Reeves)***
     actor.data.forEach(actor => {
      if (ReevesCageActorIDs.includes(actor.actorId)) {
        // Check to see if creates actor list
        ActorNamesArray.push(actor.name)
        this.$store.commit("ADD_TO_ACTOR_NAMES_ARRAY", actor.name)
      }
        });
        // Check to see if creates actor list
        console.log(ActorNamesArray)
})})
}
}


// Since lines above = promises (asynchronous behavior), if you run ActorsNamesArray down here, it gives us an array of zero since code above hasn't finished running yet... 
//console.log(this.$store.state.ActorNamesArray)
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: azure;
}



</style>
