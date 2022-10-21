<script setup>
  import { ref } from "vue";
  import { useUserStore } from "@/store/user";
  let username = ref("");
  let password = ref("");
  let name = ref("");
  const user = useUserStore();
  function signup(){
    user.$patch({
        username : username.value, 
        password : password.value,
        user: {name: name.value}
    });
    user.register();
  }
</script>
<template>
  <navbar btn-background="bg-gradient-primary" />
  <div
    class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg"
    :style="{
      backgroundImage:   `url(${bgImg})`,
    }"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    
  </div>
  <div class="container">
    <div class="row mt-lg-n12 mt-md-n10 mt-n10 justify-content-center">
      <div class="mx-auto col-xl-4 col-lg-5 col-md-7">
        <div class="card z-index-0">
          <div class="pt-4 text-center card-header">
            <h5>Register</h5>
          </div>
          
          <div class="card-body">
            <form role="form">
              <div class="mb-3">
                <input v-model="name" class="form-control" type="text" placeholder="Name" aria-label="Name" />
              </div>
              <div class="mb-3">
                <input v-model="username" class="form-control" type="text" placeholder="Username" aria-label="Username" />
              </div>
              <div class="mb-3">
                <input v-model="password" class="form-control" type="password" placeholder="Password" aria-label="Password" />
              </div>
              <div class="text-center">
                <vsud-button @click="signup" color="dark" full-width variant="gradient" class="my-4 mb-2">Sign up</vsud-button>
              </div>
              <p class="text-sm mt-3 mb-0 text-center">
                Already have an account?
                <router-link
                  to="/sign-in"
                  class="text-dark font-weight-bolder"
                >Sign in</router-link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script>
import VsudInput from "@/components/VsudInput.vue";
import VsudCheckbox from "@/components/VsudCheckbox.vue";
import VsudButton from "@/components/VsudButton.vue";
import bgImg from "@/assets/img/curved-images/curved6.jpg"
export default {
  name: "SignUp",
  components: {
    VsudInput,
    VsudCheckbox,
    VsudButton,
  },
  data() {
    return {
      bgImg
    }
  },
  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
  },
};
</script>
