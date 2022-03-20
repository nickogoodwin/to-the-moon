<template>
  <div class="chart-container">
    <h1>Chart</h1>
    <LineChart :chartData="this.chartData" />
  </div>
</template>

<script>
import LineChart from "./LineChart.vue";

export default {
  name: "ChartContainer",
  components: {
    LineChart,
  },
  props: ["chartData"],
};
</script>

<style>
</style>