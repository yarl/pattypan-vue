<template>
  <div class="Home">
    <img class="Home__logo" alt="Pattypan logo" src="../assets/pattypan.svg">
    <h1>pattypan</h1>
    <h3>v. 0.0.1</h3>
    <div class="d-flex justify-content-center Home__buttons">
      <router-link class="btn btn-primary" to="/choose-directory">Generate Spreadsheet</router-link>
      <router-link class="btn" to="/load-spreadsheet">Validate & Upload</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>

<style scoped lang="scss">
.Home {
  .Home__logo {
    width: 150px;
  }

  .Home__buttons {
    margin-top: 2em;
    font-weight: bold;
  }
}
</style>
