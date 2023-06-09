<script>
import AnimalOneVue from './components/AnimalOne.vue'
import AnimalTwoVue from './components/AnimalTwo.vue'

export default {
  name: 'app',
  components: {
    'animal-list-one' : AnimalOneVue,
    'animal-list-two' : AnimalTwoVue
  },
  data () {
    return {
      animals: [
        {name: 'kambing', qty: 20},
        {name: 'ayam', qty: 69},
        {name: 'kelinci', qty: 14},
        {name: 'sapi', qty: 3},
      ]
    }
  }
}
</script>

<template>
  <animal-list-one v-bind:animals="animals"></animal-list-one>
  <animal-list-two v-bind:animals="animals"></animal-list-two>
</template>