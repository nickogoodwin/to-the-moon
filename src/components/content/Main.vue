<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style>
main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
}
</style>