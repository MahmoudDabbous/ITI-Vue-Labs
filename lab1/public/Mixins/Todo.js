import axios from "axios";

export default {
  data() {
    return {
      todos: [],
    };
  },
  created() {
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      try {
        const res = await axios.get("http://localhost:3000/todos");
        this.todos = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    async createTodo(title) {
      try {
        const res = await axios.post("http://localhost:3000/todos", {
          title,
          completed: false,
        });
        this.todos = res.data;
      } catch (error) {
        console.error(error);
      }
    },
    async getTodo(id) {
      try {
        const res = await axios.get(`http://localhost:3000/todos/${id}`);
        return res.data;
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },
    async updateTodo(id, title, completed) {
      try {
        const res = await axios.put(`http://localhost:3000/todos/${id}`, {
          title,
          completed,
        });
        this.fetchTodos();
      } catch (error) {
        console.error(error);
      }
    },
    async deleteTodo(id) {
      try {
        const res = await axios.delete(`http://localhost:3000/todos/${id}`);
        this.fetchTodos();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
