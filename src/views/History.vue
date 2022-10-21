<script setup>
  import { onMounted } from 'vue';
  import { useUserStore } from "@/store/user";
  const user = useUserStore();
  onMounted(() => {
    user.getUserDetail();
  });
</script>
 
<template>
     <breadcrumbs current-directory="Vue" currentPage="Breadcrumbs" />
    <div class="py-4 container-fluid">
      <div class="row">
        <div class="col-12">
          <HistoryTable v-if="!user.user.isAdmin" />
          <HistoryAdminTable v-if="user.user.isAdmin" />
        </div>
      </div>
    </div>
  </template>
   
   <script>
   
   </script>
  <script>
  import HistoryTable from "./components/HistoryTable.vue";
  import HistoryAdminTable from "./components/HistoryAdminTable.vue";
  export default {
    name: "TablesPage",
    components: {
        HistoryTable,
        HistoryAdminTable
    },
  };
  </script>
  

<style scoped>

</style>