<template>
  <div class="main_container">
    <header-vue></header-vue>
    <main>
      <div class="main-login__balance">
        <input class="input_balance" v-if="balanceVisible" type="number" v-model="balance" :placeholder="balance" />
        <p v-else class="main-login__balance_input">
          <span v-if="balance != ''">Баланс:{{ balance }} р</span>
          <span v-else>Баланс: 0.0 р</span>
        </p>
        <button @click="openBalance" class="main-login__balance_button">
          Пополнить
        </button>
      </div>
      <div class="main-login__sale-buttons">
        <button @click="openPopup" class="main-login__buy-button login-btn">
          Купить
        </button>
        <button @click="openPopup" class="main-login__sale-button login-btn">
          Продать
        </button>
      </div>
      <price-list-vue></price-list-vue>
    </main>
    <footer-vue></footer-vue>
    <popupComponent v-if="isInfoPopupVisible" @openPopup="openPopup" />
  </div>
</template>

<script>
import popupComponent from "../components/popupComponent.vue";
import HeaderVue from "@/components/Header.vue";
import FooterVue from "@/components/Footer.vue";
import PriceListVue from "@/components/PriceList.vue";

export default {
  components: {
    popupComponent,
    HeaderVue,
    FooterVue,
    PriceListVue
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

  methods: {
    openPopup() {
      this.isInfoPopupVisible
        ? (this.isInfoPopupVisible = false)
        : (this.isInfoPopupVisible = true);
    },
    openBalance() {
      this.balanceVisible
        ? (this.balanceVisible = false)
        : (this.balanceVisible = true);
    },
  },
}
</script>

<style lang="scss">
.main_container {
  display: flex;
  flex-direction: column;
  background-color: #0D1017;
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
  gap: 0.5rem;
  margin-top: 1rem;
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

.main-login__sale-button {
  margin-left: 0;
  color: #8f0000;
}

@media screen and (min-width: 1441px) {
  .main__footer {
    margin-top: 12.6rem;
  }
}

@media screen and (max-width: 1440px) {
  .main__footer {
    margin-top: 12.6rem;
  }
}
</style>