<template>
    <footer class="footer__wrappper">
        <div class="footer">
            <div class="footer__container">
                <div class="block__left">
                    <div class="logo">
                        <img src="@/assets/logo.svg" alt="">
                    </div>
                    <div class="description">
                        <!-- <h4>ТОО "ТЕНДЕРНАЯ БИРЖА"</h4> -->
                        <h4>Казахстан, Алматы, Медеуский район, проспект Достык 210, блок 2. <br> 3 этаж 35 кабинет <br> 050051</h4>
                    </div>
                </div>
                <div class="block__right">
                    <ul class="contact__list">
                        <li><a class="underline" href="#" @click="linkWhatsApp()">Остались вопросы +77077888787<img src="@/assets/whatsapp.svg" alt=""></a></li>
                        <li><a href="http://www.instagram.com/chingis.kurmangaliyev/?hl=ru&utm_source=investtender&utm_medium=saite">Инстаграм<img src="@/assets/insta.svg" alt=""></a></li>
                        <li><a href="http://t.me/Tender889?utm_source=investtender&utm_medium=saite">Телеграм канал<img src="@/assets/telegram.svg" alt=""></a></li>
                        <li><a href="https://www.youtube.com/channel/UCxSkfOrrbXysgwswTB0hp1Q">Ютуб канал <img src="@/assets/youtube.svg" alt=""></a></li>
                    </ul>
                </div>
            </div>
            <div class="footer__mobile">
                <h1 class="head__footer">Наши контакты</h1>
                <ul class="body__footer">
                    <li><a href="#" @click="linkWhatsApp()"><img src="@/assets/whatsapp.svg" alt="">+77077888787</a></li>
                    <li><a href="http://www.instagram.com/chingis.kurmangaliyev/?hl=ru&utm_source=investtender&utm_medium=saite"><img src="@/assets/insta.svg" alt="">@chingis.kurmangaliev</a></li>
                    <li><a href="http://t.me/Tender889?utm_source=investtender&utm_medium=saite"><img src="@/assets/telegram.svg" alt="">https://t.me/Tender889</a></li>
                    <li><a href="https://www.youtube.com/channel/UCxSkfOrrbXysgwswTB0hp1Q"><img src="@/assets/youtube.svg" alt="">YouTube канал</a></li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        methods:{
                    linkWhatsApp(){
                        let roistat = window.roistatGetCookie('roistat_visit')
                        let url = 'https://wa.me/77077888787?text=Обязательно отправьте это сообщение и дождитесь ответа. Ваш номер заявки:' + roistat
                        console.log(url)
                        window.location.href = url
                    }
                }
    }
</script>

<style lang="scss" scoped>
.footer__wrappper{
    z-index: 9991;
    position: relative;
    background-color: #201A3D;
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    @media(max-width: 545px) {
      width: 100%;
    }
    .footer {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding: 40px;
        @media(max-width: 545px) {
            width: 100%;
            padding: 20px;
        }
        .footer__container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 30px auto;
            @media(max-width: 545px) {
                display: none;
            }
            .block__left {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                h4 {
                    color: #fff;
                }
            }
            .block__right {
                .contact__list {
                    li {
                        font-family: Exo 2;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 30px;
                        text-align: right;
                        list-style: none;
                        .underline {
                            text-decoration: none;
                        }
                        a {
                            position: relative;
                            color: #fff;
                            img {
                                margin-left: 20px;
                                // margin-top: 30px;
                                position: relative;
                                top: 5px;
                            }
                        }
                    }
                }
            }
        }
        .footer__mobile {
            margin-bottom: 50px;
            @media(min-width: 545px) {
                display: none;
            }
            .head__footer {
                font-family: Exo 2;
                font-style: normal;
                font-weight: bold;
                font-size: 30px;
                line-height: 36px;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .body__footer {
                margin-top: 33px;
                li {
                    list-style: none;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 27px;
                    color: #FFFFFF;
                    a {
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 17px;
                        color: #fff;
                        text-decoration: none;
                        img {
                            position: relative;
                            top: 3px;
                            width: 18px;
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
}

</style>
