<template>
  <div id="app">
    <div class="app-bar">
      <h4 class="title">
        Assignment -
        {{ user.type == "NU" ? "Normal User" : "Contributor" }} Login
      </h4>
      <div class="user">
        <div style="display: flex; justify-content: flex-end" v-if="isLoggedIn">
          <div style="padding: 10px 10px 0 0">
            <p>{{ user.name }}Mukesh |</p>
          </div>
          <div>
            <input
              type="submit"
              value="Logout"
              class="submit-btn"
              @click="doLogout()"
            />
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["isLoggedIn", "user"]),
  },
  methods: {
    ...mapMutations(["logOut"]),
    doLogout() {
      this.logOut();
      localStorage.removeItem("appUser");
      localStorage.removeItem("appToken");
      this.$router.push("/");
    },
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.app-bar {
  position: relative;
  height: 100px;
  max-height: 100px;
  background: #dac556;
  font-size: 24px;
  font-weight: 600;
  display: flex;
}

.app-bar .title {
  margin: auto;
  padding: 35px;
  width: 50%;
}

.app-bar .user {
  margin: auto;
  padding-right: 30px;
  width: 50%;
  text-align: right;
}
</style>
