<script setup>
  import axios from "axios";
  import Swal from "sweetalert2";
  import { onMounted } from 'vue';
  import { useBooksStore } from '@/store/books';
  import { useUserStore } from '@/store/user';
  const user = useUserStore();
  const books = useBooksStore();
  async function edit_book(book_id){
    books.$patch({
      id: book_id,
    });
  }

  async function search(){
    let search = document.querySelector('#search');
    await books.$patch({
        topic: "book_id",
        order: "ASC",
      });
    if(search.value){
      await books.$patch({
        keyword: search.value
      });
      await books.search_book();
    }else{
      await books.get_count_book();
      location.reload();
    }
  }
  
  async function delete_book(book_id){
    try{ 
        let book = await axios.delete(`http://localhost:8000/data/books/${book_id}`);
        if(book.status == 200){
          books.get_overall_book();
          Swal.fire("Remove Success","","success");
        }else{
          Swal.fire("Remove Fail","","error");
          console.log(book);
        }
      }catch(e){
        console.log(e);
        Swal.fire("Remove Fail","","error");
      }
  }

  books.get_overall_book();
  onMounted(async () => {
    await books.$patch({
        topic: "book_id",
        order: "ASC",
    });
    user.getUserDetail();
    books.get_overall_book();
  });
</script>
<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>Manage Books</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="d-flex justify-content-between">
        <router-link to="/createBook" class="my-2 btn bg-gradient-info ms-3">Create new</router-link>
        <input
                id="search"
                type="text"
                class="form-control m-2"
                :placeholder="
                  'Search here...'
                "
                @keyup="search"
                style="max-width: 200px"
              /> 
      </div>
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Books</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Author</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Option</th>
              <!-- <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Date Return</th>
              <th class="text-secondary opacity-7"></th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in books.books" :key="item.book_id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar :img="'/image/'+item.book_img" size="sm" border-radius="lg" class="me-3" alt="user1" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ item.title }}</h6>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <span v-if="item.book_authors[0]" class="text-secondary text-xs font-weight-bold ms-2">{{ item.book_authors[0].author.author_name }}</span>
                <span v-else class="text-secondary text-xs font-weight-bold ms-2">-</span>
              </td>
              <td class="align-middle text-center text-sm">
                <router-link @click="edit_book(item.book_id)" to="/editBook" class="my-2 btn bg-gradient-primary me-2">Edit</router-link>
                <button @click="delete_book(item.book_id)" class="my-2 btn bg-gradient-danger">Remove</button>
              </td>
              <!-- <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold" v-if="item.date_return">{{ item.date_return }}</span>
                <span class="text-secondary text-xs font-weight-bold" v-if="!item.date_return">-</span>
              </td> -->
            </tr> 
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import VsudAvatar from "@/components/VsudAvatar.vue";
import VsudBadge from "@/components/VsudBadge.vue";

export default {
  name: "HistoryTable",
  components: {
    VsudAvatar,
    VsudBadge,
  },
  data() {
    return {
    };
  },
};
</script>