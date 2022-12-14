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
        <price-list-vue></price-list-vue>
        <footer-vue></footer-vue>
        <popupComponent v-if="isInfoPopupVisible" @openPopup="openPopup" />
    </div>
</template>
  
<script>
import popupComponent from "../components/popupComponent.vue";
import HeaderVue from "@/components/Header.vue";
import FooterVue from "@/components/Footer.vue";
import LogInButtonVue from "@/components/LogInButton.vue";
import PriceListVue from "@/components/PriceList.vue";

import axios from "axios";

export default {
    components: {
        popupComponent,
        HeaderVue,
        FooterVue,
        LogInButtonVue,
        PriceListVue
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
</style>