<template>
  <Topbasics/>
  <Request/>
  <Present/>
  <Awaiting/>
  <Promo/>
  <Person/>
  <Time/>
  <Footerapp/>
</template>


<script>
import 'animate.css';
import Topbasics from './components/Topbasics.vue'
import Request from './components/Request.vue'
import Present from './components/Present.vue'
import Awaiting from './components/Awaiting.vue';
import Promo from './components/Promo.vue';
import Person from './components/Person.vue';
import Time from './components/Time.vue';
import Footerapp from './components/Footerapp.vue';

export default {
  data() {
    return {

    }
  },
  // metaInfo() {
  //   return {
  //           title: "Epiloge - Build your network in your field of interest",
  //           meta: [
  //               { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
  //               { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
  //               { property: 'og:site_name', content: 'Epiloge'},
  //               {property: 'og:type', content: 'website'},
  //               {name: 'robots', content: 'index,follow'}
  //           ]
  //       }
  // },
  components: {
    Topbasics,
    Request,
    Present,
    Awaiting,
    Promo,
    Person,
    Time,
    Footerapp
  },
  mounted() {
    let btns = document.querySelectorAll('.plyr--full-ui.plyr--video .plyr__control--overlaid');
    btns.forEach(btn => btn.remove());
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Exo 2', sans-serif;
}
.plyr--video {
  border: 2px solid #58BE00;
  box-sizing: border-box;
  border-radius: 10px;
}
.flying {
  animation: fadeOutTopRight;
  animation-duration: 2s;
}
</style>
