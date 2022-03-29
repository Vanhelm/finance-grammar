<template>
    <div class="form-wrapper">
        <form id="contact" @submit.prevent="submitForm"  method="post" class="form">
            <input id="name"  v-model="name" placeholder="Имя Фамилия" name="formParams[full_name]" type="text" tabindex="1" required>
            <input id="phone" v-model="number" :placeholder="phone" name="formParams[phone]" type="tel" tabindex="2" required>
            <input id="mail" v-model="mail" placeholder="Электронная почта" name="formParams[email]" type="email" tabindex="3" required>
            <button name="submit"  type="submit" id="contact-submit" data-submit="...Sending" class="btn">Зарегистрироваться</button>
        </form>
            <div class="errors">
                <span v-if="this.errorName" class="error">*Имя должно быть не меньше 3 букв</span>
                <span v-if="this.errorNum" class="error">*введите корректный телефон (пример: +7 (000)- (000) (00) (00))</span>
            </div>

        <form class="second-form" id="ltForm4257283"  action="https://lab.tb7.kz/pl/lite/block-public/process-html?id=1199043895" method="post" data-open-new-window="0"><input type="hidden" name="formParams[setted_offer_id]" ><br>
            <input type="text" maxlength="60"  placeholder="Введите ваше имя" name="formParams[full_name]" :value="this.name"><br>
            <input type="text" maxlength="60"  placeholder="Введите ваш телефон" name="formParams[phone]" :value="this.number"><br>
            <input type="text" maxlength="60"  placeholder="Введите ваш эл. адрес" name="formParams[email]" :value="this.mail" ><br>
            <button class="second-btn" type="submit" id="button1740842" onclick="if(window['btnprs61790360e03a6']){return false;}window['btnprs61790360e03a6']=true;setTimeout(function(){window['btnprs61790360e03a6']=false},2000);return true;">Записаться</button><br>
        </form>
        <span id="gccounterImgContainer"></span>
    </div>
</template>

<script>
// import axios from 'axios'
    export default {
        data() {
            return {
                name: '',
                number: '',
                mail: '',
                trigger: false,
                phone: '+7 (XXX) XXX-XXXX',
                user: {
                    name: 'name',
                    phone: 'phone',
                    email: 'email'
                },
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
                if (this.number.length == (this.phone.length - 1)  && this.name.length >= 2) {
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
                    //     '',
                    //     {name: this.name, phone: this.number, email: this.mail}
                    // )
                    // .then((response) => {
                    //     console.log(response);
                    // })
                    let btn = document.querySelector('.second-btn')
                    btn.click()
                    this.name = ''
                    this.number = ''
                    this.mail = ''
                    this.$store.commit("switch")
                } else  {
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
            },
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
.form-wrapper {
    display: flex;
    flex-direction: column;
    max-width: 1440px;
    width: 100%;
    background-color: #EEEEEE;
    margin: 0 auto;
    @media(max-width: 545px) {
        display: none;
        width: 100%;
    }
    .form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 68px;
        input {
            margin-right: 39px;
            padding: 5px 10px;
            background: #FFFFFF;
            border: 1px solid #CCCCCC;
            box-sizing: border-box;
            border-radius: 10px;
            height: 35px;
        }
        .btn {
            width: 260px;
            padding: 5px 55px;
            background: #58BE00;
            border: 1px solid;
            border-radius: 40px;
            border-color: #58BE00;
            cursor: pointer;
            height: 35px;
            @media(max-width: 545px) {
                width: 100%;
            }
        }
        .second-btn {
            visibility: hidden;
        }
    }
    .errors {
        display: flex;
        flex-direction: row;
        justify-content: center;
        max-width: 1440px;
        width: 100%;
        // margin: 0 auto;
        .error {
            position: relative;
            bottom: 30px;
            margin-right: 70px;
            font-style: normal;
            font-weight: bold;
            font-size: 13px;
            line-height: 14px;
            color: #FF1515;
            @media(max-width: 545px) {
                font-size: 9px;
            }
        }
    }
    .second-form {
        display: none;
    }
}

</style>
