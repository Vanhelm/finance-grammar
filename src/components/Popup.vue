<template>
  <!-- app -->
<div id="app" class="modal-vue">
  
  <!-- button show -->
  <button class="btn" @click="showModal = true">Зарегистрироваться</button>
  
  <!-- overlay -->
  <div class="overlay" v-if="showModal" @click="showModal = false"></div>
  
  <!-- modal -->
  <div class="modal" v-if="showModal">
    <button class="close" @click="showModal = false">x</button>
    <h3>Title</h3>
    <p>Description</p>
  </div>
  
</div>
</template>

<script>
export default {
  name: 'Button.vue',
  data() {
    return {
      showModal: false
    }
  },
  methods: {
    
  },
  computed: {
  }
}
</script>

<style lang="scss" scoped>
.modal-vue {
    .btn {
            width: 240px;
            height: 50px;
            padding: 5px 55px;
            background: #58BE00;
            border-radius: 40px;
            border: 1px solid;
            border-color: #58BE00;
            cursor: pointer;
            color: #201A3D;
            @media(max-width: 545px) {
                width: 100%;
            }
    }
    .overlay {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
    }
    .modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 9999;
        width: 50%;
        height: 50%;
        background-color: #FFF;
        border-radius: 16px;
        padding: 25px;
        @media(max-width: 545px) {
            width: 80%;
            height: 50%;
        }
    }
    .close{
        position: absolute;
        top: 10px;
        right: 10px;
    }
}

</style>