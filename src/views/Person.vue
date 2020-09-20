<template>
  <v-container v-if="data">
    <v-row>
      <div class="back">
        <router-link to="/">Back</router-link>
      </div>
    </v-row>
    <v-row>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Eye Color</th>
            <th>Favourite Pet</th>
            <th>Favourite Fruit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ data.name }}</td>
            <td>{{ data.age }}</td>
            <td>{{ data.gender }}</td>
            <td>{{ data.eyeColor }}</td>
            <td>{{ data.preferences.pet }}</td>
            <td>{{ data.preferences.fruit }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Person',
  props: ['data'],
};
</script>

<style lang="scss">
  .back {
    border: 1px solid white;
    padding: 5px 22px;
    border-radius: 22px;
    margin-bottom: 14px;
    a {
      text-decoration: none;
    }
  }
</style>
