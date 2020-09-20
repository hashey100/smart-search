<template>
    <v-app id="inspire">
        <Header />
        <v-main>
            <v-container>
                <v-row>
                    <router-view />
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
// Helpers
import axios from 'axios';
import { mapActions } from 'vuex';
// Pages
import Header from '@/layouts/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  props: {
    source: String,
  },
  /* Axios call to grab the API data and is thet set in the store */
  created() {
    this.$vuetify.theme.dark = true;
    axios.get('http://localhost:8081/files/people.json').then((response) => {
      this.setPeople(response.data);
    });
  },
  methods: {
    ...mapActions(['setPeople']),
  },
};
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;
    a {
        font-weight: bold;
        color: #2c3e50;
        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

a {
    color: white !important;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
}
</style>
