<template>
  <div>
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
  </div>
</template>
<script>
import axios from "axios";

export default {
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
}
</script>
<style lang="scss">
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

@media screen and (min-width: 2160px) {

  .main-login__title {
    font-size: 5rem;
  }

  .main-login__subtitle {
    max-width: 60%;
    font-size: 3rem;
  }

  .main-login__container {
    max-width: 100%;
  }

  .main-login__container_info {
    max-width: 70%;
    font-size: 2rem;

    &_text {
      width: 15rem;
    }
  }

  .main-login__container_back-data {
    min-width: 70%;

    &_span {
      font-size: 2rem;
      width: 15rem;
    }
  }
}
</style>