<template>
  <div
    class="coin row d-flex flex-row align-items-center jusify-content-center"
  >
    <div class="col-lg">
      <CoinInfo
        :coinData="coinData"
        :coinId="coinId"
        :loading="loading"
      ></CoinInfo>
    </div>
    <div class="col-lg">
      <h2>
        Current {{ coinData.name }} Price:
        <span class="money">
          {{ currencyFormatter(coinData.current_price) }}</span
        >
      </h2>
      <ChartContainer :chart-data="coinData.chartdata"></ChartContainer>
    </div>
    <div class="col-lg">
      <Calculator :coinData="coinData"></Calculator>
    </div>

    <div class="chart-container"></div>
  </div>
</template>

<script>
import ChartContainer from "../components/chart/ChartContainer.vue";
import Calculator from "../components/calculator/Calculator.vue";
import CoinInfo from "../components/content/CoinInfo.vue";

export default {
  name: "Dogecoin",
  components: {
    ChartContainer,
    Calculator,
    CoinInfo,
  },
  data() {
    return {
      loading: false,
      coinId: "dogecoin",
      coinData: this.$store.state.coin,
    };
  },
  methods: {
    fillDataStore() {
      this.loading = true;
      this.$store.dispatch("getCurrentCoinData", this.coinId);
      this.loading = false;
    },
    currencyFormatter(price) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "usd",
      });

      let formattedPrice;
      if (price < 0.01) {
        formattedPrice = `$${price}`;
      } else {
        formattedPrice = formatter.format(price);
      }

      return formattedPrice;
    },
  },
  mounted() {
    this.fillDataStore();
  },
};
</script>

<style>
</style>