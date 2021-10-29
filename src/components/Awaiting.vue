<template>
    <div class="wrapper__awaiting">
        <div class="awaiting">
            <div class="awaiting__header">
                <h2>ЧТО ВАС ЖДЕТ НА<span class="green"> мини-курсе</span></h2>
                <div class="title">Самое важное для вашего финансового благополучия</div>
            </div>
            <div class="awaiting__body">
                <div class="container">
                    <div class="block">
                        <div class="img__wrapper">
                            <img src="@/assets/first.png" alt="">
                        </div>
                        <div class="text__wrapper">
                            <p>Научим основам финансовой <br>
                            грамотности </p>
                        </div>
                        <div class="background"></div>
                    </div>
                    <div class="block">
                        <div class="img__wrapper">
                            <img src="@/assets/second.png" alt="">
                        </div>
                        <div class="text__wrapper">
                            <p>Расскажем как правильно <br>
                            выбирать инвестиционный проект</p>
                        </div>
                        <div class="background"></div>
                    </div>
                    <div class="block">
                        <div class="img__wrapper">
                            <img src="@/assets/third.png" alt="">
                        </div>
                        <div class="text__wrapper">
                            <p>Расскажем о надежных и <br>
                            выгодных видах инвестиций</p>
                        </div>
                        <div class="background"></div>
                    </div>
                </div>
            </div>
            <popup class="request-btn"/>
        </div>
    </div>
</template>

<script>
import Popup from './Popup.vue'
    export default {
  components: { Popup },
        
    }
</script>

<style lang="scss" scoped>
.wrapper__awaiting {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    margin-top: 80px;
    @media(max-width: 545px) {
        width: 100%;
    }
    .awaiting {
        display: flex;
        flex-direction: column;
        margin: 44px;
        @media(max-width: 545px) {
            margin: 20px;
        }
        .awaiting__header {
            margin: 0 auto;
            h2 {
                font-family: Exo 2;
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                line-height: 43px;
                text-transform: uppercase;
                color: #201A3D;
                @media(max-width: 545px) {
                    font-size: 20px;
                    line-height: 24px;
                }
                .green {
                    color: #58BE00;
                }
            }
            .title {
                margin-top: 19px;
                display: flex;
                justify-content: center;
                font-family: Exo 2;
                font-style: normal;
                font-weight: 500;
                font-size: 18px;
                line-height: 22px;
                color: #201A3D;
            }
        }
        .awaiting__body {
            margin-top: 20px;
            .container {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                @media(max-width: 545px) {
                    flex-direction: column;
                }
                .block {
                    position: relative;
                    .img__wrapper {
                        width: 363px;
                        height: 363px;
                        @media(max-width: 545px) {
                            width: 100%;
                            height: 100%;
                        }
                        img {
                            position: relative;
                            left: 25px;
                            width: 90%;
                        }
                    }
                    .text__wrapper {
                        padding: 20px;
                    }
                    .background {
                        background-color: #EEEEEE;
                        border-radius: 20px;
                        width: 100%;
                        height: 300px;
                        position: absolute;
                        top: 140px;
                        z-index: -20;
                        @media(max-width: 545px) {
                            top: 145px;
                        }
                    }
                }
                .block:hover {
                    .img__wrapper {
                        position: relative;
                        top: -80px;
                        img {
                            width: 95%;
                        }
                    }
                    .text__wrapper {
                        position: relative;
                        top: -80px;
                    }
                    .background {
                        background-color: #58BE00;
                        border-radius: 20px;
                        width: 100%;
                        height: 300px;
                        position: absolute;
                        top: 100px;
                        z-index: -20;
                    }
                }
            }

        }
        .request-btn {
            display: flex;
            justify-content: center;
            margin-top: 69px;
            @media(max-width: 545px) {
                display: none;
            }
        }
    }
}
</style>