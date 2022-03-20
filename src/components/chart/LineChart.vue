<script>
import { Line, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default {
  name: "LineChart",
  mixins: [reactiveProp],
  props: ["chart-data"],
  extends: Line,
  mounted() {
    this.renderChart(this.chartData);
  },
};
</script>