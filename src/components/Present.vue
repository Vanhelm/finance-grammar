<template>
    <div class="present-wrapper">
        <div class="present">
            <div class="left-block">
                <div class="header">
                    <img src="@/assets/icon-present.png" alt="">
                    <div class="text">
                        <span class="top-text">Автор и спикер курса</span>
                        <span class="bottom-text">Чингис Курамангалиев</span>
                    </div>
                </div>
                <h2>
                    Записывайся на вебинар <br>
                    и получи <span class="green">мини-курс в подарок</span>
                </h2>
                <Popup class="btn"/>
            </div>
            <div class="right-block">
                <img src="@/assets/present.png" alt="">
            </div>
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
.present-wrapper {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    background-color: #fff;
    .present {
        display: flex;
        flex-direction: row;
        margin: 44px;
        background: #EEEEEE;
        border-radius: 20px;
        // height: 500px;
        @media(max-width: 545px) {
            flex-direction: column;
            margin: 20px;
        }
        .left-block {
            .header {
                display: flex;
                flex-direction: row;
                align-items: center;
                img {
                    margin: 20px;
                    width: 25%;
                    @media(max-width: 545px) {
                        width: 25%;
                    }
                }
                .text {
                    display: flex;
                    flex-direction: column;
                    @media(max-width: 545px) {
                        font-family: Exo 2;
                        font-style: normal;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 17px;
                        color: #201A3D;
                    }
                    .bottom-text {
                        color: #58BE00;
                    }
                }
            }
            h2 {
                margin-top: 80px;
                font-family: Exo 2;
                font-style: normal;
                font-weight: bold;
                font-size: 36px;
                line-height: 43px;
                text-transform: uppercase;
                color: #201A3D;
                padding: 20px;
                @media(max-width: 545px) {
                    margin-top: 0;
                    font-family: Exo 2;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 20px;
                    line-height: 24px;
                    text-transform: uppercase;
                    color: #201A3D;
                }
                .green {
                    @media(max-width: 545px) {
                    color: #58BE00;
                }
                }
            }
            .btn {
                margin-left: 20px;
                @media(max-width: 545px) {
                    display: none;
                }
            }
        }
        .right-block {
            position: relative;
            
            img {
                position: relative;
                top: 0;
                left: 47px;
                max-width: 795px;
                max-height: 525px;
                z-index: 90;
                @media(max-width: 545px) {
                    left: -15px;
                    top: 18px;
                    width: 100%;
                }
            }
        }
    }
}

</style>