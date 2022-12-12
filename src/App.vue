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

  //**Populates ActorNamesArray with actor names that starred in a movie with Cage and Reeves  */

  let ActorObjArray = [];
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


    let CageActorObjects = []
    // For each movie object in the list of movies starring Cage...
    CageMovies.forEach((cageMovie) => {
      // for each actors in movie's actor array, add to CageActorObjectsArray (make sure Cage isn't included)
      cageMovie.actors.forEach((actorID => {
        if (actorID != CageId) {
          let cageActorObj = {
            "actorId": actorID,
            "movieTitle": cageMovie.title
          }
          CageActorObjects.push(cageActorObj)
        }}
      ))
    })

 //Remove any duplicate actor objects (based on actorId property)...
 CageActorObjects = [...new Map(CageActorObjects.map((actorObj) => [actorObj.actorId, actorObj])).values()]

    let ReevesActorObjects = []
     // For each movie object in the list of movies starring Cage...
     ReevesMovies.forEach((reevesMovie) => {
      // for each actors in movie's actor array, add to CageActorObjectsArray (make sure Cage isn't included)
      reevesMovie.actors.forEach((actorID => {
        if (actorID != ReevesId) {
          let reevesActorObj = {
            "actorId": actorID,
            "movieTitle": reevesMovie.title
          }
          ReevesActorObjects.push(reevesActorObj)
        }}
      ))
    })

//Remove any duplicate actor objects (based on actorId property)...
ReevesActorObjects = [...new Map(CageActorObjects.map((actorObj) => [actorObj.actorId, actorObj])).values()]

//**Both of these objects are displaying exactly the same amount of actors (242) */
console.log(CageActorObjects)
console.log(ReevesActorObjects)

    // Create a filtered array of actor objects that starred in movies with Cage and Reeves...
    // **Doesn't like the .includes statement here
    const ReevesCageActorObjects = CageActorObjects.filter(cageActorObject => ReevesActorObjects.actorId.includes(cageActorObject.actorId))

    // For each actor object in actors list...
     actor.data.forEach(actor => {
      // See if ID property matches with list of actor IDs that starred in movies with Cage and Reeves...
      if (ReevesCageActorObjects.actorId.includes(actor.actorId)) {
        // If so, create an actor object...
        let actorObj = {
          "name" : actor.name,
          "movieTitle" : ReevesCageActorObjects.movieTitle
        }
        // And push the actor object to store (commit mutation)
        ActorObjArray.push(actorObj)
        this.$store.commit("ADD_TO_ACTOR_OBJ_ARRAY", actorObj)
      }
        });

        // Test in console to see if creates actor obj list
        console.log(CageActorObjects)
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
