<template>
  <div>
    <h2>Hello {{name}}</h2>
    <h1>Your Star Wars Character is {{randomChar}}</h1>
  </div>
</template>

<script>
  export default {
    props: ['name', 'randomChar']
  }
</script>

<style scoped>

</style>