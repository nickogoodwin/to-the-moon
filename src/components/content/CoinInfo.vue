<template>
  <div v-if="!this.loading">
    <img :src="coinData.image" />
    <h1>{{ coinId }}</h1>
    <p v-html="coinData.description"></p>
  </div>
</template>

<script>
export default {
  name: "CoinInfo",
  props: ["coinData", "coinId", "loading"],
};
</script>

<style lang="scss" scoped>
</style>