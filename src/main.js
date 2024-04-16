import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/router";
import VueSplide from '@splidejs/vue-splide';


createApp(App).use(router,VueSplide).mount('#app')
