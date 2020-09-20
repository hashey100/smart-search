<template>
  <v-container class="hub-boxes-pagination">
    <v-row class="justify-center">
      <v-col cols="12" md="6">
        <v-pagination
          :value="$props.current"
          :length="$props.pageSize"
          color="secondary"
          class="hub-boxes-pagination__buttons"
          circle
          @input="onInput"
          @next="onInput('next')"
          @previous="onInput('prev')"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'PaginationHub',
  props: {
    pageSize: {
      type: [Number, String],
      default: 1,
    },
    current: {
      type: [Number, String],
      default: 1,
    },
  },
  methods: {
    ...mapActions(['setPaginationNumber']),
    /* Takes in input values and sets the pageNumber */
    onInput(inputValue) {
      let page = inputValue;
      if (inputValue === 'next' || inputValue === 'prev') {
        page = this.getPageNumber(inputValue);
      }
      this.setPaginationNumber(page);
      return page;
    },
    /* Returns the increment or deincerement depending on if
       next or back was clicked */
    getPageNumber(direction) {
      const { current } = this.$props;
      if (direction === 'next') {
        return current <= this.pageSize ? current + 1 : null;
      }
      if (direction === 'prev') {
        return current !== 1 ? current - 1 : null;
      }
      return current;
    },
  },
};
</script>
