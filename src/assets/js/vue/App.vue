<template>
  <div>
    <router-view name="header-main"></router-view>
    <router-view name="navigation"></router-view>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

    <router-view name="footer-main"></router-view>
  </div>
</template>

<script>
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.21s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
