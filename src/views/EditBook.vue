<script setup>
import { onMounted, ref } from 'vue';
import { useBookLanguageStore, usePublisherStore, useBooksStore, useAuthorStore } from '@/store/books';
const bookLanguage = useBookLanguageStore();
const publisher = usePublisherStore();
const books = useBooksStore();
const author = useAuthorStore();
books.get_book();
onMounted(() => {
    bookLanguage.getBookLanguage();
    publisher.getPublisher();
    author.getAuthor(); 
    books.get_book();
    
});
    if (localStorage.getItem('reloaded')) {
        localStorage.removeItem('reloaded');
    }else {
        localStorage.setItem('reloaded', '1');
        localStorage.setItem('book_id', books.id);
        location.reload();
    }

async function submit() {
    let book_id = localStorage.getItem('book_id');
    let book_img = document.querySelector("#book_img");
    let title = document.querySelector("#title");
    let isbn = document.querySelector("#isbn");
    let language = document.querySelector("#language");
    let numPages = document.querySelector("#num_pages");
    let pubDate = document.querySelector("#publication_date");
    let author_id = document.querySelector("#author");
    let publish = document.querySelector("#publish");
    books.updateBook(
        book_id,
        title.value,
        isbn.value,
        language.value,
        numPages.value,
        pubDate.value,
        publish.value,
        book_img.files[0],
        book_img.files[0].name,
        author_id.value,
    );
    books.get_overall_book();

}
</script>

<template>
    <div class="container">
        <form enctype="multipart/form-data">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" :value="books.book_detail.title" id="title">
            </div>
            <div class="mb-3">
                <label for="author" class="form-label">Author</label>
                <select class="form-select form-control" name="author" id="author" :value="books.book_detail.book_authors[0].author.author_id" >
                    <option v-for="(item, index) in author.author" :key="index" :value="item.author_id">
                        {{item.author_name}}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="ISBN" class="form-label">ISBN13</label>
                <input type="text" class="form-control" :value="books.book_detail.isbn13" name="isbn" id="isbn" >
            </div>
            <div class="mb-3">
                <label for="language" class="form-label">Language</label>
                <select class="form-select form-control" name="language" id="language" :value="books.book_detail.language_id">
                    <option v-for="(item, index) in bookLanguage.bookLanguage" :key="index" :value="item.language_id">
                        {{item.language_name}}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="num_pages" class="form-label">Num Pages</label>
                <input type="number" class="form-control" name="num_pages" id="num_pages" :value="books.book_detail.num_pages">
            </div>
            <div class="mb-3">
                <label for="publication_date" class="form-label">Publication Date</label>
                <input type="date" class="form-control" name="publication_date" id="publication_date" :value="books.book_detail.publication_date">
            </div>
            <div class="mb-3">
                <label for="publisher_id" class="form-label">Publisher</label>
                <select class="form-select form-control" name="publisher_id" id="publish" :value="books.book_detail.publisher_id">
                    <option></option>
                    <option v-for="(item, index) in publisher.publisher" :key="index" :value="item.publisher_id">
                        {{item.publisher_name}}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="picture_upload" class="form-label">Choose a Picture</label>
                <input class="form-control" type="file" id="book_img" accept="image/*">
            </div>
            <button type="button" @click="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<style scoped>
    .container{
        background-color: #fff;
    }
</style>