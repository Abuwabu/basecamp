<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <WeatherReport />
    <InstaFeed />
  </div>
</template>

<script>
import WeatherReport from '@/components/WeatherReport.vue'
import InstaFeed from '@/components/InstaFeed.vue'

export default {
  name: 'App',
  components: {
    WeatherReport,
    InstaFeed
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
