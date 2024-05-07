<template>
  <div class="container">
    <form @submit.prevent="update">
      <div class="form-group" style="margin-top: 20px">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="todo.title"
          :disabled="!isEditable"
        />
      </div>
      <div class="form-group" style="margin-top: 20px">
        <label for="flexSwitchCheckDefault">Completed</label>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            v-model="todo.completed"
            :disabled="!isEditable"
          />
        </div>
      </div>
      <button type="submit" class="btn btn-primary mt-3" v-if="isEditable">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Todo",
  computed: {
    ...mapGetters(["todo"]),
    isEditable() {
      return this.$route.name === "EditTodo";
    },
  },
  methods: {
    ...mapActions(["getTodoById", "updateTodo"]),
    update() {
      this.updateTodo(this.todo).then(() => {
        this.$router.push("/todos");
      });
    },
  },
  created() {
    this.getTodoById(this.$route.params.id);
  },
};
</script>
