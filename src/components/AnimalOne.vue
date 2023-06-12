<script>
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'

export default {
  computed: {
    animals() {
      return this.$store.getters.animals;
    },
    ...mapGetters([
      'animals'
    ])
  },
  methods : {
    ...mapActions([
      'reduceQty'
    ])
  }
}
</script>

<template>
  <div id="animal-list-one">
    <h2 className="text-red-500">Animal List One</h2>
    <ul>
        <li v-for="animal, key in animals" :key="key">
        {{ animal.name }}
        {{ animal.qty }}
        </li>
    </ul>
    <button @click="reduceQty(4)">Reduce</button>
  </div>
</template>

<style scoped>

</style>
