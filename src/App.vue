 
<script>
import {  RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
export default {
  name: "App",
  components: {
    // HelloWorld,
    // RouterLink,
    RouterView
  },
};
</script>

<template> 
  <RouterView />
</template>

<style>
#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
-----------------------------------------------