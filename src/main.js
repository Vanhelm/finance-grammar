import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vytia from 'vue-youtube-iframe-api'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSmoothScroll from 'vue3-smooth-scroll';
import VueCountdown from '@chenfengyuan/vue-countdown';




createApp(App).use(store).use(router).use(Vytia).use(VueAxios, axios).use(VueCountdown.name, VueCountdown).use(VueSmoothScroll, {
    duration: 1500,
    updateHistory: false
}).mount('#app')
