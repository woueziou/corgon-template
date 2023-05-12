import { createRouter, createWebHistory } from "vue-router";

// const routes = getRoutes(import.meta.glob("../views/**/**.vue"),{
//     pathRoot: "../views/"
// })

import routes from "~ui";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeResolve(async (to) => {
  console.log(to);
});
router.beforeEach((to, from, next) => {
  console.log(to, from);
  next();
});
export default router;
