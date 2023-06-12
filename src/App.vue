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
      
    }
  }
}
</script>

<template>
  <animal-list-one></animal-list-one>
  <animal-list-two></animal-list-two>
</template>