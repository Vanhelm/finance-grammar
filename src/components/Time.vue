<template>
    <div class="wrapper__time">
        <Counter class="mobile-timer"/>
        <div class="time">
            <div class="img__block">
                <video class="gif" autoplay loop muted inline>
                    <source src="@/assets/gtime.webm" type="video/webm">
                </video>
                <h4 class="watch"><Counter/></h4>
            </div>
            <div class="form__block">
                <div class="container" id="contact-wrapper">
                    <form id="contact" @submit.prevent="submitForm" action="" method="post">
                        <h3>{{this.$store.state.access ? 'Поздравляем, вы зарегистрированы' : 'Войди уверенно в мир надежных инвестиций!'}}</h3>
                        <div v-if="this.$store.state.access" class="congratulations">
                            <h4>Все видео уроки теперь доступны</h4>
                        </div>
                        <fieldset v-else>
                            <input v-model="name" placeholder="Имя Фамилия" type="text" tabindex="1" required >
                            <span v-if="this.errorName" class="error">*Имя должно быть не меньше 3 букв</span>
                            <input v-model="number" :placeholder="this.phone" type="tel" tabindex="2" required>
                            <span v-if="this.errorNum" class="error">*введите корректный телефон (пример: +7 (000)000-0000)</span>
                            <input v-model="mail" type="email" placeholder="Электронная почта" required tabindex="3">
                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Зарегистрироваться</button>
                            <span class="warning">Количество мест ограниченно</span>
                        </fieldset>
                    </form>
                    <form class="second-form" id="ltForm4257283"  action="https://lab.tb7.kz/pl/lite/block-public/process-html?id=1199043895" method="post" data-open-new-window="0"><input type="hidden" name="formParams[setted_offer_id]" ><br>
                        <input type="text" maxlength="60"  placeholder="Введите ваше имя" name="formParams[full_name]" :value="this.name"><br>
                        <input type="text" maxlength="60"  placeholder="Введите ваш телефон" name="formParams[phone]" :value="this.number"><br>
                        <input type="text" maxlength="60"  placeholder="Введите ваш эл. адрес" name="formParams[email]" :value="this.mail" ><br>
                        <button class="last-btn" type="submit" id="button1740842" onclick="if(window['btnprs61790360e03a6']){return false;}window['btnprs61790360e03a6']=true;setTimeout(function(){window['btnprs61790360e03a6']=false},2000);return true;">Записаться</button><br>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import Counter from './Counter.vue'
export default {
  components: {
      Counter
  },
        data() {
            return {
                name: '',
                number: '',
                mail: '',
                user: {
                    name: 'name',
                    phone: 'phone',
                    email: 'email'
                },
                phone: '+7 (XXX) XXX-XXXX',
                errorNum: null,
                errorName: null
            }
        },
        methods: {
            submitForm()  {
                if (this.number.length == (this.phone.length - 1) && this.name.length >= 2) {
                    this.user.name = this.name
                    this.user.phone = this.number
                    this.user.email = this.mail
                    localStorage.user = JSON.stringify(this.user)
                    // Roistat start
                    if(this.user.phone && this.user.name){
                      const url = 'https://cloud.roistat.com/api/proxy/1.0/leads/add?key=NmEwMWZkNDZiZGFlOWY0Y2ZhYzQ4ZWQyMGMzZmQ3ODA6MjAxODkw&is_skip_sending=1&name='
                          + this.user.name +'&phone=' + this.user.phone + '&email=' + this.user.email;
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
                    let btn = document.querySelector('.last-btn')
                    btn.click()
                    this.name = ''
                    this.number = ''
                    this.mail = ''
                    this.$store.commit("switch")
                } else {
                    this.errorName = true
                    this.errorNum = true
                    this.name = ''
                    this.number = ''
                    this.mail = ''
                }
            },
        },
        watch: {
            number() {
                this.number = this.number.replace(/[^0-9]/g, '')
                .replace(/^(\d{1})(\d{3})(\d{3})(\d{4})/g, '+7($2) $3-$4')
                .substring(0, this.phone.length - 1)
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
.wrapper__time {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 60px;
    background-color: #fff;
    @media(max-width: 545px) {
        margin: 0;
        width: 100%;
        position: relative;
        z-index: 9991;
    }
    .mobile-timer {
        @media (min-width: 545px) {
            display: none;
        }
    }
    .time {
        display: flex;
        flex-direction: row;
        width: 1076px;
        margin: 0 auto;
        align-items: center;
        justify-content: center;
        @media(max-width: 545px) {
            padding: 20px;
            flex-direction: column;
            width: 100%;
        }
        .img__block {
            width: 70%;
            margin-right: 30px;
            @media(max-width: 545px) {
                display: flex;
                margin-right: 0;
                justify-content: center;
                z-index: 90;
            }
            .gif {
                margin: 0 auto;
                display: flex;
                justify-content: center;
                border-radius: 20px;
                width: 65%;
            }
            .watch {
                @media(max-width: 545px) {
                    display: none;
                }
            }
        }
        .form__block {
            .container {
                max-width: 600px;
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
                        top: -50px;
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
                            text-align: center;
                            display: flex;
                            justify-content: center;
                            font-size: 20px;
                            line-height: 24px;
                            margin-bottom: 11px;
                            margin-top: 40px;
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
                            text-align: center;
                            margin: 5px 0 23px;
                            display: flex;
                            justify-content: center;
                            font-size: 14px;
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
                        .warning {
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
                                font-size: 14px;
                                line-height: 17px;
                                margin-top: 0;
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
}
</style>
