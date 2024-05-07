import axios from "axios";

const state = () => ({
  todos: [],
  todo: {},
});

const getters = {
  allTodos: (state) => state.todos,
  currentTodo: (state) => state.todo,
};

const actions = {
  async getTodos({ commit }) {
    const response = await axios.get("http://localhost:3000/todos");
    commit("SET_TODOS", response.data);
  },
  async getTodoById({ commit }, id) {
    const response = await axios.get(`http://localhost:3000/todos/${id}`);
    commit("SET_TODO", response.data);
  },
  async createTodo({ commit }, newTodo) {
    const response = await axios.post("http://localhost:3000/todos", newTodo);
    commit("ADD_TODO", response.data);
  },
  async updateTodo({ commit }, updatedTodo) {
    await axios.put(
      `http://localhost:3000/todos/${updatedTodo.id}`,
      updatedTodo
    );
    commit("UPDATE_TODO", updatedTodo);
  },
  async deleteTodo({ commit }, id) {
    await axios.delete(`http://localhost:3000/todos/${id}`);
    commit("REMOVE_TODO", id);
  },
};

const mutations = {
  SET_TODOS(state, todos) {
    state.todos = todos;
  },
  SET_TODO(state, todo) {
    state.todo = todo;
  },
  ADD_TODO(state, todo) {
    state.todos.push(todo);
  },
  UPDATE_TODO(state, updatedTodo) {
    state.todos = state.todos.map((t) =>
      t.id === updatedTodo.id ? updatedTodo : t
    );
  },
  REMOVE_TODO(state, id) {
    state.todos = state.todos.filter((t) => t.id !== id);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
