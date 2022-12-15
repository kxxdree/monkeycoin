<template>
    <div class="signin">
        <header-vue></header-vue>
        <div class="auth__container-page">
            <h1 class="auth-page__title">Авторизация</h1>
            <form action="#" class="auth__form">
                <!-- <input v-model="userName" type="text" class="auth__input" placeholder="Имя пользователя" required> -->
                <input v-model="userEmail" type="email" class="auth__input" placeholder="Email" required>
                <input v-model="userPassword" type="password" class="auth__input" placeholder="Пароль" required>
                <button @click.prevent="sendForm" class="auth__sign-button">Войти</button>
            </form>
        </div>
        <footer-vue></footer-vue>
    </div>
</template>

<script>
import HeaderVue from '@/components/Header.vue';
import FooterVue from '@/components/Footer.vue';

import axios from 'axios'

export default {
    components: {
        HeaderVue,
        FooterVue
    },

    data() {
        return {
            userName: '',
            userEmail: '',
            userPassword: '',
            info: []
        }
    },
    methods: {
        sendForm() {
            let formData = new FormData();
            formData.append('title', this.userName)
            formData.append('body', this.userEmail)
            formData.append('userId', this.userPassword)
            axios
                .post('https://jsonplaceholder.typicode.com/posts', formData)
                .then(response => { (this.info = response.data) }, this.$router.push({ path: '/mainlogin' }))
                .catch((e) => { (console.log(e.message)); })
        }
    }
}
</script>

<style lang="scss" scoped>

.auth__container-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    margin: auto;
}

.auth-page__title {
    font-size: 4rem;
    font-weight: normal;
    color: white;
    margin-top: 2rem;
}

.auth-page__subtitle:hover {
    opacity: .5;
    transition: .2s;
}

.auth__form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;
    margin-top: 2rem;
}

.auth__input {
    width: 32rem;
    font-size: 2rem;
    text-align: center;
    padding: 1rem;
    text-align: left;
    border-radius: 0.5rem;
    outline: none;
    background-color: white;

}

.auth__input:hover {
    opacity: .9;
    transition: .2s;
}

.auth__sign-button {
    background: none;
    border: none;
    background-color: #F18A2D;
    border-radius: 0.75rem;
    color: white;
    align-self: flex-end;
    font-size: 2rem;
    padding: 2rem;
    cursor: pointer;
    width: 15rem;

}

.auth__sign-button:hover {
    opacity: .8;
    transition: .2s;
}

</style>