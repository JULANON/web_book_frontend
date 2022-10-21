import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
import Detail from "@/views/Detail.vue";
import History from "@/views/History.vue";
import CreateBook from "@/views/CreateBook.vue";
import EditBook from "@/views/EditBook.vue";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/sign-in",
  },
  {
    path: "/Home",
    name: "Books",
    component: Home,
    
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
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
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
  {
    path: "/createBook",
    name: "CreateBook",
    component: CreateBook,
  },
  {
    path: "/editBook",
    name: "EditBook",
    component: EditBook,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
