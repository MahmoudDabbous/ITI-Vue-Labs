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
            value="{{todo.completed}}"
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
import Todo from "../../../public/Mixins/Todo";

export default {
  name: "Todo",
  mixins: [Todo],
  data() {
    return {
      isEditable: false,
      todo: {
        id: "",
        title: "",
        completed: false,
      },
    };
  },
  created() {
    this.getTodo(this.$route.params.id).then((response) => {
      this.todo = response;
    });
    if (this.$route.path.includes("edit")) {
      this.isEditable = true;
    }
  },
  methods: {
    async update() {
      await this.updateTodo(
        this.$route.params.id,
        this.todo.title,
        this.todo.completed
      );
      this.$router.push("/todos");
    },
  },
};
</script>

<style scoped></style>
