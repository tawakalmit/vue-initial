<script>
export default {
  props: ['animals'],
  data () {
    return {

    }
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
  </div>
</template>

<style scoped>

</style>
