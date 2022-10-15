import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import Profile from "@/views/Profile.vue";
/* import VirtualReality from "@/views/VirtualReality.vue"; */

import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/Home",
  },
  {
    path: "/Home",
    name: "Dashboard",
    component: Home,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },/* {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  }, */
  // {
  //   path: "/rtl-page",
  //   name: "Rtl",
  //   component: Rtl,
  // },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
