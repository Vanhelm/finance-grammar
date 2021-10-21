<template>
    <div class="promo__wrapper">
        <div class="promo">
            <div class="container">
                <div class="video-block">
                    <iframe class="frame" border-radius="10px" src="https://www.youtube.com/embed/qtRIPb0ufgU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="text-block">
                    <h2>
                        промо ролик миникурса <br>
                        <span class="green" @click="showVideos = !showVideos">«основы финансовой <br> грамотности»</span>
                    </h2>
                    <popup class="desktop-btn"/>
                </div>
            </div>
            <img src="@/assets/rocket1.png" alt="">
        </div>
        <div class="videos" v-if="showVideos">
            <div class="container">
                <div class="videos__header">
                    <h3>
                        Регистрируйся и получи доступ к мини курсу: <br>
                        Основы финансовой граматности
                    </h3>
                </div>
                <div class="videos__body" v-for="(video, id) in videos" :key='id'>
                    <div class="video">
                        <iframe class="frame"  :src="video.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div class="text">
                        <div class="header">
                            <div class="lesson">
                                <h3>Lesson {{id + 1}}</h3>
                            </div>
                            <div class="title">
                                <h3>{{video.title}}</h3>
                            </div>
                        </div>
                        <div class="description">
                            <p>
                                {{video.description}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Popup from './Popup.vue'
    export default {
  components: { Popup },
        data() {
            return {
                videos: [
                    {
                        link: 'https://www.youtube.com/embed/qtRIPb0ufgU',
                        title: 'first',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur!'
                    },
                    {
                        link: 'https://www.youtube.com/embed/183tEhupiSQ',
                        title: 'second',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur!'
                    },
                    {
                        link: 'https://www.youtube.com/embed/sgliJ4stNwU',
                        title: 'third',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur!'
                    },
                    {
                        link: 'https://www.youtube.com/embed/9bJPxO9iWKM',
                        title: 'fourth',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur!'
                    },
                    {
                        link: 'https://www.youtube.com/embed/FdgDgcrDeNI',
                        title: 'five',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur!'
                    }
                ],
                showVideos: null
            }
        }
    }
</script>

<style lang="scss" scoped>
.promo__wrapper {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    .promo { 
        position: relative;
        margin-bottom: 100px;
        @media(max-width: 545px) {
            margin-bottom: 50px;
        }
        .container {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            margin: 44px;
            padding: 32px;
            background: #EEEEEE;
            border-radius: 20px;
            @media(max-width: 545px) {
                margin: 0;
                padding: 0;
                flex-direction: column-reverse;
                background: none;
            }
            .video-block {
                width: 657px;
                height: 384px;
                @media(max-width: 545px) {
                    width: 335px;
                    height: 300px;
                    margin: 0 auto;
                }
                iframe {
                    width: 100%;
                    height: 100%;
                    border-radius: 20px;
                }
            }
            .text-block {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 89px;
                @media(max-width: 545px) {
                    display: flex;
                    flex-direction: row;
                    margin: 20px;
                }
                h2 {
                    margin-bottom: 68px;
                    font-family: Exo 2;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 36px;
                    line-height: 43px;
                    text-transform: uppercase;
                    color: #201A3D;
                    @media(max-width: 545px) {
                        margin: 0;
                        font-size: 20px;
                        line-height: 24px;
                        text-align: center;
                    }
                    .green {
                        color: #58BE00;
                    }
                }
                .desktop-btn {
                    @media(max-width: 545px) {
                        display: none;
                    }
                }
            }
        }
        img {
            position: absolute;
            right: 44px;
            bottom: -110px;
            width: 25%;
            animation: fadeOutTopRight;
            animation-duration: 2s;
            @media(max-width: 545px) {
                bottom: 0;
            }
        }
    }
    .videos {
        @media(max-width: 545px) {
            
        }
        .container {
            margin: 44px;
            @media(max-width: 545px) {
                margin: 0;
            }
            .videos__header {
                @media(max-width: 545px) {
                    margin: 20px;
                }
                h3 {
                    font-family: Exo 2;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 36px;
                    line-height: 43px;
                    text-transform: uppercase;
                    color: #201A3D;
                    @media(max-width: 545px) {
                        font-family: Exo 2;
                        font-style: normal;
                        font-weight: bold;
                        font-size: 20px;
                        line-height: 24px;
                        text-align: center;
                        text-transform: uppercase;
                        color: #201A3D;
                    }
                }
            }
            .videos__body {
                margin-top: 30px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                @media(max-width: 545px) {
                    flex-direction: column;
                }
                .video {
                    width: 657px;
                    height: 384px;
                    @media(max-width: 545px) {
                        width: 335px;
                        height: 300px;
                        margin: 0 auto;
                    }
                    iframe {
                        width: 657px;
                        height: 384px;
                        border-radius: 20px;
                        @media(max-width: 545px) {
                            width: 335px;
                            height: 300px;
                            margin: 0 auto;
                        }
                    }
                }
                .text {
                    margin-left: 40px;
                    @media(max-width: 545px) {
                        margin: 20px;
                    }
                    .header {
                        margin-bottom: 40px;
                        @media(max-width: 545px) {
                            margin-top: 25px;
                            margin-bottom: 0;
                        }
                        .lesson {
                            h3 {
                                font-family: Exo 2;
                                font-style: normal;
                                font-weight: bold;
                                font-size: 36px;
                                line-height: 43px;
                                text-transform: uppercase;
                                color: #201A3D;
                                @media(max-width: 545px) {
                                    font-size: 20px;
                                    line-height: 24px
                                }
                            }
                        }
                        .title {
                            h3 {
                                font-family: Exo 2;
                                font-style: normal;
                                font-weight: bold;
                                font-size: 36px;
                                line-height: 43px;
                                text-transform: uppercase;
                                color: #58BE00;
                                @media(max-width: 545px) {
                                    font-size: 20px;
                                    line-height: 24px
                                }  
                            }
                        }
                    }
                    .description {
                        p {
                            font-family: Exo 2;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 18px;
                            line-height: 22px;
                            color: #201A3D;
                            @media(max-width: 545px) {
                                margin-top: 25px;
                                font-size: 14px;
                                line-height: 17px;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>