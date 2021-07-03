import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    darkMode: false,
    loading: false,
    posts: JSON.parse(localStorage.getItem('posts')),
    user: JSON.parse(localStorage.getItem('user')),
    Albums: JSON.parse(localStorage.getItem('Albums'))
  },
  mutations: {
    toggleDrawer (state) {
      state.drawer = !state.drawer
    },
    toggleDarkMode (state) {
      state.darkMode = !state.darkMode
    },
    toggleLoading (state) {
      state.loading = !state.loading
    },
    setPosts (state, posts) {
      state.posts = posts
      localStorage.setItem('posts', JSON.stringify(posts))
    },
    setAuthUser (state, user) {
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logout (state) {
      state.user = null
      localStorage.removeItem('user')
    },
    setAlbums (state, Albums) {
      state.Albums = Albums
      localStorage.setItem('Albums', JSON.stringify(Albums))
    }
  },
  getters: {
    isLoggedIn (state) {
      return state.user?.id
    }
  },
  actions: {
  },
  modules: {

  }
})
