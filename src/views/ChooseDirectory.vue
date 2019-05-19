<template>
  <div class="about">
    <h1>Choose directory</h1>
    <button class="btn btn-primary" @click="selectDirectory">Select Directory</button>
    <div>
      <p v-for="file in fileList" :key="file">{{ file }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import { setTimeout } from "timers";

import store from "../store";

const { dialog } = require("electron").remote;

@Component({
  methods: {
    selectDirectory: () => {
      store.commit("setBusy", true);
      const directory = dialog.showOpenDialog({
        properties: ["openDirectory"]
      });
      if (directory && directory.length) {
        store.dispatch("loadDirectory", directory[0]);
      } else {
        store.commit("setBusy", false);
      }
    }
  },
  computed: mapState(["fileList"])
})
export default class Home extends Vue {}
</script>
