import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Profile from "@/views/Profile.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";
<<<<<<< Updated upstream
import Detail from "@/views/Detail.vue";
import History from "@/views/History.vue";
import CreateBook from "@/views/CreateBook.vue";
import EditBook from "@/views/EditBook.vue";
=======
import bank from "@/views/bank.vue";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
    path: "/bank",
    name: "Bank",
    component: bank,
>>>>>>> Stashed changes
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

export default router;
