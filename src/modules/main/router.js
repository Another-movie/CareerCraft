import router from "@/router";
const Main = () =>
  import(/* webpackChunkName: "Main" */ "./pages/Main");

router.addRoutes([
  {
    path: "/",
    name: "Main",
    component: Main
  }
]);
