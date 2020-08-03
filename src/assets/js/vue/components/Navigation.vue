<template>
  <div class="menu">
    <transition name="fade" mode="out-in">
      <main-logo></main-logo>
    </transition>
    <h3>Menu:</h3>
    <ul>
      <li>
        <router-link :to="{name:'home'}">Point 1</router-link>
      </li>
      <li>
        <router-link to>Point 2</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import mainLogo from "./Logo.vue";
export default {
  components: {
    mainLogo,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.menu {
  background: transparent;
}
</style>


