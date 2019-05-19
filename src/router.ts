import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";

import ChooseDirectory from "./views/ChooseDirectory.vue";
import ChooseTemplate from "./views/ChooseTemplate.vue";
import CreateSpreadsheet from "./views/CreateSpreadsheet.vue";
import LoadSpreadsheet from "./views/LoadSpreadsheet.vue";
import ValidateSpreadsheet from "./views/ValidateSpreadsheet.vue";
import Login from "./views/Login.vue";
import Upload from "./views/Upload.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/choose-directory",
      name: "chooseDirectory",
      component: ChooseDirectory
    },
     {
      path: "/choose-template",
      name: "chooseTemplate",
      component: ChooseTemplate
    },
     {
      path: "/create-spreadsheet",
      name: "createSpreadsheet",
      component: CreateSpreadsheet
    },
     {
      path: "/load-spreadsheet",
      name: "loadSpreadsheet",
      component: LoadSpreadsheet
    },
     {
      path: "/validate-spreadsheet",
      name: "validateSpredsheet",
      component: ValidateSpreadsheet
    },
     {
      path: "/login",
      name: "login",
      component: Login
    },
     {
      path: "/upload",
      name: "upload",
      component: Upload
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
