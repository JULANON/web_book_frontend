/*
=========================================================
* Vite Soft UI Dashboard - v1.0.0
=========================================================
* Product Page: https://creative-tim.com/product/vite-soft-ui-dashboard
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
* Licensed under MIT (https://github.com/creativetimofficial/vite-soft-ui-dashboard/blob/556f77210e261adc3ec12197dab1471a1295afd8/LICENSE.md)
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/ 

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from "./router";
import store from "./store";
// import VueSweetalert2 from 'vue-sweetalert2';
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import "./assets/css/test.css";
import SoftUIDashboard from "./soft-ui-dashboard";
// import VueCarousel from './soft-ui-carousel';
import 'sweetalert2/dist/sweetalert2.min.css';




const app = createApp(App);
const pinia = createPinia();

app.use(pinia)
app.use(router)
app.use(store)
app.use(SoftUIDashboard)
app.mount('#app')
