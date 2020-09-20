<template>
  <v-container v-if="people" class="pagination-hub">
    <div class="pagination-hub__search">
      <span class="pagination-hub__search-text">Search</span>
      <input type="text" v-model="search" class="pagination-hub__search-input" />
    </div>
    <v-row>
    <v-simple-table>
      <template>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(person, index) in paginatedData">
            <tr @click="loadRow(person)" :key="index">
              <td>{{ person.name }}</td>
              <td>{{ person.age }}</td>
              <td>{{ person.gender }}</td>
            </tr>
          </template>
        </tbody>
      </template>
    </v-simple-table>
    </v-row>
    <v-row>
      <v-col>
         <PaginationHub
          :page-size="this.paginationPages"
          :current="this.paginationNumber"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import PaginationHub from '@/components/pagination-hub/pagination-hub.vue';

export default {
  name: 'HubBoxes',
  components: {
    PaginationHub,
  },
  data() {
    return {
      pageSize: 12,
      search: '',
    };
  },
  computed: {
    ...mapGetters(['people', 'paginationNumber']),
    /* Returns how many pagination pages we need */
    paginationPages() {
      return (Math.ceil(this.searchQueryCount / this.pageSize));
    },
    /* Simple math to return the pagination range, the array is sliced
       so it only displays the correct paginated data */
    paginatedData() {
      const range = [(this.pageSize * this.paginationNumber - this.pageSize),
        (this.paginationNumber * this.pageSize)];
      const items = this.searchQuery.slice(range[0], range[1]).map((i) => i);
      return items;
    },
    /* Resets the pagination number and filters the results based on a input value  */
    searchQuery() {
      const search = this.search.toLowerCase();
      this.setPaginationNumber(1);
      return this.people.filter((post) => (String(post.name).toLowerCase().includes(search)
                || String(post.age).toLowerCase().includes(search)
                || String(post.gender).toLowerCase().includes(search)));
    },
    /* Rreturns the total number objects queried */
    searchQueryCount() {
      return this.searchQuery.length;
    },
  },
  methods: {
    ...mapActions(['setPaginationNumber']),
    /* Loads a new route contaning more data for the person */
    loadRow(val) {
      this.$router.push({
        name: 'Person',
        params: {
          data: val,
        },
      });
    },
  },
};
</script>

<style lang="scss">
.pagination-hub {
  table {
    min-width: 1000px;
    tr {
      cursor: pointer;
    }
  }
  &__search {
    display: inline-flex;
    margin-bottom: 20px;
    &-text {
      margin-right: 10px;
    }
    &-input {
      background-color: white;
      display: block;
    }
  }
}
</style>
