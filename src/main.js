import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
// import "./assets/plugins/css/backToTop.css";
// import "./assets/plugins/js/backToTop";
// import "./assets/plugins/css/preloader.css";
import "./assets/plugins/js/preloader";

// import "./assets/plugins/css/flaticon_gerold.css";
// import "./assets/plugins/css/font-awesome-pro.min.css";
import "./assets/plugins/css/intro-text.css"
import {createApp} from 'vue'
import App from './App.vue'
import router from "@/router/router";
import VueSplide from '@splidejs/vue-splide';


createApp(App).use(router, VueSplide).mount('#app')
