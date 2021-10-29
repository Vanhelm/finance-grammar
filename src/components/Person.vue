<template>
    <div class="person__wrapper">
        <div class="person">
            <div class="person__container">
                <div class="img__block">
                    <img src="@/assets/person2.png" alt="">
                </div>
                <div class="text__block">
                    <div class="header__block">
                        <h2>Чингис курмангалиев</h2>
                        <div class="green">Спикер и автор курса </div>
                    </div>
                    <div class="body__block">
                        <ul>
                            <li><img src="@/assets/mark.svg" alt=""> 37 лет</li>
                            <li><img src="@/assets/mark.svg" alt="">Эксперт №1 в тендерном бизнесе Казахстана</li>
                            <li><img src="@/assets/mark.svg" alt="">Основатель компании “Тендерная Биржа”</li>
                            <li><img src="@/assets/mark.svg" alt="">В тендерном бизнесе с 2004 года</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            wrapper() {

            }
        },
        mounted() {
            this.wrapper()
        }
    }
</script>

<style lang="scss" scoped>
.person__wrapper {
    height: 485px;
    background-color: #FFFFFF;
    position: relative;
    @media(max-width: 545px) {
        height: 640px;
        padding-top: 80px;
        z-index: 9991;
    }
    @media (max-width: 325) {
        height: 540px;
    }
    .person {
    // max-width: 1440px;
    width: 100%;
    height: 402px;
    margin: 0 auto;
    background-color: #201A3D;
    @media(max-width: 545px) {
            width: 100%;
            height: 100%;
            z-index: 9991;
    }
    .person__container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        position: relative;
        @media(max-width: 545px) {
            flex-direction: column;
            padding: 20px;
        }
        .img__block {
            width: 50%;
            height: 402px;
            @media(max-width: 545px) {
                width: 100%;
                height: 100%;
            }
            img {
                position: relative;
                bottom: 362px;
                left: -135px;
                width: 68%;
                @media(max-width: 545px) {
                    width: 90%;
                    bottom: 220px;
                    left: -20px;
                }
            }
        }
        .text__block {
            @media(max-width: 545px) {
                position: absolute;
                bottom: 10px;
                margin-bottom: 55px;
            }
            .header__block {
                display: flex;
                flex-direction: column;
                @media(max-width: 545px) {
                    flex-direction: column-reverse;
                }
                h2 {
                    padding-top: 68px;
                    font-family: Exo 2;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 36px;
                    line-height: 43px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                    @media(max-width: 545px) {
                        padding-top: 0;
                    }
                }
                .green {
                    font-family: Exo 2;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 18px;
                    line-height: 22px;
                    color: #58BE00;
                }
            }
            .body__block {
                margin-top: 50px;
                ul {
                    li {
                        position: relative;
                        left: 10px;
                        list-style: none;
                        font-family: Exo 2;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 18px;
                        line-height: 22px;
                        color: #FFFFFF;
                        @media(max-width: 545px) {
                            font-size: 12px;
                            line-height: 17px;
                        }
                        img {
                            position: relative;
                            top: 10px;
                            left: -10px;
                            width: 30px;
                            @media(max-width: 545px) {
                                top: 3px;
                                left: -10px;
                                width: 17px;
                            }
                        }
                    }
                }

            }
        }
    }
}
}
</style>
