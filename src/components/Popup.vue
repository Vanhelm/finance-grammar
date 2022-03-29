<template>
  <!-- app -->
<div id="app" class="modal-vue">

  <!-- button show -->
  <a v-smooth-scroll href="#contact-wrapper" class="btn__wrapper">
    <button class="btn" href="#contact-wrapper">Зарегистрироваться</button>
  </a>

  <!-- overlay -->
  <div class="overlay" v-if="showModal" @click="showModal = false"></div>

  <!-- modal -->
  <div class="modal" v-if="showModal">
    <button class="close" @click="showModal = false">&#10005;</button>
    <div class="form__block">
      <div class="img-block"><img src="@/assets/present.png" alt=""></div>
      <div class="container">
          <form id="contact" @submit.prevent="submitForm"  method="post">
              <h3>Занимайте место</h3>
              <!-- <h4>
                  Регистрируйся на вебинар и получи
                  мини-курс в подарок
              </h4> -->
              <fieldset>
                  <input v-model="name" placeholder="Имя Фамилия" type="text" tabindex="1" required autofocus>
                  <span v-if="this.errorName" class="error">*Имя должно быть не меньше 3 букв</span>
                  <input v-model="mail" type="email" placeholder="Электронная почта" required>
                  <input v-model="number" :placeholder="this.phone" type="tel" tabindex="2" required>
                  <span v-if="this.errorNum" class="error">*введите корректный телефон (пример: +7 (000)000-0000)</span>
                  <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Зарегистрироваться</button>
                  <span class="warning">Колличество мест ограниченно</span>
              </fieldset>
          </form>

          <form class="second-form" id="ltForm4257283"  action="https://lab.tb7.kz/pl/lite/block-public/process-html?id=1199043895" method="post" data-open-new-window="0"><input type="hidden" name="formParams[setted_offer_id]" ><br>
            <input type="text" maxlength="60"  placeholder="Введите ваше имя" name="formParams[full_name]" :value="this.name"><br>
            <input type="text" maxlength="60"  placeholder="Введите ваш телефон" name="formParams[phone]" :value="this.number"><br>
            <input type="text" maxlength="60"  placeholder="Введите ваш эл. адрес" name="formParams[email]" :value="this.mail" ><br>
            <button class="popup-btn" type="submit" id="button1740842" style="color: ; background-color: ; border-radius:  !important; " onclick="if(window['btnprs61790360e03a6']){return false;}window['btnprs61790360e03a6']=true;setTimeout(function(){window['btnprs61790360e03a6']=false},6000);return true;">Записаться</button><br>
          </form>
          <span id="gccounterImgContainer"></span>
      </div>
    </div>
  </div>

</div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'Button.vue',
  data() {
    return {
      showModal: false,
      name: '',
      number: '',
      mail: '',
      user: {
        name: 'name',
        phone: 'phone',
        email: 'email'
      },
      phone: '(XXX) XXX-XXXX',
      errorNum: null,
      errorName: null

    }
  },
  methods: {
    readCookie(name) {
        var name_cook = name+"=";
        var spl = document.cookie.split(";");
        for(var i=0; i<spl.length; i++) {
          var c = spl[i];
          while(c.charAt(0) == " ") {
            c = c.substring(1, c.length);
          }
          if(c.indexOf(name_cook) == 0) {
            return c.substring(name_cook.length, c.length);
          }
        }
        return null;
      },
    submitForm()  {
      if (this.number.length == this.phone.length && this.name.length > 3) {
          this.user.name = this.name
          this.user.phone = this.number
          this.user.email = this.mail
          localStorage.user = JSON.stringify(this.user)
          // Roistat start
          if(this.user.phone && this.user.name){
            const url = 'https://cloud.roistat.com/api/proxy/1.0/leads/add?key=NmEwMWZkNDZiZGFlOWY0Y2ZhYzQ4ZWQyMGMzZmQ3ODA6MjAxODkw&is_skip_sending=1&name='
                + this.user.name +'&phone=' + this.user.phone + '&email=' + this.user.email + '&roistat=' + this.readCookie('roistat_visit');
            const myInit = {
              method: 'POST',
              mode: 'no-cors',
            };

            const myRequest = new Request(url, myInit);

            fetch(myRequest).then(function(response) {
              return response;
            })
          }
          // end roistat

          // axios.post(
          //     'https://lab.tb7.kz/pl/lite/block-public/process-html?id=1199043895',
          //     {name: this.name, phone: this.number, email: this.mail}
          // )
          // .then((response) => {
          //     console.log(response);
          // })
          let btn = document.querySelector('.popup-btn')
          btn.click()
          this.name = ''
          this.number = ''
          this.mail = ''
          this.$store.commit("switch")
          this.showModal = false
      } else if (this.name.length < 3) {
          this.errorName = true
          this.name = ''
          this.number = ''
          this.mail = ''
      }  else {
          this.errorNum = true
          this.name = ''
          this.number = ''
          this.mail = ''
      }
  }
  },
  watch: {
    number() {
        this.number = this.number.replace(/[^0-9]/g, '')
        .replace(/^(\d{3})(\d{3})(\d{4})/g, '($1) $2-$3')
        .substring(0, this.phone.length)
    }
  },
  created() {
      if (localStorage.user == null) {
          this.$store.state.access = false
      } else {
          this.$store.state.access = true
      }
  }
}
</script>

<style lang="scss" scoped>
.modal-vue {
  .btn__wrapper {
    @media(max-width: 545px) {
        display: block;
        position: fixed;
        left: -8px;
        width: 100%;
        padding: 20px;
        z-index: 999;
        bottom: 0;
      }
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
        // position: fixed;
        width: 100%;
        // left: 0px;
      }
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
        background-color: #FFF;
        border-radius: 16px;
        padding: 25px;
        @media(max-width: 545px) {
          background-color: #EEEEEE;
          width: 77%;
            // height: 50%;
        }
        .form__block {
          display: flex;
          flex-direction: row;
            .img-block {
              width: 576px;
              height: 380px;
              @media(max-width: 545px) {
                display: none;
              }
              img {
                width: 100%;
                height: 100%;
              }
            }
            .container {
                max-width: 400px;
                width: 100%;
                margin: 0 auto;
                position: relative;

                #contact {
                    background: #EEEEEE;
                    border-radius: 20px;
                    padding: 25px;
                    // box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
                    @media(max-width: 545px) {
                        position: relative;
                        padding: 0;
                        // top: -50px;
                    }
                    h3 {
                        display: block;
                        font-family: Exo 2;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 36px;
                        line-height: 43px;
                        text-transform: uppercase;
                        color: #201A3D;
                        margin-bottom: 15px;
                        @media(max-width: 545px) {
                            display: flex;
                            justify-content: center;
                            font-size: 17px;
                            line-height: 24px;
                            margin-bottom: 11px;
                            margin-top: 20px;
                        }
                    }
                    h4 {
                        margin: 5px 0 52px;
                        display: block;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 22px;
                        color: #201A3D;
                        @media(max-width: 545px) {
                            margin: 5px 0 23px;
                            display: flex;
                            justify-content: center;
                            font-size: 11px;
                            line-height: 17px;
                        }
                    }
                    fieldset {
                        border: medium none !important;
                        margin: 0 0 10px;
                        min-width: 100%;
                        padding: 0;
                        width: 100%;
                        input {
                            width: 100%;
                            background: #FFFFFF;
                            border: 1px solid #CCCCCC;
                            box-sizing: border-box;
                            border-radius: 10px;
                            margin: 0 0 24px;
                            padding: 10px;
                            @media(max-width: 545px) {
                                margin: 5px 0 13px;
                            }
                        }
                        input[type="text"]:hover,
                        input[type="email"]:hover,
                        input[type="tel"]:hover,
                        input[type="url"]:hover {
                            -webkit-transition: border-color 0.3s ease-in-out;
                            -moz-transition: border-color 0.3s ease-in-out;
                            transition: border-color 0.3s ease-in-out;
                            border: 1px solid #aaa;
                        }
                        input:focus {
                            outline: 0;
                            border: 1px solid #aaa;
                        }
                        button[type="submit"] {
                            cursor: pointer;
                            width: 100%;
                            border: none;
                            border-radius: 40px;
                            background: #58BE00;
                            color: #201A3D;
                            margin: 0 0 5px;
                            padding: 10px;
                            font-size: 15px;
                        }
                        button[type="submit"]:hover {
                            background: #43A047;
                            -webkit-transition: background 0.3s ease-in-out;
                            -moz-transition: background 0.3s ease-in-out;
                            transition: background-color 0.3s ease-in-out;
                        }
                        button[type="submit"]:active {
                            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
                        }
                        .warning {
                            font-family: Exo 2;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 18px;
                            line-height: 22px;
                            color: #58BE00;
                            display: flex;
                            justify-content: center;
                            margin-top: 11px;
                            @media(max-width: 545px) {
                                font-style: normal;
                                font-weight: bold;
                                font-size: 10px;
                                line-height: 17px;
                                margin-top: 0;
                            }
                        }
                        .error {
                            position: relative;
                            bottom: 15px;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 11px;
                            line-height: 14px;
                            color: #FF1515;
                            @media(max-width: 545px) {
                                font-size: 9px;
                            }
                        }
                    }

                }

                .second-form {
                  display: none;
                }
            }
        }
    }
    .close{
        position: absolute;
        top: 10px;
        right: 10px;
        border-radius: 2rem;
        border: 1px solid #58BE00;
        width: 22px;
        height: 23px;
        color: #fff;
        background-color: #58BE00;
        cursor: pointer;
    }
}

</style>
