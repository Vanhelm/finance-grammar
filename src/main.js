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

(function(w, d, s, h, id) {
    w.roistatProjectId = id; w.roistatHost = h;
    var p = d.location.protocol == "https:" ? "https://" : "http://";
    var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
    var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
})(window, document, 'script', 'cloud.roistat.com', '09c63c69eef3e820d892a236fb85de26');
//Отключение ловца лидов - програмно
window.onRoistatModuleLoaded = function () {
    window.roistat.leadHunter.isEnabled = false; //отключить ловец лидов на странице
};


createApp(App).use(store).use(router).use(VueAxios, axios).use(VuePlyr, {
    plyr: {}
}).use(VueCountdown.name, VueCountdown).use(VueSmoothScroll, {
    duration: 1500,
    updateHistory: false
}).mount('#app')
