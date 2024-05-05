<template>
  <div v-if="data.length === 0">No data</div>
  <table v-else class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.role }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "Table",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
