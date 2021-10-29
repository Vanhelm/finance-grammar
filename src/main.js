import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSmoothScroll from 'vue3-smooth-scroll';
import VueCountdown from '@chenfengyuan/vue-countdown';
import YoutubeIframe from '@techassi/vue-youtube-iframe';




createApp(App).use(store).use(router).use(VueAxios, axios).use(YoutubeIframe).use(VueCountdown.name, VueCountdown).use(VueSmoothScroll, {
    duration: 1500,
    updateHistory: false
}).mount('#app')
