import Home from "./pages/Home.vue";
import Todo from "./pages/todos/todo.vue";
import Todos from "./pages/todos/todos.vue";
import CreateTodo from "./pages/todos/create.vue";

export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/todos",
    component: Todos,
  },
  {
    path: "/todos/:id",
    component: Todo,
    children: [
      {
        path: "edit",
        component: Todo,
      },
    ],
  },
  {
    path: "/todos/create",
    component: CreateTodo,
  },
];
