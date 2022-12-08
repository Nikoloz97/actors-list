<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- Need to hand the data off... -->
    <hello-world v-bind:tacos="tacos"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {HelloWorld},
  data() {
    return {
      tacos: ['soft', 'hard', 'crunchy', 'light', 'heavy'],
    }
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
