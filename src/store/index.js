import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    coin: {
      id: "",
      symbol: "",
      name: "",
      description: "",
      current_price: null,
      image: {
        large: "",
      },
      chartdata: {
        labels: [],
        datasets: [
          {
            label: 'Price',
            data: [],
            backgroundColor: "",
            borderCapStyle: "",
            borderColor: ""
          }
        ],
        options: {
          responsive: true,
        }
      },
    }
  },
  mutations: {
    updateCoinData(state, payload) {
      const coin = state.coin;

      //set market-data
      coin.id = payload.id;
      coin.symbol = payload.symbol;
      coin.name = payload.name;
      coin.description = payload.description;
      coin.current_price = payload.current_price;
      coin.image = payload.image;
      coin.chartdata = payload.chartdata;
    },

  },
  actions: {
    async getCurrentCoinData(context, coinId) {
      const CoinGecko = require('coingecko-api');
      const CoinGeckoClient = new CoinGecko();

      // FETCH CURRENT MARKET-DATA
      let fetchParams = {
        tickers: true,
        market_data: true,
        community_data: true,
        developer_data: false,
        localization: false,
        sparkline: false
      }

      const marketResponse = await CoinGeckoClient.coins.fetch(coinId, fetchParams)
      const marketData = marketResponse.data

      //FETCH CHART DATA
      let chartParams = {
        days: 'max',
        vs_currency: 'usd',
      }

      let chartData = await CoinGeckoClient.coins.fetchMarketChart(coinId, chartParams)
      let chartDataPrices = chartData.data.prices;

      //Build Payload
      let payload = {
        id: "",
        symbol: "",
        name: "",
        description: "",
        current_price: "",
        image: {
          large: "",
        },
        chartdata: {
          labels: [],
          datasets: [
            {
              label: `${String(marketData.symbol).toUpperCase()} Price`,
              data: [],
              xAxisId: 'Date',
              yAxisId: 'Price',
              backgroundColor: "rgba(0, 150, 50, 0.5)",
              borderCapStyle: "round",
              borderColor: "rgb(0, 150, 50)",
              pointRadius: 0.5,
              pointHitRadius: 10,
            }
          ],
          options: {
            responsive: true,
          }
        }
      }

      payload.id = marketData.id;
      payload.symbol = marketData.symbol;
      payload.name = marketData.name;
      payload.description = marketData.description.en;
      payload.current_price = marketData.market_data.current_price.usd;
      payload.image = marketData.image.large;



      //Build weekly chart data because 'interval' param doesn't work :/
      chartDataPrices = chartDataPrices.filter((item, index) => {
        return index % 7 === 0;
      })

      for (let item of chartDataPrices) {
        const labels = payload.chartdata.labels
        const data = payload.chartdata.datasets[0].data

        let unix_time = item[0];
        let date = new Date(unix_time).toLocaleDateString();
        labels.push(date);

        let price = item[1];
        data.push(price);
      }



      context.commit('updateCoinData', payload)
    }
  },
})
