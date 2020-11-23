<template>
  <b-card
    :title="album.title">
    <b-card-text>
      {{artist.name}}
    </b-card-text>
  </b-card>
</template>

<script>
const axios = require('axios')

export default {
  name: 'AlbumItem',
  props: ['album'],
  data () {
    return {
      artist: {}
    }
  },
  methods: {
    getArtist () {
      axios.get(`https://cassis-api.herokuapp.com/api/artists/${this.album.artist}`)
        .then(payload => {
          this.artist = payload.data
        })
    }
  },
  mounted () {
    this.getArtist()
  }
}
</script>

<style>

</style>
