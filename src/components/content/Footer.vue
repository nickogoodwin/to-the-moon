<template>
  <footer class="bg-dark text-white d-flex flex-row justify-content-center">
    <div class="footer-content row">
      <div class="footer-text">
        <p>To The Moon! - Copyright &copy; {{ currentYear }}</p>
        <p>App created by Nicko Goodwin</p>
        <p>
          Built with
          <a class="text-decoration-none" href="https://vuejs.org">VueJS</a>
        </p>
        <p>
          Data provided by
          <a
            class="text-decoration-none"
            href="https://www.coingecko.com/en/api"
            >CoinGecko API</a
          >
        </p>
      </div>
      <div class="footer-images row">
        <div class="col-sm">
          <a href="https://www.coingecko.com/en/api">
            <img src="../../assets/cg_logo.png" alt="CoinGecko Logo" />
          </a>
        </div>
        <div class="col-sm mb-1">
          <a href="https://vuejs.org/">
            <img src="../../assets/logo.png" alt="Vue Logo" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    currentYear: function () {
      let date = new Date();
      date = date.getFullYear();
      return date;
    },
  },
};
</script>

<style>
footer p {
  margin: 0.5em;
}

footer img {
  width: 75px;
}
</style>