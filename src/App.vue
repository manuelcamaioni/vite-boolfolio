<script>
import AppHeader from './components/AppHeader.vue';
// import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,

  },
}
</script>

<template>
  <AppHeader />
  <router-view></router-view>
  <AppFooter />
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap';
</style>
