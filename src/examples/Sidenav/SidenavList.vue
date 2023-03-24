<template>
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <div
    id="sidenav-collapse-main"
    class="w-auto h-auto collapse navbar-collapse max-height-vh-100 h-100"
  >
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse nav-text="Home" :to="{ name: 'Books' }">
          <template #icon>
            <i class="fa fa-home" style="font-size:25px; color: black;"></i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="History" :to="{ name: 'History' }">
          <template #icon>
            <i class="fa fa-history" style="font-size:25px; color: black;"></i>
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
<<<<<<< Updated upstream
=======
        <sidenav-collapse nav-text="Billing" :to="{ name: 'Billing' }">
          <template #icon>
            <icon name="billing" />
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse nav-text="Virtual Reality" :to="{ name: 'Virtual Reality' }">
          <template #icon>
            <icon name="virtual-reality" />
          </template>
        </sidenav-collapse>
      </li><li class="nav-item">
        <sidenav-collapse nav-text="กล้วย" :to="{ name: 'Bank' }">
          <template #icon>
            <icon name="rtl-page" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="RTL" :to="{ name: 'Rtl' }">
          <template #icon>
            <icon name="rtl-page" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="$store.state.isRTL ? 'me-4' : 'ms-2'"
        >PAGES</h6>
      </li>
      <li class="nav-item">
>>>>>>> Stashed changes
        <sidenav-collapse nav-text="Profile" :to="{ name: 'Profile' }">
          <template #icon>
            <i class="fa fa-user-circle-o" style="font-size:24px; color:black"></i>
          </template>
        </sidenav-collapse>
      </li>
      
    </ul>
  </div>
  
</template>
<script>
// import Icon from "@/components/Icon.vue";
import SidenavCollapse from "./SidenavCollapse.vue";
// import SidenavCard from "./SidenavCard.vue";

export default {
  name: "SidenavList",
  components: {
    //icon
    SidenavCollapse,
    // SidenavCard,
  },
  props: {
    cardBg: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      title: "Vite Soft UI Dashboard",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
 
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
  },
};
</script>

<style scoped>
.active i {
  color: #fff !important;
}

</style>