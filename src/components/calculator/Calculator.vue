<template>
  <div class="calculator">
    <h1>Calculator</h1>

    <div id="feelsbadman">
      <div id="calculator-input">
        <label for="money-input">
          If you would have invested
          <Money
            id="money-input"
            name="money-input"
            v-model="v_money.price"
            v-bind="v_money.money"
          />
          in {{ coinName }}
        </label>
        <label for="time-input">
          <input
            type="number"
            name="time-input"
            id="time-input"
            placeholder="# of years"
            v-model="years"
          />
          years ago
          <br />
        </label>
        <button class="btn btn-primary" @click="calculateProfit">
          Calculate
        </button>
      </div>

      <div id="coin-data-error" v-if="coinDidNotExist">
        <p>This coin did not exist on {{ historical_date }}</p>
      </div>
      <div id="calculator-output" v-else-if="displayOutput">
        <h2>
          It would have been worth:
          <span class="money">{{ currencyFormatter(profit) }}</span> today.
        </h2>
        <h2>
          The price of {{ coinName }} on {{ historical_date }} was
          <span class="money">{{ currencyFormatter(historical_price) }}</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { Money } from "v-money";

export default {
  name: "Calculator",
  components: {
    Money,
  },
  data() {
    return {
      displayOutput: false,
      coinDidNotExist: false,
      coinId: "",
      coinName: "",
      historical_date: "",
      current_price: Number,
      historical_price: Number,
      profit: Number,
      years: "",
      v_money: {
        price: 100.0,
        money: {
          decimal: ".",
          thousands: ",",
          prefix: "$",
          suffix: "",
          precision: 2,
          masked: false,
        },
      },
    };
  },
  props: ["coinData"],
  mounted() {
    // this is so ugly but I'm in too deep at this point :'(
    setTimeout(() => {
      this.coinId = this.coinData.id;
      this.coinName = this.coinData.name;
      this.current_price = this.coinData.current_price;
    }, 1000);
  },
  methods: {
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

    buildDateString() {
      let date = new Date();
      date.setFullYear(date.getFullYear() - parseInt(this.years));

      this.historical_date = date.toLocaleDateString();

      let day = date.getDate();
      let month = date.getMonth() + 1;
      let year = date.getFullYear();

      //format date data for params
      if (day < 10) {
        day = "0" + day;
      }
      if (month < 10) {
        month = "0" + month;
      }
      return `${day}-${month}-${year}`;
    },

    async calculateProfit() {
      // don't display output until this function has finished
      this.displayOutput = false;
      const CoinGecko = require("coingecko-api");
      const CoinGeckoClient = new CoinGecko();

      //get generate date string for CoinGecko requst params
      let dateString = this.buildDateString();
      let historyParams = {
        date: dateString,
        localization: false,
      };

      //Fetch coin historical data
      let coinHistory;
      try {
        coinHistory = await CoinGeckoClient.coins.fetchHistory(
          this.coinId,
          historyParams
        );

        this.historical_price = parseFloat(
          coinHistory.data.market_data.current_price.usd
        );

        this.coinDidNotExist = false;
        //if this fails, generally it means there's no data for that coin from this time date
      } catch (e) {
        this.coinDidNotExist = true;
        this.historical_price = 0;
      }

      if (!this.coinDidNotExist) {
        let currentPrice = this.current_price;
        let pastPrice = this.historical_price;
        let profit = (currentPrice / pastPrice) * this.v_money.price;

        this.profit = profit;
      } else {
        this.profit = 0;
      }

      this.displayOutput = true;
    },
  },
};
</script>

<style>
.calculator {
  padding: 2em;
  box-shadow: 0 0 2em #121212;
  border-radius: 2em;
  width: 90%;
}

#coin-data-error {
  color: red;
}
</style>