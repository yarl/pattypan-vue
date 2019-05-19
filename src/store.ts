import Vue from "vue";
import Vuex from "vuex";

import { getFileList } from "@/utils/filesystem";

Vue.use(Vuex);

interface State {
  busy: boolean;
  fileList: Array<string>;
}

export default new Vuex.Store({
  state: <State>{
    busy: false,
    fileList: []
  },
  mutations: {
    setBusy(state, value: boolean) {
      state.busy = value;
    },
    setFileList(state, fileList: Array<string>) {
      state.fileList = fileList;
    }
  },
  actions: {
    loadDirectory({ commit }, directory: string) {
      commit("setBusy", true);
      getFileList(directory).then((fileList: string[]) => {
        console.log(fileList);
        commit("setFileList", fileList);
        commit("setBusy", false);
      });
    }
  }
});
