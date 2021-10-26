<template>
    <div class="form-wrapper">
        <form id="contact" @submit.prevent="submitForm"  method="post" class="form">
            <input id="name"  v-model="name" placeholder="Имя Фамилия" type="text" tabindex="1" required>
            <input id="phone" v-model="number" :placeholder="phone" type="tel" tabindex="2" required>
            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending" class="btn">Зарегистрироваться</button>
        </form>
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
                trigger: false,
                phone: '(XXX) XXX-XXXX',
            }
        },
        methods: {
            submitForm()  {
                axios.post(
                    'https://formspree.io/f/xayadkeb',
                    {name: this.name, phone: this.number}
                )
                .then((response) => {
                    console.log(response);
                })
                this.name = ''
                this.number = ''
                this.$store.commit("switch")
                console.log(this.$store.state.access);
            }
        },
        watch: {
            number() {
                this.number = this.number.replace(/[^0-9]/g, '')
                .replace(/^(\d{3})(\d{3})(\d{4})/g, '($1) $2-$3')
                .substring(0, this.phone.length)
            },
        },
    }
</script>

<style lang="scss" scoped>
.form-wrapper {
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
        }
        .btn {
            width: 260px;
            padding: 5px 55px;
            background: #58BE00;
            border: 1px solid;
            border-radius: 40px;
            border-color: #58BE00;
            cursor: pointer;
            @media(max-width: 545px) {
                width: 100%;
            }
        }
    }
}

</style>