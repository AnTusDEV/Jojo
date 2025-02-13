 
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
  <header>
    <div class="wrapper">  
    </div>
  </header>

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
