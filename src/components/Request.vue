<template>
    <div class="form-wrapper">
        <form id="contact" @submit.prevent="submitForm"  method="post" class="form">
            <input id="name"  v-model="name" placeholder="Имя Фамилия" name="formParams[full_name]" type="text" tabindex="1" required>
            <input id="phone" v-model="number" :placeholder="phone" name="formParams[phone]" type="tel" tabindex="2" required>
            <input id="mail" v-model="mail" placeholder="Электронная почта" name="formParams[email]" type="email" tabindex="3" required>
            <button name="submit" @click="double" type="submit" id="contact-submit" data-submit="...Sending" class="btn">Зарегистрироваться</button>
        </form>
            <div class="errors">
                <span v-if="this.errorName" class="error">*Имя должно быть не меньше 3 букв</span>
                <span v-if="this.errorNum" class="error">*введите корректный телефон (пример: +7 (000)- (000) (00) (00))</span>
            </div>

        <form class="second-form" id="ltForm4257283"  action="https://lab.tb7.kz/pl/lite/block-public/process-html?id=1199043895" method="post" data-open-new-window="0"><input type="hidden" name="formParams[setted_offer_id]" ><br>
            <input type="text" maxlength="60"  placeholder="Введите ваше имя" name="formParams[full_name]" :value="this.name"><br>
            <input type="text" maxlength="60"  placeholder="Введите ваш телефон" name="formParams[phone]" :value="this.number"><br>
            <input type="text" maxlength="60"  placeholder="Введите ваш эл. адрес" name="formParams[email]" :value="this.mail" ><br>
                <button class="second-btn" type="submit" id="button1740842" style="color: ; background-color: ; border-radius:  !important; " onclick="if(window['btnprs61790360e03a6']){return false;}window['btnprs61790360e03a6']=true;setTimeout(function(){window['btnprs61790360e03a6']=false},6000);return true;">Записаться</button><br>
            <!-- <input type="hidden" id="51377661790360d2670" name="_gcinternalformhelper" class="gcinternalform_helper" value="">
            <input type="hidden" id="51377661790360d2670ref" name="_gcinternalformhelper_ref" class="gcinternalform_helper_ref" value="">
            <input type="hidden" name="requestTime" value="1635320672">
            <input type="hidden" name="requestSimpleSign" value="5adb6b8a4a16183e49a1f916e4af2026">
            <input type="hidden" name="isHtmlWidget" value="1"/> -->
        </form>
        <span id="gccounterImgContainer"></span>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        props: {
            access: {
                required: true,
                type: Boolean
            },
        },
        data() {
            return {
                name: '',
                number: '',
                mail: '',
                trigger: false,
                phone: '(XXX) XXX-XXXX',
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
            submitForm()  {
                if (this.number.length == this.phone.length && this.name.length > 3) {
                    this.user.name = this.name
                    this.user.phone = this.number
                    this.user.email = this.mail
                    localStorage.user = JSON.stringify(this.user)
                    

                    axios.post(
                        'https://lab.tb7.kz/pl/lite/block-public/process-html?id=1199043895',
                        {name: this.name, phone: this.number, email: this.mail}
                    )
                    .then((response) => {
                        console.log(response);
                    })
                    this.name = ''
                    this.number = ''
                    this.mail = ''
                    this.$store.commit("switch")
                } else if (this.name.length < 3) {
                    this.errorName = true
                    this.errorNum = true
                    this.name = ''
                    this.number = ''
                    this.mail = ''
                } 
            },
            double() {
                let btn = document.querySelector('.second-btn')
                setTimeout(() => {
                    btn.click()
                }, 1000);
            }
        },
        watch: {
            number() {
                this.number = this.number.replace(/[^0-9]/g, '')
                .replace(/^(\d{3})(\d{3})(\d{4})/g, '($1) $2-$3')
                .substring(0, this.phone.length)
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
        visibility: hidden;
        // .second-btn {
        //     visibility: hidden;
        // }
    }
}

</style>