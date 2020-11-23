<template>
  <div class="album-list">
    <div class="search">
      <b-icon-search></b-icon-search><input class="search-input" type="text" v-model="searchTerm" />
    </div>

    <span v-if="filtered.length === 0"
      >Nothing matching '{{ searchTerm }}' was found</span
    >

<router-link v-else v-for="album in albums" :key="album._id" :to="{ name: 'AlbumDetail', params: { id: album._id} }">
      <AlbumItem :album="album" />
</router-link>
  </div>
</template>

<script>
import AlbumItem from '@/components/albums/AlbumItem'
const axios = require('axios').default

export default {
  name: 'AlbumList',
  components: {
    AlbumItem
  },
  data () {
    return {
      albums: [],
      searchTerm: ''
    }
  },
  computed: {
    filtered () {
      return this.albums.filter((album) => {
        return album.title.toLowerCase().match(this.searchTerm.toLowerCase())
      })
    }
  },
  mounted () {
    axios.get('https://cassis-api.herokuapp.com/api/albums').then((payload) => {
      this.albums = payload.data
    })
  }
}
</script>

<style>
  input {
    max-width: 70%;
  }
</style>
