<template>
  <div id="app" class="app">
    <router-view></router-view>
    <!-- <footer-vue></footer-vue> -->
  </div>
</template>

<script>
import Register from './views/Register.vue'
import MainLogIn from './views/MainLogIn.vue'
import SignInVue from './views/SignIn.vue';
import MainLogOffVue from './views/MainLogOff.vue';
import HomePageVue from './views/HomePage.vue';
import FooterVue from './components/Footer.vue';

export default {
  components: { Register, MainLogIn, SignInVue, MainLogOffVue, HomePageVue, FooterVue },

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

/* .app {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
} */
</style>