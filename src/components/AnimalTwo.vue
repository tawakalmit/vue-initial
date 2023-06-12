<script>
export default {
  computed: {
    animals() {
      return this.$store.getters.animals
    }
  }
}
</script>

<template>
  <div id="animal-list-two">
    <h2>Animal List Two</h2>
    <ul>
        <li v-for="animal, key in animals" :key="key">
        {{ animal.name }}
        {{ animal.qty }}
        </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
