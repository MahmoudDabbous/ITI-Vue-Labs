<template>
  <div class="container">
    <h1>Todos</h1>
    <table class="w-100">
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.title }}</td>
          <td>{{ todo.completed }}</td>
          <td>
            <button class="btn btn-info mx-2" @click="view(todo.id)">
              View
            </button>
            <button class="btn btn-warning mx-2" @click="edit(todo.id)">
              Edit
            </button>
            <button class="btn btn-danger mx-2" @click="deleteTodo(todo.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Todo from "../../../public/Mixins/Todo";

export default {
  name: "Todos",
  mixins: [Todo],
  methods: {
    async edit(id) {
      this.$router.push(`/todos/${id}/edit`);
    },
    async view(id) {
      this.$router.push(`/todos/${id}`);
    },
  },
};
</script>

<style scoped></style>
