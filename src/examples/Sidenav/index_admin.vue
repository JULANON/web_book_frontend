<template>
  <aside
    id="sidenav-admin-main"
    class="my-3 overflow-auto border-0 sidenav navbar navbar-vertical navbar-expand-xs border-radius-xl"
    :class="$store.state.isRTL ? 'me-3 rotate-caret' : 'ms-3'"
    :data-color="sidenavActiveBgColors"
  >
    <div class="sidenav-header">
      <i
        id="iconSidenav"
        class="top-0 p-3 cursor-pointer fas fa-times text-secondary opacity-5 position-absolute end-0 d-none d-xl-none"
        aria-hidden="true"
      ></i>
      <router-link class="m-0 navbar-brand" to="/Home">
        <img :src="logo" class="navbar-brand-img h-100" alt="main_logo" />
        <span class="ms-1 font-weight-bold">Library</span>
      </router-link>
    </div>
    <hr class="mt-0 horizontal dark" />
    <sidenav-list :card-bg="customClass" />
  </aside>
</template>
<script>
import SidenavList from "./SidenavList_admin.vue";
import logo from "../img/library-logo-template-design-free-vector.jpg";

export default {
  name: "IndexComponent",
  components: {
    SidenavList,
  },
  props: {
    customClass: {
      type: String,
      default: ""
    },
  },
  data() {
    return {
      logo,
      sidenavActiveBgColors: 'success'
    };
  },
};
</script>
