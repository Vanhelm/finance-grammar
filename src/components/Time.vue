<template>
    <div class="wrapper__time">
        <div class="time">
            <div class="img__block">
                <video class="gif" autoplay loop muted inline>
                    <source src="@/assets/gtime.webm" type="video/webm">
                </video>
            </div>
            <div class="form__block">
                <div class="container">  
                    <form id="contact" action="" method="post">
                        <h3>Занимайте место</h3>
                        <h4>
                            <Counter/>
                        </h4>
                        <fieldset>
                            <input placeholder="Имя Фамилия" type="text" tabindex="1" required autofocus>
                            <input placeholder="+7 (---) --- -- --" type="tel" tabindex="3" required>
                            <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Зарегистрироваться</button>
                            <span class="warning">Колличество мест ограниченно</span>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Counter from './Counter.vue'
export default {
  components: { Counter },
        data() {
            return {
                
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper__time {
    max-width: 1440px;
    width: 100%;
    margin: 59px auto;
    background-color: #fff;
    @media(max-width: 545px) {
        margin: 0;
        width: 100%;
        position: relative;
        z-index: 9991;
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
            width: 30%;
            @media(max-width: 545px) {
                display: flex;
                justify-content: center;
                z-index: 90;
            }
            .gif {
                border-radius: 20px;
                width: 80%;
            }
        }
        .form__block {
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
                        input[type="text"],
                        input[type="tel"] {
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
                                font-size: 14px;
                                line-height: 17px;
                                margin-top: 0;
                            }
                        }
                    }
                    
                }

            }
        }
    }
}
</style>