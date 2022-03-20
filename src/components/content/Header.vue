<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <span class="navbar-brand">🚀 To The Moon! 🌕</span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/bitcoin">Bitcoin</router-link>
            <router-link class="nav-link" to="/ethereum">Ethereum</router-link>
            <router-link class="nav-link" to="/dogecoin">Dogecoin</router-link>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
</style>