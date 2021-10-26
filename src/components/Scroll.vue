<template>
    <div @click="scrollToTop" class="scroll-wrapper">
        <span>&#8593;</span>
    </div>
</template>

<script>
    export default {
        methods: {
            scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
           }
        }
    }
</script>

<style lang="scss" scoped>
.scroll-wrapper {
    width: 3rem;
    height: 3rem;
    position: fixed;
    right: 20px;
    z-index: 9995;
    bottom: 20px;
    // width: 200px;
    border-radius: 50%;
    background-color: #58BE00;
    color: #fff;
    cursor: pointer;
    @media(max-width: 545px) {
        bottom: 50%;
    }
    span {
        position: relative;
        // top: 10px;
        display: flex;
        justify-content: center;
        font-size: 30px;
    }
}

</style>