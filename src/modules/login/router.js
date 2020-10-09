import router from "@/router";
const Login = () =>
  import(/* webpackChunkName: "Main" */ "./pages/LoginEmployee");

router.addRoutes([
  {
    path: "/login",
    name: "Login",
    component: Login,
  }
]);
