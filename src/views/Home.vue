<template>
  <div class="home">
    <PaginationHubList />
  </div>
</template>

<script>

import PaginationHubList from '@/components/pagination-hub-list/pagination-hub-list.vue';

export default {
  name: 'Home',
  components: {
    PaginationHubList,
  },
};
</script>
