<template>
    <div v-if="load">
        Предложение действует: {{displayDays}} дней {{displayHours}} часа
    </div>
    <div v-else>
        Время вышло, вебинар завершен
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
        beforeMount() {
            this.showRemaining()
        },
        methods: {
            formarNum: num => (num < 10 ? '0' + num : num),
            showRemaining() {
                const timer = setInterval(() => {
                    const now = new Date();
                    const deadline = new Date(2021, 10, 15, 10, 10, 10, 10);
                    const distance = deadline.getTime() - now.getTime();

                    if (distance < 0) {
                        clearInterval(timer)
                        this.load = false
                        return;
                    }

                    const days = Math.floor(distance / this._days);
                    const hours = Math.floor((distance % this._days) / this._hours);
                    const minutes = Math.floor((distance % this._hours) / this._minutes);
                    const seconds = Math.floor((distance / this._minutes) / this._seconds);

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

</style>