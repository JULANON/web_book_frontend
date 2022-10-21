import { defineStore } from 'pinia'
import axios from "axios";
import router from '@/router';
import Swal from "sweetalert2";
export const useBooksStore = defineStore({
  id: 'counter',
  state: () => ({
    books: JSON.parse(localStorage.getItem("books")) || [],
    book_detail: null,
    my_books: [],
    id: 0,
    page: 0,
    page_selected: 1,
    keyword: "",
    topic: "book_id",
    order: "ASC",
  }),
  
  actions: {
    async get_overall_book(){
      try{ 
        if(this.books == []){
          if(localStorage.getItem("books") != null){
            this.$patch({
              books: JSON.parse(localStorage.getItem("books"))
            });
            return;
          }
        }
        let myBook = await axios.get(`http://localhost:8000/data/books/overall/${this.page_selected}/${this.topic}/${this.order}`);
        if(myBook.status == 200){
          this.$patch({
            books: myBook.data.data
          });  
          localStorage.setItem("books", JSON.stringify(this.books));
        }
      }catch(e){
        console.log(e);
      }
    },
    async search_book(){
      try{ 
        if(this.keyword != ""){
          let book = await axios.get(`http://localhost:8000/data/books/search/`+this.keyword);
          if(book.status == 200){
            this.$patch({
              books: book.data.data
            });
          }
        }
      }catch(e){
        console.log(e);
      }
    },
    async get_count_book(){
      try{ 
        let count = await axios.get('http://localhost:8000/data/books/count');
        if(count.status == 200){
          this.$patch({
            page: parseInt(count.data.data/10)
          });
        }
      }catch(e){
        console.log(e);
      }
    },
    async get_book(){
      try{
        if(this.id == 0){
          if(localStorage.getItem("detail_book") != null){
            this.$patch({
              book_detail: JSON.parse(localStorage.getItem("detail_book"))
            });
            return;
          }
        }
        let myBook = await axios.get('http://localhost:8000/data/books/get/'+ this.id);
        if(myBook.status == 200){
          this.$patch({
            book_detail: myBook.data.data
          });
          localStorage.setItem("detail_book", JSON.stringify(this.book_detail));
        }
      }catch(e){
        console.log(e);
      }
    },
    async insertBook(
      title,
      isbn13,
      language_id,
      num_pages,
      publication_date,
      publisher_id,
      book_img,
      book_img_name,
      author_id,
      ){
        let myBook = await axios.post("http://localhost:8000/data/books", {
          title: title,
          isbn13: isbn13,
          language_id: language_id,
          num_pages: num_pages,
          publication_date: publication_date,
          publisher_id: publisher_id,
          book_img: book_img,
          book_img_name: book_img_name,
          author_id: author_id
        });
        if(myBook.status == 200){
          router.push("/profile");
          Swal.fire("Create Success","","success");
        }else{
          Swal.fire("Create Fail","","error");
        }
    },
    async updateBook(
      book_id,
      title,
      isbn13,
      language_id,
      num_pages,
      publication_date,
      publisher_id,
      book_img,
      book_img_name,
      author_id,
      ){
        try{
          let myBook = await axios.put(`http://localhost:8000/data/books/${book_id}`, {
            title: title,
            isbn13: isbn13,
            language_id: language_id,
            num_pages: num_pages,
            publication_date: publication_date,
            publisher_id: publisher_id,
            book_img: book_img,
            book_img_name: book_img_name,
            author_id: author_id
          });
          if(myBook.status == 200){
            router.push("/profile");
            Swal.fire("Update Success","","success");
            console.log(myBook.data);
          }else{
            Swal.fire("Update Fail","","error");
            console.log(myBook);
          }
        }catch(e) {
          console.log(e);
        }
    }
  }
});
export const useBookLanguageStore = defineStore({
  id: 'bookLanguage',
  state: () => ({
    bookLanguage: [],
  }),
  actions: {
    async getBookLanguage(){
      let myData = await axios.get('http://localhost:8000/data/book_languages');
      if(myData.status == 200){
        this.$patch({
          bookLanguage: myData.data.data
        });
      }
    },
    
  }
});

export const usePublisherStore = defineStore({
  id: 'publisher',
  state: () => ({
    publisher: [],
  }),
  actions: {
    async getPublisher(){
      let myData = await axios.get('http://localhost:8000/data/publishers');
      if(myData.status == 200){
        this.$patch({
          publisher: myData.data.data
        });
      }
    }
  }
});

export const useAuthorStore = defineStore({
  id: 'author',
  state: () => ({
    author: [],
  }),
  actions: {
    async getAuthor(){
      let myData = await axios.get('http://localhost:8000/data/author/');
      if(myData.status == 200){
        this.$patch({
          author: myData.data.data
        });
      }
    }
  }
});
