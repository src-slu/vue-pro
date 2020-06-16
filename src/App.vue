<template>
  <div id="app">
    <!-- <header :title="title"></header> -->
    <router-view/>
  </div>
</template>

<script>
// import Header from './components/common/Header'

export default {
  name: "App",
  components: {
    // Header
  },
  data() {
    return {
      title: ""
    };
  },
  methods: {
    listenTitle() {
      this.title = title;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
