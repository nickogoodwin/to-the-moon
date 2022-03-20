<template>
  <div class="chart-container">
    <h1>Chart</h1>
    <div class="line-chart-container">
      <LineChart :chartData="this.chartData" />
    </div>
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
.chart-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.line-chart-container {
  position: relative;
}
</style>