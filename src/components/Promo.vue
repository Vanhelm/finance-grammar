<template>
    <div class="promo__wrapper">
        <div class="promo">
            <div class="container">
                <div @click="select" class="video-block">
                    <vue-plyr ref="plyrPromo" :options="options">
                        <video
                            controls
                            crossorigin
                            playsinline
                            data-poster="poster.jpg"
                        >
                        <source
                            size="720"
                            src="@/assets/promo.mp4"
                            type="video/mp4"
                        />
                        <source
                            size="1080"
                            src="@/assets/promo.mp4"
                            type="video/mp4"
                        />
                        <track
                            default
                            kind="captions"
                            label="English captions"
                            src="/path/to/english.vtt"
                            srclang="en"
                        />
                        </video>
                    </vue-plyr>
                </div>
                <div class="text-block">
                    <h2>
                        промо ролик мини-курса <br>
                        <span class="green" @click="select">«основы финансовой <br> грамотности»</span>
                    </h2>
                    <!-- <button @click="showVideos = !showVideos" class="course-btn">Смотреть курс</button> -->
                </div>
            </div>
            <img class="rocket" src="@/assets/rocket1.png" alt="">
            <!-- <button @click="showVideos = !showVideos" class="course-btn-mobile">Смотреть курс</button> -->
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
                    <div v-if="this.$store.state.access" class="overlay"></div>
                    <div class="video">
                        <iframe class="frame" v-if="this.$store.state.access" :src="video.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div v-else class="inaccessible"><img :src="getImgUrl(video.src)" alt=""><div class="overlay"></div></div>
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
    export default {
  components: {  },
        data() {
            return {
                videos: [
                    {
                        link: 'https://www.youtube.com/embed/qtRIPb0ufgU',
                        src: 'first.jpg',
                        title: 'first',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur!'
                    },
                    {
                        link: 'https://www.youtube.com/embed/183tEhupiSQ',
                        src: 'second.jpg',
                        title: 'second',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur!'
                    },
                    {
                        link: 'https://www.youtube.com/embed/sgliJ4stNwU',
                        src: 'third.jpg',
                        title: 'third',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur!'
                    },
                    {
                        link: 'https://www.youtube.com/embed/9bJPxO9iWKM',
                        src: 'four.jpg',
                        title: 'fourth',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur!'
                    },
                    {
                        link: 'https://www.youtube.com/embed/FdgDgcrDeNI',
                        src: 'five.jpg',
                        title: 'five',
                        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo accusamus facilis, architecto asperiores repudiandae, magnam aperiam incidunt maiores, fugit repellat omnis? Perspiciatis harum aspernatur quos dolorum nulla corrupti culpa pariatur!'
                    }
                ],
                showVideos: null
            }
        },
        methods: {
            getImgUrl(pic) {
                return require('../assets/'+pic)
            },
            clickBtn() {
                let btn = document.getElementsByClassName('plyr__poster');
                btn.addEventListener('click', this.$refs.plyrPromo.player.togglePlay());
            },
            select() {
                let rockett = document.querySelector('.rocket');
                this.clickBtn;
                this.$refs.plyrPromo.player.togglePlay();
                if (rockett != null) {
                    rockett.classList.add('flying');
                    setTimeout(() => {
                        rockett.remove();
                    },2000)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.promo__wrapper {
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    @media(max-width: 545px) {
      width: 100%;
        margin-top: 90px;
    }
    .promo {
        position: relative;
        margin-bottom: 100px;
        @media(max-width: 545px) {
            margin-bottom: 0;
            background-color: #fff;
            z-index: 9991;
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
                width: 680px;
                height: 385px;
                @media(max-width: 545px) {
                    width: 100%;
                    margin: 0 auto;
                    padding: 20px;
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
                .course-btn {
                    width: 240px;
                    height: 50px;
                    padding: 5px 55px;
                    background: #58BE00;
                    border-radius: 40px;
                    border: 1px solid;
                    border-color: #58BE00;
                    cursor: pointer;
                    color: #201A3D;
                    cursor: pointer;
                    @media(max-width: 545px) {
                        display: none;
                    }
        }
            }
        }
        .rocket {
            position: absolute;
            right: 44px;
            bottom: -15px;
            width: 25%;
            @media(max-width: 545px) {
                width: 35%;
                bottom: 70px;
                right: 35px;
            }
        }
        .course-btn-mobile {
            width: 240px;
            height: 50px;
            padding: 5px 55px;
            background: #58BE00;
            border-radius: 40px;
            border: 1px solid;
            border-color: #58BE00;
            cursor: pointer;
            color: #201A3D;
            @media(max-width: 545px) {
                margin: 20px;
                width: 88%;
            }
            @media(min-width: 545px) {
                display: none;
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
                position: relative;
                @media(max-width: 545px) {
                    flex-direction: column;
                }
                .video {
                    width: 657px;
                    height: 384px;
                    @media(max-width: 545px) {
                        width: 100%;
                        height: 50%;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    iframe {
                        width: 657px;
                        height: 384px;
                        border-radius: 20px;
                        @media(max-width: 545px) {
                            width: 100%;
                        }
                    }
                    .inaccessible {
                        position: relative;
                        img {
                        width: 657px;
                        height: 384px;
                        border-radius: 20px;
                            @media(max-width: 545px) {
                                width: 100%;
                                height: 200px;
                            }
                        }
                        .overlay {
                            position: absolute;
                            background-color: rgba(226, 225, 231, 0.6);
                            width: 657px;
                            height: 384px;
                            border-radius: 20px;
                            z-index: 995;
                            top: 0;
                            left: 0;
                            @media(max-width: 545px) {
                                width: 100%;
                                height: 200px;
                            }
                        }
                        .warrning-text {
                            position: absolute;
                            color: #58BE00;
                            top: 50%;
                            left: 30%;
                            font-weight: bold;
                            font-size: 20px;
                            @media(max-width: 545px) {
                                top: 50%;
                                left: 10%;
                                font-weight: bold;
                                font-size: 17px;
                            }
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
