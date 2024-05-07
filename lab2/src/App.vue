<template>
  <div class="container-fluid">
    <Navbar />
    <RouterView />
  </div>
</template>

<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    RouterView,
  },
};
</script>

<style scoped></style>
