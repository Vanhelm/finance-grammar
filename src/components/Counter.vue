<template>
    <div class="wrapper__timer">
        <div class="timer">
            <div class="counter">
                <div class="top">
                    <h3>Дни</h3>
                </div>
                <div class="body">
                    <span>{{displayDays}}</span>
                </div>
            </div>
            <div class="counter">
                <div class="top">
                    <h3>Часы</h3>
                </div>
                <div class="body">
                    <span>{{displayHours}}</span>
                </div>
            </div>
            <div class="counter">
                <div class="top">
                    <h3>Минуты</h3>
                </div>
                <div class="body">
                    <span>{{displayMinutes}}</span>
                </div>
            </div>
            <div class="counter">
                <div class="top">
                    <h3>Секунды</h3>
                </div>
                <div class="body">
                    <span>{{displaySeconds}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                displayDays: 0,
                displayHours: 0,
                displayMinutes: 0,
                displaySeconds: 0,
                load: false,
                counter: 100
                // expired: false
            }
        },
        computed: {
            _seconds: () => 1000,
            _minutes() {
                return this._seconds * 60
            },
            _hours() {
                return this._minutes * 60
            },
            _days() {
                return this._hours * 24
            },
        },
        mounted() {
            this.showRemaining();
        },
        methods: {
            formarNum: num => (num < 10 ? '0' + num : num),

            showRemaining() {
                const timer = setInterval(() => {
                    const now = new Date();
                    const end = new Date(2021, 10, 15, 10, 10, 10, 10);
                    const distance = end.getTime() - now.getTime();

                    if (distance < 0) {
                        clearInterval(timer)
                        this.load = false
                        return;
                    }

                    const days = Math.floor(distance / this._days);
                    const hours = Math.floor((distance % this._days) / this._hours);
                    const minutes = Math.floor((distance % this._hours) / this._minutes);
                    const seconds = Math.floor((distance % this._minutes) / this._seconds);

                    this.displayDays = this.formarNum(days);
                    this.displayHours = this.formarNum(hours);
                    this.displayMinutes = this.formarNum(minutes);
                    this.displaySeconds = this.formarNum(seconds);
                    this.load = true
                }, 1000);
            }
        }
    }
</script>

<style lang="scss" scoped>
.wrapper__timer {
    margin-top: 20px;
    @media (max-width: 545px) {
        width: 100%;
    }
    .timer {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        .counter {
            padding: 20px;
            width: 130px;
            border-radius: 10px;
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            @media (max-width: 545px) {
                width: 70px;
            }
            .top {
                h3 {
                    text-transform: uppercase;
                    display: flex;
                    justify-content: center;
                    color: #58BE00;
                    @media (max-width: 545px) {
                        font-size: 11px;
                    }
                }
            }
            hr {
                width: 100%;
            }
            .body {
                padding-top: 10px;
                span {
                    display: flex;
                    justify-content: center;
                    font-size: 40px;
                    color: #201A3D;
                    @media (max-width: 545px) {
                        font-size: 34px;
                    }
                }
            }
        }
    }
}
</style>