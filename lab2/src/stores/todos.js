import axios from "axios";
import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      todos: [],
      todo: {},
    };
  },
  mutations: {
    GET_TODOS(state, todos) {
      state.todos = todos;
    },
    CREATE_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter((t) => t.id !== id);
    },
    GET_TODO_BY_ID(state, todo) {
      state.todo = todo;
    },
    UPDATE_TODO(state, todo) {
      state.todos = state.todos.map((t) => {
        if (t.id === todo.id) {
          return {
            ...t,
            completed: todo.completed,
            title: todo.title,
          };
        }
        return t;
      });
    },
  },
  actions: {
    getTodos({ commit }) {
      axios.get("http://localhost:3000/todos").then((res) => {
        commit("GET_TODOS", res.data);
        console.log(res.data);
      });
    },
    getTodoById({ commit }, id) {
      axios.get(`http://localhost:3000/todos/${id}`).then((res) => {
        commit("GET_TODO_BY_ID", res.data);
      });
    },
    createTodo({ commit }, todo) {
      axios.post("http://localhost:3000/todos", todo).then((res) => {
        commit("CREATE_TODO", res.data);
      });
    },
    updateTodo({ commit }, todo) {
      axios.put(`http://localhost:3000/todos/${todo.id}`, todo).then((res) => {
        commit("UPDATE_TODO", res.data);
      });
    },
    deleteTodo({ commit }, id) {
      axios
        .delete(`http://localhost:3000/todos/${id}`)
        .then(() => {
          commit("DELETE_TODO", id);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    todos: (state) => state.todos,
    todo: (state) => state.todo,
  },
});

export default store;
