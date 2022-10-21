<script>
import Pagination from "@/components/VsudPagination.vue";
import PaginationItem from "@/components/VsudPaginationItem.vue";
export default {
  name: 'DashboardDefault',
  components: {
    Pagination,
    PaginationItem,
  },
  data () {
    return {
      selected: null,
    }
  }, 
 
}
</script>
<script setup>
    import { useBooksStore } from '@/store/books';
    import { useUserStore } from "@/store/user";
    import { onMounted } from 'vue';
    const user = useUserStore();
    const books = useBooksStore();
    function get_id(id){
      books.$patch({
        id: id,
    });
    }
    books.get_overall_book();
    function next(){
        books.$patch({
          page_selected: books.page_selected+1
        });
        books.get_overall_book();
    }

    function prev(){
        books.$patch({
          page_selected: books.page_selected-1
        });
        books.get_overall_book();
    }

    function select(num){
      books.$patch({
          page_selected: num
        });
      books.get_overall_book();
    }

    async function search(){
      let search = document.querySelector('#search');
      if(search.value){
        await books.$patch({
          keyword: search.value
        });
        await books.search_book();
      }else{
        await books.$patch({
          topic: "book_id",
          order: "ASC",
        });
        await books.get_count_book();
        location.reload();
      }
    }

    function order(){
      let order = document.querySelector('#order');
      if(order.value === '1'){
        books.$patch({
          topic: "title",
          order: "ASC",
        });
      }else if(order.value === '2'){
        books.$patch({
          topic: "title",
          order: "DESC",
        });
      }else if(order.value === '3'){
        books.$patch({
          topic: "book_id",
          order: "DESC",
        });
      }else if(order.value === '4'){
        books.$patch({
          topic: "book_id",
          order: "ASC",
        });
      }
      books.get_overall_book();
    }
    
    onMounted(() => {
      user.getUserDetail();
      books.get_count_book();
    });
</script>
<template>
  <div class="container d-flex justify-content-center">
    <div class="row m-5">
      <div class="mb-5 d-flex justify-content-end">
          <div class="input-group me-3" style="max-width: 200px;">
              <span class="input-group-text text-body">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
              <input
                id="search"
                type="text"
                class="form-control"
                :placeholder="
                  'Search here...'
                "
                @keyup="search"
              /> 
          </div>
          <div class="input-group" style="max-width: 150px;">
            <select id="order" @change="order" class="form-select">
                <option value="" selected disabled> Order By </option>
                <option value="1">Title A-Z</option>
                <option value="2">Title Z-A</option>
                <option value="3">Newest</option>
                <option value="4">Oldest</option>
            </select>
          </div>
      </div>
      <div class="col-6 book" v-for="(item) in books.books" :key="item.book_id">
        <div class="d-flex flex-row">
            <div class="p-2">
              <img v-bind:src="'/image/'+item.book_img"/>
            </div>
            <router-link @click="get_id(item.book_id)" value="" to="/detail">
            <div class="p-2">
              <h4>" {{ item.title }} "</h4>
              <p v-if="item.book_authors[0]">Author : {{ item.book_authors[0].author.author_name }}</p>
              <p v-else>Author : - </p>
              <p>Publisher : {{ item.publisher.publisher_name }}</p>
            </div>
            </router-link>
        </div>
      </div>
    
      
      <div class="page_list d-flex justify-content-center mt-5">
        <pagination color="success">
          <pagination-item class="me-3" v-if="(books.page_selected === 1)" prev disabled/>
          <pagination-item class="me-3" @click="prev" v-else prev/>
          <pagination-item :label="1" v-if="(books.page_selected === 1)" active />
          <pagination-item @click="select(1)" :label="1" v-else />
          <div class="mt-2 mx-2" v-if="(books.page_selected !== 1)"> ... </div>
          <pagination-item v-if="(books.page_selected != 1)" :label="books.page_selected" active/>
          <div class="mt-2 mx-2" v-if="(books.page_selected != books.page)"> ... </div>
          <pagination-item v-if="(books.page_selected != books.page)"  @click="select(books.page)" :label="books.page" />
          
          <pagination-item class="ms-3" v-if="(books.page_selected === books.page)" next disabled/>
          <pagination-item class="ms-3" v-else @click="next" next/>
        </pagination>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

  .book:hover{
    background-color: #EDEFF0;
    border-radius: 10px;
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