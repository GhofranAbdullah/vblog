<template>
  <v-container>
    <div class="text-h3">List of Albums</div>
    <v-row class="mt-3">
      <v-col v-if="!$store.state.Albums.length"><div class="text-h4">Sorry we don't have any posts</div></v-col>
      <v-col cols="12" md="4" xl="3" v-for="Album in $store.state.Albums" :key="Album.id">
       <album-card :Album="Album"></album-card>
      </v-col>
    </v-row>
  </v-container>
</template>,

<script>
import AlbumCard from '@/components/AlbumCard.vue'

export default {
  components: { AlbumCard },
  methods: {
    getAlbums () {
      this.axios.get('https://jsonplaceholder.typicode.com/Albums').then((res) => {
        this.$store.commit('setAlbums', res.data)
      })
    }
  },

  mounted () {
    this.getAlbums()
  }
}
</script>
