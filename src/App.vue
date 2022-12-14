<template>
  <div id="app" class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Register from './views/Register.vue'
import MainLogIn from './views/MainLogIn.vue'
import SignInVue from './views/SignIn.vue';
import MainLogOffVue from './views/MainLogOff.vue';
import HomePageVue from './views/HomePage.vue';

export default {
  components: { Register, MainLogIn, SignInVue, MainLogOffVue, HomePageVue },

}
</script>

<style>
* {
  font-family: 'Comic Neue', sans-serif;
  font-family: 'Manrope', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #0D1017;
}

body {
  min-height: 100vh;
}

.app {
  min-height: 100vh;
}
</style>