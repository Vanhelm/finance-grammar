import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSmoothScroll from 'vue3-smooth-scroll';
import VueCountdown from '@chenfengyuan/vue-countdown';
// import YoutubeIframe from '@techassi/vue-youtube-iframe';
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'




createApp(App).use(store).use(router).use(VueAxios, axios).use(VuePlyr, {
    plyr: {}
}).use(VueCountdown.name, VueCountdown).use(VueSmoothScroll, {
    duration: 1500,
    updateHistory: false
}).mount('#app')
