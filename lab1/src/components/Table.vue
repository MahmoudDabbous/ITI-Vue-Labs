<template>
  <div v-if="data.length === 0">No data</div>
  <table v-else class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.role }}</td>
        <td>
          <button @click="deleteItem(index)" class="btn btn-danger">
            Delete
          </button>
        </td>
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
  methods: {
    deleteItem(index) {
      this.$emit("delete", index);
    },
  },
};
</script>

<style scoped></style>
