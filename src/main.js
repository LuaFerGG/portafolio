import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'  // si lo estás usando

createApp(App)
    .use(i18n)
    .mount('#app')