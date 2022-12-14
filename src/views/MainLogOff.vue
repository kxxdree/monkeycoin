<template>
    <div class="main_container">
        <header-vue></header-vue>
        <log-in-button-vue></log-in-button-vue>
        <div class="main-login__sale-buttons">
            <router-link to="/signin" class="main-login__sale-buttons_router">
                <button class="main-login__buy-button login-btn">
                    Купить
                </button>
            </router-link>
            <router-link to="/signin" class="main-login__sale-buttons_router">
                <button class="main-login__sell-button login-btn">
                    Продать
                </button>
            </router-link>
        </div>
        <p class="main-login__title">Курс биткоина</p>
        <p></p>
        <p class="main-login__subtitle">{{ prices.disclaimer }}</p>
        <div class="main-login__container">
            <div class="main-login__container_info">
                <p class="main-login__container_info_text">Код валюты</p>
                <p class="main-login__container_info_text">Наименование валюты</p>
                <p class="main-login__container_info_text">Цена за 1 Bitcoin</p>
            </div>

            <div v-for="item in prices.bpi" :key="item.id" class="main-login__container_back-data">
                <span class="main-login__container_back-data_span">{{
                        item.code
                }}</span>
                <span class="main-login__container_back-data_span">{{
                        item.description
                }}</span>
                <span style="color: #005600" class="main-login__container_back-data_span">{{ item.rate }}</span>

            </div>
        </div>
        <footer-vue></footer-vue>
        <popupComponent v-if="isInfoPopupVisible" @openPopup="openPopup" />
    </div>
</template>
  
<script>
import popupComponent from "../components/popupComponent.vue";
import HeaderVue from "@/components/Header.vue";
import FooterVue from "@/components/Footer.vue";
import LogInButtonVue from "@/components/LogInButton.vue";

import axios from "axios";

export default {
    components: {
        popupComponent,
        HeaderVue,
        FooterVue,
        LogInButtonVue
    },

    data() {
        return {
            prices: {
                // bpi:{
                //     bpiData:{
                //         code:'',
                //         description:'',
                //         rate:'',
                //         symbol:''
                //     }
                // }
            },
            searchForCurrency: "",
            isInfoPopupVisible: false,
            balance: '',
            balanceVisible: false,
        };
    },

    mounted() {
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then((response) => {
                this.prices = response.data;
            })
            .catch((e) => {
                console.log(e.message);
            });
    },
};
</script>
  
<style lang="scss" scoped>
.main_container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

main {
    flex: 1 0 auto;
}

.main-login__balance {
    background-color: #17191f;
    width: 20rem;
    height: 3rem;
    position: absolute;
    top: 1rem;
    right: 8rem;
    border-radius: 0.75rem;
    display: flex;

    &_input {
        margin-right: 50px;
        color: white;
        width: 10rem;
        border-radius: 0.75rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.main-login__balance_button {
    height: 3rem;
    width: 10rem;
    font-size: 1.25rem;
    color: #ffb800;
    border: none;
    border-radius: 0.75rem;
    cursor: pointer;
    font-family: "Comic Neue", cursive;
}

.main-login__balance_button:hover {
    opacity: 0.7;
    transition: 0.2s;
}

.input_balance {
    border-radius: 0.75rem;
    color: #fff;
    padding: .8rem;
    margin-right: 1rem;
}

.main-login__sale-buttons {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-right: 11rem;
    align-self: flex-end;

    &_router {

    }
}

.login-btn {
    width: 8rem;
    padding: 0.2rem;
    border-radius: 5px;
    border: none;
    background-color: rgb(0, 0, 0, 0.3);
    cursor: pointer;
    margin: auto;
    font-family: "Comic Neue", cursive;
    font-size: 1.25rem;

    &:hover {
        opacity: 0.5;
        transition: 0.2s;
    }
}

.main-login__buy-button {
    margin-right: 0;
    color: #005600;
}

.main-login__sell-button {
    margin-left: 0;
    color: #8f0000;
}

.main-login__title {
    color: white;
    font-size: 3rem;
    margin-top: 1.25rem;
    margin-left: 11.5rem;
}

.main-login__subtitle {
    color: white;
    font-size: 2rem;
    margin-top: 1.5rem;
    margin-left: 11.5rem;
    margin-right: 11.5rem;
    max-width: 75rem;
}

.main-login__container {
    margin-left: 11.5rem;
    margin-right: 11.5rem;
    margin-top: 3rem;
    max-width: 75rem;

    &_info {
        background-color: #17191f;
        color: white;
        max-width: 75rem;
        display: flex;
        justify-content: space-between;
        font-weight: 700;
        font-size: 1.5rem;

        &_text {
            background: none;
            margin: auto 0;
            padding: 2px;
            width: 10rem;
            text-align: center;
        }
    }
}

.main-login__container_back-data {
    color: white;
    display: flex;
    justify-content: space-between;
    max-width: 75rem;
    margin-bottom: 3rem;
    margin-top: 2rem;

    &_span {
        display: flex;
        width: 10rem;
        justify-content: center;
        align-content: center;
        text-align: center;
        font-size: 1.5rem;
    }
}
</style>