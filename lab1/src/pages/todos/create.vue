<template>
  <div class="container">
    <h1>Create Todo</h1>
    <form @submit.prevent="create">
      <div class="form-group" style="margin-top: 20px">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="title" />
      </div>
      <button type="submit" class="btn btn-primary mt-3">Create</button>
    </form>
  </div>
</template>

<script>
import Todo from "../../../public/Mixins/Todo";

export default {
  name: "CreateTodo",
  mixins: [Todo],
  data() {
    return {
      title: "",
    };
  },
  methods: {
    async create() {
      await this.createTodo(this.title);
      this.$router.push("/todos");
    },
  },
};
</script>

<style scoped></style>
