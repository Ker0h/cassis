<template>
  <div class="song-list">
    <div class="search">
      <b-icon-search></b-icon-search><input class="search-input" type="text" v-model="searchTerm" />
    </div>

    <span v-if="filtered.length === 0"
      >Nothing matching '{{ searchTerm }}' was found</span
    >

    <li v-for="song in filtered" :key="song._id">
      <SongItem :song="song" />
    </li>
  </div>
</template>

<script>
import SongItem from '@/components/songs/SongItem'
const axios = require('axios').default

export default {
  name: 'SongList',
  components: {
    SongItem
  },
  data () {
    return {
      songs: [],
      searchTerm: ''
    }
  },
  computed: {
    filtered () {
      return this.songs.filter((song) => {
        return song.title.toLowerCase().match(this.searchTerm.toLowerCase())
      })
    }
  },
  mounted () {
    axios.get('https://cassis-api.herokuapp.com/api/songs').then((payload) => {
      this.songs = payload.data
    })
  }
}
</script>

<style>
  input {
    max-width: 70%;
  }
</style>
