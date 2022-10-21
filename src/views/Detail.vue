<script>
export default {
  name: 'DashboardDefault',
  components: {},
  data () {
    return {
      selected: null,
      options: [
        { value: 'A', text: 'Option A (from options prop)' },
        { value: 'B', text: 'Option B (from options prop)' }
      ]
    }
  }
}
</script>
<script setup>
    import { useBooksStore } from '@/store/books';
    import { useUserStore } from '@/store/user';
    import { onMounted } from 'vue';
    import axios from "axios";
    import Swal from "sweetalert2";

    const user = useUserStore();
    const books = useBooksStore();
    books.get_book();
    onMounted(() => {
      books.get_book();
      user.getUserDetail();
    });
    async function borrow(book_id){
      try{
        let borrow = await axios.post('http://localhost:8000/data/borrow/', {
          book_id: book_id,
          user_id: user.user.id,
        });
        if(borrow.status == 200){
          Swal.fire("Borrow Success","","success");
          books.$patch({
            book_detail: null,
          });
          books.get_book();
        }else{
          Swal.fire("Borrow Fail",borrow.data.data,"error");
        }
      }catch(e){
        Swal.fire("Borrow Fail", e.response.data.error_description, "error");
      }
    }
</script>
<template>
  <div class="container d-flex justify-content-center">
    <div class="row m-5">
      <div class="col book">
        <div class="d-flex flex-row">
            <div class="p-3">
              <img v-bind:src="'../public/image/'+books.book_detail.book_img" style="width:250px;"/>
            </div>    
            <div class="p-2">
              <h4>" {{ books.book_detail.title }} "</h4>
              <table>
                <tbody>
                  <tr>
                    <td><div class="m-2"><b>ISBN:</b></div></td>
                    <td><div>{{books.book_detail.isbn13 }}</div></td>
                  </tr>
                  <tr>
                    <td><div class="m-2"><b>Author:</b></div></td>
                    <td><div>{{ books.book_detail.book_authors[0].author.author_name }}</div></td>
                  </tr>
                  <tr>
                    <td><div class="m-2"><b>Publisher::</b></div></td>
                    <td><div>{{ books.book_detail.publisher.publisher_name }}</div></td>
                  </tr>
                  <tr>
                    <td><div class="m-2"><b>Language:</b></div></td>
                    <td><div>{{ books.book_detail.book_language.language_name  }} ( {{ books.book_detail.book_language.language_code }} )</div></td>
                  </tr>
                  <tr>
                    <td><div class="m-2"><b>Pages number:</b></div></td>
                    <td><div>{{ books.book_detail.num_pages }}</div></td>
                  </tr>
                  <tr>
                    <td><div class="m-2"><b>Date of public:</b></div></td>
                    <td><div>{{ books.book_detail.publication_date }}</div></td>
                  </tr>
                </tbody>
              </table>
              
              <div class="text-center my-5" v-if="!user.user.isAdmin">
                <button v-if="books.book_detail.borrowed === 0" @click="borrow(books.book_detail.book_id)" class=" btn bg-gradient-success">Borrow</button>
                <button v-if="books.book_detail.borrowed === 1" class=" btn bg-gradient-secondary" disabled>Borrowed</button>
              </div>
            </div>
            
        </div>
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

  .list li a{
    text-align: center;
    padding-top: .1rem;
    padding-left: .5rem;
    padding-right: .5rem;
    padding-bottom: .1rem;
    border-radius: 50%;
  }
  .active {
    background-color: #8EE171;
    color: #fff;
  }
  img {
    width: 100px;
  }
</style>