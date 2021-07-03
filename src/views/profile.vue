<template>
  <div>
      <v-card>
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="text-h4 font-weight-thin mb-4">{{ user.name }} </h1>
            <h2 class="subheading">{{ user.username }} </h2>
            <h2 class="subheading">{{ user.email }} </h2>
            <h2 class="subheading">{{ user.phone }} </h2>
            <h2 class="subheading">{{ user.website }} </h2>
            <div class="mr-7">
              Address Details:
              <h3 class="subheading">{{ user.address.street }} </h3>
              <h3 class="subheading">{{ user.address.suite }} </h3>
              <h3 class="subheading">{{ user.address. city}} </h3>
              <h3 class="subheading">{{ user.address.zipcode }} </h3>
            </div>

             <div class="mr-7">
              Company Details:
              <h3 class="subheading">{{ user.company.name }} </h3>
              <h3 class="subheading">{{ user.company.catchPhrase }} </h3>
              <h3 class="subheading">{{ user.company. bs}} </h3>
              </div>
          </v-col>
        </v-row>
      </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProfilePage',

  computed: {
    user () {
      return this.$store.state.user
    }
  }
}
</script>
