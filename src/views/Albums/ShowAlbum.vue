<template>
<v-container>
    <div class="text-h3" >{{user.name}}</div>
    <v-row class="mt-3">
      <v-col cols="12" md="4" xl="3" v-for="photo in photos" :key="photo.id">
        <v-card
        color="#385F73"
        dark
        >
            <v-img
        :src="`https://picsum.photos/id/${photo.id}/500/300`"
        :lazy-src="`https://picsum.photos/id/${photo.id}/10/6`"
        aspect-ratio="1"
        class="grey lighten-2"
      >
        <template v-slot:placeholder>
          <v-row
            class="fill-height ma-0"
            align="center"
            justify="center"
          >
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-img>
            <v-card-title class="my-4 text-subtitle-1">
              {{photo.title}}
            </v-card-title>
          </v-card>
    </v-col>
  </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['AlbumId', 'userId'],

  name: 'ShowAlbum',
  data () {
    return {
      photos: {},
      user: {}
    }
  },

  methods: {
    getPhotos (cb) {
      this.axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${this.AlbumId}`).then(res => {
        this.photos = res.data
        cb()
      })
    },

    getUserInfo () {
      this.axios.get(`https://jsonplaceholder.typicode.com/users/${this.userId}`).then(res => {
        this.user = res.data
      })
    }
  },

  mounted () {
    this.getPhotos(() => { this.getUserInfo() })
  }
}
</script>
