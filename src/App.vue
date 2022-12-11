<template>
  <div id="app">
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
    const CageId = CageObj.actorId
    const ReevesObj = actor.data.find(actor => actor.name == "Keanu Reeves");
    const ReevesId = ReevesObj.actorId;

    MovieService.getAllMovies().then((movie) => {
      // Create a list of movie objects that star Cage 
    let CageMovies = movie.data.filter(movie => (movie.actors.includes(CageId)))
     // Create a list of movie objects that star Reeves 
    let ReevesMovies = movie.data.filter(movie => (movie.actors.includes(ReevesId)))


    let CageActorIDs = []
    // For each movie object in the list of movies starring Cage...
    CageMovies.forEach((cageMovie) => {
      cageMovie.actors.forEach((actorID => {
        // for each actors in movie's actor array, add to CageActorIdsArray (make sure Cage isn't included)
        if (actorID != CageId) {
          CageActorIDs.push(actorID)
        }}
      ))
    })

 //Remove any duplicate actor IDs...
 CageActorIDs = [...new Set(CageActorIDs)]
    
    let ReevesActorIDs = []
    // For each movie object in the list of movies starring Cage...
    ReevesMovies.forEach((reeveMovie) => {
      reeveMovie.actors.forEach((actorID => {
        // for each actors in movie's actor array, add to Reeves actorIDs (make sure Reeves isn't included)
        if (actorID != ReevesId) {
          ReevesActorIDs.push(actorID)
        }}
      ))
    })

//Remove any duplicate actor IDs...
ReevesActorIDs = [...new Set(ReevesActorIDs)]

    // Create an array of actor IDs that starred in movies with Cage and Reeves...
    const ReevesCageActorIDs = CageActorIDs.filter(cageActorID => ReevesActorIDs.includes(cageActorID))


    // For each actor object in actors list...
     actor.data.forEach(actor => {
      // See if ID property mataches with list of actor IDs that starred in movies with Cage and Reeves...
      if (ReevesCageActorIDs.includes(actor.actorId)) {
        // If so, push the object's name property to store (commit mutation)
        ActorNamesArray.push(actor.name)
        this.$store.commit("ADD_TO_ACTOR_NAMES_ARRAY", actor.name)
      }
        });

        // Test in console to see if creates actor list
        // console.log(ActorNamesArray)
})})
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
  background-color: rgb(235, 239, 239);
}

</style>
