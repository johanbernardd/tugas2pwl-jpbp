import { createRouter, createWebHistory } from "vue-router";
import BiodataComponent from "../components/Biodata.vue";

const routes = [
  {
    path: "/biodata",
    name: "Biodata",
    component: BiodataComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
