<template>
  <div class="App" id="app">
    <div class="App__busy" v-if="busy">BUSY</div>
    <div id="nav">
      {{ busy }}
      <button class="btn btn-outlined" @click="goBack">Back</button>
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";

@Component({
  methods: {
    goBack: () => history.back()
  },
  computed: mapState(["busy"])
})
export default class Home extends Vue {}
</script>

<style lang="scss">
@import "~bootstrap-css-only/css/bootstrap.css";

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.App {
  .App__busy {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(255, 255, 255, 0.7);
  }
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
