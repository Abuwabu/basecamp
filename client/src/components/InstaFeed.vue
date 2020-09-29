<template>
  <div id="feed">
    <h1>Instagram Feed</h1>
    {{ message }}
  </div>
</template>

<script>
// import AuthenticationService from '@/services/AuthenticationService'
import axios from 'axios'

export default {
  data () {
    return {
      message: null
    }
  },
  created () {
    axios
      .get('https://localhost:8081/auth')
      .then((response) => {
        this.message = response.data.message
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
