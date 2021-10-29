<template>
    <header class="basics">
        <div class="container">
            <nav class="topbar">
                <div class="logo">
                    <img src="@/assets/logo.svg" alt="">
                </div>
                <div class="text">
                    <a class="first" href="tel:3883"><img src="@/assets/call.svg" alt=""> 3883</a>
                </div>
            </nav>
            <section class="main">
                <div class="block-text">
                    <h1><span class="white-h1">Основы</span><br>
                        финансовой <br>
                        грамотности
                    </h1>
                    <p>
                        Вы узнаете, как не стать жертвой денег и управлять ими так, <br> чтобы они не имели над вами власти. 
                        <br><br>
                        Освоите выгодный способ инвестирования в госзакупки, <br>
                        и поймете, почему Тендерная Биржа - лучший партнер для получения прибыли.
                    </p>
                    <popup class="popup" @click="flying"/>
                </div>
                <div class="block-video">
                    <div class="wrapper">
                        <iframe border-radius="10px" src="https://www.youtube.com/embed/Om2ZrzSVZC4?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="text-video">
                            <span class="block">Запишись на вебинар и получи мини курс в подарок</span>
                            <!-- <a href="#" class="block">Смотреть больше &#8594;</a> -->
                        </div>
                    </div>
                    <img class="activate'" src="@/assets/rocket1.png" alt="">
                </div>
            </section>
            <scroll/>
            <popup class="mobile"/>
            <!-- <span class="people">{{this.counter}} челевек уже посмотрели мини-курс</span> -->
        </div>
    </header>
</template>

<script>
import Popup from './Popup.vue'
import Scroll from './Scroll.vue'
    export default {
        data() {
            return {
                fly: null,
                counter: '',
                videoId: 'qtRIPb0ufgU',
            }
        },
        components: {
            Popup,
                Scroll
        },
        mounted() {
            let now = new Date();
            let allTime = now.getTime();
            console.log(allTime);
            let str = allTime.toString();
            let number = str.substring(5,8)
            console.log(number);
            this.counter = number
        },
    }
</script>

<style lang="scss" scoped>
.basics {
    background-color: #201A3D;
        @media(max-width: 545px) {
            width: 100%;
        }
    .container {
        max-width: 1440px;
        width: 100%;
        margin: 0 auto;
        padding-bottom: 130px;
        @media(max-width: 545px) {
            width: 100%;
            padding-bottom: 10px;
        }
        .topbar {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            height: 114px;
            padding: 41px;
            @media(max-width: 545px) {
                flex-direction: row;
                padding: 20px;
            }
            .logo {
                @media(max-width: 545px) {
                    width: 100px;
                    height: 25px;
                }
                img {
                    width: 70%;
                }

            }
            .text {
                color: #58BE00;
                font-family: Exo 2;
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 24px;
                @media(max-width: 545px) {
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 17px;
                }
                .first {
                    color: #58BE00;
                    text-decoration: none;
                    cursor: pointer;
                        @media(max-width: 545px) {
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 17px;
                    }
                    img {
                        position: relative;
                        top: 2px;
                    }
                }
                .second {
                    margin-top: 7px;
                    padding-top: 3px;
                    background: #5CB803;
                    border-radius: 20px;
                    text-align: center;
                    height: 28px;
                    @media(max-width: 545px) {
                        margin-top: 8px;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 17px;
                        width: 195px;
                        height: 20px;
                        text-align: center;
                    }
                    .special {      
                        color: #000000;
                        padding-bottom: 2px;

                    }
                }
            }
        }
        .main {
            display: flex;
            flex-direction: row;
            margin-top: 44px;
            padding: 41px;
            justify-content: space-between;
            @media(max-width: 545px) {
                margin-top: 0;
                width: 100%;
                flex-direction: column;
                padding: 20px;
            }
            .block-text {
                display: flex;
                flex-direction: column;
                position: relative;
                h1 {
                    color: #58BE00;
                    font-family: Exo 2;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 50px;
                    line-height: 60px;
                    text-transform: uppercase;
                    @media(max-width: 545px) {
                        width: 100%;
                        font-size: 30px;
                        line-height: 36px;
                    }
                    .white-h1 {
                        color: #ffffff;
                    }
                }
                p {
                    margin-top: 47px;
                    color: #ffffff;
                    margin-bottom: 57px;
                    @media(max-width: 545px) {
                        margin: 20px 0;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 14px;
                        line-height: 17px;
                        color: #FFFFFF;
                    }
                }
                .popup {
                    position: absolute;
                    bottom: -30px;
                    @media(max-width: 545px) {
                        // display: none;
                    }
                }
            }
            .block-video {
                position: relative;
                .wrapper {
                    margin-top: 20px;
                    width: 680px;
                    height: 385px;
                    @media(max-width: 545px) {
                        width: 100%;
                        height: 100%;
                    }
                    iframe {
                        border: 2px solid #58BE00;
                        box-sizing: border-box;
                        border-radius: 10px;
                        width: 100%;
                        height: 100%;
                        @media(max-width: 545px) {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    .text-video {
                        width: 100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                        font-family: Exo 2;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 22px;
                        @media (max-width: 545px) {
                            font-style: normal;
                            font-weight: bold;
                            font-size: 14px;
                            line-height: 17px;
                        }
                        .block {
                            padding-top: 8px;
                            color: #58BE00; 
                        }
                        a {
                            @media(max-width: 545px) {
                                display: none;
                            }
                        }
                    }
                    img {
                        width: 10%;
                    }
                }
                img {
                    position: absolute;
                    width: 30%;
                    top: -80px;
                    right: 10px;
                    animation: fadeInBottomLeft;
                    animation-duration: 2s;
                    @media(max-width: 545px) {
                        width: 40%;
                        top: -25px;
                        right: 0;
                    }
                }
                .activate {
                    animation: fadeOutTopRight;
                    animation-duration: 2s;
                }
            }
        }
        .mobile {
            padding: 20px;
            position: sticky;
            @media(min-width: 900px) {
                display: none;
            }
        }
        .people {
            padding-left: 41px;
            font-style: normal;
            font-weight: bold;
            font-size: 14px;
            line-height: 17px;
            color: #58BE00;
        }
    }
}

</style>