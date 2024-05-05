<template>
  <div class="container">
    <form class="mt-5" @submit.prevent="addUser">
      <div class="row">
        <div class="col-md-6">
          <label class="form-label">Name</label>
          <input
            require
            minlength="3"
            maxlength="120"
            type="text"
            class="form-control"
            v-model="FormValues.name"
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Age</label>
          <input
            min="18"
            type="number"
            class="form-control"
            v-model="FormValues.age"
          />
        </div>
      </div>
      <div class="row mt-3">
        <div class="col-md-6">
          <label class="form-label">Role</label>
          <select class="form-select" v-model="FormValues.role">
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>
        <div class="col-md-6">
          <input type="submit" class="btn btn-primary mt-4" />
        </div>
      </div>
    </form>
    <ul class="nav nav-tabs mt-5">
      <li class="nav-item">
        <button
          class="nav-link {{userFlag? 'active': ''}}"
          @click="displayUsers"
        >
          Users
        </button>
      </li>
      <li class="nav-item">
        <button
          class="nav-link {{adminFlag? 'active': ''}}"
          @click="displayAdmins"
        >
          Admins
        </button>
      </li>
    </ul>
    <div class="mt-5">
      <Table
        v-if="userFlag"
        :data="users"
        (deleteItem)="deleteUser($event)"
      ></Table>
      <Table
        v-if="adminFlag"
        :data="admins"
        (deleteItem)="deleteUser($event)"
      ></Table>
    </div>
  </div>
</template>

<script>
import Table from "../components/Table.vue";

export default {
  name: "Home",
  components: {
    Table,
  },
  data() {
    return {
      admins: [],
      users: [],
      userFlag: false,
      adminFlag: false,
      FormValues: {
        name: "",
        age: "",
        role: "",
      },
    };
  },
  methods: {
    addUser() {
      if (this.FormValues.role === "admin") {
        this.admins.push(this.FormValues);
      } else {
        this.users.push(this.FormValues);
      }
      this.FormValues = {
        name: "",
        age: "",
        role: "",
      };
      console.log(this.admins, this.users);
    },
    displayUsers() {
      this.userFlag = true;
      this.adminFlag = false;
    },
    displayAdmins() {
      this.adminFlag = true;
      this.userFlag = false;
    },
    deleteUser(index) {
      if (this.adminFlag) {
        this.admins.splice(index, 1);
      } else {
        this.users.splice(index, 1);
      }
    },
  },
};
</script>

<style scoped></style>
