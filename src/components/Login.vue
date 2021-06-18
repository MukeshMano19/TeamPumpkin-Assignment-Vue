<template>
  <div class="login-signup-page">
    <div class="sign-up">
      <h2 class="">Sign up</h2>
      <br />
      <label class="lbl-text">Name:</label><br />
      <input type="text" class="text-field" v-model="signUp.name" /><br /><br />
      <label class="lbl-text">Email:</label><br />
      <input
        type="text"
        class="text-field"
        v-model="signUp.email"
      /><br /><br />
      <label class="lbl-text">Password:</label><br />
      <input
        type="password"
        class="text-field"
        v-model="signUp.password"
      /><br /><br />

      <input
        type="radio"
        name="user"
        v-model="signUp.type"
        class="radio-field"
        id="NU"
        value="NU"
      />
      <label for="NU" class="lbl-text">Normal User</label><br />

      <input
        type="radio"
        class="radio-field"
        id="C"
        value="C"
        name="user"
        v-model="signUp.type"
      />
      <label for="C" class="lbl-text">Contributor</label><br />

      <input
        type="submit"
        value="Submit"
        class="submit-btn"
        @click="doSignUp(signUp)"
      />
    </div>
    <div class="login">
      <h2 class="">Login</h2>
      <br />
      <label class="lbl-text">User Name or Email:</label><br />
      <input type="text" class="text-field" v-model="login.email" /><br /><br />
      <label class="lbl-text">Password:</label><br />
      <input
        type="password"
        class="text-field"
        v-model="login.password"
      /><br /><br />

      <input
        type="submit"
        value="Submit"
        class="submit-btn"
        @click="doLogin(login)"
      />
    </div>
  </div>
</template>

<script>
import {mapMutations } from "vuex"

export default {
  name: "Login",
  data() {
    return {
      signUp: {},
      login: {},
    };
  },
  methods: {
    ...mapMutations(["setUser"]),
    doSignUp(data) {
      this.$http
        .post(`user/signUp`, data)
        .then((res) => {
          alert(res.body.message);
          this.signUp = {};
        })
        .catch((e) => {
          alert(e.body.message);
        });
    },
    doLogin(data) {
      this.$http
        .post(`user/login`, data)
        .then((res) => {
          localStorage.setItem("appToken", res.body.token);
          localStorage.setItem("appUser", JSON.stringify(res.body.user));

          this.setUser(res.body)

          if (res.body.user && res.body.user.type == "NU") {
            this.$router.push("/normal-user");
            return;
          }
          this.$router.push("/contributor");
        })
        .catch((e) => {
          alert(e.body.message);
        });
    },
  },
};
</script>
