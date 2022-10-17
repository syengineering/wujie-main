<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";
// import Vue3 from "./components/Vue3.vue";
import Vite from "./components/Vite.vue";

export default {
  components: {
    HelloWorld,
    // Vue3,
    Vite,
  },
};
</script>

<template>
  <div>
    <h1>主页内容</h1>
    <HelloWorld msg="本地组件"></HelloWorld>
    <!--保活模式，name相同则复用一个子应用实例，改变url无效，必须采用通信的方式告知路由变化 -->
    <!-- <fieldset class="card">
      <legend>远程组件---1</legend>
      <WujieVue
        width="100%"
        height="100%"
        name="vue4"
        :url="vue4Url"
        :sync="true"
      ></WujieVue>
    </fieldset> -->
    <!--保活模式，name相同则复用一个子应用实例，改变url无效，必须采用通信的方式告知路由变化 -->
    <fieldset class="card">
      <legend>远程组件</legend>
      <!-- <Vue3 />
      <hr /> -->
      <Vite />
    </fieldset>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
