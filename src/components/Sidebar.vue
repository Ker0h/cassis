<template>
  <div class="sidebar">
    <b-container>
      <b-row>
        <b-col cols="12">
          <h4>{{ title }}</h4>
          <AlbumList />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AlbumList from '@/components/albums/AlbumList'

export default {
  name: 'Sidebar',
  props: ['title'],
  components: {
    AlbumList
  }
}
</script>

<style>

</style>
