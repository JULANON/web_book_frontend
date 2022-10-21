<script setup>
  import axios from "axios";
  import Swal from "sweetalert2";
  import { onMounted } from 'vue';
  import { useBooksStore } from '@/store/books';
  import { useUserStore } from '@/store/user';
  const user = useUserStore();
  const books = useBooksStore();
  async function get_book_date(){
      try{
        let now = new Date();
        let date_now = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
        document.querySelector('#date').defaultValue = date_now;
        let date = document.querySelector('#date').value || date_now;
        console.log(date);
        let borrow = await axios.get(`http://localhost:8000/data/borrow/date/${date}`);
        if(borrow.status == 200){
          books.$patch({
            my_books: borrow.data.data,
          });
        }else{
          Swal.fire("Fail",borrow.data.data,"error");
        }
      }catch(e){
        Swal.fire("Fail", e.response, "error");
      }
    }
  onMounted(() => {
    user.getUserDetail();
    get_book_date();
    
  });
</script>
<template>
  <div class="card mb-4">
    <div class="card-header pb-0">
      <h6>History</h6>
    </div>
    <div class="card-body px-0 pt-0 pb-2">
      <div class="d-flex justify-content-end">
        <input
                id="date"
                type="date"
                class="form-control m-2"
                :placeholder="
                  'Search here...'
                "
                @change="get_book_date"
                style="max-width: 200px;"
              />
      </div>
      <div class="table-responsive p-0">
        <table class="table align-items-center mb-0">
          <thead>
            <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Books</th>
              <th
                class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >Borrower</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Status</th>
              <th
                class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >Date Return</th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item) in books.my_books" :key="item.book.book_id">
              <td>
                <div class="d-flex px-2 py-1">
                  <div>
                    <vsud-avatar :img="'/image/'+item.book.book_img" size="sm" border-radius="lg" class="me-3" alt="user1" />
                  </div>
                  <div class="d-flex flex-column justify-content-center">
                    <h6 class="mb-0 text-sm">{{ item.book.title }}</h6>
                  </div>
                </div>
              </td>
              <td class="align-middle">
                <span class="text-secondary text-xs font-weight-bold ms-2">{{ item.user.name }}</span>
              </td>
              <td class="align-middle text-center text-sm">
                <vsud-badge color="success" variant="gradient" size="sm" v-if="item.date_return">Return</vsud-badge>
                <vsud-badge color="warning" variant="gradient" size="sm" v-if="!item.date_return">Not Return</vsud-badge>
              </td>
              <td class="align-middle text-center">
                <span class="text-secondary text-xs font-weight-bold" v-if="item.date_return">{{ item.date_return }}</span>
                <span class="text-secondary text-xs font-weight-bold" v-if="!item.date_return">-</span>
              </td>
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