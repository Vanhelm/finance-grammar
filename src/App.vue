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
  components: {
    Topbasics,
    Request,
    Present,
    Awaiting,
    Promo,
    Person,
    Time,
    Footerapp
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
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>
