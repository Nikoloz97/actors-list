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
  // Returns Cage's actor ID (115)
  ActorService.getAllActors().then((response) => {
    const Cage = response.data.find(actor => actor.name == "Nicolas Cage")
    // Test to seee if Cage ID displays...
    // console.log(Cage.actorId);
    return Cage.actorId
}),

  //Returns Reeve's actor ID (206)
  ActorService.getAllActors().then((response) => {
    const Reeves = response.data.find(actor => actor.name == "Keanu Reeves")
    // Test to see if Reeves ID displays...
    // console.log(Reeves.actorId);
    return Reeves.actorId
}),

  //Returns unique actor IDs of those that played with Cage AND Reeves
  MovieService.getAllMovies().then((response) => {

    // 1. Create lists of movies that star Cage and Reeves
    const CageMovies = response.data.filter(movie => (movie.actors.includes(115)))
    const ReevesMovies = response.data.filter(movie => (movie.actors.includes(206)))

    // 2. Create Cage actorIDs
    let CageActorIDs;
    // foreach movie starring Cage...
    CageMovies.forEach((cageMovie) => {
      cageMovie.actors.forEach((actorID => {
        // for each actors in movie's actor array, add to Cage actorIDs (make sure Cage isn't added)
        if (actorID != 115) {
          CageActorIDs.push(actorID)
        }}
      ))
    })
    //Remove duplicate actor IDs...
    CageActorIDs = [...new Set(CageActorIDs)]

    // 3. Create Reeves actorIDs
    let ReevesActorIDs;
     // foreach movie starring Reeves...
    ReevesMovies.forEach((reeveMovie) => {
      reeveMovie.actors.forEach((actorID => {
        // for each actors in movie's actor array, add to Reeves actorIDs (make sure Reeves isn't added)
        if (actorID != 115) {
          ReevesActorIDs.push(actorID)
        }}
      ))
    })
    //Remove duplicate actor IDs...
    ReevesActorIDs = [... new Set(ReevesActorIDs)]


    //4. Create actor Ids list that starred in Reeves AND Cage movies
    let ReevesCageActorIDs = CageActorIDs.filter(cageActorID => ReevesActorIDs.includes(cageActorID))
    return ReevesCageActorIDs;
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
