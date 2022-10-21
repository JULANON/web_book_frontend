<script setup>
  import { useUserStore } from "@/store/user";
  import { useBooksStore } from '@/store/books';
  import axios from "axios";
  import Swal from "sweetalert2";
  import { onMounted } from 'vue';
  import router from '@/router';
  const user = useUserStore();
  const books = useBooksStore();
  function clickLogout(){
    localStorage.clear();
    router.push("/");
  }
  async function return_book(borrow_id){
    try{
        let borrow = await axios.put(`http://localhost:8000/data/borrow/return/${borrow_id}`);
        if(borrow.status == 200){
          get_my_book();
          Swal.fire("Return Book Success","","success");
        }else{
          Swal.fire("Return Book Fail",borrow.data.data,"error");
        }
      }catch(e){
        Swal.fire("Fail", e.response.data.error_description, "error");
      }
  }
  get_my_book();
  async function get_my_book(){
      try{
        let borrow = await axios.get(`http://localhost:8000/data/borrow/user/${user.user.id}`);
        if(borrow.status == 200){
          books.$patch({
            my_books: borrow.data.data,
          });
        }else{
          Swal.fire("Fail",borrow.data.data,"error");
        }
      }catch(e){
        Swal.fire("Fail", e.response.data.error_description, "error");
      }
    }
    user.getUserDetail();
  onMounted(() => {
    user.getUserDetail();
  });
</script>
<template>
  <div class="container-fluid">
    <div class="mt-4 page-header min-height-300 border-radius-xl"></div>
    <div
      class="mx-4 overflow-hidden card card-body blur shadow-blur"
      style="margin-top: -19rem !important;"
    >
      <div class="row gx-4">
        <div class="col-md-auto">
          <div class="avatar avatar-xl position-relative">
            <img
              src="/profile.jpg"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col mx-4 my-auto">
          <div class="h-100">
            <h5 class="mb-1">{{ user.user.name }}</h5>
          </div>
        </div>
        <div class="col col-lg-2 text-end my-auto">
          <button @click="clickLogout" class="btn my-4 mb-2 bg-gradient-danger">
          Logout
          </button>
        </div>
      </div>
    </div>
  </div>
  <ManageBookTable class="my-4" v-if="user.user.isAdmin" />
  <div class="py-4 container-fluid" v-if="!user.user.isAdmin">
    <div class="mt-3 row">
      <div class="col-15 col-md-15 col-xl-20">
        <div class="card h-100">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-0">My Book</h6>
            <div class="container d-flex justify-content-center">
              <div class="row m-5">
                <div class="col book" v-for="(item) in books.my_books" :key="item.book.book_id">
                  <table class="table">
                    <tbody>
                      <tr>
                        <td class="align-middle text-center"><img v-bind:src="'/image/'+item.book.book_img" style="width:100px"/></td>
                      </tr>
                      <tr>
                        <td class="align-middle text-center"><div class="title" style="max-width: 200px;"><b>{{item.book.title }}</b></div></td>
                      </tr>
                      <tr>
                        <td class="align-middle text-center">
                          <button @click="return_book(item.borrow_id)" class="my-2 btn bg-gradient-primary">return</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import bgImg from '@/assets/img/curved-images/curved14.jpg'
import Pagination from "@/components/VsudPagination.vue";
import PaginationItem from "@/components/VsudPaginationItem.vue";
import ManageBookTable from "./components/ManageBookTable.vue";

export default {
  name: 'ProfileOverview',
  components: {
    Pagination,
    PaginationItem,
    ManageBookTable
  },
  data () {
    return {
      showMenu: false,
      bgImg
    }
  }
}

</script>

<style scoped>
  .title{
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .container{
    background-color: #fff;
  }
  .list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
  .list li {
    float: left;
    padding: .5rem;
    
  }
  .list li a{
    text-align: center;
    padding-top: .1rem;
    padding-left: .5rem;
    padding-right: .5rem;
    padding-bottom: .1rem;
    border-radius: 50%;
  }

  img {
    width: 100px;
  }
  
</style>
