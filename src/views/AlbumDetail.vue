<template>
  <h3>{{album.title}}</h3>
</template>

<script>
const axios = require('axios')

export default {
  name: 'AlbumDetail',
  data () {
    return {
      album: {}
    }
  },
  mounted () {
    axios.get(`https://cassis-api.herokuapp.com/api/albums/${this.$route.params.id}`)
      .then(payload => {
        this.album = payload.data
      })
  }
}
</script>

<style>

</style>
