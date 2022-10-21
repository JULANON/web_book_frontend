<script setup>
import { onMounted, ref } from 'vue';
import { useBookLanguageStore, usePublisherStore, useBooksStore, useAuthorStore } from '@/store/books';
const bookLanguage = useBookLanguageStore();
const publisher = usePublisherStore();
const books = useBooksStore();
const author = useAuthorStore();

onMounted(() => {
    bookLanguage.getBookLanguage();
    publisher.getPublisher();
    author.getAuthor();
});

let title = ref("");
let isbn = ref("");
let language = ref("");
let numPages = ref("");
let pubDate = ref("");
let publish = ref("");
let author_id = ref("");

function submit() {
    let book_img = document.querySelector("#book_img");
    books.insertBook(
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
}

</script>

<template>
    <div class="container">
        <form enctype="multipart/form-data">
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" v-model="title">
            </div>
            <div class="mb-3">
                <label for="author" class="form-label">Author</label>
                <select class="form-select form-control" v-model="author_id">
                    <option v-for="(item, index) in author.author" :key="index" :value="item.author_id">
                        {{item.author_name}}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="ISBN" class="form-label">ISBN13</label>
                <input type="text" class="form-control" id="ISBN" v-model="isbn">
            </div>
            <div class="mb-3">
                <label for="language" class="form-label">Language</label>
                <select class="form-select form-control" v-model="language">
                    <option v-for="(item, index) in bookLanguage.bookLanguage" :key="index" :value="item.language_id">
                        {{item.language_name}}</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="num_pages" class="form-label">Num Pages</label>
                <input type="number" class="form-control" id="num_pages" v-model="numPages">
            </div>
            <div class="mb-3">
                <label for="publication_date" class="form-label">Publication Date</label>
                <input type="date" class="form-control" id="publication_date" v-model="pubDate">
            </div>
            <div class="mb-3">
                <label for="publisher_id" class="form-label">Publisher</label>
                <select class="form-select form-control" v-model="publish">
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