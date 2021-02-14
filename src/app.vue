<template>
  <div class="vp-app">
    <h1>This App View {{ version }}</h1>
    <img class="vp-head" :src="headImg" />
    <router-link to="/viewone">View One</router-link>
    <router-link to="/viewtwo">View two</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import headImgRes from './assets/head.jpeg'
export default {
  data() {
    return {
      version: '0.0.1',
      headImg: headImgRes,
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss">
@import './commons/common.scss';
.vp-app {
  padding: 0;
  margin: 0;
}
.vp-head {
  display: block;
  width: 100%;
}
</style>