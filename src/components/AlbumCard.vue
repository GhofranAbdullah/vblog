<template>
<div>
 <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
    color="#385F73"
    dark
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      @click="overlay = !overlay"
      v-if="Album.id <= 20"
      :src="`https://picsum.photos/id/${(Album.id - 1) * 50 }/250/200`"
    ></v-img>

    <v-img
      @click="overlay = !overlay"
      v-else
      :src="`https://picsum.photos/id/${Math.abs((Album.id % 20 )- 1) * 50 }/250/200`"
    ></v-img>

    <v-card-title>{{ Album.title }}</v-card-title>
    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
         @click="$router.push({ name: 'ShowAlbum', params: { id: Album.id , userId: Album.userId} })"
      >
        Show Album
      </v-btn>
    </v-card-actions>
  </v-card>
   <v-overlay
      :value="overlay"
    >
     <v-carousel show-arrows-on-hover>
    <v-carousel-item
     @click="overlay = !overlay"
      v-for="i in 4"
      :key="i"
      :src="`https://picsum.photos/id/${(Album.id - 1)* 50 + i}/1200/600`"
    ></v-carousel-item>
    </v-carousel>
  </v-overlay>
</div>
</template>

<script>
export default {
  props: {
    Album: {
      type: Object,
      required: true
    }
  },
  data: () => ({
    loading: false,
    overlay: false
  })
}

</script>
