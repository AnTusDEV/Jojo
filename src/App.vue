 
<script>
import {  RouterView} from "vue-router"; 
export default {
  name: "App",
  components: { 
    // RouterLink,
    RouterView
  },
};
</script>

<template>
  <!-- HEADER WEBSITE --> 
  <RouterView />
</template>

<style>
#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50; 
}
</style>
