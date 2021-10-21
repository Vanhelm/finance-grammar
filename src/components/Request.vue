<template>
    <div class="form-wrapper">
        <form action="#" class="form">
            <input id="name" type="text" placeholder="Имя Фамилия">
            <input id="phone" type="tel">
            <button class="btn">Зарегистрироваться</button>
        </form>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
.form-wrapper {
    max-width: 1440px;
    width: 100%;
    background-color: #EEEEEE;
    margin: 0 auto; 
    @media(max-width: 545px) {
        display: none;
        width: 100%;
    }
    .form {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 68px;
        input {
            margin-right: 39px;
            padding: 5px 10px;
            background: #FFFFFF;
            border: 1px solid #CCCCCC;
            box-sizing: border-box;
            border-radius: 10px;
        }
        .btn {
            width: 260px;
            padding: 5px 55px;
            background: #58BE00;
            border: 1px solid;
            border-radius: 40px;
            border-color: #58BE00;
            cursor: pointer;
            @media(max-width: 545px) {
                width: 100%;
            }
        }
    }
}

</style>