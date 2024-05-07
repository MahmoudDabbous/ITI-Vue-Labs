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
import { mapActions } from "vuex";

export default {
  name: "CreateTodo",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    ...mapActions(["createTodo"]),
    create() {
      this.createTodo({ title: this.title, completed: false }).then(() => {
        this.$router.push("/todos");
      });
    },
  },
};
</script>

<style scoped></style>
