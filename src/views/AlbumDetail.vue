<template>
<div class="album-detail">
  <b-container>
    <b-row>
      <b-col cols="12">
        <b-img src="https://picsum.photos/600/300/?image=25"></b-img>
      </b-col>
    </b-row>
        <b-row>
      <b-col cols="12">
        <h3>{{album.title}}</h3>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12" md="6" order="12" order-md="1">
        <ol>
          <li v-for="song in songs" :key="song._id">{{song.title}}</li>
        </ol>
      </b-col>
      <b-col cols="12" md="6" order="1" order-md="12">
        <h4>{{artist.name}}</h4>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
const axios = require('axios')

export default {
  name: 'AlbumDetail',
  data () {
    return {
      album: {},
      artist: {},
      songs: []
    }
  },
  methods: {
    getAlbum () {
      axios.get(`https://cassis-api.herokuapp.com/api/albums/${this.$route.params.id}`)
        .then(payload => {
          this.album = payload.data
          this.getArtist()
          this.getSongs(payload.data.songs)
        })
    },

    getArtist () {
      console.log('Getting artist' + this.album.artist)
      axios.get(`https://cassis-api.herokuapp.com/api/artists/${this.album.artist}`)
        .then(payload => {
          this.artist = payload.data
        })
    },

    getSongs (ids) {
      ids.forEach(id => {
        console.log('Getting song' + id)
        axios.get(`https://cassis-api.herokuapp.com/api/songs/${id}`)
          .then(payload => {
            this.songs.push(payload.data)
          })
      })
    }
  },
  mounted () {
    this.getAlbum()
  }
}
</script>

<style>

</style>
