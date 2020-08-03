<template>
  <div class="container">
    <div class="spacer-small"></div>
    <transition name="fade" mode="out-in">
      <div>
        <p>{{message}}</p>
      </div>
    </transition>

    <!-- rendering modal -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      message: "Welcome to vue on webpack.",
      meta: "",
    };
  },
  methods: {
    login() {
      axios
        .post("/login", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          const element = JSON.parse(JSON.stringify(response.data));
          this.message = element.message;
          this.$router.push({ name: "panel" });
        })
        .catch((e) => {
          console.log(e);
          this.message = "Falscher Benutzername oder Passwort";
        });
    },
  },
};
</script>
