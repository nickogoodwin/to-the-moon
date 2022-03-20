<template>
  <div class="home container row g-5">
    <div class="welcome-text col-md">
      <h1 class="mb-4">Welcome!</h1>
      <h3 class="mb-4">
        Have you ever looked at the prices of cryptocurrency and thought to
        yourself, "Man... if I would've just bought some coins a few years ago,
        I'd be rich!"
      </h3>
      <h2 class="text-primary mb-4">
        This app is the embodiment of that feeling
      </h2>
      <h3 class="mb-4">
        Here at <span class="text-primary">To the Moon! &copy;</span>, we
        believe it's every person's right to ask the question "...What if?"
      </h3>
      <h3 class="mb-4">
        Whatever you do with it after that is you're business :)
      </h3>
    </div>
    <div
      class="
        explore
        col-md
        d-flex
        flex-column
        justify-content-center
        align-items-center
      "
    >
      <h2>Feel free to explore the coins below</h2>
      <div class="row">
        <div class="col-md">
          <router-link class="nav-link" to="/bitcoin"
            >Bitcoin
            <img
              class="img-fluid"
              src="../assets/bitcoin.webp"
              alt="Bitcoin Logo"
            />
          </router-link>
        </div>
        <div class="col-md">
          <router-link class="nav-link" to="/ethereum"
            >Ethereum
            <img
              class="img-fluid"
              src="../assets/ethereum.webp"
              alt="Ethereum Logo"
            />
          </router-link>
        </div>
        <div class="col-md">
          <router-link class="nav-link" to="/dogecoin"
            >Dogecoin
            <img
              class="img-fluid"
              src="../assets/dogecoin.webp"
              alt="Dogecoin Logo"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style>
.explore {
  padding: 2em;
  box-shadow: 0 0 2em #121212;
  border-radius: 2em;
}
</style>