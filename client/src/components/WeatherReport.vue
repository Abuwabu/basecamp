<template>
  <div id="weather">
    <h1>Today's Weather</h1>
    <ul>
      <li><img :src="iconUrl" :alt="condition"></li>
      <li>Temperature: {{ temp }}</li>
      <li>Condition: {{ condition }}</li>
      <li>Last Updated: {{ lastUpdated }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      location: 'Barcelona',
      temp: null,
      condition: null,
      iconUrl: null,
      lastUpdated: null
    }
  },
  created () {
    axios
      .get(`https://api.weatherapi.com/v1/current.json?key=${process.env.VUE_APP_WEATHER_API_KEY}&q=${this.location}`)
      .then((response) => {
        const weather = response.data
        this.weather = weather
        this.temp = weather.current.temp_c
        this.condition = weather.current.condition.text
        this.iconUrl = weather.current.condition.icon
        this.lastUpdated = weather.current.last_updated
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
